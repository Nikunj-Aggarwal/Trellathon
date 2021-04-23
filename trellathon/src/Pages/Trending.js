import React from "react";
import ReactPlayer from "react-player/lazy";
import TrellCard from './TrellCard';
import { Container, Row, Col } from "reactstrap";
import ads from "../images/ads.png";
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button,
// } from "reactstrap";
const link =
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/wS7G38y2UGlBMUnCb28Og4ZYGhXKfyIE.mp4";
const arr = [];
for (let i = 0; i < 5; i++) arr.push(
  <Col xs="12" sm="6" md="4" lg="3" style={{ marginBottom: "70px" }}>
    <TrellCard />
  </Col>
);
const Trending = (props) => {
  let video
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {/* <TrellCard /> */}
      <Row style={{ width: "100%" }}>{arr}</Row>
      <div
        style={{
          // position: "fixed",
          // width: "80%",
          // bottom: "5px",
          // marginLeft: "auto",
          // marginRight: "auto"
          width: "100%",
          display: "flex",
          position: "fixed",
          justifyContent: "center",
          alignSelf: "center",
          bottom: "10px"
        }}
      >
        <img src={ads} alt="advertisement" width="auto" height="90px"/>
      </div>
    </div>
  );
};

export default Trending;
