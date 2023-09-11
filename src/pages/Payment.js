import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import Listrik from "../assets/Website Assets/Listrik.png";

function Payment() {
  return (
    <>
      <Navbar />
      <Header />
      <MDBCard className="container-fluid">
        <MDBCardBody>
          <MDBCardText>
            <p className="fw-bold">PemBayaran</p>
          </MDBCardText>
          <MDBCardText className="d-flex justify-content-between mb-0">
            <MDBRow>
              <MDBCol lg="4" md="12" className="mb-4">
                <img src={Listrik} className="img-fluid rounded" alt="" />
              </MDBCol>
              <MDBCol lg="8" md="12" className="mb-4 d-flex align-items-center">
                Listrik Prabayar
              </MDBCol>
            </MDBRow>
          </MDBCardText>
          <MDBCardText className="container-fluid border rounded">
            <i className="fas fa-wallet fa-lg me-3 fa-fw"></i>
            <select className="select select-payment">
              <option value="1">
                <span class="input-group-text" id="basic-addon1">
                  <i className="fas fa-wallet fa-lg me-3 fa-fw"></i>
                </span>
                10.000
              </option>
            </select>
          </MDBCardText>
          <div className="d-flex justify-content-center mb-3 mb-lg-4">
            <button type="button" className="btn">
              Bayar
            </button>
          </div>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default Payment;
