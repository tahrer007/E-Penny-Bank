import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import "./shareLink.scss";

function ShareLink({ boxKey, hideWindow }) {
  const qoute = "Lets join me and start saving together";
  const url = boxKey;
//TODO generate link 

  return (
    <div className="window columnFlex">
      <div className="innerWindow">
        <div className="shareIcons">
          <WhatsappShareButton url={url} qoute={qoute}>
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>

          <FacebookShareButton url={url} qoute={qoute}>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>

          <TwitterShareButton url={url} qoute={qoute}>
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        </div>

        <div className="singleBtnContainer">
          <div className="mainBtns columnFlex hoverable" onClick={hideWindow}>
            Back
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareLink;
