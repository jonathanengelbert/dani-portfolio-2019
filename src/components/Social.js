import React, {useState} from "react";
import ContactForm from "./Contact/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSoundcloud
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Social = props => {
    const [formOpen, setFormOpen] = useState(false);

    const handleCMessageClick = (e) => {
        e.preventDefault();
        setFormOpen(true);
    }

  return (
    <div id="contact">
      <div>
        <a
          target={"_blank"}
          href="https://www.instagram.com/dtatmusic/"
          rel="noopener noreferrer"
          title={"Instagram"}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div>
          <ContactForm
              setFormOpen={setFormOpen}
              formOpen={formOpen}
          />
        <a
          onClick={e => handleCMessageClick(e)}
          target={"_blank"}
          href={"#"}
          rel="noopener noreferrer"
          title={"Message"}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div>
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/danielle-tatarian-4742a1133/"
          rel="noopener noreferrer"
          title={"LinkedIn"}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div>
        <a
          target={"_blank"}
          href="https://soundcloud.com/danielle-tatarian-876093742"
          rel="noopener noreferrer"
          title={"SoundCloud"}
        >
          <FontAwesomeIcon icon={faSoundcloud} />
        </a>
      </div>
    </div>
  );
};

export default Social;
