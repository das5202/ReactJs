import React, { useState } from 'react';

const RegistrationForm = () => {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [mobileNumber, setMobileNumber] = useState('');

  const [nameError, setNameError] = useState('');

  const [emailError, setEmailError] = useState('');

  const [passwordError, setPasswordError] = useState('');

  const [mobileNumberError, setMobileNumberError] = useState('');

  const validateForm = () => {

    setNameError('');

    setEmailError('');

    setPasswordError('');

    setMobileNumberError('');

    let isValid = true;

    if (name.trim() === '') {

      setNameError('Name is required');

      isValid = false;

    }else if (!/^[A-Za-z ]+$/.test(name)) {

      setNameError('Invalid name format');

      isValid = false;
    }

    if (email.trim() === '') {

      setEmailError('Email is required');

      isValid = false;

    } else if (!/\S+@\S+\.\S+/.test(email)) {

      setEmailError('Invalid email format');

      isValid = false;

    }

    if (password.trim() === '') {

      setPasswordError('Password is required');

      isValid = false;

    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {

      setPasswordError('Password should contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long');

      isValid = false;

    }

    if (mobileNumber.trim() === '') {

      setMobileNumberError('Mobile number is required');

      isValid = false;

    } else if (!/^\d{10}$/.test(mobileNumber)) {

      setMobileNumberError('Invalid mobile number');

      isValid = false;

    }

    return isValid;

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {

      alert('Form submitted successfully!');

      setName('');

      setEmail('');

      setPassword('');

      setMobileNumber('');

    }

  };

  return (

    <div>
      <center>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <div>

         <label align="left">Name:</label>
           <br/>
          <input

            type="text"

            value={name}

            onChange={(e) => setName(e.target.value)}

            onBlur={validateForm}

            autoFocus

          />
         
          {nameError && <p className="error">{nameError}</p>}

        </div>
       
        <div>

          <label align="left">Email:</label>
         <br/>
          <input

            type="email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

            onBlur={validateForm}

          />

          {emailError && <p className="error">{emailError}</p>}

        </div>
       
        <div className="center">

          <label align="left">Password:</label>
          <br/>
          <input

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

            onBlur={validateForm}

          />

          {passwordError && <p className="error">{passwordError}</p>}

        </div>
        
        <div >

          <label align="left">Mobile Number:</label>
         <br/>
          <input

            type="text"

            value={mobileNumber}

            onChange={(e) => setMobileNumber(e.target.value)}

            onBlur={validateForm}

          />

          {mobileNumberError && <p className="error">{mobileNumberError}</p>}

        </div>
       
        <button type="submit">Submit</button>

      </form>
      </center>

    </div>

  );

};


export default RegistrationForm;