
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Activity, BrainCog } from "lucide-react";

const AiFocusSection = () => {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Повышение эффективности",
      description: "Наши ИИ-алгоритмы оптимизируют рабочие процессы оборудования, снижая энергопотребление и увеличивая производительность.",
    },
    {
      icon: <Activity className="w-10 h-10 text-primary" />,
      title: "Предиктивное обслуживание",
      description: "Искусственный интеллект анализирует данные с датчиков в реальном времени, предсказывая возможные сбои и планируя обслуживание.",
    },
    {
      icon: <BrainCog className="w-10 h-10 text-primary" />,
      title: "Адаптивные системы",
      description: "Оборудование AIE способно самообучаться и адаптироваться к изменяющимся условиям эксплуатации, обеспечивая стабильную работу.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Cpu className="inline-block w-5 h-5 mr-2" /> Наша ИИ-Экспертиза (Устарело, будет удалено)
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Интеллект, который меняет правила игры (Устарело)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            В AIE мы не просто используем ИИ – мы встраиваем его в ДНК каждого нашего продукта. Это позволяет нам предлагать оборудование, которое работает умнее, эффективнее и надежнее, чем когда-либо прежде. (Этот текст будет заменен на информацию о Shenling)
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-4 bg-primary/10 rounded-full w-16 h-16 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-sm text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 text-md">
            Наша приверженность ИИ – это не просто тренд, это фундаментальный принцип, позволяющий нам создавать оборудование будущего уже сегодня. Мы верим, что интеллектуальные технологии являются ключом к устойчивому промышленному развитию. (Этот текст будет заменен)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AiFocusSection;
