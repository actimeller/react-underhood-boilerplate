class OwnReact {
  constructor() {
    this.rootInstance = null;
  }

  static createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: [...children]
      }
    };
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
    else if (instance.element.type === element.type) {
      // Обновляем инстанс
      // updateDomProperties(instance.dom, instance.element.props, element.props);
      instance.childInstances = this.reconcileChildren(instance, element);
      instance.element = element;
      return instance;
    }
    else {
      // Заменяем инстанс
      const newInstance = this.instantiate(element);
      parentDom.replaceChild(newInstance.dom, instance.dom);
      return newInstance;
    }
  }

  static reconcileChildren(instance, element) {
    const dom = instance.dom;
    const childInstances = instance.childInstances;
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
    if (typeof element === "string") {
      const textElement = this.createElement("TEXT_ELEMENT", {
        nodeValue: element
      });
      return this.instantiate(textElement);
    } else if (element instanceof Array) {
       return element.map(item => this.instantiate(item));
    } else if (type instanceof Function) {
      this.instantiate(type(props.children));
    } else if (type instanceof Object) {
      this.instantiate(type);
    } else {
      const isTextElement = type === "TEXT_ELEMENT";
      const dom = isTextElement
        ? document.createTextNode(props.nodeValue)
        : document.createElement(type);
      const childElements = props.children || [];
      const childInstances = childElements.map(child => this.instantiate(child));
      const childDoms = childInstances.reduce((doms, childInstance) => {
        if (childInstance instanceof Array) {
          childInstance.map(instance => doms.push(instance.dom));
        } else {
          doms.push(childInstance.dom);
        }
        return doms
      }, []);
      console.info(childDoms);
      childDoms.forEach(childDom => {
        return dom.appendChild(childDom)
      });
      const instance = { dom, element, childInstances };
      return instance;
    }
  }
}

export default OwnReact;
