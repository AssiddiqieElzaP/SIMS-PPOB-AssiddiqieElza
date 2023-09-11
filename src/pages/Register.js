import React, { useState } from "react";
import "../assets/style/styles.css"

import IllustrasiLogin from "../assets/Website Assets/Illustrasi Login.png";
import Logo from "../assets/Website Assets/Logo.png";
import { Link, Navigate } from "react-router-dom";

function Register() {
  
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate first name
    if (!firstName) {
      setFirstNameError("First name is required");
      isValid = false;
    } else {
      setFirstNameError('');
    }

    // Validate last name
    if (!lastName) {
      setLastNameError("Last name is required");
      isValid = false;
    } else {
      setLastNameError('');
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Validate confirm password
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform registration or dispatch an action here
      try {
        const response = await 'https://take-home-test-api.nutech-integrasi.app/registration'(email, firstName, lastName, password); // Replace with your API call
        if (response.status === 201) {
          Navigate('/')
        } else {
          setRegistrationError("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 order-2 order-lg-1 py-3">
              <p className="text-center h5 mb-2 mt-4">
                <img src={Logo} alt="..." /> SIMS PPOB - ASSIDDIQIE ELZA PUTRA
              </p>
              <p className="text-center fw-bold h3 mb-5 mt-2">
                Lengkapi data untuk <br/> membuat akun
              </p>

              <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="email"
                      id="email"
                      className={`form-control ${emailError ? 'is-invalid' : ''}`}
                      placeholder="email"
                    />
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="first_name"
                      className={`form-control ${firstNameError ? 'is-invalid' : ''}`}
                      placeholder="nama depan"
                    />
                    {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="last_name"
                      className={`form-control ${lastNameError ? 'is-invalid' : ''}`}
                      placeholder="nama belakang"
                    />
                    {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="password"
                      id="password"
                      className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                      placeholder="password"
                    />
                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="password"
                      id="confirm-password"
                      className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                      placeholder="konfirmasi password"
                    />
                    {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
                  </div>
                </div>
                
                <div className=" mb-3 mb-lg-4">
                  <button type="submit" className="btn">
                    Registrasi
                  </button>
                </div>

                <div className="d-flex justify-content-center mb-5">
                  <label className="text">
                    Sudah punya akun? Login <Link to="/">di sini</Link>
                  </label>
                </div>

              </form>
            </div>
            <div className="col-xl-6 d-flex align-items-center order-1 order-lg-2">
              <img
                src={IllustrasiLogin}
                alt="..."
                className="w-100 vh-100"
                style={{ objectFit: "cover", ObjectPosition: "left" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
