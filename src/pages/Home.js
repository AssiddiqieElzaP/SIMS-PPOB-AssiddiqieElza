import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

import Navbar from "../components/navbar";
import Header from "../components/header";

import Banner1 from "../assets/Website Assets/Banner 1.png";
import Banner2 from "../assets/Website Assets/Banner 2.png";
import Banner3 from "../assets/Website Assets/Banner 3.png";
import Banner4 from "../assets/Website Assets/Banner 4.png";
import Banner5 from "../assets/Website Assets/Banner 5.png";
import PBB from "../assets/Website Assets/PBB.png";
import Listrik from "../assets/Website Assets/Listrik.png";
import Pulsa from "../assets/Website Assets/Pulsa.png";
import PDAM from "../assets/Website Assets/PDAM.png";
import PGN from "../assets/Website Assets/PGN.png";
import Televisi from "../assets/Website Assets/Televisi.png";
import Musik from "../assets/Website Assets/Musik.png";
import Game from "../assets/Website Assets/Game.png";
import Makanan from "../assets/Website Assets/Voucher Makanan.png";
import Kurban from "../assets/Website Assets/Kurban.png";
import Zakat from "../assets/Website Assets/Zakat.png";
import PaketData from "../assets/Website Assets/Paket Data.png";

function Home() {
  return (
    <>
      <Navbar />
      <Header />

      <div className="container-fluid mb-5">
        <MDBRow className="row-cols-12 row-cols-md-12">
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={PBB} alt="..." position="top" />
              <MDBCardText className="text-center">PBB</MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Listrik} alt="..." position="top" />
              <MDBCardText className="text-center">Listrik</MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Pulsa} alt="..." position="top" />
              <MDBCardText className="text-center">Pulsa</MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={PDAM} alt="..." position="top" />
              <MDBCardText className="text-center">PDAM</MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={PGN} alt="..." position="top" />
              <MDBCardText className="text-center">PGN</MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Televisi} alt="..." position="top" />
              <MDBCardText className="text-center">TV Langganan</MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Musik} alt="..." position="top" />
              <MDBCardText className="text-center">Musik</MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Game} alt="..." position="top" />
              <MDBCardText className="text-center">Voucher Game</MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Makanan} alt="..." position="top" />
              <MDBCardText className="text-center">Voucher Makanan</MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Kurban} alt="..." position="top" />
              <MDBCardText className="text-center">Kurban</MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Zakat} alt="..." position="top" />
              <MDBCardText className="text-center">Zakat</MDBCardText>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={PaketData} alt="..." position="top" />
              <MDBCardText className="text-center">Paket Data</MDBCardText>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>

      <div className="container-fluid mb-5">
        <h5>Temukan Promo Menarik</h5>
        <MDBRow className="row-cols-1 row-cols-md-5 g-3">
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Banner1} alt="..." position="top" />
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Banner2} alt="..." position="top" />
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Banner3} alt="..." position="top" />
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Banner4} alt="..." position="top" />
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage src={Banner5} alt="..." position="top" />
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}

export default Home;
