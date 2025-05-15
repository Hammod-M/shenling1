
import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Factory, Briefcase, Settings, Users, Lightbulb, Cloud, Network, BarChart2, Search, Wrench, Truck } from "lucide-react";

const advantagesData = {
  "professional-solutions": {
    title: "Профессиональные решения",
    description: "Shenling предоставляет комплексные профессиональные решения, охватывающие весь жизненный цикл продукта и проекта.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    items: [
      { id: "01", title: "Маркетинговые услуги", text: "Анализ рынка, разработка стратегий продвижения, поддержка в маркетинговых кампаниях для наших партнеров." },
      { id: "02", title: "Научно-исследовательский дизайн", text: "Собственные R&D центры, разработка инновационных продуктов, кастомизация решений под нужды клиента." },
      { id: "03", title: "Производство", text: "Современные производственные линии, строгий контроль качества, использование передовых технологий и материалов." },
      { id: "04", title: "Послепродажная эксплуатация и техническое обслуживание", text: "Гарантийное и постгарантийное обслуживание, поставка запчастей, техническая поддержка 24/7." },
      { id: "05", title: "Инженерные возможности", text: "Проектирование систем, шеф-монтаж, пусконаладочные работы, обучение персонала." },
    ]
  },
  "custom-plan": {
    title: "Индивидуальный план и индивидуальный подход Shenling",
    description: "Мы понимаем, что каждый проект уникален. Shenling предлагает гибкие решения и индивидуальный подход к каждому клиенту.",
    icon: <Users className="h-10 w-10 text-primary" />,
    items: [
      { id: "01", title: "Глубокий анализ потребностей", text: "Тщательное изучение ваших задач и требований для предложения оптимального решения." },
      { id: "02", title: "Разработка кастомизированных продуктов", text: "Возможность адаптации стандартных моделей или создания уникального оборудования под ваши спецификации." },
      { id: "03", title: "Гибкие условия сотрудничества", text: "Индивидуальные схемы оплаты, логистики и сервисного обслуживания." },
      { id: "04", title: "Персональный менеджер", text: "Сопровождение проекта на всех этапах одним специалистом для максимального удобства." },
    ]
  },
  "smart-manufacturing": {
    title: "Интеллектуальное производство",
    description: "Завод Shenling активно внедряет концепции Индустрии 4.0, используя интеллектуальные технологии для оптимизации производственных процессов.",
    icon: <Settings className="h-10 w-10 text-primary" />,
    items: [
      { id: "01", title: "Общий дизайн и оптимизация digital lean workshop", text: "Создание цифровых \"бережливых\" цехов для повышения эффективности." },
      { id: "02", title: "Прозрачность производственного процесса", text: "Системы мониторинга и отслеживания на каждом этапе производства." },
      { id: "03", title: "Эффективная интеграция и совместная работа основных бизнес-систем", text: "ERP, MES, PLM системы работают в единой связке." },
      { id: "04", title: "Платформа для разработки продукта и интеграции процессов", text: "Современные CAD/CAM/CAE системы для ускорения разработки." },
      { id: "05", title: "Инновационное применение ключевого оборудования", text: "Роботизация, автоматизированные линии, использование станков с ЧПУ." },
      { id: "06", title: "Создание частного облака", text: "Безопасное хранение и обработка производственных данных." },
      { id: "07", title: "Разработка технологии Интернета вещей (IoT)", text: "Сбор данных с оборудования в реальном времени для анализа и оптимизации." },
      { id: "08", title: "Эксплуатация и техническое обслуживание облачной платформы", text: "Поддержка и развитие облачной инфраструктуры для интеллектуального производства." },
    ]
  }
};

const AdvantagesPage = () => {
  const { section } = useParams();
  const activeSection = section || "professional-solutions"; 
  const currentAdvantage = advantagesData[activeSection];

  if (!currentAdvantage) {
    return <div>Раздел не найден</div>; 
  }

  return (
    <>
      <Helmet>
        <title>{currentAdvantage.title} | Преимущества Shenling Russia</title>
        <meta name="description" content={currentAdvantage.description} />
      </Helmet>

      <div className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center text-blue-300 mb-4"
            >
              {currentAdvantage.icon}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              {currentAdvantage.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed"
            >
              {currentAdvantage.description}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Accordion type="single" collapsible defaultValue={currentAdvantage.items[0]?.id} className="w-full">
            {currentAdvantage.items.map((item, index) => (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger className="text-lg hover:no-underline">
                  <span className="text-primary font-semibold mr-2">{item.id}</span> {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pl-8">
                  {item.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </>
  );
};

export default AdvantagesPage;
