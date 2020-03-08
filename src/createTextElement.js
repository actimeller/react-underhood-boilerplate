const createTextElement = text => ({
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: text,
    children: []
  }
});

export default createTextElement;
