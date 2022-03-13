import ReactDOM from "react-dom";

import { AiOutlineClose } from "react-icons/ai";
import { ReactComponent as PlayIcon } from "../../assets/SVG/play2.svg";
import { ReactComponent as CloseIcon } from "../../assets/SVG/cross.svg";
import ClearIcon from "@mui/icons-material/Clear";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = ({
  episode,
  image,
  setSelectedEpisodePlaying,
  onConfirm,
}) => {
  return (
    <div className="episode-modal">
      <button className="modal-close" onClick={onConfirm}>
        <ClearIcon color="primary" />
      </button>

      <div className="modal-image-container">
        <img src={image.url} alt={image.title} />
      </div>
      <div className="controls">
        <button
          className="play-button"
          onClick={() => setSelectedEpisodePlaying(episode)}
        >
          <PlayIcon />
          <span>Play Episode</span>
        </button>
      </div>
      <div className="modal-info">
        <div className="modal-title">
          <h3>{episode.title}</h3>
        </div>
        <p className="modal-pubDate">{episode.pubDate}</p>
        <p className="modal-description">{episode.description}</p>
      </div>
    </div>
  );
};

function EpisodeModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          episode={props.episode}
          image={props.image}
          setSelectedEpisodePlaying={props.setSelectedEpisodePlaying}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default EpisodeModal;
