
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PackageSearch, Layers, BatteryCharging, Thermometer, Wind, Cpu, Atom, Recycle, Ship, Settings, ChevronRight } from 'lucide-react';

const productsByApplicationData = {
  "all-series": {
    title: "Все серии продукции Shenling",
    icon: <Layers className="h-10 w-10 text-primary" />,
    mainDescription: "Универсальные решения Shenling охватывают широкий спектр потребностей для различных отраслей промышленности, обеспечивая высокое качество и надежность.",
    categories: [
      { name: "Серия накопителей энергии", description: "Блоки контроля температуры для систем хранения энергии." },
      { name: "Серия прямого расширения (DX)", description: "Кондиционеры, осушители, чистые кондиционеры." },
      { name: "Серия хостов", description: "Чиллеры и тепловые насосы." },
      { name: "Конечное оборудование", description: "Роторные осушители, комбинированные блоки, фанкойлы." },
      { name: "Серия ИКТ", description: "Прецизионные кондиционеры для ЦОД и коммерческих зданий." },
      { name: "Серия АЭС", description: "Специализированное оборудование для атомных электростанций." },
      { name: "Экологическая серия", description: "Решения для обработки отходов и мониторинга окружающей среды." },
      { name: "Морская серия", description: "Оборудование для судов и морских платформ." },
    ]
  },
  "energy-storage-series": {
    title: "Серия накопителей энергии",
    icon: <BatteryCharging className="h-10 w-10 text-primary" />,
    mainDescription: "Специализированные решения для эффективного контроля температуры в системах накопления энергии, обеспечивающие их безопасность и долговечность.",
    categories: [
      { name: "Блок контроля температуры жидкостного охлаждения", description: "Оптимальное охлаждение для литий-ионных батарей и других накопителей." },
    ]
  },
  "dx-series": {
    title: "Серия прямого расширения (DX)",
    icon: <Thermometer className="h-10 w-10 text-primary" />,
    mainDescription: "Широкий ассортимент оборудования прямого расширения для кондиционирования, осушения и создания чистых зон в различных применениях.",
    categories: [
      { name: "Кондиционер на крыше (Руфтоп)", description: "Комплексные решения для вентиляции и кондиционирования." },
      { name: "Наземный блок кондиционирования для авиационной техники", description: "Специализированное оборудование для обслуживания самолетов." },
      { name: "Потолочный кондиционер", description: "Компактные и эффективные решения для коммерческих помещений." },
      { name: "Осушитель воздуха", description: "Промышленные и бытовые модели для контроля влажности." },
      { name: "Чистый кондиционер", description: "Для операционных, лабораторий, фармацевтического производства." },
    ]
  },
  "host-series": {
    title: "Серия хостов",
    icon: <Settings className="h-10 w-10 text-primary" />,
    mainDescription: "Высокопроизводительные чиллеры и тепловые насосы для централизованных систем кондиционирования и отопления.",
    categories: [
      { name: "Чиллер с водяным охлаждением", description: "Высокопроизводительные модели для крупных объектов." },
      { name: "Чиллер с воздушным охлаждением", description: "Энергоэффективные решения для различных применений." },
      { name: "Тепловой насос (вода/грунт)", description: "Геотермальные и водяные тепловые насосы для отопления и охлаждения." },
    ]
  },
  "terminal-equipment": {
    title: "Конечное оборудование",
    icon: <Wind className="h-10 w-10 text-primary" />,
    mainDescription: "Разнообразное конечное оборудование для систем вентиляции и кондиционирования, обеспечивающее комфортный микроклимат.",
    categories: [
      { name: "Роторный осушитель воздуха", description: "Для крупных промышленных объектов с высокими требованиями к осушению." },
      { name: "Комбинированный блок кондиционирования воздуха", description: "Гибридные системы для эффективного охлаждения и вентиляции." },
      { name: "Фанкойл корпусного типа", description: "Настенные и потолочные модели для локального кондиционирования." },
      { name: "Блок фанкойлов", description: "Комплекты для интеграции в централизованные вентиляционные системы." },
    ]
  },
  "ict-series": {
    title: "Серия ИКТ",
    icon: <Cpu className="h-10 w-10 text-primary" />,
    mainDescription: "Прецизионные системы кондиционирования для информационно-коммуникационных технологий, включая ЦОД и серверные помещения.",
    categories: [
      { name: "Ромбическая серия", description: "Прецизионные кондиционеры для центров обработки данных." },
      { name: "Небесная серия", description: "Эстетичные и эффективные решения для офисов и коммерческих зданий." },
      { name: "Серверные решения", description: "Системы с фазовым переходом для высоконагруженных серверных стоек." },
    ]
  },
  "npp-series": {
    title: "Серия АЭС",
    icon: <Atom className="h-10 w-10 text-primary" />,
    mainDescription: "Специализированное оборудование, разработанное для применения на атомных электростанциях, с учетом высоких требований к безопасности и надежности.",
    categories: [
      { name: "Сейсмостойкие чиллеры", description: "Оборудование, способное выдерживать сейсмические нагрузки." },
      { name: "Системы охлаждения воды", description: "Надежное оборудование для технологических контуров АЭС." },
      { name: "Фанкойлы для АЭС", description: "Корпусные модели с повышенной надёжностью и длительным сроком службы." },
    ]
  },
  "eco-series": {
    title: "Экологическая серия",
    icon: <Recycle className="h-10 w-10 text-primary" />,
    mainDescription: "Решения для защиты окружающей среды, включая обработку промышленных отходов, рекуперацию газов и системы экологического мониторинга.",
    categories: [
      { name: "Устройство для обработки осадка", description: "Эффективная переработка промышленных и бытовых осадков." },
      { name: "Рекуперация газов (NMP)", description: "Системы для очистки и повторного использования растворителей и других газов." },
      { name: "Экологический мониторинг", description: "Комплексные системы для контроля качества воздуха и воды." },
    ]
  },
  "marine-series": {
    title: "Морская серия",
    icon: <Ship className="h-10 w-10 text-primary" />,
    mainDescription: "Оборудование, специально разработанное для эксплуатации в морских условиях, с повышенной устойчивостью к коррозии и вибрациям.",
    categories: [
      { name: "Кондиционеры судового типа", description: "Для пассажирских и грузовых судов, морских платформ." },
      { name: "Морские чиллеры", description: "Системы водяного и воздушного охлаждения для судов." },
      { name: "Морские осушители", description: "Защита оборудования и помещений от коррозии в солёной среде." },
      { name: "Модульные охладители", description: "Компактные и гибкие решения для различных типов кораблей." },
    ]
  }
};


const ProductsByApplicationPage = () => {
  const { seriesSlug } = useParams();
  const activeSeries = seriesSlug || Object.keys(productsByApplicationData)[0];
  const currentSeries = productsByApplicationData[activeSeries];

  const pageTitle = currentSeries ? `${currentSeries.title} | Продукция по применению Shenling` : "Продукция по типам применения | Shenling Russia";
  const pageDescription = currentSeries ? currentSeries.mainDescription : "Ознакомьтесь с сериями продукции Shenling, классифицированными по типам применения в различных отраслях.";

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
              {currentSeries ? currentSeries.icon : <PackageSearch className="h-10 w-10 text-blue-300" />}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              {currentSeries ? currentSeries.title : "Продукция по типам применения"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-blue-100"
            >
              {currentSeries ? currentSeries.mainDescription : "Shenling предлагает широкий ассортимент продукции, сгруппированной по основным сериям и типам применения для удобства выбора оптимального решения."}
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
                {Object.entries(productsByApplicationData).map(([slug, series]) => (
                  <li key={slug}>
                    <Link
                      to={`/products-by-application/${slug}`} 
                      className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${activeSeries === slug ? 'bg-primary text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}
                    >
                      {React.cloneElement(series.icon, {className: `h-5 w-5 mr-3 ${activeSeries === slug ? 'text-white' : 'text-primary'}`})}
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
                <h2 className="text-2xl font-bold mb-6 text-gray-800">{currentSeries.title}</h2>
                <Accordion type="multiple" className="w-full">
                  {currentSeries.categories.map((category, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-lg font-semibold hover:no-underline text-gray-700">
                        {category.name}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pt-2 pb-4 pl-2 text-base">
                        {category.description}
                         <Link to={`/products`} className="text-primary hover:underline flex items-center mt-2 text-sm">
                            Смотреть подходящие продукты <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                 <div className="mt-8 pt-6 border-t">
                    <p className="text-gray-600">Для получения подробной информации о конкретных моделях и их характеристиках, пожалуйста, перейдите в общий каталог продукции или свяжитесь с нашими специалистами.</p>
                    <Link to="/products">
                        <Button variant="outline" className="mt-4">Перейти в каталог</Button>
                    </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <PackageSearch className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Выберите серию продукции</h2>
                <p className="text-gray-600">Используйте навигацию слева, чтобы узнать больше о сериях продукции Shenling по типам применения.</p>
              </div>
            )}
          </motion.main>
        </div>
      </div>
    </>
  );
};

export default ProductsByApplicationPage;
