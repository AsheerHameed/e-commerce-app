import './App.css';
import Footer from './component/pages/Footer';
import Header from './component/pages/Header'
import Mainpage from './component/pages/Mainpage';
import Navbar from './component/pages/Navbar';
import Product from './component/pages/Product'
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Mainpage/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
