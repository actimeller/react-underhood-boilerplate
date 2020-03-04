class OwnReact {
  static createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: [...children]
      }
    };
  }

  static render1(element, parentDom) {
    const isTextElement = typeof element === "string";
    const { type, props } = element;

    const dom = isTextElement
      ? document.createTextNode(element)
      : document.createElement(type);
    if (!isTextElement) {
      const childElements = props.children || [];
      childElements.forEach(childElement => this.render(childElement, dom));
    } else {
      this.createElement("TEXT_ELEMENT", {
        nodeValue: element
      });
    }
    parentDom.appendChild(dom);
  }

  static render(element, parentDom) {
    const { type, props } = element;
    if (type) {
      const isTextElement = type === "TEXT_ELEMENT";
      const dom = isTextElement
        ? document.createTextNode(props.nodeValue)
        : document.createElement(type);
      const childElements = props.children || [];
      childElements.forEach(childElement => this.render(childElement, dom));
      parentDom.appendChild(dom);
    } else if (Array.isArray(element)) {
      element.map(item => this.render(item, parentDom));
    } else {
      const textElement = this.createElement("TEXT_ELEMENT", {
        nodeValue: element
      });
      this.render(textElement, parentDom);
    }
  }
}

export default OwnReact;
