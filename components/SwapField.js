import React, { forwardRef } from "react";

import Selector from "./Selector";

const SwapField = forwardRef(({ obj }, inputRef) => {
  const { id, value = "", setValue, defaultValue, setToken, ignoreValue } = obj;

  const getInPutClassName = () => {
    let className =
      "w-full outline-none h-8 px-2 appearance-none text-3xl bg-transparent";
    return className;
  };
  return (
    <div className="flex items-center rounded-xl">
      <input
        ref={inputRef}
        className={getInPutClassName()}
        type={"number"}
        value={value}
        placeholder={"0.0"}
        onChange={(e) => setValue(e.target.value)}
      />
      <Selector
        id={id}
        setToken={setToken}
        defaultValue={defaultValue}
        ignoreValue={ignoreValue}
      />
    </div>
  );
});

export default SwapField;
