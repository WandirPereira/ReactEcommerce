import React from "react";
import { useState } from "react";
import Product_2 from "./Product_2";
import Product_3 from "./Product_3";
import Employee from "./Employee";
import CustomHook from "./CustomHook";

const ExerciciosIniciais = () => {
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
  const [productName, setProductName] = useState("Orange");
  const [show, setShow] = useState(true);
  const [arr, setArr] = useState([]);

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
    setArr((prevState) => [...prevState, contador]);
  };

  const removeFromArr = () => {
    setArr((prevState) => prevState.slice(0, -1));
  };

  const decrementCounter = () => {
    setArr(...arr, contador);
    //setArr((prevState) => [...prevState, contador]);
  };

  const handleProductNameChange = (params) => {
    setProductName(params);
  };

  const toggleSection = () => {
    setShow(!show);
  };

  console.log(show);
  // let b = "World_b";
  // let a = <h1>Hello World</h1>;
  // let c = (
  //   <div>
  //     <h1>Hello_b</h1>
  //     <h1>{b}</h1>
  //   </div>
  // );

  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerHTML);
    setInputText(e.target.value);
  };

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
  };

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  /*1-INICIO*************************************************************/
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [city, setCity] = useState("");
  const [data, setData] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(firstName + " " + lastName + ", " + phoneNumber + ", " + city);
  };
  /**1 -FIM ************************************************************************/

  {
    /* 2 - INICIO *************************************************************************/
  }
  // const [data, setData] = useState({
  //     firstName: "",
  //     lastName: "",
  //     phoneNumber: "",
  //     city: ""
  //   });

  //   const handleFirstNameChange = (e) => {
  //     setData({ ...data, firstName: e.target.value });
  //   }
  //   const handleLastNameChange = (e) => {
  //     setData({ ...data, lastName: e.target.value });
  //   }
  //   const handlePhoneNumberChange = (e) => {
  //     setData({ ...data, phoneNumber: e.target.value });
  //   }
  //   const handleCityChange = (e) => {
  //     setData({ ...data, city: e.target.value });
  //   }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  /**2 -FIM ************************************************************************/

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
        <button onClick={removeFromArr}>Remove</button>
      </div>
      {/* _____________________________________________________________________________*/}

      <button onClick={toggleSection}>{show ? "Hide" : "Show"}</button>
      {show && (
        <>
          <h1>{productName}</h1>
          <button onClick={() => handleProductNameChange("Orange")}>
            Orange
          </button>
          <button onClick={() => handleProductNameChange("Apple")}>
            Apple
          </button>
        </>
      )}

      {/* _____________________________________________________________________________*/}
      {arr.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      {/* _____________________________________________________________________________*/}

      <CustomHook />
      {/* _____________________________________________________________________________*/}
      <p />
      {/* 1- INICIO ****************************************************************************/}
      <div>
        <input type="text" onChange={handleChange} />
        <h1>{inputText}</h1>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <div>
        <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Hello World!
        </h1>
        {isHovered && <div className="tooltip">Tooltip Rendered</div>}
      </div>

      <form onClick={handleSubmit}>
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={handleFirstNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={handleLastNameChange}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Phone Number"
          onChange={handlePhoneNumberChange}
        />
        <br />
        <input
          type="text"
          placeholder="Enter City"
          onChange={handleCityChange}
        />
        <br />
      </form>
      <button type="submit">Submit</button>
      <h3>{data}</h3>
      {/* 1 - FIM *************************************************************************/}
    </>
  );
};

export default ExerciciosIniciais;
