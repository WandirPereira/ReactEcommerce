import logo from "./logo.svg";
import "./App.css";
import SingleProduct, {
  ProductDetails,
  ProductName,
} from "./components/Product";
import Product_2 from "./components/Product_2";
import Product_3 from "./components/Product_3";

function App() {
  const products = [
    {
      name: "Apple",
      img: "/apple.png",
      code: "0001",
      price: 12,
    },
    {
      name: "Banana",
      img: "/banana2.png",
      code: "0002",
      price: 5,
    },
    {
      name: "Orange",
      img: "/orange.png",
      code: "0003",
      price: 8,
    },
  ];

  let b = "World_b";
  let a = <h1>Hello World</h1>;
  let c = (
    <div>
      <h1>Hello_b</h1>
      <h1>{b}</h1>
    </div>
  );

  return (
    <>
      {/* _____________________________________________________________________________*/}
      <h1>Products_3</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product_3 product={product} />
        ))}
      </div>
      {/* _____________________________________________________________________________*/}
      <h1>Products_2</h1>
      <div className="product-list">
        <Product_2 products={products} />
      </div>
      {/* _____________________________________________________________________________*/}
      <h1>Products</h1>
      <div className="product-list">
        <SingleProduct name="PropNomeProduto" code="0004" />
      </div>
      {/* _____________________________________________________________________________*/}
      <ProductDetails />
      {/* _____________________________________________________________________________*/}
      <h1>{ProductName}</h1>
      {/* <ProductName/> Não funciona. Não é uma função*/}
      <div>{a}</div> {/*Não é uma função */}
      <div>{c}</div>
      {/* _____________________________________________________________________________*/}
    </>
  );
}

export default App;
