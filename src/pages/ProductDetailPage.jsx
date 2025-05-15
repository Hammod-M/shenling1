
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async"; 
import ProductImageGallery from "@/components/product_detail/ProductImageGallery";
import ProductInfo from "@/components/product_detail/ProductInfo";
import ProductTabs from "@/components/product_detail/ProductTabs";
import ProductFAQ from "@/components/product_detail/ProductFAQ";
import RelatedProducts from "@/components/product_detail/RelatedProducts";

const allProductsData = [
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
        { name: "Техническая спецификация", type: "pdf" },
        { name: "Инструкция по эксплуатации", type: "pdf" },
        { name: "Сертификат соответствия", type: "pdf" }
      ],
      relatedProducts: [2, 5]
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
        { name: "Техническая спецификация", type: "pdf" },
        { name: "Инструкция по монтажу", type: "pdf" },
        { name: "Сертификат соответствия", type: "pdf" }
      ],
      relatedProducts: [1, 3]
    },
    {
      id: "3",
      name: "Теплообменник ST-100",
      description: "Эффективный теплообменник для систем охлаждения и нагрева.",
      images: ["https://images.unsplash.com/photo-1581092918082-3cdb13d1112d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
      category: "heat-exchangers",
      model: "ST-100",
      specifications: {}, features: [], documents: [], relatedProducts: [2,4]
    },
     {
      id: "4",
      name: "Вентиляция SV-300",
      description: "Интеллектуальная вентиляционная система для промышленных помещений.",
      images: ["https://images.unsplash.com/photo-1600055037560-75f2b15d8f08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
      category: "ventilation",
      model: "SV-300",
      specifications: {}, features: [], documents: [], relatedProducts: [3,5]
    },
    {
      id: "5",
      name: "Холодильная камера SL-1000",
      description: "Просторная холодильная камера для точного контроля температуры.",
      images: ["https://images.unsplash.com/photo-1620756236360-6f5375f00072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
      category: "refrigeration",
      model: "SL-1000",
      specifications: {}, features: [], documents: [], relatedProducts: [1,6]
    },
     {
      id: "6",
      name: "Компрессор SC-500",
      description: "Мощный компрессор для крупных промышленных систем.",
      images: ["https://images.unsplash.com/photo-1616574113919-4a8a7a6c4a9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
      category: "compressors",
      model: "SC-500",
      specifications: {}, features: [], documents: [], relatedProducts: [2,5]
    }
  ];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = allProductsData.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Продукт не найден</h1>
        <p className="mb-8 text-gray-600">Запрашиваемый продукт не существует или был удален.</p>
        <Link to="/products">
          <Button size="lg">Вернуться к списку продуктов</Button>
        </Link>
      </div>
    );
  }
  
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
    <>
      <Helmet>
        <title>{`${product.name} | Shenling Russia`}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 md:mb-8">
            <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
                <li><span className="mx-1">/</span></li>
                <li><Link to="/products" className="hover:text-primary transition-colors">Продукты</Link></li>
                <li><span className="mx-1">/</span></li>
                <li>
                  <Link to={`/products/${product.category}`} className="hover:text-primary transition-colors">
                    {categoryMap[product.category] || product.category}
                  </Link>
                </li>
                <li><span className="mx-1">/</span></li>
                <li aria-current="page"><span className="font-medium text-gray-700">{product.name}</span></li>
              </ol>
            </nav>
          </div>

          <div className="mb-6 md:mb-8">
            <Link to={`/products/${product.category}`}>
              <Button variant="outline" className="flex items-center gap-2 text-gray-600 hover:text-primary hover:border-primary transition-colors">
                <ArrowLeft className="h-4 w-4" /> Назад к категории
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
              <ProductImageGallery images={product.images} productName={product.name} />
              <ProductInfo product={product} />
            </div>

            <ProductTabs product={product} />
            <ProductFAQ />
          </div>

          <RelatedProducts products={product.relatedProducts} allProductsData={allProductsData} />
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
