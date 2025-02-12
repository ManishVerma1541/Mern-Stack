import React, { useRef } from "react";
import { Input } from "../inputs/Input";
import { useNavigate } from "react-router-dom";

const getFormData = (form) => {
  const formData = {};
  for (let input of form.querySelectorAll("input")) {
    formData[input.name] = input.value;
  }
  console.log(formData)
  return formData;
  
};

const saveData = (data) => {

  fetch("http://localhost:8000/api/add", {
    method: "POST",
    contentType: "application/json",
    body: JSON.stringify(data),
    
  })
  console.log(data)
    .then((response) => {
      if (!response.ok) throw new Error("Load error:Unable to Load");
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((Error) => {
      return Error;
    });
};

export const AddPerson = () => {
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const data = getFormData(form.current);
    console.log("formData:",data)
    saveData(data);
    form.current.reset();
    navigate("/");
  };

  return (
    <form className="container" ref={form}  method="POST">
      <div className="mb-3">
       <Input label="firstName" id="firstName" name="firstName" placeholder="First Name" />
       <Input label="lastName" id="lastName" name="lastName" placeholder="Last Name" />
       <Input label="email" id="email" name="email" placeholder="Email" />
       <Input label="age" id="age" name="age" placeholder="Age" />
       <Input label="gender" id="gender" name="gender" placeholder="Gender" />
      </div>

      <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  )};
