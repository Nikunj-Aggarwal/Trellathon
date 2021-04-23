import React from "react"
import ReactPlayer from "react-player/lazy";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const TrellCard = () => {
    return (
      <Card
        style={{
          width: "fit-content",
          height: "fit-content",
          padding: "10px",
          border: "0px",
          // borderRadius: "20px",
        }}
      >
        <div style={{ width: "250px", overflow: "hidden", borderRadius: "10px" }}>
          <ReactPlayer
            url="https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/wS7G38y2UGlBMUnCb28Og4ZYGhXKfyIE.mp4"
            playing={true}
            loop={true}
            width="100%"
            height="auto"
          />
        </div>
        {/* https://cdn.trell.co/videos/transformed/h_360,w_360/eo_3/videos/orig/wS7G38y2UGlBMUnCb28Og4ZYGhXKfyIE.mp4 */}
        <CardBody style={{ width: "fit-content", padding: "0px" }}>
          <CardText>Some quick example text.</CardText>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Yashi
          </CardSubtitle>
        </CardBody>
      </Card>
    );
}

export default TrellCard;