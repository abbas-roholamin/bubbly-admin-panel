import React, { createContext, useState } from "react";

const SideBarContext = createContext({
  shrink: false,
});

export function SideBarContextProdiver(props) {
  const [shrink, setshrink] = useState(false);
  const toggleShrink = () => {
    setshrink(!shrink);
  };
  const context = {
    shrink,
    toggleShrink,
  };
  return (
    <SideBarContext.Provider value={context}>
      {props.children}
    </SideBarContext.Provider>
  );
}
export default SideBarContext;
