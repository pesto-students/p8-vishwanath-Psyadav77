
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Banner from './Component/Banner';
import ShortComponent from './Component/ShortComponent';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner></Banner>
     <ShortComponent/>
    <Footer></Footer>
    </div>
  );
}

export default App;
