const shallowEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (!obj1 || !obj2) return false;
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
  }
  return false;
};

export default shallowEqual;
