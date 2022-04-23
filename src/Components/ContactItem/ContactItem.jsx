import Paragraph from "../Paragraph/Paragraph";
import { SiWhatsapp, SiGithub, SiLinkedin } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

import "./ContactItem.css";

function ContactItem({ text, link = null }) {
  return (
    <div className="app__main__contact__item">
      {link ? (
        <>
          <a
            className="app__main__contact__link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <Paragraph text={text} margin={false} />
            {text === "LinkedIn" && (
              <SiLinkedin className="app__main__contact__item__icon icon--linkedin" />
            )}
            {text === "Github" && (
              <SiGithub className="app__main__contact__item__icon icon--github" />
            )}
            {text === "+549 113 078 9246" && (
              <SiWhatsapp className="app__main__contact__item__icon icon--whatsapp" />
            )}
          </a>
        </>
      ) : (
        <div className="app__main__contact__link">
          <Paragraph text={text} margin={false} />
          {text === "fernandocalvitti@gmail.com" && (
            <MdOutlineEmail className="app__main__contact__item__icon icon--email" />
          )}
        </div>
      )}
    </div>
  );
}

export default ContactItem;
