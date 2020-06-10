/* eslint-disable max-classes-per-file */
import OwnReact from "../src";
import randomInteger from "../utils/randomInteger";
import randomReplaceArray from "../utils/randomReplaceArray";
import sortAlphabetByString from "../utils/sortAlphabetByString";
import Component from "../src/Component";
import PureComponent from "../src/PureComponent";

const russianString = "абвгдежзийклмнопрстуфхцчшщъыьэюя";

const List = ({ children }) => <ul>{children}</ul>;

class ListItemComponent extends PureComponent {
  render() {
    const { item } = this.props;
    return <li>{item}</li>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabet: russianString.split(""),
      inputValue: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSortButton = this.handleSortButton.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSortButton() {
    const { inputValue, alphabet } = this.state;
    this.setState({
      alphabet: sortAlphabetByString(alphabet, inputValue)
    });
  }

  tick() {
    let { alphabet } = this.state;
    for (let i = 0; i < randomInteger(0, alphabet.length); i += 1) {
      alphabet = randomReplaceArray(alphabet);
    }
    this.setState({ alphabet });
  }

  render() {
    const { alphabet, inputValue } = this.state;

    return (
      <div>
        <List>
          {alphabet.map(el => (
            <ListItemComponent item={el} />
          ))}
        </List>
        <button type="button" onClick={this.tick}>
          replace array
        </button>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleSortButton}>
            replace by string
          </button>
        </div>
      </div>
    );
  }
}

export default App;
