import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = props => {
  return (
    <div id="contact">
      <div>
        <a
          target={"_blank"}
          href="https://www.instagram.com/sweaterpenguin/?hl=en"
          title={"Instagram"}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div>
        <a target={"_blank"} href={"mailto:dtatarian@live.com"} title={"Email"}>
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
    </div>
  );
};

export default Contact;
