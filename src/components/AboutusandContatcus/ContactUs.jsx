import react, { useState } from "react";

import "./contactus.css"
import ContactAddresscards from "./ContactAddresscards";
import OnlineWorldImage from './Online world-pana.png';
import SocialIcons from "./Iconscontactus";





const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    branch: ""
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    emailError: "",
    branchError: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { name, email, branch } = formData;
    let valid = true;

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const branchPattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(name)) {
      setFormErrors({ ...formErrors, nameError: "Please enter a valid name." });
      valid = false;
    } else {
      setFormErrors({ ...formErrors, nameError: "" });
    }
    if (!emailPattern.test(email)) {
      setFormErrors({
        ...formErrors,
        emailError: "Please enter a valid email address."
      });
      valid = false;
    } else {
      setFormErrors({ ...formErrors, emailError: "" });
    }
    if (!branchPattern.test(branch)) {
      setFormErrors({
        ...formErrors,
        branchError: "Please enter a valid branch name."
      });
      valid = false;
    } else {
      setFormErrors({ ...formErrors, branchError: "" });
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted: ", formData);
    } else {
      console.log("Form validation failed.");
    }
  };


    return (
      <>
      <div className="background-container">
       <ContactAddresscards />
       <div className="image-container">
       <img src={OnlineWorldImage} alt="Get in touch" className="background-image" />
     
     
       
        <form onSubmit={handleSubmit} className="centered-form ">
         
            
              <h2 className="get-in-touch">Get In Touch</h2>
              <br />
              <br />
                <input className="name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <span>{formErrors.nameError}</span>
                <br />
                <input className="name"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <span>{formErrors.emailError}</span>
                <br />
                <textarea className="message"
                  rows="2"
                  cols="40"
                  placeholder="Enter message here"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <br />
                <br />
                <input className="name"
                  type="text"
                  placeholder="Branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  required
                />
                <span>{formErrors.branchError}</span>
                <br />
                <button
                  type="submit"
                  className="submit"
                 
                
                >
                  Submit
                </button>
                </form>
              </div>
           
         
        </div>
        <SocialIcons />
      
      </>
    );
  };


  
  export default ContactUs;