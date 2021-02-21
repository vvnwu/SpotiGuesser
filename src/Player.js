import React from "react";
import "./player.css";
import happi from "happi-dev-sdk";

export default function Player(props) {
  const backgroundStyles = {
    backgroundImage: `url(${props.item.album.images[0].url})`,
  };

  const progressBarStyles = {
    width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
  };

  function getCountry(query_artist){
    happi.music.search(query_artist, 1, artist).then(response => {
      console.log(response);
    }).catch(err => {
        console.log("Error",err);
    });
  }

  return (
    <div className="player">
      <div className="main-wrapper">
        <div className="now-playing__img">
          <img src={props.item.album.images[0].url} />
        </div>
        <div className="now-playing__side">
          <div className="now-playing__name">{props.item.name}</div>
          <div className="now-playing__artist">
            {props.item.artists[0].name}
          </div>
          <div className="now-playing__status">
            {props.is_playing ? "Playing" : "Paused"}
          </div>
          <div className="progress">
            <div
              className="progress__bar"
              style={progressBarStyles}
            />
          </div>
        </div>
        <div className="background" style={backgroundStyles} />{" "}
      </div>
    </div>
  );
}