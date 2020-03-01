import OwnReact from "../src";

const alphabet = ["a", "b", "c"];

const List = children => <ul>{children}</ul>;

// const App = <h1>Hello, World! <br/> Минимальная рабочая реализация Virtual DOM</h1>;
const App = <ul>{[1, 2, 3, 4, 5].map(el => el)}</ul>;
// const App = <List><ListItem/></List>;

export default App;
