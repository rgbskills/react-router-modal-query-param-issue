import React from 'react';
import './Modal.css';
import {
  useHistory,
  useLocation,
} from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Modal = () => {
  let history = useHistory();
  let query = useQuery();
  let id = query.get("id");

  console.log(id);

  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <React.Fragment>
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      ></div>

      <div className="modal">
        Hello, Modal!
      </div>
    </React.Fragment>
  );
}

export default Modal;