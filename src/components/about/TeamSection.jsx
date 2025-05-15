
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Александр Иванов",
    role: "Генеральный директор",
    description: "Более 20 лет опыта в индустрии промышленного оборудования. Отвечает за стратегическое развитие компании.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/077d7337-0aca-4867-8bb1-ed7813e0f7ad/b0bd8f0cf90a7fa6d74c26aff7a0a00f.jpg",
    alt: "Директор компании"
  },
  {
    name: "Елена Петрова",
    role: "Технический директор",
    description: "Руководит отделом разработки и внедрения новых технологий. Имеет степень PhD в области инженерии.",
    image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/077d7337-0aca-4867-8bb1-ed7813e0f7ad/57d30c60d5749378c9211c029c3c48a7.jpg",
    alt: "Технический директор"
  },
  {
    name: "Сергей Смирнов",
    role: "Руководитель отдела продаж",
    description: "Отвечает за развитие продаж и работу с ключевыми клиентами. Имеет более 15 лет опыта в B2B продажах.",
    image: "https://images.unsplash.com/photo-1626054165894-be2779f52260",
    alt: "Руководитель продаж"
  },
  {
    name: "Анна Козлова",
    role: "Руководитель сервисной службы",
    description: "Координирует работу сервисных инженеров и обеспечивает высокое качество обслуживания клиентов.",
    image: "https://images.unsplash.com/photo-1690721606848-ac5bdcde45ea",
    alt: "Руководитель сервиса"
  }
];

const TeamSection = () => {
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
            Наша команда
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600"
          >
            Наш успех — это заслуга талантливых и преданных своему делу профессионалов
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img src={member.image} alt={member.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
