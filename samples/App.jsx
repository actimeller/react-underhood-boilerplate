import OwnReact from "../src";
import randomInteger from "../utils/randomInteger";
import randomReplaceArray from "../utils/randomReplaceArray";
import createAlphabet from "../utils/createAlphabet";
import Component from "../src/Component";

const List = ({ children }) => <ul>{children}</ul>;
const ListItem = ({ children }) => <li>{children}</li>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphabet: createAlphabet()
    };
  }

  tick() {
    let { alphabet } = this.state;
    for (let i = 0; i < randomInteger(0, alphabet.length); i += 1) {
      alphabet = randomReplaceArray(alphabet);
    }
    this.setState({ alphabet });
  }

  render() {
    const { alphabet } = this.state;
    setTimeout(() => {
      this.tick();
    }, 5000);

    return (
      <List>
        {alphabet.map(el => (
          <ListItem>{el}</ListItem>
        ))}
      </List>
    );
  }
}

export default App;
