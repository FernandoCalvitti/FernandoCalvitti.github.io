import React from "react";
import ContactOptions from "../../Components/ContactOptions/ContactOptions";
import TextContainer from "../../Components/TextContainer";

const Contact = () => {
  return (
    <section className="app__main__section" id="contact">
      <TextContainer
        title={`Contact Channels`}
        subtitle={"Reach Me "}
        smallTitle={"If You Think I Could Help On Your Project"}
      />
      <ContactOptions />
    </section>
  );
};

export default Contact;
