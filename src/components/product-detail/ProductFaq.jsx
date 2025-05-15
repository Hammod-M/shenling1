
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqData = [
  {
    value: "item-1",
    trigger: "Какой срок гарантии на оборудование?",
    content: "На все наше оборудование предоставляется гарантия 24 месяца с момента ввода в эксплуатацию, но не более 30 месяцев с даты продажи."
  },
  {
    value: "item-2",
    trigger: "Как осуществляется доставка оборудования?",
    content: "Мы осуществляем доставку по всей России и странам СНГ. Сроки и стоимость доставки зависят от региона и объема заказа. Для получения точной информации, пожалуйста, свяжитесь с нашими менеджерами."
  },
  {
    value: "item-3",
    trigger: "Предоставляете ли вы техническую поддержку после покупки?",
    content: "Да, мы предоставляем полную техническую поддержку нашим клиентам. Наши специалисты готовы помочь с установкой, настройкой и обслуживанием оборудования. Также мы проводим обучение персонала заказчика."
  },
  {
    value: "item-4",
    trigger: "Можно ли заказать оборудование с индивидуальными параметрами?",
    content: "Да, мы предлагаем возможность изготовления оборудования по индивидуальным требованиям заказчика. Для этого необходимо предоставить технические требования, и наши инженеры разработают оптимальное решение."
  }
];

const ProductFaq = () => {
  return (
    <div className="border-t border-gray-200 p-6 md:p-8">
      <h3 className="text-xl font-semibold mb-6">Часто задаваемые вопросы</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map(item => (
          <AccordionItem value={item.value} key={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProductFaq;
