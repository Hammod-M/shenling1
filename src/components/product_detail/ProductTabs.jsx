
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, Download, FileText } from "lucide-react";

const ProductTabs = ({ product }) => {
  return (
    <div className="border-t border-gray-200 p-6 md:p-8">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="description" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Описание</TabsTrigger>
          <TabsTrigger value="specifications" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Характеристики</TabsTrigger>
          <TabsTrigger value="documents" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Документация</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="text-gray-700 prose max-w-none">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Подробное описание</h3>
          <p className="mb-6 leading-relaxed">{product.longDescription}</p>
          
          {product.features && product.features.length > 0 && (
            <>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Особенности и преимущества</h4>
              <ul className="space-y-3 pl-0">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </TabsContent>
        
        <TabsContent value="specifications">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Технические характеристики</h3>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[500px]">
              <tbody className="divide-y divide-gray-200">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50/50" : "bg-white"}>
                    <td className="py-3 px-4 font-medium text-gray-600 w-1/3">{key}</td>
                    <td className="py-3 px-4 text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="documents">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Документация</h3>
          {product.documents && product.documents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.documents.map((doc, index) => (
                <div key={index} className="flex items-center p-4 border rounded-lg hover:bg-gray-50/50 transition-colors shadow-sm">
                  <div className="mr-4 text-primary">
                    <FileText className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-700">{doc.name}</h4>
                    <p className="text-sm text-gray-500 uppercase">{doc.type}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                    <Download className="h-4 w-4 mr-1" /> Скачать
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Документация для этого продукта пока недоступна.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
