
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Helmet } from "react-helmet-async";
import { Factory } from "lucide-react";

const ProductsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(category || "all");

  useEffect(() => {
    if (category && category !== activeTab) {
      setActiveTab(category);
    }
    if (!category && activeTab !== "all") {
       navigate(`/products/${activeTab}`, { replace: true });
    }
  }, [category, activeTab, navigate]);


  const allProducts = [
    {
      id: 1,
      name: "Холодильник SL-500",
      description: "Высокоэффективный промышленный холодильник Shenling для контроля температуры и энергосбережения.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "refrigeration",
      model: "SL-500",
      isNew: true
    },
    {
      id: 2,
      name: "Компрессор SC-200",
      description: "Надежный компрессор Shenling для промышленных холодильных систем.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "compressors",
      model: "SC-200"
    },
    {
      id: 3,
      name: "Теплообменник ST-100",
      description: "Эффективный теплообменник Shenling для систем охлаждения и нагрева.",
      image: "https://images.unsplash.com/photo-1581092918082-3cdb13d1112d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "heat-exchangers",
      model: "ST-100",
      isNew: true
    },
    {
      id: 4,
      name: "Вентиляция SV-300",
      description: "Интеллектуальная вентиляционная система Shenling для промышленных помещений.",
      image: "https://images.unsplash.com/photo-1600055037560-75f2b15d8f08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "ventilation",
      model: "SV-300"
    },
    {
      id: 5,
      name: "Холодильная камера SL-1000",
      description: "Просторная холодильная камера Shenling для точного контроля температуры и оптимизации хранения.",
      image: "https://images.unsplash.com/photo-1620756236360-6f5375f00072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "refrigeration",
      model: "SL-1000"
    },
    {
      id: 6,
      name: "Компрессор SC-500",
      description: "Мощный компрессор Shenling для крупных промышленных систем.",
      image: "https://images.unsplash.com/photo-1616574113919-4a8a7a6c4a9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "compressors",
      model: "SC-500",
      isNew: true
    },
    {
      id: 7,
      name: "Теплообменник ST-200",
      description: "Высокопроизводительный теплообменник Shenling для промышленных систем.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "heat-exchangers",
      model: "ST-200"
    },
    {
      id: 8,
      name: "Вентиляция SV-500",
      description: "Промышленная вентиляционная система Shenling для больших помещений.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "ventilation",
      model: "SV-500",
      isNew: true
    },
    {
      id: 9,
      name: "Руфтоп RT-700",
      description: "Компактный и эффективный руфтоп Shenling для кондиционирования и вентиляции.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "rooftops",
      model: "RT-700"
    },
    {
      id: 10,
      name: "Осушитель DH-300",
      description: "Промышленный осушитель воздуха Shenling для оптимального уровня влажности.",
      image: "https://images.unsplash.com/photo-1604017010091-7d976594d7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "dehumidifiers",
      model: "DH-300",
      isNew: true
    },
    {
      id: 11,
      name: "Прецизионный кондиционер PC-1000",
      description: "Высокоточный кондиционер Shenling для серверных, обеспечивающий стабильный микроклимат.",
      image: "https://images.unsplash.com/photo-1587573200168-35636fac8377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "precision-ac",
      model: "PC-1000"
    },
    {
      id: 12,
      name: "Стоичный кондиционер PCR-500",
      description: "Компактный прецизионный кондиционер Shenling для монтажа в стойку, идеален для ЦОД.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "rack-precision-ac",
      model: "PCR-500"
    }
  ];

  const filteredProducts = activeTab === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category === activeTab);

  const categories = [
    { id: "all", name: "Вся продукция" },
    { id: "refrigeration", name: "Холодильное оборудование" },
    { id: "compressors", name: "Компрессоры" },
    { id: "heat-exchangers", name: "Теплообменники" },
    { id: "ventilation", name: "Вентиляционные системы" },
    { id: "rooftops", name: "Руфтопы" },
    { id: "dehumidifiers", name: "Осушители" },
    { id: "precision-ac", name: "Прецизионные кондиционеры" },
    { id: "rack-precision-ac", name: "Стоичные кондиционеры" }
  ];

  const handleTabChange = (value) => {
    setActiveTab(value);
    if (value === "all") {
      navigate("/products", { replace: true });
    } else {
      navigate(`/products/${value}`, { replace: true });
    }
  };

  return (
    <>
      <Helmet>
        <title>Продукция | Shenling Russia - Промышленное Оборудование</title>
        <meta name="description" content="Ознакомьтесь с нашим ассортиментом промышленного оборудования Shenling. Надежные решения для вашего бизнеса." />
      </Helmet>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center text-primary mb-3"
            >
              <Factory className="h-8 w-8 mr-2" />
              <span className="text-lg font-semibold tracking-wider uppercase">Shenling Russia</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay:0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Наша Продукция
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Каждое устройство Shenling разработано с применением передовых технологий для максимальной эффективности, надежности и долговечности. Откройте для себя качество Shenling.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <Tabs value={activeTab} onValueChange={handleTabChange}>
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList className="bg-white shadow-sm flex-nowrap">
                  {categories.map((cat) => (
                    <TabsTrigger key={cat.id} value={cat.id} className="whitespace-nowrap">
                      {cat.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((cat) => (
                <TabsContent key={cat.id} value={cat.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </div>
                  {filteredProducts.length === 0 && (
                     <div className="text-center py-12">
                        <p className="text-xl text-gray-500">Продукты в этой категории скоро появятся.</p>
                     </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
