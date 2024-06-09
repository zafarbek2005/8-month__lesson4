import React from "react";
import "./Create.scss";
import Fetch from "./Fetch";
const CreateForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let user = Object.fromEntries(formData.entries());

    event.target.reset();
    let { fname, lname, age } = user;
    let newUser = {
      name: {
        fname,
        lname,
      },
      age,
    };
    console.log(newUser);
  };
  return (
    <div className="inp container">
      <form onSubmit={handleSubmit} action="">
        <Fetch />
        <input type="text" name="fname" placeholder="fname" />
        <input type="text" name="lname" placeholder="lname" />
        <input type="number" name="age" placeholder="age" />
        <div>
          <input type="radio" name="gender" id="" value={"male"} />
          <input type="radio" name="gender" id="" value={"female"} />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateForm;
