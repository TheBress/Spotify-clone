import React from "react";
import { useStateValue } from "../DataLayer";
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ main }, dispatch] = useStateValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={main?.images[0].url} />
        <div className="body_infoText">
          <strong>Playlist</strong>
          <h2>{main?.name}</h2>
          <p>{main?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon
            className="body_shuffle"
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        <div>

        {main?.tracks.items.map((item)=>(
            <SongRow track={item.track}/>
        ))}

        </div>
      </div>
    </div>
  );
}

export default Body;
