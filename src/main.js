const buttonStyle = "unselectable pointer grow bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked w-50 center ma3 hover";

const { Link, Route, BrowserRouter: Router, Switch } = ReactRouterDOM;

const shippingDetails = [];

const itemData = [
  {
    name: "Hero Splendor Plus",
    description:
      "The Splendor Plus continues to be Hero Motocorp’s best-selling product. The motorcycle comes in three variants including kick-start with alloy wheels, self-start with alloy wheels and self-start with alloys and i3S.",
    image: "https://imgd.aeplcdn.com/227x128/bw/models/hero-splendor-plus-kick-alloy--bs-vi20200214191452.jpg?q=85",
    price: "59,560"
  },
  {
    name: "Bajaj Pulsar NS200",
    description:
      "The Bajaj Pulsar NS200 is positioned above the Pulsar 220F. The naked motorcycle gets three new dual-tone paint schemes- red/silver, black/grey and black/silver paint schemes to set it apart from the older model.",
    image: "https://imgd.aeplcdn.com/227x128/bw/models/bajaj-pulsar-ns200-bs-vi20200211173001.jpg?q=85",
    price: "1,24,006"
  },
  {
    name: "KTM 200 Duke",
    description:
      "KTM has heavily updated the 200 Duke’s styling giving it a completely new design as compared to the previous model which was introduced in 2012. It gets a angular headlamp with the LED DRL, an aggressively styled fuel tank which now has a 13.5 litre capacity (10.2-litres on the earlier model) along with a sleek tail section with a split-seat setup.",
    image: "https://imgd.aeplcdn.com/227x128/bw/models/ktm-200-duke-bs-vi20200130112649.jpg?q=85",
    price: "1,71,917"
  },
  {
    name: "TVS Apache RTR 160",
    description:
      "The TVS Apache RTR 160 is one of the oldest models in TVS’ portfolio. Besides minor decal changes and inclusion of ABS, it hadn’t received any major changes for a long time. The Hosur-based bike maker has recently launched the BS6-compliant model of the bike. And once again, it doesn’t get substantial updates, except for the revised powerplant, GTT (glide through technology) and new graphics.",
    image: "https://imgd.aeplcdn.com/227x128/bw/models/tvs-apache-rtr-160-front-disc--abs--bs-vi20200122150111.jpg?q=85",
    price: "95,000"
  },
  {
    name: "Yamaha FZ S V3",
    description:
      "The FZ is the model that revived Yamaha’s fortunes in India, and since its launch, it has been the gold standard for the 150cc sporty commuter, as far as the sales figures are concerned. It offered a number of new technologies like radial tyres and a centralised fuel tank, at the time of its launch. It is also one of the pioneers of fuel injection, having made the entire FZ range FI at a time when its competitors were still depending heavily on carburetted variants.",
    image: "https://imgd.aeplcdn.com/227x128/bw/models/yamaha-fz-s-v3-single-channel-abs--bs-vi20191111114812.jpg?q=85",
    price: "1,01,200"
  },
  {
    name: "Yamaha MT 15",
    description:
      "The MT-15 is a naked streetbike from Yamaha that is based on the company’s MT series. The MT-15 shares most of its underpinnings with its fully-faired sibling, the YZF R15 V3.0. It features a transformer-style front fairing with an LED projector headlamp, sculpted tank with tank extensions, a wide handlebar and a petite tail section.",
    image: "https://imgd.aeplcdn.com/227x128/bw/models/yamaha-mt-15-bs-vi20200204191522.jpg?q=85",
    price: "1,38,900"
  },
  {
    name: "Royal Enfield Bullet 350",
    description:
      "The Bullet 350 is Royal Enfield’s oldest and entry-level offering that is available in three different variants. The standard model features the original old-school Royal Enfield badging with kick starter. Meanwhile, the X models are available with kick starter and electric starter both along with other cosmetic changes over the standard variant which make them look slightly more modern.",
    image: "https://imgd.aeplcdn.com/227x128/bw/models/royal-enfield-bullet-350-ks--efi-bs-vi20200401125918.jpg?q=85",
    price: "1,21,583"
  },
  {
    name: "Bajaj Pulsar 150",
    description:
      "The Bajaj Pulsar 150 is the highest selling 150cc commuter bike in India. Despite it being long in the tooth, the combination of muscular style, good fuel efficiency and value for money makes it an extremely popular motorcycle in the two-wheeler market.",
    image: "https://imgd.aeplcdn.com/227x128/bw/models/bajaj-pulsar-150-neon--abs--bs-vi20200211165041.jpg?q=85",
    price: "85,920"
  },
  {
    name: "Yamaha YZF R15 V3",
    description:
      "The YZF-R15 changed the 150cc segment in the Indian market the way the CBZ did when it was launched. It was an everyday motorcycle that could genuinely be used as a trackday tool. The second version of the R15 traded practicality for more focused performance, but the advent of the KTM RC200 meant that a far better performance was available for the sportbike enthusiasts at a similar price. The R15 Version 3.0 reduces that gap significantly with technology. On the list is now a BS6 engine with a few more ccs, but featuring variable valve timing which takes the maximum power output to nearly 18.3bhp with a peak torque output of 14.1Nm. It also gets all-LED lamps and an all-digital LCD instrument cluster that displays a wealth of information, including when the Variable Valve Actuation switches to the different camshaft profile.",
    image: "https://imgd.aeplcdn.com/227x128/bw/models/yamaha-yzf-r15-v3-dual-channel-abs--bs-vi20200109152444.jpg?q=85",
    price: "1,45,900"
  },
  {
    name: "Royal Enfield Classic 350",
    description:
      "The BS6 Royal Enfield Classic 350 retains the same classic-inspired design and styling of the previous model. However, it is available in new paint schemes that differentiate it from the previous model. There is the Stealth Black, Chrome Black, Signals Airborne Blue, Signals Stormrider Sand, Gunmetal Grey and Classic Black colour options. Furthermore, the Stealth Black and Gunmetal Grey colours are equipped with alloy wheels as standard while the other variants sport spoke wheels.",
    image:
      "https://imgd.aeplcdn.com/227x128/bw/models/royal-enfield-classic-350-single-channel-abs--bs-vi20200303121804.jpg?q=85",
    price: "1,57,097"
  }
];

function Container(props) {
  return <div class="overflow-y-scroll h-100 mb5">{props.children}</div>;
}

function Card(props) {
  return <div class="br2 mw6 center bg-white br3 pa5 pa4-ns mv5 ba b--black-10 w-100">{props.children}</div>;
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
    <button onClick={clickAction} class="pointer grow w-100 bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked">
      {name}
    </button>
  );

  itemCard = item => {
    const { name, image, price, description } = item;
    return (
      <article
        onMouseEnter={() => {
          this.setState({ buyVisible: name });
        }}
        onMouseLeave={() => {
          this.setState({ buyVisible: "" });
        }}
        className="br3 bg-white dark-gray fl w-100 w-20-ns ma2 mv4 content-center"
      >
        <img src={image} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
        <div className="pa2 ph3-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="manrope f5 f4-ns mv0">{name}</h1>
            </div>
            <div className="manrope dtc tr">
              <h2 className="manrope f5 mv0">{"₹ " + price}</h2>
            </div>
          </div>
          <p className="manrope f6 lh-copy measure mt2 mid-gray">{description}</p>
          {this.state.buyVisible == name ? this.button("Buy", () => {}) : null}
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
  <header class="bg-black-20 w-100 pa3 flex flex-row items-center">
    <span>
      <h1 class="center athelas white i ma1">Biker stop</h1>
    </span>
    <nav class="dt w-100 mw8 center">
      <div class="dtc v-mid tr pa3">
        <Link class="f5 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/">
          Home
        </Link>
        <Link class="f5 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/login">
          Login
        </Link>
        <Link class="f5 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/register">
          Register
        </Link>
        <Link class="f5 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/shipping">
          Shipping
        </Link>
        <Link class="f5 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/orderSuccess">
          Order
        </Link>
      </div>
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
class OrderSuccess extends React.Component {
  render() {
    return (
      <PageContainer>
        <Card>
          <h1 className="athelas black center ma3">Order Successful</h1>
          <p className="manrope f3 lh-copy measure mt2 mid-gray">
            Your order 18971873 for the item <span class="black bold f2">Yamaha FZ S V3</span> will arrive on September 16, 2020
          </p>
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
          <Route path="/orderSuccess">
            <OrderSuccess />
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
