import React from 'react';
import './SideBar.css';  // Correct path to your CSS
import home from '../../Asserts/home.png';  
import game_icon from '../../Asserts/game_icon.png';
import automobiles from '../../Asserts/automobiles.png';
import sports from '../../Asserts/sports.png';
import entertainment from '../../Asserts/entertainment.png';
import tech from "../../Asserts/tech.png";
import music from "../../Asserts/music.png";
import blogs from "../../Asserts/blogs.png";
import news from "../../Asserts/news.png";
import jack from "../../Asserts/jack.png";
import megan from "../../Asserts/megan.png";
import simon from "../../Asserts/simon.png";
import cameron from "../../Asserts/cameron.png";

const SideBar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}> 
      <div className="shortcut-links">
        <div className={`side-links ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
          <img src={home} alt="Home" /><p>Home</p>
        </div>
        <div className={`side-links ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="Gaming" /><p>Gaming</p>
        </div>
        <div className={`side-links ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
          <img src={automobiles} alt="Automobiles" /><p>Automobiles</p>
        </div>
        <div className={`side-links ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
          <img src={sports} alt="Sports" /><p>Sports</p>
        </div>
        <div className={`side-links ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
          <img src={entertainment} alt="Entertainment" /><p>Entertainment</p>
        </div>
        <div className={`side-links ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
          <img src={tech} alt="Technology" /><p>Technology</p>
        </div>
        <div className={`side-links ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
          <img src={music} alt="Music" /><p>Music</p>
        </div>
        <div className={`side-links ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
          <img src={blogs} alt="Blogs" /><p>Blogs</p>
        </div>
        <div className={`side-links ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
          <img src={news} alt="News" /><p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link" onClick={() => setCategory(20)}>
          <img src={jack} alt="Jack" /><p>PewDiePie</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={simon} alt="Simon" /><p>Mr Beast</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={simon} alt="Simon" /><p>PewDiePie</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={megan} alt="Megan" /><p>5 Min Craft</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <img src={cameron} alt="Cameron" /><p>PewDiePie</p>
        </div>
        {/* Add more subscriptions as needed */}
      </div>
    </div>
  );
}

export default SideBar;
