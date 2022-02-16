import React from "react";
import * as classes from "./contact.module.css";
import { TiMail, TiPhoneOutline } from "react-icons/ti";
import Block from "../../components/Block";
import GigaText from "../../components/GigaText";
import Seo from "../../components/Seo";

const Contact = () => {
  return (
    <>
      <Seo title="Contact | Sandhya Honnappa" />
      <GigaText text="Contact" />
      <Block tag="contact">
        <h1 className={classes.contactHeader}>
          Keeping it simple and quick...
        </h1>
        <div className={classes.contactMail}>
          <a data-cursor="link" href="mailto:me@sandhyahonnappa.dev">
            <TiMail className={classes.icon} size="2em" />
            me@sandhyahonnappa.dev
          </a>
        </div>
        <div className={classes.contactPhone}>
          <a data-cursor="link" href="tel:+919663075857">
            <TiPhoneOutline className={classes.icon} size="2em" />
            +91 96630 75857
          </a>
        </div>
      </Block>
    </>
  );
};

export default Contact;
