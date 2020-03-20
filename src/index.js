import createTextElement from "./createTextElement";
import reconcile from "./reconcile";

class OwnReact {
  constructor() {
    this.rootInstance = null;
  }

  static createElement(type, props, ...children) {
    let element = {
      type,
      props: {
        ...props,
        children: children.flatMap(child =>
          typeof child === "string" ? createTextElement(child) : child
        )
      }
    };

    if (type instanceof Function) {
      element = type(element.props);
    }

    return element;
  }

  static render(element, container) {
    const prevInstance = this.rootInstance;
    const nextInstance = reconcile(container, prevInstance, element);
    this.rootInstance = nextInstance;
  }
}

export default OwnReact;
