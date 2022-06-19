import React, { Component } from 'react';
import "./About.css";
import profilepic from "../assets/profilepic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src = {profilepic}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title"><h4>Embyr Williams</h4></div>
          <div className="brief_description">
          A rising sophomore at Columbia University, Embyr is majoring in computer science with a concentration in visual arts. She is the secretary of Columbia Wushu and has her black belt in Taekwondo.
          </div>
        </div>
      </div>
    </div>
    )
  }
}
