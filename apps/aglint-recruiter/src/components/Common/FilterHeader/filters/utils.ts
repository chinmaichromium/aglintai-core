// @ts-nocheck
import { type nestedType } from './sharedTypes';

type nestedOptionMapperType = nestedType<
  string[] | { id: string; label: string }[]
>;

/**
 * Maps the nested options to a flattened array of objects containing the header, path, and options.
 *
 * @param {string[]} headers - An array of headers.
 * @param {nestedOptionMapperType} options - The nested options to map.
 * @param {nestedType<string[]>} selectedOptions - The selected options.
 * @return {Array<[string, {header: string; path: string[]; options: {id: string; status: 'active' | 'partial' | 'inactive'; label: string;}[];}, number]>} - The flattened array of objects containing the header, path, and options.
 */
export function nestedOptionMapper<
  T extends string[] | { id: string; label: string }[],
>(
  headers: string[],
  options: nestedType<T>,
  selectedOptions: nestedType<string[]>,
  showCount: boolean,
) {
  if (!options) return [];
  const res: [
    string,
    {
      header: string;
      path: string[];
      options: {
        id: string;
        status: 'active' | 'partial' | 'inactive';
        label: string;
      }[];
    }[],
    number,
  ][] = [];

  function mapOption({
    header = undefined,
    optionList,
    selectedOptions,
    isArray = false,
    path = [],
    index,
  }: {
    header?: string;
    optionList: typeof options;
    selectedOptions: nestedType<string[]>;
    isArray?: boolean;
    path?: string[];
    index: number;
  }) {
    const tempItem = res[Number(index)]?.[1] || [];
    let temp_options: {
      status: 'active' | 'partial' | 'inactive';
      id: string;
      label: string;
    }[] = [];
    if (isArray) {
      temp_options = (optionList as T).map((item) => {
        let id = item as string;
        let label = item as string;
        if (typeof item !== 'string') {
          id = item.id;
          label = item.label;
        }
        const status: (typeof temp_options)[number]['status'] = (
          selectedOptions as string[]
        ).includes(id)
          ? 'active'
          : 'inactive';
        return {
          status,
          id,
          label,
        };
      });
    } else {
      const keys = Object.keys(optionList);
      temp_options = keys.map((key) => {
        const tempIsArray = Array.isArray(optionList[String(key)]);
        return mapOption({
          header: key,
          optionList: optionList[String(key)],
          selectedOptions:
            selectedOptions[String(key)] || (tempIsArray ? [] : {}),
          isArray: tempIsArray,
          path: [...path, key],
          index: index + 1,
        });
      });
    }
    const curr_op: (typeof res)[number][1][number] = {
      header,
      path,
      options: temp_options,
    };
    tempItem.push(curr_op);

    const status = temp_options
      .map((item) => item.status)
      .reduce((acc, curr) => {
        if (acc != 'partial' && curr != acc) {
          return 'partial';
        }
        return acc;
      }, temp_options[0]?.status);

    res[Number(index)] = [
      headers?.[Number(index)] || null,
      tempItem,
      tempItem
        .map((item) => item.options)
        .flat()
        .filter((item) => item.status != 'inactive').length || 0,
    ];
    return {
      status,
      id: showCount ? `${header} (${tempItem.length})` : header,
      label: showCount ? `${header} (${tempItem.length})` : header,
    };
  }
  mapOption({
    optionList: options,
    index: 0,
    selectedOptions,
    isArray: false,
  });
  return res;
}

/**
 * Recursively sets a value in a nested object based on provided keys.
 *
 * @param {nestedType<string[]> | string[]} selectedObj - The selected object to update
 * @param {string[]} keys - The keys to traverse the nested object
 * @param {any} val - The value to set
 * @param {nestedType<string[]> | string[]} optionsObj - The options object to reference values
 * @param {boolean} leaf - Flag indicating if it's a leaf node
 * @return {nestedType<string[]>} The updated nested object with the new value set
 */
export function setValueInNestedObject(
  selectedObj: nestedType<string[]> | string[],
  keys: string[],
  val,
  optionsObj: nestedType<
    | string[]
    | {
        id: string;
        label: string;
      }[]
  >,
  leaf?: boolean,
) {
  if (keys.length == 0)
    if (leaf)
      if ((selectedObj as string[]).includes(val))
        return (selectedObj as string[]).filter((item) => item != val);
      else return (selectedObj as string[]).push(val), selectedObj;
    else if (selectedObj[String(val)]) return { ...selectedObj, [val]: null };
    else return { ...selectedObj, [val]: optionsObj[String(val)] };
  else {
    const [currentKey, ...remainingKeys] = keys;
    const leaf =
      !remainingKeys.length && Array.isArray(optionsObj[String(currentKey)]);
    selectedObj[String(currentKey)] = setValueInNestedObject(
      selectedObj[String(currentKey)] || (leaf ? [] : {}),
      remainingKeys,
      val,
      optionsObj[String(currentKey)],
      leaf,
    );
  }
  return selectedObj;
}

export function nestedObjectToArray(
  options: nestedOptionMapperType,
  selectedOptions: nestedType<string[]>,
) {
  if (!options) return [];
  const res: {
    id_path: string;
    id: string;
    status: 'active' | 'partial' | 'inactive';
    // label: string;
  }[][] = [];
  function mapOption(
    {
      optionList,
      selectedOptions,
      isArray = false,
      header = null,
      index,
    }: {
      optionList: nestedOptionMapperType;
      selectedOptions: nestedType<string[]>;
      header?: string;
      isArray?: boolean;
      // path?: string[];
      index: number;
    },
    pathArr: string[] = [],
  ) {
    const tempItem = res[Number(index)] || [];
    let temp_options: {
      id: string;
      status: 'active' | 'partial' | 'inactive';
      // label: string;
    }[] = [];
    if (isArray) {
      temp_options = (optionList as any[]).map((item) => {
        let id = item as string;
        // let label = item as string;
        if (typeof item !== 'string') {
          id = item.id;
          // label = item.label;
        }
        let temp_options: string[] = [...selectedOptions];
        if (typeof temp_options[0] !== 'string') {
          temp_options = temp_options.map((item) => item.id);
        }
        const status = temp_options.includes(id) ? 'active' : 'inactive';
        return {
          id,
          status,
          // label,
        };
      });
    } else {
      const keys = Object.keys(optionList);
      temp_options = keys.map((key) => {
        const tempIsArray = Array.isArray(optionList[String(key)]);
        return mapOption(
          {
            optionList: optionList[String(key)],
            selectedOptions:
              selectedOptions?.[String(key)] || (tempIsArray ? [] : {}),
            isArray: tempIsArray,
            header: key,
            index: index + 1,
          },
          [...pathArr, key],
        );
      });
    }
    tempItem.push(
      ...temp_options.map(({ id, status }) => {
        return {
          id_path: [...pathArr, id].join('.'),
          id,
          status: status,
          // label,
        };
      }),
    );
    res[Number(index)] = tempItem;
    const status = temp_options
      .map((item) => item.status)
      .reduce((acc, curr) => {
        if (acc != 'partial' && curr != acc) {
          return 'partial';
        }
        return acc;
      }, temp_options[0].status);
    return {
      id: header,
      status: status || 'inactive',
      // label: header,
    };
  }
  mapOption({
    optionList: options,
    index: 0,
    selectedOptions,
    isArray: false,
  });
  return res;
}

export function arrayToNestedObject(
  res: {
    id_path: string;
    id: string;
    status: 'active' | 'partial' | 'inactive';
    // label: string;
  }[],
) {
  let obj: nestedType<string[]> = {};
  function setVal(object, path, value) {
    if (path.length === 2) {
      object[path[0]] = [...(object[path[0]] || []), value];
      return object;
    }
    object[path[0]] = setVal(
      object[path[0]] || {},
      path?.slice(1) || [],
      value,
    );
    return object;
  }
  res.forEach((item) => {
    if (!item.id?.length) return;
    obj = setVal(obj, item.id_path?.split('.'), item.id);
  });
  return obj;
}
