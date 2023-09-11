import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";
import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";

function Transaction() {
  const hardcodedData = [
    {
      id: 1,
      totalAmount: "Rp. 10.000",
      transaction_type: "TOP UP",
      created_on: "2023-08-17T 12:10:10.000Z",
    },
    {
      id: 2,
      totalAmount: "Rp. 20.000",
      transaction_type: "PAYMENT",
      created_on: "2022-05-11T 11:42:10.000Z",
    },
    {
      id: 3,
      totalAmount: "Rp. 30.000",
      transaction_type: "PAYMENT",
      created_on: "2021-10-20T 10:00:10.000Z",
    },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <MDBCard className="container-fluid">
        <MDBCardBody>
          <p className="mt-2 fw-bold">Semua Transaksi</p>
          <div>
            {hardcodedData.map((item) => (
              <div key={item.id} className="mb-4">
                <MDBCardText className="d-flex justify-content-between mb-0">
                  {item.totalAmount}
                  <span class="text-muted">{item.transaction_type}</span>
                </MDBCardText>
                <MDBCardText className="text-muted">
                  {item.created_on}
                </MDBCardText>
              </div>
            ))}
          </div>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default Transaction;
