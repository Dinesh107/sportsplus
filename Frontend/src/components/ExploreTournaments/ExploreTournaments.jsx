import React from "react";
import "./ExploreTournaments.css";
import { tournaments_list } from "../../assets/assets";


const ExploreTournaments = () => {
  return (
    <div className="explore-tour" id="explore-tour">
      <h1>Explore The Powerful Tournaments</h1>
      <p className="explore-tour-text">Choose the tournaments which suits you </p>
      <div className="explore-tour-list">
        {tournaments_list.map((item, index) => {
          return (
            <div key={index} className="explore-tour-list-item">
              <p>{item.matchName}</p>
              <p>{item.date}</p>
              <p>{item.time}</p>
              <p>{item.venue}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreTournaments;
