const buttonStyle = "unselectable f6 no-underline shadow-hover dib v-mid white ma3 ba b--white-80 ph3 pv2 mb3";
const MQTT_URL = "wss://charlescool.xyz:8120";
const textStyle = "fw1 f5 white-80 mt3 mb4";

function Container(props) {
  return <div class="overflow-y-scroll">{props.children}</div>;
}

function ItemsContainer(props) {
  return (
    <div class="mw9 ph3-ns">
      <div class="cf ph2-ns flex justify-between-ns">{props.children}</div>
    </div>
  );
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyVisible: false
    };
    this.peerConnection = null;
    this.client = null;
  }

  button = () => <button class="bw0 br2 bg-dwyl-teal pa2 white fw1 tc ttu tracked">do what you love</button>;

  itemCard = () => (
    <article
      onMouseEnter={() => {
        this.setState({ buyVisible: true });
      }}
      onMouseLeave={() => {
        this.setState({ buyVisible: false });
      }}
      className="bg-white dark-gray fl w-100 w-20-ns mh2 mv4 content-center"
    >
      <img src="http://placekitten.com/g/600/300" className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="f5 f4-ns mv0">Cat</h1>
          </div>
          <div className="dtc tr">
            <h2 className="f5 mv0">$1,000</h2>
          </div>
        </div>
        <p className="f6 lh-copy measure mt2 mid-gray">
          If it fits, i sits burrow under covers. Destroy couch leave hair everywhere, and touch water with paw then recoil in
          horror.
        </p>
        {/* {this.state.buyVisible ? this.button() : null} */}
      </div>
    </article>
  );

  header = () => (
    <header class="bg-black-20 w-100 ph3 pv3 pv4-ns ph4-m ph5-l ">
      <nav class="f6 fw6 ttu tracked">
        <a class="link dim white dib mr3" href="#" title="Home">
          Home
        </a>
        <a class="link dim white dib mr3" href="#" title="About">
          About
        </a>
        <a class="link dim white dib mr3" href="#" title="Store">
          Store
        </a>
        <a class="link dim white dib" href="#" title="Contact">
          Contact
        </a>
      </nav>
    </header>
  );

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
      <div id="content" className="sans-serif fixed h-100 w-100 center flex flex-column">
        {this.header()}
        <Container>
          {this.chunker(
            [
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard(),
              this.itemCard()
            ],
            3
          ).map(chunk => (
            <ItemsContainer>{chunk}</ItemsContainer>
          ))}
        </Container>
      </div>
    );
  }
}

let domContainer = document.querySelector("#react_div");
ReactDOM.render(<App />, domContainer);
