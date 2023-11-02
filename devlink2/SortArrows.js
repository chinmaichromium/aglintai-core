import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SortArrows.module.css";

export function SortArrows({
  as: _Component = _Builtin.Block,
  upArrow = false,
  downArrow = false,
  onclickSort = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "sort-arrow-block", "clickable")}
      tag="div"
      {...onclickSort}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "icon-block", "_8px", "sort")}
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icon-embed")}
          value="%3Csvg%20width%3D%22191%22%20height%3D%22161%22%20viewBox%3D%220%200%20191%20161%22%20fill%3DcurrentColor%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.80307%20145.737L6.78822%20145.709L6.77297%20145.682C4.85358%20142.282%203.89838%20138.428%204.00855%20134.53C4.11872%20130.632%205.29015%20126.837%207.39875%20123.55L7.40644%20123.538L7.41404%20123.526L76.4388%2014.2186L76.4457%2014.2078C78.4086%2011.0771%2081.1415%208.4956%2084.3869%206.70884C87.6325%204.92203%2091.2826%203.98942%2094.9921%204.00011L95.0039%204.00014L95.0157%204.0001C98.7257%203.98888%20102.377%204.92126%20105.623%206.70809C108.869%208.49488%20111.602%2011.0766%20113.565%2014.2078L113.572%2014.2186L182.597%20123.526L182.605%20123.538L182.612%20123.55C184.721%20126.837%20185.892%20130.632%20186.002%20134.53C186.113%20138.428%20185.157%20142.282%20183.238%20145.682L183.223%20145.709L183.208%20145.737C181.342%20149.165%20178.575%20152.025%20175.202%20154.01C171.829%20155.994%20167.976%20157.028%20164.057%20157L164.043%20157L164.028%20157L25.9788%20157L25.9648%20157L25.9507%20157C22.032%20157.028%2018.1803%20155.993%2014.8075%20154.009C11.4348%20152.024%208.66861%20149.164%206.80307%20145.737Z%22%20stroke%3D%22black%22%20stroke-width%3D%228%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        {upArrow ? (
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icon-embed", "sort-filled")}
            value="%3Csvg%20width%3D%22191%22%20height%3D%22161%22%20viewBox%3D%220%200%20191%20161%22%20fill%3DcurrentColor%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.80307%20145.737L6.78822%20145.709L6.77297%20145.682C4.85358%20142.282%203.89838%20138.428%204.00855%20134.53C4.11872%20130.632%205.29015%20126.837%207.39875%20123.55L7.40644%20123.538L7.41404%20123.526L76.4388%2014.2186L76.4457%2014.2078C78.4086%2011.0771%2081.1415%208.4956%2084.3869%206.70884C87.6325%204.92203%2091.2826%203.98942%2094.9921%204.00011L95.0039%204.00014L95.0157%204.0001C98.7257%203.98888%20102.377%204.92126%20105.623%206.70809C108.869%208.49488%20111.602%2011.0766%20113.565%2014.2078L113.572%2014.2186L182.597%20123.526L182.605%20123.538L182.612%20123.55C184.721%20126.837%20185.892%20130.632%20186.002%20134.53C186.113%20138.428%20185.157%20142.282%20183.238%20145.682L183.223%20145.709L183.208%20145.737C181.342%20149.165%20178.575%20152.025%20175.202%20154.01C171.829%20155.994%20167.976%20157.028%20164.057%20157L164.043%20157L164.028%20157L25.9788%20157L25.9648%20157L25.9507%20157C22.032%20157.028%2018.1803%20155.993%2014.8075%20154.009C11.4348%20152.024%208.66861%20149.164%206.80307%20145.737Z%22%20stroke%3DcurrentColor%20stroke-width%3D%228%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        ) : null}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "icon-block", "_8px", "sort")}
        tag="div"
      >
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icon-embed")}
          value="%3Csvg%20width%3D%22191%22%20height%3D%22161%22%20viewBox%3D%220%200%20191%20161%22%20fill%3DcurrentColor%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M183.208%2015.2649L183.223%2015.2922L183.238%2015.3193C185.157%2018.7191%20186.113%2022.574%20186.002%2026.4717C185.892%2030.3693%20184.721%2034.1648%20182.612%2037.4519L182.605%2037.4639L182.597%2037.4759L113.572%20146.783L113.565%20146.794C111.602%20149.925%20108.869%20152.506%20105.624%20154.293C102.379%20156.08%2098.7283%20157.012%2095.0189%20157.001L95.007%20157.001L94.9952%20157.001C91.2853%20157.013%2087.6344%20156.08%2084.3883%20154.293C81.1423%20152.507%2078.4089%20149.925%2076.4457%20146.794L76.4388%20146.783L7.41404%2037.4759L7.40645%2037.4639L7.39876%2037.4519C5.29016%2034.1648%204.11873%2030.3693%204.00856%2026.4717C3.89839%2022.574%204.85358%2018.7191%206.77298%2015.3193L6.78824%2015.2922L6.80309%2015.2649C8.66888%2011.8368%2011.4356%208.97669%2014.8089%206.99203C18.1822%205.00731%2022.0346%203.97318%2025.9538%204.00135L25.9682%204.00146H25.9826H164.032H164.046L164.06%204.00136C167.979%203.97375%20171.831%205.00815%20175.203%206.99284C178.576%208.97747%20181.342%2011.8372%20183.208%2015.2649Z%22%20stroke%3D%22black%22%20stroke-width%3D%228%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        {downArrow ? (
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icon-embed", "sort-filled")}
            value="%3Csvg%20width%3D%22191%22%20height%3D%22161%22%20viewBox%3D%220%200%20191%20161%22%20fill%3DcurrentColor%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M183.208%2015.2649L183.223%2015.2922L183.238%2015.3193C185.157%2018.7191%20186.113%2022.574%20186.002%2026.4717C185.892%2030.3693%20184.721%2034.1648%20182.612%2037.4519L182.605%2037.4639L182.597%2037.4759L113.572%20146.783L113.565%20146.794C111.602%20149.925%20108.869%20152.506%20105.624%20154.293C102.379%20156.08%2098.7283%20157.012%2095.0189%20157.001L95.007%20157.001L94.9952%20157.001C91.2853%20157.013%2087.6344%20156.08%2084.3883%20154.293C81.1423%20152.507%2078.4089%20149.925%2076.4457%20146.794L76.4388%20146.783L7.41404%2037.4759L7.40645%2037.4639L7.39876%2037.4519C5.29016%2034.1648%204.11873%2030.3693%204.00856%2026.4717C3.89839%2022.574%204.85358%2018.7191%206.77298%2015.3193L6.78824%2015.2922L6.80309%2015.2649C8.66888%2011.8368%2011.4356%208.97669%2014.8089%206.99203C18.1822%205.00731%2022.0346%203.97318%2025.9538%204.00135L25.9682%204.00146H25.9826H164.032H164.046L164.06%204.00136C167.979%203.97375%20171.831%205.00815%20175.203%206.99284C178.576%208.97747%20181.342%2011.8372%20183.208%2015.2649Z%22%20stroke%3DcurrentColor%20stroke-width%3D%228%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
