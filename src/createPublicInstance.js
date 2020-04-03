const createPublicInstance = (Element, internalInstance) => {
  const { props, type } = Element;

  // eslint-disable-next-line new-cap
  const publicInstance = new type(props);
  // eslint-disable-next-line no-underscore-dangle
  publicInstance.__internalInstance = internalInstance;
  return publicInstance;
};
export default createPublicInstance;
