
import React from "react";
import { motion } from "framer-motion";
import { Target, CheckCircle, Users, Award, Globe } from "lucide-react";

const values = [
  {
    icon: <Target className="h-12 w-12" />,
    title: "Качество Shenling",
    description: "Мы придерживаемся высочайших стандартов качества, заложенных заводом Shenling, в каждом продукте и услуге."
  },
  {
    icon: <CheckCircle className="h-12 w-12" />,
    title: "Надежность",
    description: "Наше оборудование создано для долгой и безотказной работы, обеспечивая стабильность ваших производственных процессов."
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Клиентоориентированность",
    description: "Мы стремимся понять и удовлетворить потребности каждого клиента, предлагая оптимальные решения."
  },
  {
    icon: <Award className="h-12 w-12" />,
    title: "Инновации",
    description: "Мы постоянно следим за технологическими новинками и внедряем их, чтобы предлагать вам самое современное оборудование."
  }
];

const MissionValues = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Наша Миссия и Ценности
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600"
          >
            Мы стремимся быть надежным партнером для российских предприятий, предоставляя доступ к передовым технологиям и высококачественному оборудованию Shenling, способствуя их росту и развитию.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
