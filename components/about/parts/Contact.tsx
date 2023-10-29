import CopyEmail from "@/components/CopyEmail";
import Footer from "@/components/layout/Footer";
import React from "react";

const Contact = ({ props }: any) => {
  const contact = props;
  return (
    <div className="wrapper">
      <div className="container">
        <div className="inner-contact">
          <div
            className="wrap-content"
            data-scroll
            data-scroll-speed="-4"
            data-scroll-position="bottom"
          >
            <div className="inner-title" data-scroll>
              <h2 className="title-contact" data-scroll data-scroll-speed="3">
                {contact.titreContact}
              </h2>
            </div>
            <div className="wrap-email">
              <CopyEmail>{contact.emailContact}</CopyEmail>
            </div>
          </div>
          <div className="inner-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
