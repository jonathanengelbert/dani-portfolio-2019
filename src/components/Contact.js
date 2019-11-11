import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSoundcloud
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = props => {
  return (
    <div id="contact">
      <div>
        <a
          target={"_blank"}
          href="https://www.instagram.com/dtatmusic/"
          title={"Instagram"}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div>
        <a target={"_blank"} href={"mailto:dtatarianmusic@gmail.com"} title={"Email"}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div>
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/danielle-tatarian-4742a1133/"
          title={"LinkedIn"}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div>
        <a
          target={"_blank"}
          href="https://soundcloud.com/danielle-tatarian-876093742"
          title={"SoundCloud"}
        >
          <FontAwesomeIcon icon={faSoundcloud} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
