
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const officeLocations = [
  {
    city: "Москва (Головной офис)",
    address: "109052, г.Москва, ул.Нижегородская, д. 50, пом. XIV, ком.25",
    phone: "+7 (495) 123-45-67",
    email: "moscow@shenling.ru",
    details: [
      "ООО «АИЕ ГРУПП»",
      "ОГРН 1207700286298",
      "ИНН/КПП 7722490685/772201001",
      "Р/счет 40702810301810000936",
      'АО "АЛЬФА-БАНК"',
      "Кор/счет 30101810200000000593",
      "БИК 30101810200000000593"
    ]
  },
  {
    city: "Санкт-Петербург",
    address: "ул. Индустриальная, 45, г. Санкт-Петербург, 198000",
    phone: "+7 (812) 987-65-43",
    email: "spb@shenling.ru"
  },
  {
    city: "Екатеринбург",
    address: "ул. Заводская, 78, г. Екатеринбург, 620000",
    phone: "+7 (343) 456-78-90",
    email: "ekb@shenling.ru"
  }
];

const ContactOffices = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Наши представительства
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600"
          >
            Мы работаем по всей России и в странах СНГ
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officeLocations.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-600">{office.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary flex-shrink-0" size={18} />
                  <span className="text-gray-600">{office.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary flex-shrink-0" size={18} />
                  <span className="text-gray-600">{office.email}</span>
                </div>
                {office.details && (
                  <div className="pt-2 border-t border-gray-200 mt-3">
                    {office.details.map((detail, i) => (
                      <p key={i} className="text-xs text-gray-500">{detail}</p>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOffices;
