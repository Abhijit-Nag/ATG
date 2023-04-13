import React from "react";
import "./card.css";
import card1 from "../../assets/card1.png";
import profile1 from "../../assets/profile1.png";
import { MoreHoriz, Share, VisibilityOutlined } from "@material-ui/icons";
const Card = () => {
    return (
        <div className="cardContainer">
            <img src={card1} alt="" className="cardImg" />
            <h2 className="tagCard">✍️ Article</h2>
            <h3 className="line2">
                <span className="line3">
                    
                    What if famous brands had regular fonts? Meet RegulaBrands!
                </span>
                <MoreHoriz />
            </h3>
            <h4 className="line4">
                I’ve worked in UX for the better part of a decade. From now on, I plan
                to rei…
            </h4>
            <div className="profile">
                <div className="leftProfile">
                    <img src={profile1} alt="" className="profilePic" />
                    <h6 className="name">Sarah West</h6>
                </div>
                <div className="rightProfile">
                    <VisibilityOutlined className="symbol"/>
                    <span>1.4k views</span>
                    <Share className="shareProfile" />
                </div>
            </div>
        </div>
    );
};

export default Card;
