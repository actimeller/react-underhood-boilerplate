import createTextElement from "./createTextElement";

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
    const nextInstance = this.reconcile(container, prevInstance, element);
    this.rootInstance = nextInstance;
    console.info("ROOT INSTANCE", this.rootInstance);
    // this.rootInstance = this.reconcile(container, this.rootInstance(), element);
  }

  static reconcile(parentDom, instance, element) {
    if (instance == null) {
      const newInstance = this.instantiate(element);
      parentDom.appendChild(newInstance.dom);
      return newInstance;
    }
    if (instance.element.type === element.type) {
      // Обновляем инстанс
      // updateDomProperties(instance.dom, instance.element.props, element.props);
      instance.childInstances = this.reconcileChildren(instance, element);
      instance.element = element;
      return instance;
    }
    // Заменяем инстанс
    const newInstance = this.instantiate(element);
    parentDom.replaceChild(newInstance.dom, instance.dom);
    return newInstance;
  }

  static reconcileChildren(instance, element) {
    const { dom } = instance;
    const { childInstances } = instance;
    const nextChildElements = element.props.children || [];
    const newChildInstances = [];
    const count = Math.max(childInstances.length, nextChildElements.length);
    for (let i = 0; i < count; i++) {
      const childInstance = childInstances[i];
      const childElement = nextChildElements[i];
      const newChildInstance = this.reconcile(dom, childInstance, childElement);
      newChildInstances.push(newChildInstance);
    }
    return newChildInstances;
  }

  static instantiate(element) {
    const { type, props } = element;
    const isTextElement = type === "TEXT_ELEMENT";
    const dom = isTextElement
      ? document.createTextNode(props.nodeValue)
      : document.createElement(type);
    const childElements = props.children;
    const childInstances = childElements.reduce((instances, child) => {
      // if (child instanceof Array) {
      //   this.instantiate(child).map(element => instances.push(element));
      // } else {
      instances.push(this.instantiate(child));
      // }
      return instances;
    }, []);
    const childDoms = childInstances.map(childInstance => childInstance.dom);
    childDoms.forEach(childDom => {
      return dom.appendChild(childDom);
    });
    const instance = { dom, element, childInstances };
    return instance;
  }
}

export default OwnReact;
