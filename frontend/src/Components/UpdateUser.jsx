import React, { useRef, useState } from "react";
import { Input } from "../inputs/Input";


export const getFormData = (form) => {
 const [formData,setFormdata]= useState({})

 const handleSubmit = (data) => {

    fetch("http://localhost:8000/api/deleteperson", {
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
  
  const handleChange = async (e)=>{
      setFormData({ ...formData, [e.taeget.name]: e.target.value });
  }
  
  
    
  
    return (
      <form className="container" ref={form}  method="POST">
        <div className="mb-3">
         <Input label="firstName" id="firstName" onChange={handleChange} name="firstName" placeholder="First Name" />
         <Input label="lastName" id="lastName" onChange={handleChange} name="lastName" placeholder="Last Name" />
         <Input label="email" id="email" onChange={handleChange} name="email" placeholder="Email" />
         <Input label="age" id="age" onChange={handleChange} name="age" placeholder="Age" />
         <Input label="gender" id="gender" onChange={handleChange} name="gender" placeholder="Gender" />
        </div>
  
        <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    );
  
};

