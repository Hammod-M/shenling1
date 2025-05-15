
import React from "react";
import { motion } from "framer-motion";
import { Factory } from "lucide-react";

const AboutHero = () => {
  return (
    <div className="bg-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center text-blue-300 mb-4"
          >
            <Factory className="h-10 w-10 mr-3" />
            <span className="text-xl font-semibold tracking-wider uppercase">Shenling Russia</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            О компании Shenling Russia: Качество и Инновации
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl leading-relaxed"
          >
            Мы – Shenling Russia, официальное представительство ведущего китайского завода Shenling. Наша миссия – предоставлять российскому рынку передовое промышленное оборудование, сочетающее в себе инновационные технологии, высочайшее качество и надежность.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
