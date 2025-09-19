import { useState } from "react";
import "./App.css";
import ExerciciosIniciais from "./components/ExerciciosIniciais";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    isAccepted: false,
    isActive: false,
    color: "",
  });

  const handleInputChange = (e) => {
    console.log("Entrou");
    // setData({ ...data, [e.target.name]: e.target.value });
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckedChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/*   */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={handleInputChange}
          name="firstName"
        />
        <br />
        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={handleInputChange}
          name="lastName"
        />
        <br />
        <input
          type="number"
          placeholder="Enter Phone Number"
          onChange={handleInputChange}
          name="phoneNumber"
        />
        <br />
        <input
          type="text"
          placeholder="Enter City"
          onChange={handleInputChange}
          name="city"
        />
        <br />
        <input
          type="checkbox"
          onChange={handleCheckedChange}
          name="isAccepted"
        />
        <label>yellow</label>
        <input
          type="radio"
          onChange={handleInputChange}
          name="color"
          value="yellow"
        />
        <label>green</label>
        <input
          type="radio"
          onChange={handleInputChange}
          name="color"
          value="green"
        />
        <br />
      </form>
      <button type="submit">Submit</button>
      <h3>{JSON.stringify(data)}</h3>
    </div>
  );
}

export default App;
