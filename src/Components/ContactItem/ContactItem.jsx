import Paragraph from "../Paragraph/Paragraph";
import { SiWhatsapp, SiGithub, SiLinkedin } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import ContactMe from "../ContactMe/ContactMe";

import "./ContactItem.css";
import { useState } from "react";

function ContactItem({ text, link = null }) {
  const [isOpenForm, setIsOpenForm] = useState(false);

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
            {text === "WhatsApp" && (
              <SiWhatsapp className="app__main__contact__item__icon icon--whatsapp" />
            )}
          </a>
        </>
      ) : (
        <>
          <div
            className="app__main__contact__link"
            onClick={() => setIsOpenForm(true)}
          >
            <Paragraph text={text} margin={false} />
            {text === "Email" && (
              <MdOutlineEmail className="app__main__contact__item__icon icon--email" />
            )}
          </div>
          {isOpenForm && <ContactMe setIsOpenForm={setIsOpenForm} />}
        </>
      )}
    </div>
  );
}

export default ContactItem;
