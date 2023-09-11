import React, { useEffect } from "react";
import ProfilFoto from "../assets/Website Assets/Profile Photo.png";
import BgSaldo from "../assets/Website Assets/Background Saldo.png";
import { fetchData } from "../actions/transactionAction";
import { connect } from "react-redux";

function Header({ data, loading, error, fetchData }) {
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="header">
          <div className="row">
            <div className="col-sm-5">
              <div className="header-left">
                <img
                  src={ProfilFoto}
                  className="rounded-circle"
                  height="75"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
                <p className="card-title mt-2">Selamat Datang,</p>
                <p
                  className="card-text"
                  style={{ fontSize: "2rem", fontWeight: "bold" }}
                >
                  Kristanto Wibowo
                </p>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="card text-white">
                <img
                  src={BgSaldo}
                  className="card-img"
                  alt="Background Saldo"
                />
                <div className="card-img-overlay m-2">
                  <p className="card-title">Saldo anda</p>
                  <h1 className="card-text">
                    Rp. {data}
                  </h1>
                  <p className="card-text">Lihat saldo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  data: state.balance,
  loading: state.loading,
  message: state.message,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
