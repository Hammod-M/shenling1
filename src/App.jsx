import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import AdvantagesPage from "@/pages/AdvantagesPage";
import ApplicationAreasPage from "@/pages/ApplicationAreasPage";
import ProductsByApplicationPage from "@/pages/ProductsByApplicationPage";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
   const repoName = "/shenling1/";
   return (
      <HelmetProvider>
         <Router basename={repoName}>
            <Helmet>
               <title>Shenling Russia - Промышленное Оборудование</title>
               <meta
                  name="description"
                  content="Shenling Russia - официальное представительство китайского завода Shenling. Поставка промышленного оборудования."
               />
            </Helmet>

            <div className="flex flex-col min-h-screen">
               <Header />
               <main className="flex-grow">
                  <Routes>
                     <Route path="/" element={<HomePage />} />
                     <Route path="/products" element={<ProductsPage />} />
                     <Route
                        path="/products/:category"
                        element={<ProductsPage />}
                     />
                     <Route
                        path="/products/:category/:id"
                        element={<ProductDetailPage />}
                     />
                     <Route
                        path="/products-by-application"
                        element={<ProductsByApplicationPage />}
                     />
                     <Route
                        path="/products-by-application/:seriesSlug"
                        element={<ProductsByApplicationPage />}
                     />
                     <Route path="/advantages" element={<AdvantagesPage />} />
                     <Route
                        path="/advantages/:section"
                        element={<AdvantagesPage />}
                     />
                     <Route
                        path="/application-areas"
                        element={<ApplicationAreasPage />}
                     />
                     <Route
                        path="/application-areas/:areaSlug"
                        element={<ApplicationAreasPage />}
                     />
                     <Route path="/about" element={<AboutPage />} />
                     <Route path="/contact" element={<ContactPage />} />
                  </Routes>
               </main>
               <Footer />
            </div>
            <Toaster />
         </Router>
      </HelmetProvider>
   );
};

export default App;
