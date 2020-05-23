import Component from "./Component";
import shallowEqual from "../utils/shallowEqual";

class PureComponent extends Component {
  shouldComponentUpdate(nextProps) {
    console.info(
      "this is PureComponent sCU",
      this.props,
      nextProps,
      shallowEqual(this.props, nextProps)
    );

    if (shallowEqual(this.props, nextProps)) {
      return false;
    }
    return true;
  }
}

export default PureComponent;
