import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    address: "",
    city: "",
    State: "",
    ZIP: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });
  function changeHandler(e) {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function submitHandler(e){
     e.preventDefault();
     console.log('printing the form data');
     console.log(formData);
     setFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "India",
      address: "",
      city: "",
      State: "",
      ZIP: "",
      comments: false,
      candidates: false,
      offers: false,
      pushNotifications: "",
    });
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          id="firstName"
          placeholder="Love"
          onChange={changeHandler}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          id="lastName"
          placeholder="Babbar"
          onChange={changeHandler}
        />

        <label htmlFor="email">Email Adress</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          id="email"
          placeholder="love@gmail.com"
          onChange={changeHandler}
        />

        <label htmlFor="country">Country</label>
        <select
          id="county"
          name="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>

        <label htmlFor="address">Street Adress</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          id="address"
          placeholder="1234 main streeet "
          onChange={changeHandler}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          id="city"
          placeholder="Pune"
          onChange={changeHandler}
        />

        <label htmlFor="State">State/Province</label>
        <input
          type="text"
          name="State"
          value={formData.State}
          id="State"
          placeholder="Pune"
          onChange={changeHandler}
        />

        <label htmlFor="ZIP">ZIP/Postal Code</label>
        <input
          type="text"
          name="ZIP"
          value={formData.ZIP}
          id="ZIP"
          placeholder="203212"
          onChange={changeHandler}
        />

        <fieldset>
          <legend>By email</legend>
          <div>
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get Notified with someone posts a ccomments on posting</p>
            </div>
          </div>

          <div>
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get Notified with someone get a Offers.</p>
            </div>
          </div>

          <div>
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get Notified when a candidates applies for a job</p>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via sms to your mobile phone.</p>

          <input
            type="radio"
            name="pushNotifications"
            id="pusheverything"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pusheverything">Everything</label>
         <br></br>
          <input
            type="radio"
            name="pushNotifications"
            id="pushemail"
            value="Same as email"
            onChange={changeHandler}
          />
          <label htmlFor="pushemail">Same as email</label>
          <br></br>
          <input
            type="radio"
            name="pushNotifications"
            id="pushnothing"
            value="No push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor="pushnothing">No push Notifications</label>
        </fieldset>

        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
