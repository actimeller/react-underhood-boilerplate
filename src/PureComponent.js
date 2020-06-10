import Component from "./Component";
import shallowEqual from "../utils/shallowEqual";

class PureComponent extends Component {
  shouldComponentUpdate(nextProps) {
    if (shallowEqual(this.props, nextProps)) {
      return false;
    }
    return true;
  }
}

export default PureComponent;
