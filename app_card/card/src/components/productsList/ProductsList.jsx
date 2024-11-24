
import ProductCard from './ProductCard';


export default function ProductsList({products}) {
  return (
    <div>
      {products.map (el => {
        return(
            <ProductCard key={el.products}dataData={el}/>

            

        )
      })}
     
    </div>
    
    );
}
 