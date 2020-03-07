import OwnReact from "../src";

const alphabet = ["a", "b"];

const List = children => <ul>{children}</ul>;
const ListItem = children => <li>{children}</li>;

// const App = (
//   <List>
//     {alphabet.map(el => (
//       <ListItem>{el}</ListItem>
//     ))}
//   </List>
// );

const App = (
  <ul>
    <li>a</li>
    <li>b</li>
  </ul>
);

const App1 = (
  <div><ul>
    asdf
     {alphabet.map(el => <li>{el}</li>)}
  </ul></div>
);

//samples/index.js
const root = document.getElementById("root");
function tick() {
  OwnReact.render(App, root);
}
// tick();
// setInterval(tick, 1000);
// eslint-disable-next-line react/no-deprecated
OwnReact.render(App, root);
OwnReact.render(App1, root);

export default App;
