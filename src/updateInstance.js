import performanceOwnReact from "../utils/performanceOwnReact";
import reconcile from "./reconcile";

const updateDomFull = internalInstance => {
  const parentDom = internalInstance.dom.parentNode;
  const { element } = internalInstance;
  performanceOwnReact.start("Update DOM Full");
  reconcile(parentDom, internalInstance, element);
  performanceOwnReact.end("Update DOM Full");
  performanceOwnReact.measure("Update DOM Full");
};

export default updateDomFull;
