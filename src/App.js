import logo from "./logo.svg";
import "./App.css";
import imageInSrc from "./imageInSrc.jpg";
import "./style.css";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 class="title red">Your name here</h1>

        <br />

        <img src={imageInSrc} alt="image_src" />

        <br />

        <img src="/imageInPublic.jpg" alt="image_public" />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
