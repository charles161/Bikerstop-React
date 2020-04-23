const buttonStyle = "unselectable f6 no-underline shadow-hover dib v-mid white ma3 ba b--white-80 ph3 pv2 mb3";
const MQTT_URL = "wss://charlescool.xyz:8120";
const textStyle = "fw1 f5 white-80 mt3 mb4";

const { Link, Route, BrowserRouter: Router, Switch } = ReactRouterDOM;
function Container(props) {
  return React.createElement(
    "div",
    { "class": "overflow-y-scroll" },
    props.children
  );
}

function ItemsContainer(props) {
  return React.createElement(
    "div",
    { "class": "mw9 ph3-ns" },
    React.createElement(
      "div",
      { "class": "cf ph2-ns flex justify-between-ns" },
      props.children
    )
  );
}
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.button = () => React.createElement(
      "button",
      { "class": "bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked" },
      "do what you love"
    );

    this.itemCard = () => React.createElement(
      "article",
      {
        onMouseEnter: () => {
          this.setState({ buyVisible: true });
        },
        onMouseLeave: () => {
          this.setState({ buyVisible: false });
        },
        className: "bg-white dark-gray fl w-100 w-20-ns mh2 mv4 content-center"
      },
      React.createElement("img", { src: "http://placekitten.com/g/600/300", className: "db w-100 br2 br--top", alt: "Photo of a kitten looking menacing." }),
      React.createElement(
        "div",
        { className: "pa2 ph3-ns pb3-ns" },
        React.createElement(
          "div",
          { className: "dt w-100 mt1" },
          React.createElement(
            "div",
            { className: "dtc" },
            React.createElement(
              "h1",
              { className: "f5 f4-ns mv0" },
              "Cat"
            )
          ),
          React.createElement(
            "div",
            { className: "dtc tr" },
            React.createElement(
              "h2",
              { className: "f5 mv0" },
              "$1,000"
            )
          )
        ),
        React.createElement(
          "p",
          { className: "f6 lh-copy measure mt2 mid-gray" },
          "If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in horror."
        )
      )
    );

    this.chunker = (items, size) => {
      let chunks = [[]];
      let tempChunk = [];
      items.forEach((item, index) => {
        if ((index + 1) % size == 0 || index + 1 == items.length) {
          tempChunk.push(item);
          chunks.push(tempChunk);
          tempChunk = [];
        } else {
          tempChunk.push(item);
        }
      });
      return chunks;
    };

    this.state = {
      buyVisible: false
    };
    this.peerConnection = null;
    this.client = null;
  }

  render() {
    return React.createElement(
      "div",
      { id: "content", className: "sans-serif fixed h-100 w-100 center flex flex-column" },
      React.createElement(
        Container,
        null,
        this.chunker([this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard(), this.itemCard()], 3).map(chunk => React.createElement(
          ItemsContainer,
          null,
          chunk
        ))
      )
    );
  }
}

const header = () => React.createElement(
  "header",
  { "class": "bg-black-20 w-100 ph3 pv3 pv4-ns ph4-m ph5-l " },
  React.createElement(
    "nav",
    { "class": "f6 fw6 ttu tracked" },
    React.createElement(
      Link,
      { "class": "link dim white dib mr3", to: "/" },
      "Home"
    ),
    React.createElement(
      Link,
      { "class": "link dim white dib mr3", to: "/about" },
      "About"
    ),
    React.createElement(
      Link,
      { "class": "link dim white dib mr3", to: "/users" },
      "Users"
    )
  )
);

function About() {
  return React.createElement(
    "h2",
    { className: "white" },
    "About"
  );
}

function Users() {
  return React.createElement(
    "h2",
    { className: "white" },
    "Users"
  );
}

function App() {
  return React.createElement(
    Router,
    null,
    header(),
    React.createElement(
      "div",
      null,
      React.createElement(
        Switch,
        null,
        React.createElement(
          Route,
          { path: "/about" },
          React.createElement(About, null)
        ),
        React.createElement(
          Route,
          { path: "/users" },
          React.createElement(Users, null)
        ),
        React.createElement(
          Route,
          { path: "/" },
          React.createElement(Home, null)
        )
      )
    )
  );
}

let domContainer = document.querySelector("#react_div");
ReactDOM.render(React.createElement(App, null), domContainer);