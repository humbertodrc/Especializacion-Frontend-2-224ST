import { useEffect, useState } from "react";
import './App.css';
import { getData } from "./service/api";
import { Products } from "./interface";

function App() {

  const [products, setProducts] = useState<Products>([]);

  useEffect(() => {
    getData().then((data) => {
      setProducts(data);
    })
  }, [])

  return (
    <>
      <header className="header">
        <h1>Test Async</h1>
      </header>
      <main>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <img src={product.image} alt={product.title} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
