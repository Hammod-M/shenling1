
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductTabs = ({ product }) => {
  return (
    <div className="border-t border-gray-200 p-6 md:p-8">
      <Tabs defaultValue="description">
        <TabsList className="w-full justify-start mb-6">
          <TabsTrigger value="description">Описание</TabsTrigger>
          <TabsTrigger value="specifications">Характеристики</TabsTrigger>
          <TabsTrigger value="documents">Документация</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="text-gray-700">
          <h3 className="text-xl font-semibold mb-4">Подробное описание</h3>
          <p className="mb-6">{product.longDescription}</p>
          
          <h4 className="text-lg font-semibold mb-3">Особенности и преимущества</h4>
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        
        <TabsContent value="specifications">
          <h3 className="text-xl font-semibold mb-4">Технические характеристики</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 border-b border-gray-200 font-medium">{key}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="documents">
          <h3 className="text-xl font-semibold mb-4">Документация</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.documents.map((doc, index) => (
              <div key={index} className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="mr-4 text-primary">
                  <FileText className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{doc.name}</h4>
                  <p className="text-sm text-gray-500 uppercase">{doc.type}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4 mr-1" /> Скачать
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
