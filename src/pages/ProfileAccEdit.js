import React from "react";
import Navbar from "../components/navbar";
import ProfilFoto from "../assets/Website Assets/Profile Photo.png";

function ProfileAccEdit() {
  return (
    <>
      <Navbar />
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 order-2 order-lg-1 py-3">
              <div className="text-center">
                <img
                  src={ProfilFoto}
                  className="rounded-circle shadow-4"
                  height="75"
                  alt="Avatar"
                />
                <p className="fw-bold h3 mb-3 mt-2">Kristanto Wibowo</p>
              </div>

              <form className="mx-1 mx-md-4">
                <div className="d-flex flex-row align-items-center">
                  <div className="form-outline flex-fill mb-0">
                    <p class="mb-2">Email</p>
                    <div class="input-group mb-4">
                      <span class="input-group-text" id="basic-addon1">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      </span>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Wallet@nutech.com"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center">
                  <div className="form-outline flex-fill mb-0">
                    <p class="mb-2">Nama Depan</p>
                    <div class="input-group mb-4">
                      <span class="input-group-text" id="basic-addon1">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Kristanto"
                        aria-label="first_name"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-3">
                  <div className="form-outline flex-fill mb-0">
                    <p class="mb-2">Nama belakang</p>
                    <div class="input-group mb-4">
                      <span class="input-group-text" id="basic-addon1">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Wibowo"
                        aria-label="last_name"
                        aria-describedby="basic-addon3"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3 mb-lg-4">
                  <button type="submit" className="btn">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileAccEdit;
