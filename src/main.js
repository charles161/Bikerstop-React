const buttonStyle = "unselectable pointer grow bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked w-50 center ma3 hover";

const { Link, Route, BrowserRouter: Router, Switch } = ReactRouterDOM;

const itemData = [
  {
    name: "Some name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    image: "http://placekitten.com/g/600/300",
    price: 10.99
  },
  {
    name: "Some name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    image: "http://placekitten.com/g/600/300",
    price: 10.99
  },
  {
    name: "Some name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    image: "http://placekitten.com/g/600/300",
    price: 10.99
  },
  {
    name: "Some name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    image: "http://placekitten.com/g/600/300",
    price: 10.99
  },
  {
    name: "Some name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    image: "http://placekitten.com/g/600/300",
    price: 10.99
  },
  {
    name: "Some name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    image: "http://placekitten.com/g/600/300",
    price: 10.99
  },
  {
    name: "Some name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    image: "http://placekitten.com/g/600/300",
    price: 10.99
  },
  {
    name: "Some name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    image: "http://placekitten.com/g/600/300",
    price: 10.99
  },
  {
    name: "Some name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    image: "http://placekitten.com/g/600/300",
    price: 10.99
  }
];

function Container(props) {
  return <div class="overflow-y-scroll h-100 mb5">{props.children}</div>;
}

function Card(props) {
  return <div class="mw6 center bg-white br3 pa5 pa4-ns mv5 ba b--black-10 w-100">{props.children}</div>;
}

function PageContainer(props) {
  return (
    <div id="content" className="sans-serif fixed h-100 w-100 center flex flex-column mb5">
      {props.children}
    </div>
  );
}

function ItemsContainer(props) {
  return (
    <div class="mw9 ph3-ns">
      <div class="cf ph2-ns flex justify-between-ns">{props.children}</div>
    </div>
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyVisible: false
    };
    this.peerConnection = null;
    this.client = null;
  }

  button = (name, clickAction) => (
    <button onClick={clickAction} class="bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked">
      {name}
    </button>
  );

  itemCard = item => {
    const { name, image, price, description } = item;
    return (
      <article
        onMouseEnter={() => {
          this.setState({ buyVisible: true });
        }}
        onMouseLeave={() => {
          this.setState({ buyVisible: false });
        }}
        className="bg-white dark-gray fl w-100 w-20-ns mh2 mv4 content-center"
      >
        <img src={image} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
        <div className="pa2 ph3-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="f5 f4-ns mv0">{name}</h1>
            </div>
            <div className="dtc tr">
              <h2 className="f5 mv0">{"₹ " + price}</h2>
            </div>
          </div>
          <p className="f6 lh-copy measure mt2 mid-gray">{description}</p>
          {/* {this.state.buyVisible ? this.button() : null} */}
        </div>
      </article>
    );
  };

  chunker = (items, size) => {
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

  render() {
    return (
      <PageContainer>
        <Container>
          {this.chunker(itemData.map(item => this.itemCard(item)), 3).map(chunk => (
            <ItemsContainer>{chunk}</ItemsContainer>
          ))}
        </Container>
      </PageContainer>
    );
  }
}

const header = () => (
  <header class="bg-black-20 w-100 ph3 pv3 pv4-ns ph4-m ph5-l ">
    <nav class="f6 fw6 ttu tracked">
      <Link class="link dim white dib mr3" to="/">
        Home
      </Link>
      <Link class="link dim white dib mr3" to="/login">
        Login
      </Link>
      <Link class="link dim white dib mr3" to="/register">
        Register
      </Link>
      <Link class="link dim white dib mr3" to="/shipping">
        Shipping
      </Link>
    </nav>
  </header>
);

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    name: "",
    error: ""
  };

  render() {
    return (
      <PageContainer>
        <Card>
          <h1 className="black center ma3">Register</h1>
          <div>
            <div>
              <label class="black db fw6 lh-copy f6" for="name">
                Name
              </label>
              <input
                class="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="name"
                name="name"
                id="name"
                value={this.state.name}
                onChange={event => {
                  this.setState({ name: event.target.value, error: "" });
                }}
              />
              <label class="black db fw6 lh-copy f6" for="phone">
                Phone
              </label>
              <input
                class="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="number"
                name="phone"
                id="phone"
                value={this.state.phone}
                onChange={event => {
                  this.setState({ phone: event.target.value, error: "" });
                }}
              />
              <label class="black db fw6 lh-copy f6" for="email-address">
                Email
              </label>
              <input
                class="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="email"
                name="email-address"
                id="email-address"
                value={this.state.email}
                onChange={event => {
                  this.setState({ email: event.target.value, error: "" });
                }}
              />

              <label class="black db fw6 lh-copy f6" for="password">
                Password:
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={event => {
                  this.setState({ password: event.target.value, error: "" });
                }}
              />
              <label class="black db fw6 lh-copy f6" for="confirmpassword">
                Confirm Password:
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                value={this.state.confirmPassword}
                onChange={event => {
                  this.setState({ confirmPassword: event.target.value, error: "" });
                }}
              />
            </div>
            <div class="red ma2">{this.state.error}</div>
            <div className={buttonStyle} onClick={() => {}}>
              Sign Up
            </div>
          </div>
        </Card>
      </PageContainer>
    );
  }
}

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  render() {
    return (
      <PageContainer>
        <Card>
          <h1 className="black center ma3">Login</h1>
          <div>
            <div>
              <label class="black db fw6 lh-copy f6" for="email-address">
                Email
              </label>
              <input
                class="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="email"
                name="email-address"
                id="email-address"
                value={this.state.email}
                onChange={event => {
                  this.setState({ email: event.target.value, error: "" });
                }}
              />

              <label class="black db fw6 lh-copy f6" for="password">
                Password:
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={event => {
                  this.setState({ password: event.target.value, error: "" });
                }}
              />
            </div>
            <div class="red ma2">{this.state.error}</div>
            <div className={buttonStyle} onClick={() => {}}>
              Sign In
            </div>
          </div>
        </Card>
      </PageContainer>
    );
  }
}

class ShippingInfo extends React.Component {
  state = {
    flatAndStreet: "",
    city: "",
    pincode: "",
    province: "",
    country: "",
    error: ""
  };

  render() {
    return (
      <PageContainer>
        <Card>
          <h1 className="black center ma3">Shipping Info</h1>
          <div>
            <div>
              <label class="black db fw6 lh-copy f6" for="flatAndStreet">
                Flat and Street Info
              </label>
              <input
                class="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="text"
                name="flatAndStreet"
                id="flatAndStreet"
                value={this.state.flatAndStreet}
                onChange={event => {
                  this.setState({ flatAndStreet: event.target.value, error: "" });
                }}
              />

              <label class="black db fw6 lh-copy f6" for="city">
                City
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="text"
                name="city"
                id="city"
                value={this.state.city}
                onChange={event => {
                  this.setState({ city: event.target.value, error: "" });
                }}
              />
              <label class="black db fw6 lh-copy f6" for="province">
                State
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="text"
                name="province"
                id="province"
                value={this.state.province}
                onChange={event => {
                  this.setState({ province: event.target.value, error: "" });
                }}
              />
              <label class="black db fw6 lh-copy f6" for="pincode">
                Pincode
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="number"
                name="pincode"
                id="pincode"
                value={this.state.pincode}
                onChange={event => {
                  this.setState({ pincode: event.target.value, error: "" });
                }}
              />

              <label class="black db fw6 lh-copy f6" for="country">
                Country
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 mb2"
                type="text"
                name="country"
                id="country"
                value={this.state.country}
                onChange={event => {
                  this.setState({ country: event.target.value, error: "" });
                }}
              />
            </div>
            <div class="red ma2">{this.state.error}</div>
            <div className={buttonStyle} onClick={() => {}}>
              Save
            </div>
          </div>
        </Card>
      </PageContainer>
    );
  }
}

function App() {
  return (
    <Router>
      {header()}
      <div>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/shipping">
            <ShippingInfo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

let domContainer = document.querySelector("#react_div");
ReactDOM.render(<App />, domContainer);
