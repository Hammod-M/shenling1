
import React from "react";
import { Helmet } from "react-helmet";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFormMap from "@/components/contact/ContactFormMap";
import ContactOffices from "@/components/contact/ContactOffices";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Контакты | Shenling - Промышленное оборудование</title>
        <meta name="description" content="Свяжитесь с нами для получения дополнительной информации о нашей продукции и услугах. Мы всегда готовы ответить на ваши вопросы." />
      </Helmet>
      
      <ContactHero />
      <ContactInfo />
      <ContactFormMap />
      <ContactOffices />
    </>
  );
};

export default ContactPage;
