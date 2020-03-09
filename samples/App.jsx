import OwnReact from "../src";

function createAlphabet() {
  const alphabetArray = [];
  for (let i = 1040; i <= 1071; i += 1) {
    alphabetArray.push(String.fromCharCode(i));
  }
  return alphabetArray;
}
const alphabet = createAlphabet();

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
  OwnReact.render(App3, root);
}
tick();
// setInterval(tick, 2000);
// eslint-disable-next-line react/no-deprecated
// OwnReact.render(App, root);
// OwnReact.render(App2, root);
OwnReact.render(App3, root);

export default App;
