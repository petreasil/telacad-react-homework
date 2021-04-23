import './App.css';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <div className="container bg-light">
      <Header />
      <Filter />
      <div className="container">
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;
