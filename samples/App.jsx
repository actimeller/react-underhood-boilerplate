import OwnReact from "../src";

const alphabet = ["a", "b", "c"];

const List = children => <ul>{children}</ul>;
const ListItem = children => <li>{children}</li>;

const App = (
  <List>
    {alphabet.map(el => (
      <ListItem>{el}</ListItem>
    ))}
  </List>
);

export default App;
