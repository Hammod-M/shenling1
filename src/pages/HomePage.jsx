
import React from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const sampleProducts = [
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
    }
  ];

  const sampleCategories = [
    {
      slug: "refrigeration",
      title: "Холодильное оборудование",
      description: "Решения для охлаждения Shenling",
      image: "https://images.unsplash.com/photo-1620756236360-6f5375f00072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      slug: "compressors",
      title: "Компрессоры",
      description: "Компрессорные системы Shenling",
      image: "https://images.unsplash.com/photo-1616574113919-4a8a7a6c4a9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      slug: "heat-exchangers",
      title: "Теплообменники",
      description: "Теплообмен от Shenling",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      slug: "ventilation",
      title: "Вентиляционные системы",
      description: "Качество воздуха с Shenling",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      slug: "rooftops",
      title: "Руфтопы",
      description: "Решения для крыш Shenling",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      slug: "dehumidifiers",
      title: "Осушители",
      description: "Контроль влажности Shenling",
      image: "https://images.unsplash.com/photo-1604017010091-7d976594d7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      slug: "precision-ac",
      title: "Прецизионные кондиционеры",
      description: "Климат-контроль Shenling",
      image: "https://images.unsplash.com/photo-1587573200168-35636fac8377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
      slug: "rack-precision-ac",
      title: "Стоичные кондиционеры",
      description: "Решения для стоек Shenling",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Shenling Russia - Промышленное Оборудование</title>
        <meta name="description" content="Shenling Russia предлагает инновационное промышленное оборудование от ведущего китайского производителя. Высокая эффективность и надежность." />
      </Helmet>
      <HeroSection />
      <FeaturedProducts products={sampleProducts} />
      <CategorySection categories={sampleCategories} />
      <FeaturesSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
