
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Archive, BatteryCharging, Wind, Construction, Cpu, Waves, Thermometer, Zap, Shield, Ship, Atom, Leaf, PackageCheck, FileText, SlidersHorizontal } from 'lucide-react';

const productsData = {
  "all-series": {
    title: "Все серии",
    icon: <Archive className="h-10 w-10 text-primary" />,
    mainDescription: "Универсальные решения Shenling, подходящие для широкого спектра отраслей и задач. Надежность и эффективность в каждом продукте.",
    categories: [
      {
        name: "Универсальные решения",
        description: "Оборудование, разработанное для различных применений, сочетающее в себе гибкость и производительность.",
        items: ["Чиллеры общего назначения", "Стандартные кондиционеры", "Вентиляционные установки"]
      }
    ]
  },
  "energy-storage": {
    title: "Серия накопителей энергии",
    icon: <BatteryCharging className="h-10 w-10 text-primary" />,
    mainDescription: "Специализированные решения для систем накопления энергии, обеспечивающие оптимальный температурный режим и безопасность.",
    categories: [
      {
        name: "Контроль температуры жидкостного охлаждения",
        description: "Блоки для точного поддержания температуры в системах с жидкостным охлаждением накопителей энергии.",
        items: ["Блок контроля температуры жидкостного охлаждения"]
      }
    ]
  },
  "dx-series": {
    title: "Серия прямого расширения (DX)",
    icon: <Wind className="h-10 w-10 text-primary" />,
    mainDescription: "Эффективные и надежные системы кондиционирования и осушения воздуха на основе технологии прямого расширения.",
    categories: [
      { name: "Кондиционеры", description: "Различные типы кондиционеров для коммерческого и промышленного использования.", items: ["Кондиционер на крыше (Руфтоп)", "Потолочный кондиционер"] },
      { name: "Авиационное оборудование", description: "Специализированные кондиционеры для обслуживания авиационной техники.", items: ["Наземный блок кондиционирования для авиационной техники"] },
      { name: "Осушители", description: "Оборудование для контроля влажности в различных помещениях.", items: ["Осушитель воздуха (промышленный)", "Осушитель воздуха (бытовой)"] },
      { name: "Специализированные кондиционеры", description: "Решения для чистых помещений и медицинских учреждений.", items: ["Чистый кондиционер (для операционных, лабораторий, фармацевтики)"] }
    ]
  },
  "host-series": {
    title: "Серия хостов",
    icon: <Construction className="h-10 w-10 text-primary" />,
    mainDescription: "Мощные и производительные чиллеры и тепловые насосы для централизованных систем кондиционирования и отопления.",
    categories: [
      { name: "Чиллеры с водяным охлаждением", description: "Высокопроизводительные модели для крупных объектов.", items: ["Чиллер с водяным охлаждением"] },
      { name: "Чиллеры с воздушным охлаждением", description: "Энергоэффективные решения для различных применений.", items: ["Чиллер с воздушным охлаждением"] },
      { name: "Тепловые насосы", description: "Экологичные системы отопления и кондиционирования.", items: ["Тепловой насос (вода/грунт)", "Водяные тепловые насосы"] }
    ]
  },
  "terminal-equipment": {
    title: "Конечное оборудование",
    icon: <SlidersHorizontal className="h-10 w-10 text-primary" />,
    mainDescription: "Разнообразное терминальное оборудование для систем вентиляции и кондиционирования, обеспечивающее комфортный микроклимат.",
    categories: [
      { name: "Осушители", description: "Роторные осушители для крупных промышленных объектов.", items: ["Роторный осушитель воздуха"] },
      { name: "Комбинированные блоки", description: "Гибридные системы для комплексного управления микроклиматом.", items: ["Комбинированный блок кондиционирования воздуха"] },
      { name: "Фанкойлы", description: "Различные модели фанкойлов для локального кондиционирования.", items: ["Фанкойл корпусного типа (настенные и потолочные)", "Блок фанкойлов (для интеграции)"] }
    ]
  },
  "ict-series": {
    title: "Серия ИКТ",
    icon: <Cpu className="h-10 w-10 text-primary" />,
    mainDescription: "Прецизионные системы кондиционирования для центров обработки данных, серверных и других объектов ИКТ-инфраструктуры.",
    categories: [
      { name: "Прецизионные кондиционеры", description: "Решения для точного контроля температуры и влажности в ЦОД.", items: ["Ромбическая серия (для ЦОД)"] },
      { name: "Коммерческие решения", description: "Кондиционеры для офисов и коммерческих зданий.", items: ["Небесная серия"] },
      { name: "Специализированные решения", description: "Системы с фазовым переходом для серверных.", items: ["Серверные решения (с фазовым переходом)"] }
    ]
  },
  "npp-series": {
    title: "Серия АЭС",
    icon: <Atom className="h-10 w-10 text-primary" />,
    mainDescription: "Высоконадежное оборудование, разработанное специально для применения на атомных электростанциях с учетом строгих требований безопасности.",
    categories: [
      { name: "Чиллеры", description: "Сейсмостойкие чиллеры для систем охлаждения АЭС.", items: ["Сейсмостойкие чиллеры"] },
      { name: "Системы охлаждения", description: "Оборудование для различных контуров охлаждения на АЭС.", items: ["Системы охлаждения воды (для контура АЭС)"] },
      { name: "Фанкойлы", description: "Корпусные модели фанкойлов с повышенной надежностью для АЭС.", items: ["Фанкойлы для АЭС"] }
    ]
  },
  "eco-series": {
    title: "Экологическая серия",
    icon: <Leaf className="h-10 w-10 text-primary" />,
    mainDescription: "Решения для защиты окружающей среды, включая оборудование для обработки отходов и системы экологического мониторинга.",
    categories: [
      { name: "Обработка отходов", description: "Устройства для переработки промышленных и бытовых отходов.", items: ["Устройство для обработки осадка"] },
      { name: "Рекуперация газов", description: "Системы для очистки и повторного использования растворителей (NMP).", items: ["Рекуперация газов (NMP)"] },
      { name: "Экологический мониторинг", description: "Системы для контроля качества воздуха и воды.", items: ["Системы контроля качества воздуха и воды"] }
    ]
  },
  "marine-series": {
    title: "Морская серия",
    icon: <Ship className="h-10 w-10 text-primary" />,
    mainDescription: "Специализированное оборудование для судов и морских платформ, устойчивое к агрессивным условиям эксплуатации.",
    categories: [
      { name: "Судовые кондиционеры", description: "Кондиционеры для пассажирских и грузовых судов.", items: ["Кондиционеры судового типа"] },
      { name: "Морские чиллеры", description: "Чиллеры с водяным и воздушным охлаждением для судов.", items: ["Морские чиллеры"] },
      { name: "Морские осушители", description: "Осушители с защитой от коррозии в соленой среде.", items: ["Морские осушители"] },
      { name: "Модульные охладители", description: "Компактные решения для охлаждения на кораблях.", items: ["Модульные охладители"] }
    ]
  }
};


const ProductsByApplicationTypePage = () => {
  const { seriesSlug } = useParams();
  const activeSeriesKey = seriesSlug || Object.keys(productsData)[0];
  const currentSeries = productsData[activeSeriesKey];

  const pageTitle = currentSeries ? `${currentSeries.title} | Продукция по типам применения` : "Продукция по типам применения";
  const pageDescription = currentSeries ? currentSeries.mainDescription : "Обзор серий продукции Shenling по типам их применения.";

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Shenling Russia</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <div className="bg-gradient-to-br from-primary to-blue-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center text-blue-300 mb-4"
            >
              {currentSeries ? currentSeries.icon : <Archive className="h-10 w-10 text-blue-300" />}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              {currentSeries ? currentSeries.title : "Продукция по Типам Применения"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-blue-100"
            >
              {currentSeries ? currentSeries.mainDescription : "Выберите серию продукции слева, чтобы ознакомиться с оборудованием Shenling, сгруппированным по типам применения. Мы предлагаем широкий ассортимент для различных отраслей."}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.aside 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 lg:col-span-3"
          >
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Серии продукции</h3>
              <ul className="space-y-2">
                {Object.entries(productsData).map(([slug, series]) => (
                  <li key={slug}>
                    <Link
                      to={`/products-by-application-type/${slug}`} 
                      className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${activeSeriesKey === slug ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}
                    >
                      {React.cloneElement(series.icon, {className: `h-5 w-5 mr-3 ${activeSeriesKey === slug ? 'text-white' : 'text-primary'}`})}
                      <span className="text-sm">{series.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>

          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-8 lg:col-span-9"
          >
            {currentSeries ? (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                {currentSeries.categories.map((category, catIndex) => (
                  <div key={catIndex} className="mb-8 last:mb-0">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="mt-10 pt-6 border-t">
                  <h4 className="text-lg font-semibold mb-3 text-gray-700 flex items-center"><PackageCheck className="h-5 w-5 mr-2 text-primary"/>Примечание:</h4>
                  <p className="text-gray-600 mb-2">Все продукты соответствуют международным стандартам (ISO, EN) и адаптированы под требования российских ГОСТ и СНиП.</p>
                  <p className="text-gray-600">Для уточнения технических параметров обратитесь к каталогам или свяжитесь с нашим менеджером.</p>
                  <p className="text-primary font-semibold mt-4">Shenling — технологии, которые работают даже в экстремальных условиях.</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-white p-6 rounded-lg shadow-lg">
                <Archive className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Выберите серию продукции</h2>
                <p className="text-gray-600">Используйте навигацию слева, чтобы ознакомиться с различными сериями оборудования Shenling.</p>
              </div>
            )}
          </motion.main>
        </div>
      </div>
    </>
  );
};

export default ProductsByApplicationTypePage;
