import React from "react";
import first from "./components/First";
import second from "./components/Second";
import third from "./components/third";
import Fourth from "./components/fourth";
const Components = {
  table: first,
  button:second,
  form:third
};



export default list => {
  if (typeof Components[list.type] !== "undefined") {
    return React.createElement(Components[list.type]);
   
  }

};



































  /*return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );*/