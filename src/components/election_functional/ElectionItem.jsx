import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export default function ElectionItem(props) {
  return (
    <ul>
      <li className="election-item-container">
        <div>
          <span className="election-item">
            <span className="election-item-name">{props.name}</span>
            <span className="election-item-startDate">
              Start Date: {props.startDate}
            </span>
            <span className="election-item-endDate">
              End Date: {props.endDate}
            </span>
            <DeleteIcon className="delete-icon" />
          </span>
        </div>
      </li>
    </ul>
  );
}
