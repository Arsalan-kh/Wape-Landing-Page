import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Card from './Components/Cards_section/Card';
import Section1 from './Components/Section1/Section1';
// import Footer from './Components/Footer/Footer';
import Section2 from './Components/Section2/Section2';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Section1/>
     <Section2/>
     <Card/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
