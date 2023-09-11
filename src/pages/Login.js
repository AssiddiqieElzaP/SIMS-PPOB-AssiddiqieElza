import React, { useState } from "react";
import "../assets/style/styles.css";

import IllustrasiLogin from "../assets/Website Assets/Illustrasi Login.png";
import Logo from "../assets/Website Assets/Logo.png";
import { Link, Navigate } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../Store/UserSlice";
// import {loginAction} from "../actions/login-actions";
// import { connect } from "react-redux";

const Login = () => {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      Navigate('/home')
    }
  };

  // const {loading, error} = useSelector((state) => state.user);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const handleLoginEvent=(e)=>{
  //   e.preventDefault();
  //   let userCredentials={
  //     email, password
  //   }
  //   dispatch(loginUser(userCredentials)).then((result) => {
  //     if(result.payload){
  //       setEmail('')
  //       setPassword('')
  //       navigate('/home')
  //     }
  //   })
  // }

  // const [credentials, setCredentials] = useState({
  //   email: '',
  //   password: '',
  // });

  // const handleInputChange = (e) => {
  //   const { email, value } = e.target;
  //   setCredentials({
  //     ...credentials,
  //     [email]: value,
  //   });
  // };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 order-2 order-lg-1 py-5">
              <p className="text-center h5 mb-2 mt-4">
                <img src={Logo} alt="..." /> SIMS PPOB - ASSIDDIQIE ELZA PUTRA
              </p>
              <p className="text-center fw-bold h3 mb-5 mt-4">
                Masuk atau buat akun <br /> untuk mulai
              </p>

              <form
                onSubmit={handleSubmit}
                className="mx-1 mx-md-4"
              >
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="email"
                      id="email"
                      className={`form-control ${emailError ? 'is-invalid' : ''}`}
                      placeholder="email"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
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
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                  </div>
                </div>

                <div className="mb-lg-4">
                  <button type="submit" className="btn mb-2">Masuk</button>
                  {/* {error&&(
                    <div className="alert alert-danger" role="alert">{error}</div>
                  )} */}
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <label className="text">
                    Belum punya akun? Registrasi{" "}
                    <Link to="/registerasi">di sini</Link>
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
};

// const mapStateToProps = (state) => ({
//   error: state.auth.error,
// });

export default Login;
// export default connect(mapStateToProps, { loginAction })(Login);
