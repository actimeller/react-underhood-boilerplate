const createPublicInstance = (Element, internalInstance) => {
  const { props } = Element;

  const publicInstance = new Element(props);
  // eslint-disable-next-line no-underscore-dangle
  publicInstance.__internalInstance = internalInstance;
  return publicInstance;
};
export default createPublicInstance;
