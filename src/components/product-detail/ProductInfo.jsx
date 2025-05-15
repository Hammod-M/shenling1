
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ProductInfo = ({ product }) => {
  const categoryMap = {
    refrigeration: "Холодильное оборудование",
    compressors: "Компрессоры",
    "heat-exchangers": "Теплообменники",
    ventilation: "Вентиляционные системы",
    rooftops: "Руфтопы",
    dehumidifiers: "Осушители",
    "precision-ac": "Прецизионные кондиционеры",
    "rack-precision-ac": "Стоичные кондиционеры",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="text-gray-600 mr-2">Модель:</span>
          <span className="font-semibold">{product.model}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Категория:</span>
          <span className="font-semibold">
            {categoryMap[product.category] || product.category}
          </span>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Ключевые особенности:</h3>
        <ul className="space-y-2">
          {product.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="flex-1">Запросить цену</Button>
        <Button size="lg" variant="outline" className="flex-1">Техническая консультация</Button>
      </div>
    </motion.div>
  );
};

export default ProductInfo;
