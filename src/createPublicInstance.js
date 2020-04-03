const createPublicInstance = (Element, internalInstance) => {
  const { props } = Element;
  let publicInstance;
  let exception = false;
  try {
    // eslint-disable-next-line no-unused-expressions
    typeof new Element();
  } catch (error) {
    publicInstance = Element;
    exception = true;
  }
  if (!exception) {
    publicInstance = new Element(props);
  }
  // eslint-disable-next-line no-underscore-dangle
  publicInstance.__internalInstance = internalInstance;
  return publicInstance;
};
export default createPublicInstance;
