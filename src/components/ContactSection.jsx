
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-gray-600 mb-8">
              Наши специалисты готовы ответить на все ваши вопросы и помочь с выбором оборудования, которое наилучшим образом соответствует вашим потребностям.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Адрес</h4>
                  <p className="text-gray-600">109052, г.Москва, ул.Нижегородская, д. 50, пом. XIV, ком.25</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Телефон</h4>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@shenling.ru</p>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <div className="w-6 h-6"></div>
                <div className="text-sm text-gray-500">
                  <p>ООО «АИЕ ГРУПП»</p>
                  <p>ОГРН 1207700286298</p>
                  <p>ИНН/КПП 7722490685/772201001</p>
                  <p>Р/счет 40702810301810000936</p>
                  <p>АО "АЛЬФА-БАНК"</p>
                  <p>Кор/счет 30101810200000000593</p>
                  <p>БИК 30101810200000000593</p>
                </div>
              </div>
            </div>
            
            <Button size="lg">Отправить запрос</Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6">Форма обратной связи</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Введите ваш email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Введите ваш телефон"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Введите ваше сообщение"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">Отправить</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
