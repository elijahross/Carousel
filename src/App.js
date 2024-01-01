import "./styles.css";
import Carousel from "./Carousel";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <h1>Spinorama Carousel 🎠</h1>
        <br />
        <br />
        <p>
          Turn your web content into a lively carnival with Spinorama Carousel!
          🌟 This whimsical carousel component, crafted with CSS and some Java,
          playfully duplicates the children of a div container and sends them on
          an infinite spinning adventure. Inject fun and excitement into your
          web projects effortlessly!
        </p>
      </div>
      <Carousel />
    </div>
  );
}
