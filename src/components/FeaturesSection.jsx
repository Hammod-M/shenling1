
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";
import { Zap, ShieldCheck, Package, Factory } from "lucide-react";

const features = [
  {
    icon: <Factory className="w-12 h-12 text-primary" />,
    title: "Прямые поставки с завода",
    description: "Гарантия качества и подлинности оборудования Shenling, доступ к новейшим разработкам.",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Высокая Эффективность",
    description: "Современные технологии Shenling обеспечивают максимальную производительность и экономию ресурсов.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: "Надежность и Долговечность",
    description: "Оборудование Shenling создано для интенсивной эксплуатации и длительного срока службы.",
  },
  {
    icon: <Package className="w-12 h-12 text-primary" />,
    title: "Комплексные Решения",
    description: "Мы предлагаем полный цикл услуг: от консультации и подбора до монтажа и сервисного обслуживания.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Почему выбирают Shenling Russia?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Shenling Russia — это ваш надежный партнер и официальный представитель завода Shenling в России. Мы гарантируем высокое качество продукции и профессиональный подход.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
