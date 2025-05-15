
import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <div className="bg-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Свяжитесь с нами
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl leading-relaxed"
          >
            Мы всегда готовы ответить на ваши вопросы и помочь с выбором оборудования, которое наилучшим образом соответствует вашим потребностям.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
