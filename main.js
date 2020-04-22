const buttonStyle = "unselectable f6 no-underline shadow-hover dib v-mid white ma3 ba b--white-80 ph3 pv2 mb3";
const MQTT_URL = "wss://charlescool.xyz:8120";
const textStyle = "fw1 f5 white-80 mt3 mb4";

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
class App extends React.Component {
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

    this.header = () => React.createElement(
      "header",
      { "class": "bg-black-20 w-100 ph3 pv3 pv4-ns ph4-m ph5-l " },
      React.createElement(
        "nav",
        { "class": "f6 fw6 ttu tracked" },
        React.createElement(
          "a",
          { "class": "link dim white dib mr3", href: "#", title: "Home" },
          "Home"
        ),
        React.createElement(
          "a",
          { "class": "link dim white dib mr3", href: "#", title: "About" },
          "About"
        ),
        React.createElement(
          "a",
          { "class": "link dim white dib mr3", href: "#", title: "Store" },
          "Store"
        ),
        React.createElement(
          "a",
          { "class": "link dim white dib", href: "#", title: "Contact" },
          "Contact"
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
      this.header(),
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

let domContainer = document.querySelector("#react_div");
ReactDOM.render(React.createElement(App, null), domContainer);