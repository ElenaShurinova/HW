
import './App.css';
import ProductsList from './components/productsList/ProductsList';
import { products } from '../data/Data.js';

function App() {
  return (
    <div className='App'>
      <ProductsList/>
    </div>
  );
}

export default App;
