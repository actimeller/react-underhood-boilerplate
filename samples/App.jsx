import OwnReact from "../src";

const alphabet = ["a", "b"];

const List = ({ children }) => <ul>{children}</ul>;
const ListItem = ({ children }) => <li>{children}</li>;

// Рендер обычного дерева
const App = (
  <ul>
    <li>a</li>
    <li>b</li>
  </ul>
);

// Рендер массива
const App2 = (
  <ul>
    {alphabet.map(el => (
      <li>{el}</li>
    ))}
  </ul>
);

// Рендер функциональных компонентов
const App3 = (
  <List>
    {alphabet.map(el => (
      <ListItem>{el}</ListItem>
    ))}
  </List>
);

// samples/index.js
const root = document.getElementById("root");
function tick() {
  OwnReact.render(App2, root);
}
// tick();
// setInterval(tick, 5000);
// eslint-disable-next-line react/no-deprecated
// OwnReact.render(App, root);
// OwnReact.render(App2, root);
OwnReact.render(App3, root);

export default App;
