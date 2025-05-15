
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Телефон",
    lines: [
      { label: "Отдел продаж:", value: "+7 (495) 123-45-67" },
      { label: "Техническая поддержка:", value: "+7 (495) 765-43-21" }
    ]
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email",
    lines: [
      { label: "Общие вопросы:", value: "info@shenling.ru" },
      { label: "Отдел продаж:", value: "sales@shenling.ru" }
    ]
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Часы работы",
    lines: [
      { label: "Понедельник - Пятница:", value: "9:00 - 18:00" },
      { label: "Суббота - Воскресенье:", value: "Выходной" }
    ]
  }
];

const ContactInfo = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  {detail.icon}
                </div>
                <h3 className="text-xl font-semibold">{detail.title}</h3>
              </div>
              {detail.lines.map((line, lineIndex) => (
                <div key={lineIndex}>
                  <p className="text-gray-600 mb-1">{line.label}</p>
                  <p className="text-lg font-medium mb-3">{line.value}</p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
