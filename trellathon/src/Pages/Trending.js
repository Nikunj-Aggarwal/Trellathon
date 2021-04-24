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
const link = [
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/R2agRwYR38w8YrX1b3HWvEXCLLV8p56i.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/wS7G38y2UGlBMUnCb28Og4ZYGhXKfyIE.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/0WeboDms5XT2E0eVNti6gYPkMRSbqvHq.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/067BLirmmzflk2ch5qsf6Gpoh1gF2uP3.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/JYRmZqpXZ5xA4x54SWzofYInwW4kFko4.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/0WeboDms5XT2E0eVNti6gYPkMRSbqvHq.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/EVvzuwaKjupgZCvqmHAabAdLzutimCsm.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/m2ricVPxTKWzNV15QHS8im2tyolxCnD7.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/dWiNlzDTivTUVI7l5xIepf1cT4ffmY4v.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/YbzlENurOcmmYzVgBtllsz8JhvHCwLKn.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/JYRmZqpXZ5xA4x54SWzofYInwW4kFko4.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/067BLirmmzflk2ch5qsf6Gpoh1gF2uP3.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/RsI4JReaHs1Kd5Q780URgTHsM8tPMz2X.mp4",
  "https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/wS7G38y2UGlBMUnCb28Og4ZYGhXKfyIE.mp4",
];
const arr = [];
for (let i = 0; i < 10; i++) arr.push(
  <Col xs="12" sm="6" md="4" lg="3" style={{ marginBottom: "70px" }}>
    <TrellCard url={link[i]} />
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
