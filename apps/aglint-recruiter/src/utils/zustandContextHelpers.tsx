import { type Context, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';
import { shallow } from 'zustand/shallow';
/**
 *
 * A type safe hook creator for React Context + Zustand Store stage management solution
 * This enables the use of react context as state manager without the "any subscription = re-render" side-effect
 *
 * @link https://tkdodo.eu/blog/zustand-and-react-context
 *
 *  To access states/getter
 *  - Use a sole state selector hook.
 *  - Ex: const example = useExampleStore((state)=>state.example);
 *  - Create individual state selector hooks for each state.
 *  - Ex: const useExample = () => useExampleStore((state)=>state.example);
 *
 *  To access actions/setters
 *  - Use a sole state selector hook
 *  - Ex: const { setExample } = useExampleActions((state)=>state.actions);
 *  - Use a sole action hook
 *  - Ex: const useSetExample = () => useExampleStore((state)=>state.actions.setExample);
 *
 * @link https://tkdodo.eu/blog/working-with-zustand
 *
 */
export function createContextStoreSelector<T>(
  context: Context<StoreApi<T> | undefined>,
  warning = 'The context provider for this hook was not found',
) {
  return function <U = T>(
    selector: ((_state: T) => U) | undefined = (state) => state as any as U,
  ) {
    const store = useContext(context);
    if (!store) throw new Error(warning);
    return useStore(store, selector);
  };
}

/**
 *   A type safe "initial" state selector
 *   Returns a get function
 *   - Passing a key arguement returns a structured clone of the value associated with the key
 *   - Passing no arguements returns the structured clone of the entire initial state
 */
export const getContextIntials = <T extends Readonly<Record<any, any>>>(
  state: T,
) => {
  function getInitial(): T;
  function getInitial<U extends keyof T>(_key: U): T[U];
  function getInitial<U extends keyof T>(key?: U) {
    if (key) return structuredClone(state[key]);
    return structuredClone(state);
  }
  return getInitial;
};

/**
 *   A type safe store creator type:
 *
 *   Passing a state type will return
 *   - All the neccesary state types
 *   - An "initial" state type
 *   - An "actions" state type necessary "setState" and "resetState" actions
 *
 *  Additional actions can be passed as the second parameter to this type.
 *  Additional states can be passed as the third parameter to this type.
 *  Additional initial states can be passed as the fourth parameter to this type.
 */
export type CreateContextStore<
  T extends Record<string, any>,
  ExtraActions extends { [_x in string]: (..._args: any[]) => any } = {},
  ExtraStatesOrComputations extends {
    [_x in string]: ((..._args: any[]) => any) | any;
  } = {},
  ExtraInitial extends Readonly<Record<string, any>> = Readonly<{}>,
> = keyof T extends infer U
  ? U extends string
    ? UnionToIntersection<
        T &
          (ExtraStatesOrComputations extends (..._args: any[]) => infer R
            ? R
            : ExtraStatesOrComputations) & {
            initial: Readonly<T> & ExtraInitial;

            actions: UnionToIntersection<CreateContextStoreActions<T>> &
              ExtraActions;
          }
      >
    : never
  : never;

type CreateContextStoreActions<T extends Record<string, any>> =
  keyof T extends infer U
    ? U extends string
      ? { [_id in `set${Capitalize<U>}`]: (_x: Partiality<T[U]>) => void } & {
          [_id in `reset${Capitalize<U>}`]: () => void;
        }
      : never
    : never;

type Partiality<T> = T extends any[]
  ? T
  : T extends Record<string, any>
    ? Partial<T>
    : T;

type UnionToIntersection<U> = (
  U extends any ? (_arg: U) => void : never
) extends (_arg: infer I) => void
  ? I
  : never;

/**
 *
 * Correct approach to get derived values from state without re-renders
 *
 * @link https://github.com/pmndrs/zustand/issues/108#issuecomment-2197556875
 *
 * @param depsFn A function returning a dependency array
 * @param computeFn The computation callback function with the update dependecies as arguments
 *
 * Only computed when first accessed and only recomputed if a dependency value changes
 *
 */
export function compute<T extends unknown[], U>(
  depsFn: () => [...T],
  computeFn: (..._args: T) => U,
) {
  let prevDeps: T;
  let cachedResult: U;
  return () => {
    const deps = depsFn();
    if (prevDeps === undefined || !shallow(prevDeps, deps)) {
      prevDeps = deps;
      cachedResult = computeFn(...deps);
    }
    return cachedResult;
  };
}

/**
 * A type safe computation creator function which can be used to derive states using the get and compute methods
 *
 * @link https://github.com/pmndrs/zustand/issues/108#issuecomment-2197556875
 *
 */
export const getContextComputes =
  <T,>() =>
  <U extends Record<string, () => unknown>>(
    computation: (_get: () => T, _compute: typeof compute) => U,
  ) =>
  (get: () => T, _compute = compute) =>
    computation(get, _compute);
