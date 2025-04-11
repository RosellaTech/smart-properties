import "./App.css";
import Companies from "./component/companies/Companies";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import GetStarted from "./component/getstarted/GetStarted";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import Residencies from './component/residencies/Residencies';
import Value from "./component/value/Value";


const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Contact />
      <GetStarted/>
      <Footer/> 
      <Residencies/>
      <Value/>
      <Footer/>
      
    </div>
  );
};

export default App;
