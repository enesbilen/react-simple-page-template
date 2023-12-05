import "./app.scss"
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return <div>
    <section id="Homepage"><Navbar /></section>
    <section id="About">
      <div className="content">About Section</div>
    </section>
    <section id="Services">
      <div className="content">Services Section</div>
    </section>
    <section id="Portfolio">
      <div className="content">Portfolio Section</div>
    </section>
    <section id="Contact">
      <div className="content">Contact Section</div>
    </section>
  </div>;
};

export default App;
