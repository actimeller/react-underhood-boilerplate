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

  static render(element, parentDom) {
    const { type, props } = element;
    if (typeof element === "string") {
      const textElement = this.createElement("TEXT_ELEMENT", {
        nodeValue: element
      });
      this.render(textElement, parentDom);
    } else if (element instanceof Array) {
      element.map(item => this.render(item, parentDom));
    } else if (type instanceof Function) {
      this.render(type(props.children), parentDom);
    } else if (type instanceof Object) {
      this.render(type, parentDom);
    } else {
      const isTextElement = type === "TEXT_ELEMENT";
      const dom = isTextElement
        ? document.createTextNode(props.nodeValue)
        : document.createElement(type);
      const childElements = props.children || [];
      childElements.forEach(childElement => this.render(childElement, dom));
      parentDom.appendChild(dom);
    }
  }
}

export default OwnReact;
