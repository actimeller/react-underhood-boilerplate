import OwnReact from "../src";
import Component from "../src/Component";

describe("App", () => {
  const DOM = <h1 prop1="prop value">Hello, World!</h1>;

  class ClassComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "text"
      };
    }

    render() {
      const { text } = this.state;
      return <div>{text}</div>;
    }
  }
  const FunctionalComponent = ({ children }) => <ul>{children}</ul>;

  test("FunctionalComponent renders correctly", () => {
    expect(
      <FunctionalComponent>{new ClassComponent()}</FunctionalComponent>
    ).toEqual({
      props: {
        children: [
          {
            state: {
              text: "text"
            }
          }
        ]
      },
      type: "ul"
    });
  });

  test("DOM renders correctly", () => {
    expect(DOM).toEqual({
      props: {
        children: [
          {
            props: { children: [], nodeValue: "Hello, World!" },
            type: "TEXT_ELEMENT"
          }
        ],
        prop1: "prop value"
      },
      type: "h1"
    });
  });

  test("Class component renders correctly", () => {
    expect(new ClassComponent().render()).toEqual({
      props: {
        children: [
          {
            props: {
              children: [],
              nodeValue: "text"
            },
            type: "TEXT_ELEMENT"
          }
        ]
      },
      type: "div"
    });
  });
});
