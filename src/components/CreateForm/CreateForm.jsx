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
      <Fetch />
    </div>
  );
};

export default CreateForm;
