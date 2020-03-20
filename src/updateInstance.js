import reconcile from "./reconcile";

const updateInstance = internalInstance => {
  const parentDom = internalInstance.dom.parentNode;
  const { element } = internalInstance;
  reconcile(parentDom, internalInstance, element);
};

export default updateInstance;
