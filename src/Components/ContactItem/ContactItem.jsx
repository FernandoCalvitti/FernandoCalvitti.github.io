import Paragraph from "../Paragraph/Paragraph";

import "./ContactItem.css";

function ContactItem({ text, link = null }) {
  return (
    <div className="app__main__contact__item">
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <Paragraph text={text} />
        </a>
      ) : (
        <Paragraph text={text} />
      )}
    </div>
  );
}

export default ContactItem;
