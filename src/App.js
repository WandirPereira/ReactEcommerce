import logo from "./logo.svg";
import "./App.css";
import SingleProduct, {
  ProductDetails,
  ProductName,
} from "./components/Product";
import Product_2 from "./components/Product_2";
import Product_3 from "./components/Product_3";
import Employee from "./components/Employee";
import { useState } from "react";
function App() {
  const products = [
    {
      name: "Apple",
      img: "/apple.png",
      code: "0001",
      price: 12,
      isActive: true,
    },
    {
      name: "Banana",
      img: "/banana2.png",
      code: "0002",
      price: 5,
      isActive: true,
    },
    {
      name: "Avocado",
      img: "/Avocado.png",
      code: "0003",
      price: 5,
      isActive: true,
    },
    {
      name: "GrapeFruit",
      img: "/grapefruit.png",
      code: "0004",
      price: 5,
      isActive: false,
    },
    {
      name: "Orange",
      img: "/orange.png",
      code: "0005",
      price: 8,
      isActive: true,
    },
  ];

  const employees = [
    {
      id: "001",
      name: "James Smith",
      salary: 95000,
      isActive: true,
    },
    {
      id: "002",
      name: "Robert Johnson",
      salary: 110000,
      isActive: true,
    },
    {
      id: "003",
      name: "Emily Daves",
      salary: 90000,
      isActive: true,
    },
    {
      id: "004",
      name: "Joe Doe",
      salary: 87000,
      isActive: true,
    },
    {
      id: "005",
      name: "Maira Silva",
      salary: 45000,
      isActive: true,
    },
    {
      id: "006",
      name: "Paulo Arueira",
      salary: 15000,
      isActive: false,
    },
  ];

  const handerClick = () => {
    console.log("button acionado 1");
  };

  const handerClick2 = () => {
    console.log("button acionado 2");
  };

  const handerClick3 = (params) => {
    console.log(params);
  };

  const calculateFactorial = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    console.log(factorial);
  };

  const [contador, setContador] = useState(0);

  function callbackFn(prevState) {
    console.log(prevState);
    return prevState + 1;
  }

  //const incrementCounter = () => {
  // setContador(contador + 1);
  // setContador(contador + 1);
  // setContador(contador + 1);
  //console.log(iw);
  //};

  // const incrementCounter = () => {
  //   setContador(callbackFn);
  //   setContador(callbackFn);
  //   setContador(callbackFn);
  // };

  const incrementCounter = () => {
    setContador((prevState) => prevState + 1);
    setContador((prevState) => prevState + 1);
    setContador((prevState) => prevState + 1);
  };

  // let b = "World_b";
  // let a = <h1>Hello World</h1>;
  // let c = (
  //   <div>
  //     <h1>Hello_b</h1>
  //     <h1>{b}</h1>
  //   </div>
  // );

  return (
    <>
      {/* _____________________________________________________________________________*/}
      <h1>Products_3</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product_3 product={product} key={product.code} />
        ))}
      </div>
      <button onClick={handerClick}>Click Me 1</button>
      <button onClick={() => handerClick2()}>Click Me 2</button>
      <button onClick={() => console.log("Button acionado 3")}>
        Click Me 3
      </button>
      <button onClick={() => handerClick3("Hello World!")}>Click Me 4</button>
      {/* _____________________________________________________________________________*/}
      <div className="product-list">
        {employees.map((employee) => (
          <Employee employee={employee} key={employee.id} />
        ))}
      </div>
      {/* _____________________________________________________________________________*/}
      <h1>Products_2</h1>
      <div className="product-list">
        <Product_2 products={products} />
      </div>
      {/* _____________________________________________________________________________*/}
      {/* <h1>Products</h1>
      <div className="product-list">
        <SingleProduct name="PropNomeProduto" code="0004" />
      </div> */}
      {/* _____________________________________________________________________________*/}
      {/* <ProductDetails /> */}
      {/* _____________________________________________________________________________*/}
      {/* <h1>{ProductName}</h1> */}
      {/* <ProductName/> Não funciona. Não é uma função*/}
      {/* <div>{a}</div> Não é uma função */}
      {/* <div>{c}</div> */}
      {/* _____________________________________________________________________________*/}
      <div>
        <button onClick={() => calculateFactorial(4)}>Calcular Fatorial</button>
      </div>
      {/* _____________________________________________________________________________*/}
      <div className="App">
        <h1>{contador}</h1>
        <button onClick={incrementCounter}>Increment</button>
      </div>
      {/* _____________________________________________________________________________*/}
    </>
  );
}

export default App;
