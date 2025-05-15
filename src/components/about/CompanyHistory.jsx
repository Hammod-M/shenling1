
import React from "react";
import { motion } from "framer-motion";

const CompanyHistory = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Наша история: От Завода к Российскому Рынку</h2>
            <p className="text-gray-600 mb-4">
              Завод Shenling имеет многолетнюю историю успеха и инноваций в производстве промышленного оборудования. Основанный на принципах качества и технологического совершенства, Shenling завоевал признание на мировом рынке.
            </p>
            <p className="text-gray-600 mb-4">
              Shenling Russia была создана для того, чтобы сделать передовые технологии и продукцию завода доступными для российских предприятий. Мы стремимся адаптировать лучшие мировые практики к потребностям местного рынка, предлагая надежные и эффективные решения.
            </p>
            <p className="text-gray-600">
              Сегодня Shenling Russia – это команда профессионалов, готовых предоставить полный спектр услуг: от подбора оборудования до его установки и сервисного обслуживания. Мы гордимся тем, что представляем интересы такого уважаемого производителя.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img  alt="История компании Shenling Russia" class="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1692976001563-41fa7497d81d" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
