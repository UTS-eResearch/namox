import React from 'react';
import {
  Link
} from "react-router-dom";
import {Icons} from "../Assets/Icons";

const ActionBox = ({icon, name, box}) => (
  <div className="col-lg-4 mb-4 d-flex align-items-stretch">
    <div className="card w-100">
      <div className="card-header"><Icons icon={icon}/></div>
      <div className="card-body">
        <div className="list-group">
          {box.map((el, i) =>
            <Link key={i} className="list-group-item list-group-item-action" to={el.ref}>{el.text}</Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default ActionBox;
