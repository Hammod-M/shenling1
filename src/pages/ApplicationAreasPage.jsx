
import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Server, Factory, BatteryCharging, Thermometer, Wind, Beaker, Microscope, Train, Plane, Stethoscope, Atom, Droplets, Gem, Building, Layers, Cpu, HardDrive, CloudLightning, ShieldAlert, Snowflake, Sun, Waves, Leaf, Recycle, Hotel as Hospital, School, ShoppingCart } from 'lucide-react';

const applicationAreasData = {
  "data-centers": {
    title: "Центры обработки данных и передача данных",
    icon: <Server className="h-10 w-10 text-primary" />,
    mainDescription: "Решения Shenling для ЦОД обеспечивают высокую энергоэффективность (PUE <1.2) и надежность даже в экстремальных условиях, таких как песчаные бури или температуры до -30°C.",
    details: [
      { 
        title: "Требования", 
        content: "Энергоэффективность (PUE <1.2), устойчивость к экстремальным условиям (песчаные бури, -30°C)." 
      },
      { 
        title: "Решения", 
        content: "Испарительные охладители (проект в Цзиньчане). Двухканальные системы жидкостного/газового охлаждения (China Mobile Southern Base)." 
      },
      { 
        title: "Оборудование", 
        content: "Чиллеры на магнитной подушке, прецизионные кондиционеры с фазовым переходом." 
      }
    ]
  },
  "industrial-processes": {
    title: "Промышленные процессы",
    icon: <Factory className="h-10 w-10 text-primary" />,
    mainDescription: "Оборудование Shenling для промышленных процессов разработано для работы в сложных условиях, включая высокие температуры (до +65°C) и необходимость очистки воздуха от токсичных испарений.",
    details: [
      { 
        title: "Требования", 
        content: "Устойчивость к высоким температурам (+65°C), очистка воздуха от токсичных испарений." 
      },
      { 
        title: "Решения", 
        content: "Взрывозащищенные системы (класс IIIB/IIC) для химических заводов (Sinopec, BASF). Высокотемпературные кондиционеры для металлургии (Baosteel, Wuhan Iron and Steel)." 
      },
      { 
        title: "Оборудование", 
        content: "Промышленные осушители, кондиционеры с постоянной температурой/влажностью." 
      }
    ]
  },
  "lithium-battery": {
    title: "Производство литиевых батарей",
    icon: <BatteryCharging className="h-10 w-10 text-primary" />,
    mainDescription: "Для производства литиевых батарей Shenling предлагает специализированные системы осушения воздуха и точного контроля микроклимата, обеспечивая точку росы до -60°C.",
    details: [
      { 
        title: "Требования", 
        content: "Осушение воздуха, контроль микроклимата." 
      },
      { 
        title: "Решения", 
        content: "Системы с точкой росы до -60°C для цехов." 
      },
      { 
        title: "Оборудование", 
        content: "Специализированные осушители для критических зон." 
      }
    ]
  },
   "bess": {
    title: "Накопители энергии (BESS)",
    icon: <CloudLightning className="h-10 w-10 text-primary" />,
    mainDescription: "Shenling обеспечивает надежную терморегуляцию для систем накопления энергии на основе литий-ионных батарей (BESS), защищая их от перегрева и переохлаждения.",
    details: [
      { title: "Требования", content: "Защита от перегрева/переохлаждения." },
      { title: "Решения", content: "Терморегуляция для Li-ion накопителей." },
      { title: "Оборудование", content: "Прецизионные кондиционеры серии Lingyun." }
    ]
  },
  "power-industry": {
    title: "Энергетика",
    icon: <Wind className="h-10 w-10 text-primary" />,
    mainDescription: "В энергетической отрасли Shenling предлагает решения для осушения воздуха (точка росы до -110°C) для ГЭС и антиобледенительные технологии для ветрогенераторов, обеспечивая их бесперебойную работу.",
    details: [
      { title: "Требования", content: "Осушение воздуха (точка росы -110°C), бесперебойная работа." },
      { title: "Решения", content: "Системы для ГЭС (Три ущелья, Сянцзяба). Антиобледенительные технологии для ветрогенераторов." },
      { title: "Оборудование", content: "Винтовые чиллеры с воздушным охлаждением." }
    ]
  },
  "chemical-industry": {
    title: "Химическая промышленность и металлургия",
    icon: <Beaker className="h-10 w-10 text-primary" />,
    mainDescription: "Для химической промышленности и металлургии Shenling производит оборудование с антикоррозийной защитой (стандарт С5) и взрывобезопасностью для работы в цехах с агрессивными средами.",
    details: [
      { title: "Требования", content: "Антикоррозийная защита (стандарт С5), взрывобезопасность." },
      { title: "Решения", content: "Кондиционеры для цехов с агрессивными средами." },
      { title: "Оборудование", content: "Взрывозащищенные блоки, системы рекуперации ЛОС." }
    ]
  },
  "specialized-facilities": {
    title: "Специализированные объекты",
    icon: <Microscope className="h-10 w-10 text-primary" />,
    mainDescription: "Shenling поставляет оборудование для чистых помещений (ISO 5-8) и объектов, требующих прецизионного контроля параметров, например, лабораторные системы для фармацевтики.",
    details: [
      { title: "Требования", content: "Чистые помещения (ISO 5-8), прецизионный контроль параметров." },
      { title: "Решения", content: "Лабораторные системы для фармацевтики (Kelun Pharmaceutical)." },
      { title: "Оборудование", content: "Блоки фанкойлов с HEPA-фильтрацией." }
    ]
  },
  "transport-infrastructure": {
    title: "Транспортная инфраструктура",
    icon: <Train className="h-10 w-10 text-primary" />,
    mainDescription: "Для транспортной инфраструктуры, такой как метро и железнодорожный транспорт, Shenling предлагает системы с низким уровнем шума, устойчивые к вибрации, включая решения «без градирен».",
    details: [
      { title: "Требования", content: "Снижение шума, работа при вибрации." },
      { title: "Решения", content: "Системы «без градирен» для метро (Пекин, Шэньчжэнь)." },
      { title: "Оборудование", content: "Мобильные кондиционеры для салонов поездов." }
    ]
  },
  "airports": {
    title: "Аэропорты",
    icon: <Plane className="h-10 w-10 text-primary" />,
    mainDescription: "Shenling разрабатывает решения для аэропортов, включая системы осушения ангаров, обогрева взлетно-посадочных полос и наземные кондиционеры для самолетов.",
    details: [
      { title: "Требования", content: "Осушение ангаров, обогрев ВПП." },
      { title: "Решения", content: "Наземные кондиционеры для самолетов (Шереметьево, Пудун)." },
      { title: "Оборудование", content: "Установки с многоступенчатым сжатием." }
    ]
  },
  "medicine": {
    title: "Медицина",
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    mainDescription: "В медицинской сфере Shenling предлагает стерильные чистые кондиционеры для операционных (стандарт GB/T 19569-2004) и оборудование для хранения медикаментов при сверхнизких температурах (до -80°C).",
    details: [
      { title: "Требования", content: "Стерильность, хранение медикаментов (-80°C)." },
      { title: "Решения", content: "Чистые кондиционеры для операционных (стандарт GB/T 19569-2004)." },
      { title: "Оборудование", content: "Шнековые чиллеры для лабораторий." }
    ]
  },
  "nuclear-power": {
    title: "Атомная энергетика",
    icon: <Atom className="h-10 w-10 text-primary" />,
    mainDescription: "Для атомной энергетики Shenling производит сейсмостойкое (до 8 баллов) и радиационно-устойчивое оборудование, используемое на АЭС.",
    details: [
      { title: "Требования", content: "Сейсмостойкость (8 баллов), радиационная защита." },
      { title: "Решения", content: "Оборудование для АЭС (Курская АЭС-2, Лингао)." },
      { title: "Оборудование", content: "Сейсмостойкие чиллеры, радиационно-устойчивые системы." }
    ]
  },
  "oil-gas": {
    title: "Нефтегазовый сектор",
    icon: <Droplets className="h-10 w-10 text-primary" />,
    mainDescription: "В нефтегазовом секторе Shenling предлагает криогенные установки и интегрированные системы сбора летучих органических соединений (ЛОС) с защитой от коррозии.",
    details: [
      { title: "Требования", content: "Рекуперация ЛОС, защита от коррозии." },
      { title: "Решения", content: "Криогенные установки (проекты Sinopec, CNOOC)." },
      { title: "Оборудование", content: "Интегрированные системы сбора нефтегазовых испарений." }
    ]
  },
  "sludge-treatment": {
    title: "Обработка осадков",
    icon: <Recycle className="h-10 w-10 text-primary" />,
    mainDescription: "Shenling разрабатывает низкотемпературные сушилки для обработки ила, позволяющие снизить его влажность до 30%.",
    details: [
      { title: "Требования", content: "Снижение влажности ила до 30%." },
      { title: "Решения", content: "Низкотемпературные сушилки (POSCO, Mitsubishi)." },
      { title: "Оборудование", content: "Закрытые машины для осушения." }
    ]
  },
  "premium-segment": {
    title: "Премиум-сегмент",
    icon: <Gem className="h-10 w-10 text-primary" />,
    mainDescription: "Для премиум-сегмента, такого как отели и дизайнерские объекты, Shenling предлагает умные энергоэффективные системы, интегрируемые с дизайном помещений.",
    details: [
      { title: "Требования", content: "Интеграция с дизайном, энергоэффективность." },
      { title: "Решения", content: "Умные системы для отелей (White Swan, ИКЕА)." },
      { title: "Оборудование", content: "Крышные кондиционеры с рекуперацией тепла." }
    ]
  },
  "municipal-commercial": {
    title: "Муниципальные и коммерческие объекты",
    icon: <Building className="h-10 w-10 text-primary" />,
    mainDescription: "Shenling поставляет энергосберегающие решения для школ, больниц, торговых центров и других муниципальных и коммерческих объектов, включая системы для «умных городов».",
    details: [
      { title: "Требования", content: "Энергосбережение для школ, больниц, ТЦ." },
      { title: "Решения", content: "Системы для «умных городов» (стадионы, вокзалы)." },
      { title: "Оборудование", content: "Спиральные чиллеры с тепловым насосом." }
    ]
  }
};

const ApplicationAreasPage = () => {
  const { areaSlug } = useParams();
  const activeArea = areaSlug || Object.keys(applicationAreasData)[0];
  const currentArea = applicationAreasData[activeArea];

  const pageTitle = currentArea ? `${currentArea.title} | Области применения Shenling` : "Области применения решений Shenling";
  const pageDescription = currentArea ? currentArea.mainDescription : "Узнайте о широком спектре применения промышленного оборудования Shenling в различных отраслях.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
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
              {currentArea ? currentArea.icon : <Layers className="h-10 w-10 text-blue-300" />}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              {currentArea ? currentArea.title : "Области применения решений Shenling"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-blue-100"
            >
              {currentArea ? currentArea.mainDescription : "Shenling предлагает передовые решения для широкого спектра отраслей, обеспечивая надежность, эффективность и инновационный подход к каждому проекту. Ознакомьтесь с ключевыми областями применения нашего оборудования."}
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
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Навигация по областям</h3>
              <ul className="space-y-2">
                {Object.entries(applicationAreasData).map(([slug, area]) => (
                  <li key={slug}>
                    <a 
                      href={`/application-areas/${slug}`} 
                      className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${activeArea === slug ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}
                    >
                      {React.cloneElement(area.icon, {className: `h-5 w-5 mr-3 ${activeArea === slug ? 'text-white' : 'text-primary'}`})}
                      <span className="text-sm">{area.title}</span>
                    </a>
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
            {currentArea ? (
              <Accordion type="single" collapsible defaultValue={currentArea.details[0]?.title} className="w-full bg-white p-6 rounded-lg shadow-lg">
                {currentArea.details.map((detail, index) => (
                  <AccordionItem value={detail.title} key={index}>
                    <AccordionTrigger className="text-xl font-semibold hover:no-underline text-gray-800">
                      {detail.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pt-2 pb-4 pl-2 text-base">
                      {detail.content.split('. ').map((sentence, i, arr) => (
                        <p key={i} className={arr.length -1 === i ? '' : 'mb-2'}>{sentence.trim()}{arr.length -1 === i ? '' : '.'}</p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
                 <div className="mt-8 pt-6 border-t">
                    <h4 className="text-lg font-semibold mb-3 text-gray-700">Ключевое оборудование Shenling:</h4>
                    <p className="text-gray-600">Серии Tiantong, Ryokawa, Lingyun. Специализированные осушители/увлажнители.</p>
                    <p className="text-sm text-gray-500 mt-2">Подробности и фото — на сайте производителя.</p>
                </div>
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <Layers className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Выберите область применения</h2>
                <p className="text-gray-600">Используйте навигацию слева, чтобы узнать больше о решениях Shenling для конкретных отраслей.</p>
              </div>
            )}
          </motion.main>
        </div>
      </div>
    </>
  );
};

export default ApplicationAreasPage;
