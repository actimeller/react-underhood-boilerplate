import OwnReact from "../src";

const alphabet = ["a", "b", "c"];

const List = children => <ul>{children}</ul>;

const App = <ul>{alphabet.map(el => <li>{el}</li>)}</ul>;
// const App = <List>234</List>;

export default App;
