import React, { useState } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";

function TopUp() {
  const [inputValue, setInputValue] = useState("");

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="header">
        <div className="header-left">
          <p className="card-title mt-2">Silahkan masukan</p>
          <p
            className="card-text"
            style={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            Nominal Top Up
          </p>
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center mt-4">
          <i className="fas fa-wallet fa-lg me-2"></i>
          <div className="input-topup col-md-8">
            <input
              type="text"
              id="first_name"
              className="form-control mr-5"
              placeholder="nominal"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <button className="border col-md-1 btn-topup-mon">Rp. 10.000</button>
          <button className="border col-md-1 btn-topup-mon">Rp. 20.000</button>
          <button className="border col-md-1 btn-topup-mon">Rp. 50.000</button>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-end mt-2">
          <div className="input-topup col-md-8 me-2">
            <button
              type="button"
              disabled={inputValue === ""}
              className="btn btn-topup"
            >
              Top Up
            </button>
          </div>
          <button className="border flex-content-end col-md-1 btn-topup-mon">
            Rp. 100.000
          </button>
          <button className="border flex-content-end col-md-1 btn-topup-mon">
            Rp. 250.000
          </button>
          <button className="border flex-content-end col-md-1 btn-topup-mon">
            Rp. 500.000
          </button>
        </div>
      </div>
    </>
  );
}

export default TopUp;
