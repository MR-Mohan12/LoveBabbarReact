import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstHandler(event) {
  //   // console.log("printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeLastHandler(event) {
  //   // console.log("printing last Name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });
  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler (e){
    e.preventDefault();
    //print
    console.log("finnaly form data submit ");
    console.log(formData);

  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br></br>
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          value={formData.firstName}
          onChange={changeHandler}
        />{" "}
        <br></br>
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="last name"
          name="lastName"
          value={formData.lastName}
          onChange={changeHandler}
        />{" "}
        <br></br>
        <br></br>
        <br></br>
        <input
          type="email"
          placeholder="enter your email here"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />{" "}
        <br></br>
        <br></br>
        <br></br>
        <textarea
          placeholder="enter your comments here"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <br></br>
        <br></br>
        <br></br>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am i visible ?</label>
        <br></br>
        <br></br>
        <br></br>
        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Online-Mode"
          id="Online-Mode"
          checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online Mode</label>
        <br></br>
        <br></br>
        <br></br>
        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Offline-Mode"
          id="Offline-Mode"
          checked={formData.mode === "Offline-Mode"}
        />
        <label htmlFor="Offline-Mode">Offline Mode</label>
        <br></br>
        <br></br>
        <br></br>
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="swift">swift</option>
          <option value="Thar">Thar</option>
          <option value="defender">Defender</option>
        </select>
        <label htmlFor="favCar">Tell me your favCar</label>
        <br></br>
        <br></br>
        <br></br>
        <button >Submit</button>
      </form>
    </div>
  );
}

export default App;
