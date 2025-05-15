
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart, MessageSquare } from "lucide-react";

const ProductInfo = ({ product }) => {
  const categoryMap = {
    refrigeration: "Холодильное оборудование",
    compressors: "Компрессоры",
    "heat-exchangers": "Теплообменники",
    ventilation: "Вентиляционные системы",
    rooftops: "Руфтопы",
    dehumidifiers: "Осушители",
    "precision-ac": "Прецизионные кондиционеры",
    "rack-precision-ac": "Стоичные прецизионные кондиционеры",
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-800">{product.name}</h1>
      <p className="text-gray-600 mb-6 text-md leading-relaxed">{product.description}</p>
      
      <div className="mb-6 space-y-2">
        <div className="flex items-center">
          <span className="text-gray-500 mr-2 font-medium w-24">Модель:</span>
          <span className="font-semibold text-gray-700">{product.model}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 mr-2 font-medium w-24">Категория:</span>
          <span className="font-semibold text-gray-700">
            {categoryMap[product.category] || product.category}
          </span>
        </div>
      </div>
      
      {product.features && product.features.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Ключевые особенности:</h3>
          <ul className="space-y-2">
            {product.features.slice(0, 5).map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90">
          <ShoppingCart className="mr-2 h-5 w-5" /> Запросить цену
        </Button>
        <Button size="lg" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/5">
          <MessageSquare className="mr-2 h-5 w-5" /> Техническая консультация
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductInfo;
