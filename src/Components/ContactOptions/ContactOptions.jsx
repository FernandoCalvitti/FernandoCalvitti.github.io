import ContactItem from "../ContactItem";
import "./ContactOptions.css";

function ContactOptions() {
  return (
    <div className="app__main__contact__options__wrapper">
      <ContactItem text={"Email"} className="option__element__mail" />
      <ContactItem text={"WhatsApp"} link={"https://wa.me/5491130789246"} />
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
