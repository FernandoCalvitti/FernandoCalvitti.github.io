import ContactItem from "../ContactItem";
import "./ContactOptions.css";
import { SiWhatsapp } from "react-icons/si";

function ContactOptions() {
  return (
    <div className="app__main__contact__options__wrapper">
      <ContactItem
        text={"fernandocalvitti@gmail.com"}
        className="option__element__mail"
      />
      <ContactItem
        text={"+549 113 078 9246"}
        link={"https://wa.me/5491130789246"}
      />
      <ContactItem
        text={"LinkedIn"}
        link={"https://www.linkedin.com/in/fernando-calvitti/"}
      />
      <ContactItem
        text={"Github"}
        link={"https://github.com/FernandoCalvitti"}
      />
    </div>
  );
}

export default ContactOptions;
