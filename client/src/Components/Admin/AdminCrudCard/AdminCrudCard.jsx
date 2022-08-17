import React from "react";
import "./AdminCrudCard.css";
import { Link } from "react-router-dom";

function AdminCrudCard(Card) {
  return (
    <Link to="/AdminDashboard/LectMngmt" className="grid-item">
      <div className="card">
        <img className="card-img" src={Card.Image} alt={Card.Header} />
        <div className="card-content">
          <h1 className="card-header">{Card.Header}</h1>
          <p className="card-text">{Card.Text}</p>
        </div>
      </div>
    </Link>
  );
}

export default AdminCrudCard;
