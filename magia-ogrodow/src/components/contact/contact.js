import React, { memo } from "react";
import Parallax from '../parallax';
import imagePlantNurseryParallax from '../../images/contact.jpg';
import styled, { keyframes } from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const ContactBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
  padding: 40px;
  background-color: #e6e6e6;
`;

const ContactSubBlockInfo = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const StyledIconButton = styled(IconButton)`
  width: 100px;
  height: 100px;
`;

const downarrow = keyframes`
  0% { -webkit-transform: translateY(0); opacity: 0.4 }
  100% { -webkit-transform: translateY(0.4em); opacity: 0.9 }
`;

const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)`
-webkit-animation: ${downarrow} 0.6s infinite alternate ease-in-out;
`;

const BlockWithMap = styled.div`
  padding-bottom: 80px;
  padding-top: 80px;
`;

const Contact = () => {

  const scrollDown = (e) => {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  };

  return (
    <div>
      <Parallax image={imagePlantNurseryParallax} />
      <ContactBlockInfo>
        <ContactSubBlockInfo>
          <h2>NAPISZ DO NAS</h2>
          <p>Jeśli masz pytania to napisz do nas, a napewno Ci odpowiemy! Dane kontaktowe znajdują się u dołu strony.</p>
        </ContactSubBlockInfo>
      </ContactBlockInfo>
      <ContactBlockInfo>
        <ContactSubBlockInfo>
          <h2>DOJAZD</h2>
          <p>Szkółka zlokalizowana jest na granicy Rumi oraz Dębogórze Wybudowanie. Istnieje możliwość dojazdu autobusem z dworca PKP Rumia nr 86. Szczegółowe informacje jak numer telefonu, adres można znaleźć na dole strony.
          </p>
          <StyledIconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={scrollDown}
          >
            <StyledKeyboardArrowDownIcon
              style={{ width: "100px", height: "100px" }}
            />
          </StyledIconButton>
        </ContactSubBlockInfo>
      </ContactBlockInfo>
      <BlockWithMap>
      <MapContainer center={[54.572573, 18.429189]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[54.572573, 18.429189]}>
    <Popup>
    <b>Magia Ogrodów. Beata Kulling-Nitkowska</b><br/>
    Adres:<br/>
    Dębogórska 8<br/>
    84-230 Dębogórze Wybudowanie
    </Popup>
  </Marker>
</MapContainer>
      </BlockWithMap>
    </div>
  );
};

export default memo(Contact);
