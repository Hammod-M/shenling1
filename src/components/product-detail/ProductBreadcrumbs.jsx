
import React from "react";
import { Link } from "react-router-dom";

const ProductBreadcrumbs = ({ product }) => {
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
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="text-gray-600 hover:text-primary">
            Главная
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/products" className="text-gray-600 hover:text-primary">
              Продукты
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <Link to={`/products/${product.category}`} className="text-gray-600 hover:text-primary">
              {categoryMap[product.category] || product.category}
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-500">{product.name}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default ProductBreadcrumbs;
