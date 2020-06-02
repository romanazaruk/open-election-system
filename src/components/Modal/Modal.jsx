import React from "react";
import "../../components/Modal/modal.css";
import Plus from "../../images/plus.svg";
import CancelIcon from "@material-ui/icons/Cancel";

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="add-election-container"
          onClick={() => this.setState({ isOpen: true })}
        >
          <button className="add-election-btn">
            <img src={Plus} alt="plus" />
            <p className="add-election-p">Create new Election</p>
          </button>
        </div>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <button
                className="modal-exit-btn"
                onClick={() => this.setState({ isOpen: false })}
              >
                <CancelIcon />
              </button>
              <h2 className="input-title">Add Election:</h2>
              <div className="container">
                <form className="election-input">
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />

                  <button type="submit" className="add-electionInput-btn">Add Election</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
