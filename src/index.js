class OwnReact {
    static createElement(type, props, ...children) {
        return {
            type: type,
            props: {
                ...props,
                children: [...children]
            },
        };
    }

    static render(element, parentDom) {
        const isTextElement = typeof element === 'string';
        const {type, props} = element;

        const dom = isTextElement
            ? document.createTextNode(element)
            : document.createElement(type);
        if (!isTextElement) {
            const childElements = props.children || [];
            childElements.forEach(childElement => this.render(childElement, dom));
        }
        parentDom.appendChild(dom);
    }
}

export default OwnReact;
