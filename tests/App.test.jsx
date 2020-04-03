import OwnReact from "../src";
import Component from "../src/Component";

describe("App", () => {
  const DOM = <h1 prop1="prop value">Hello, World!</h1>;

  class ClassComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        stateText: "text from state"
      };
    }

    render() {
      const { stateText } = this.state;
      const { propsText } = this.props;
      return (
        <div>
          {stateText}
          {propsText}
        </div>
      );
    }
  }

  const FunctionalComponent = ({ children }) => <ul>{children}</ul>;

  test("FunctionalComponent with ClassComponent inside renders correctly", () => {
    expect(
      <FunctionalComponent>
        <ClassComponent propsText="text from props" />
      </FunctionalComponent>
    ).toEqual({
      props: {
        children: [
          {
            props: {
              children: [],
              propsText: "text from props"
            },
            state: {
              stateText: "text from state"
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
    expect(<ClassComponent propsText="text from props" />).toEqual({
      props: {
        children: [],
        propsText: "text from props"
      },
      state: {
        stateText: "text from state"
      }
    });
  });
});
