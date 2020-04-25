const buttonStyle = "unselectable bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked w-50 center ma3 hover";

const { Link, Route, BrowserRouter: Router, Switch } = ReactRouterDOM;

const itemData = [{
  name: "Some name",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
  image: "http://placekitten.com/g/600/300",
  price: 10.99
}, {
  name: "Some name",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
  image: "http://placekitten.com/g/600/300",
  price: 10.99
}, {
  name: "Some name",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
  image: "http://placekitten.com/g/600/300",
  price: 10.99
}, {
  name: "Some name",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
  image: "http://placekitten.com/g/600/300",
  price: 10.99
}, {
  name: "Some name",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
  image: "http://placekitten.com/g/600/300",
  price: 10.99
}, {
  name: "Some name",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
  image: "http://placekitten.com/g/600/300",
  price: 10.99
}, {
  name: "Some name",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
  image: "http://placekitten.com/g/600/300",
  price: 10.99
}, {
  name: "Some name",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
  image: "http://placekitten.com/g/600/300",
  price: 10.99
}, {
  name: "Some name",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
  image: "http://placekitten.com/g/600/300",
  price: 10.99
}];

function Container(props) {
  return React.createElement(
    "div",
    { "class": "overflow-y-scroll h-100 mb5" },
    props.children
  );
}

function Card(props) {
  return React.createElement(
    "div",
    { "class": "mw6 center bg-white br3 pa5 pa4-ns mv5 ba b--black-10 w-100" },
    props.children
  );
}

function PageContainer(props) {
  return React.createElement(
    "div",
    { id: "content", className: "sans-serif fixed h-100 w-100 center flex flex-column mb5" },
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

    this.button = (name, clickAction) => React.createElement(
      "button",
      { onClick: clickAction, "class": "bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked" },
      name
    );

    this.itemCard = item => {
      const { name, image, price, description } = item;
      return React.createElement(
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
        React.createElement("img", { src: image, className: "db w-100 br2 br--top", alt: "Photo of a kitten looking menacing." }),
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
                name
              )
            ),
            React.createElement(
              "div",
              { className: "dtc tr" },
              React.createElement(
                "h2",
                { className: "f5 mv0" },
                "₹ " + price
              )
            )
          ),
          React.createElement(
            "p",
            { className: "f6 lh-copy measure mt2 mid-gray" },
            description
          )
        )
      );
    };

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
      PageContainer,
      null,
      React.createElement(
        Container,
        null,
        this.chunker(itemData.map(item => this.itemCard(item)), 3).map(chunk => React.createElement(
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
      { "class": "link dim white dib mr3", to: "/login" },
      "Login"
    ),
    React.createElement(
      Link,
      { "class": "link dim white dib mr3", to: "/register" },
      "Register"
    )
  )
);

class Register extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      name: "",
      error: ""
    }, _temp;
  }

  render() {
    return React.createElement(
      PageContainer,
      null,
      React.createElement(
        Card,
        null,
        React.createElement(
          "h1",
          { className: "black center ma3" },
          "Register"
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { "class": "black db fw6 lh-copy f6", "for": "name" },
              "Name"
            ),
            React.createElement("input", {
              "class": "pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2",
              type: "name",
              name: "name",
              id: "name",
              value: this.state.name,
              onChange: event => {
                this.setState({ name: event.target.value, error: "" });
              }
            }),
            React.createElement(
              "label",
              { "class": "black db fw6 lh-copy f6", "for": "phone" },
              "Phone"
            ),
            React.createElement("input", {
              "class": "pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2",
              type: "number",
              name: "phone",
              id: "phone",
              value: this.state.phone,
              onChange: event => {
                this.setState({ phone: event.target.value, error: "" });
              }
            }),
            React.createElement(
              "label",
              { "class": "black db fw6 lh-copy f6", "for": "email-address" },
              "Email"
            ),
            React.createElement("input", {
              "class": "pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2",
              type: "email",
              name: "email-address",
              id: "email-address",
              value: this.state.email,
              onChange: event => {
                this.setState({ email: event.target.value, error: "" });
              }
            }),
            React.createElement(
              "label",
              { "class": "black db fw6 lh-copy f6", "for": "password" },
              "Password:"
            ),
            React.createElement("input", {
              "class": "b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2",
              type: "password",
              name: "password",
              id: "password",
              value: this.state.password,
              onChange: event => {
                this.setState({ password: event.target.value, error: "" });
              }
            }),
            React.createElement(
              "label",
              { "class": "black db fw6 lh-copy f6", "for": "confirmpassword" },
              "Confirm Password:"
            ),
            React.createElement("input", {
              "class": "b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2",
              type: "password",
              name: "confirmpassword",
              id: "confirmpassword",
              value: this.state.confirmPassword,
              onChange: event => {
                this.setState({ confirmPassword: event.target.value, error: "" });
              }
            })
          ),
          React.createElement(
            "div",
            { "class": "red ma2" },
            this.state.error
          ),
          React.createElement(
            "div",
            { className: buttonStyle, onClick: () => {} },
            "Sign Up"
          )
        )
      )
    );
  }
}

class Login extends React.Component {
  constructor(...args) {
    var _temp2;

    return _temp2 = super(...args), this.state = {
      email: "",
      password: "",
      error: ""
    }, _temp2;
  }

  render() {
    return React.createElement(
      PageContainer,
      null,
      React.createElement(
        Card,
        null,
        React.createElement(
          "h1",
          { className: "black center ma3" },
          "Login"
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { "class": "black db fw6 lh-copy f6", "for": "email-address" },
              "Email"
            ),
            React.createElement("input", {
              "class": "pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2",
              type: "email",
              name: "email-address",
              id: "email-address",
              value: this.state.email,
              onChange: event => {
                this.setState({ email: event.target.value, error: "" });
              }
            }),
            React.createElement(
              "label",
              { "class": "black db fw6 lh-copy f6", "for": "password" },
              "Password:"
            ),
            React.createElement("input", {
              "class": "b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2",
              type: "password",
              name: "password",
              id: "password",
              value: this.state.password,
              onChange: event => {
                this.setState({ password: event.target.value, error: "" });
              }
            })
          ),
          React.createElement(
            "div",
            { "class": "red ma2" },
            this.state.error
          ),
          React.createElement(
            "div",
            { className: buttonStyle, onClick: () => {} },
            "Sign In"
          )
        )
      )
    );
  }
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
          { path: "/register" },
          React.createElement(Register, null)
        ),
        React.createElement(
          Route,
          { path: "/login" },
          React.createElement(Login, null)
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