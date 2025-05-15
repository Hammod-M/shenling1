
export const allProductsData = [
  {
    id: "1",
    name: "Промышленный холодильник SL-500",
    description: "Высокоэффективный промышленный холодильник с расширенным температурным диапазоном и низким энергопотреблением.",
    longDescription: "Промышленный холодильник SL-500 представляет собой современное решение для хранения продукции при низких температурах. Оборудование оснащено передовыми технологиями, обеспечивающими точный контроль температуры и низкое энергопотребление. Холодильник имеет прочную конструкцию из нержавеющей стали, что гарантирует долгий срок службы даже в сложных условиях эксплуатации.",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092918082-3cdb13d1112d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    category: "refrigeration",
    model: "SL-500",
    specifications: {
      "Температурный диапазон": "-40°C до +10°C",
      "Объем": "500 литров",
      "Мощность": "1.5 кВт",
      "Хладагент": "R404A",
      "Материал корпуса": "Нержавеющая сталь",
      "Габариты (ШxГxВ)": "80 x 70 x 190 см",
      "Вес": "120 кг",
      "Уровень шума": "45 дБ"
    },
    features: [
      "Цифровой контроль температуры с точностью до 0.1°C",
      "Энергоэффективный компрессор с низким уровнем шума",
      "Автоматическая система размораживания",
      "Сигнализация при отклонении температуры",
      "Усиленная изоляция для снижения энергопотребления",
      "Регулируемые полки из нержавеющей стали",
      "Дверь с магнитным уплотнителем и замком"
    ],
    documents: [
      { name: "Техническая спецификация", type: "pdf", url: "#" },
      { name: "Инструкция по эксплуатации", type: "pdf", url: "#" },
      { name: "Сертификат соответствия", type: "pdf", url: "#" }
    ],
    relatedProductIds: ["2", "5"] 
  },
  {
    id: "2",
    name: "Компрессор SC-200",
    description: "Надежный компрессор для промышленных холодильных систем с высокой производительностью.",
    longDescription: "Компрессор SC-200 разработан для использования в промышленных холодильных системах, где требуется высокая надежность и эффективность. Благодаря инновационной конструкции и использованию высококачественных материалов, компрессор обеспечивает стабильную работу даже при высоких нагрузках и в сложных условиях эксплуатации.",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092918082-3cdb13d1112d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    category: "compressors",
    model: "SC-200",
    specifications: {
      "Тип": "Поршневой",
      "Холодопроизводительность": "20 кВт",
      "Рабочее давление": "25 бар",
      "Хладагенты": "R404A, R507, R134a",
      "Мощность двигателя": "7.5 кВт",
      "Напряжение питания": "380В / 3 фазы / 50 Гц",
      "Габариты (ШxГxВ)": "60 x 50 x 45 см",
      "Вес": "85 кг"
    },
    features: [
      "Высокая энергоэффективность (COP > 3.5)",
      "Низкий уровень вибрации и шума",
      "Защита от перегрева и перегрузки",
      "Автоматическая система смазки",
      "Встроенные датчики давления и температуры",
      "Простота монтажа и обслуживания",
      "Длительный срок службы (более 50 000 часов)"
    ],
    documents: [
      { name: "Техническая спецификация", type: "pdf", url: "#" },
      { name: "Инструкция по монтажу", type: "pdf", url: "#" },
      { name: "Сертификат соответствия", type: "pdf", url: "#" }
    ],
    relatedProductIds: ["1", "3"]
  },
  {
    id: "3",
    name: "Теплообменник ST-100",
    description: "Эффективный теплообменник для систем охлаждения и нагрева.",
    longDescription: "Теплообменник ST-100 обеспечивает эффективный теплообмен между различными средами. Применяется в системах кондиционирования, отопления и промышленных процессах. Компактный дизайн и высокая производительность.",
    images: [
      "https://images.unsplash.com/photo-1581092918082-3cdb13d1112d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    category: "heat-exchangers",
    model: "ST-100",
    isNew: true,
    specifications: { "Тип": "Пластинчатый", "Площадь теплообмена": "10 м²", "Макс. давление": "16 бар" },
    features: ["Компактный дизайн", "Высокая эффективность", "Простота обслуживания"],
    documents: [{ name: "Спецификация ST-100", type: "pdf", url: "#" }],
    relatedProductIds: ["2", "4"]
  },
  {
    id: "4",
    name: "Вентиляция SV-300",
    description: "Интеллектуальная вентиляционная система для промышленных помещений.",
    longDescription: "Система вентиляции SV-300 обеспечивает качественный воздухообмен в промышленных помещениях, удаляя загрязненный воздух и подавая свежий. Оснащена интеллектуальным управлением для оптимизации энергопотребления.",
    images: [
      "https://images.unsplash.com/photo-1600055037560-75f2b15d8f08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    category: "ventilation",
    model: "SV-300",
    specifications: { "Производительность": "3000 м³/ч", "Мощность": "1.1 кВт", "Фильтрация": "G4 + F7" },
    features: ["Интеллектуальное управление", "Низкий уровень шума", "Энергосбережение"],
    documents: [{ name: "Описание SV-300", type: "pdf", url: "#" }],
    relatedProductIds: ["3", "5"]
  },
  {
    id: "5",
    name: "Холодильная камера SL-1000",
    description: "Просторная холодильная камера для точного контроля температуры и оптимизации хранения.",
    longDescription: "Холодильная камера SL-1000 предназначена для хранения больших объемов продукции при заданных температурных режимах. Модульная конструкция позволяет адаптировать размеры камеры под нужды заказчика.",
    images: [
      "https://images.unsplash.com/photo-1620756236360-6f5375f00072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    category: "refrigeration",
    model: "SL-1000",
    specifications: { "Объем": "от 10 м³", "Температура": "от -25°C до +5°C", "Тип панелей": "Сэндвич-панели PIR" },
    features: ["Модульная конструкция", "Точный контроль температуры", "Высокая теплоизоляция"],
    documents: [{ name: "Брошюра SL-1000", type: "pdf", url: "#" }],
    relatedProductIds: ["1", "6"]
  },
   {
    id: "6",
    name: "Компрессор SC-500",
    description: "Мощный компрессор для крупных промышленных систем.",
    longDescription: "Компрессор SC-500 — это высокопроизводительное решение для крупных промышленных холодильных установок. Обеспечивает надежную и эффективную работу в самых требовательных условиях.",
    images: [
      "https://images.unsplash.com/photo-1616574113919-4a8a7a6c4a9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    category: "compressors",
    model: "SC-500",
    isNew: true,
    specifications: { "Тип": "Винтовой", "Холодопроизводительность": "50 кВт", "Мощность двигателя": "15 кВт" },
    features: ["Высокая производительность", "Долговечность", "Энергоэффективность"],
    documents: [{ name: "Спецификация SC-500", type: "pdf", url: "#" }],
    relatedProductIds: ["2", "7"]
  }
];
