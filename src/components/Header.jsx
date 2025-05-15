
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown, ShoppingCart, Search, Factory, Layers, Briefcase, Settings2, Users2, PackageSearch } from "lucide-react";

const productCategories = [
  { title: "Холодильное оборудование", slug: "refrigeration", description: "Надежные решения для охлаждения от Shenling" },
  { title: "Компрессоры", slug: "compressors", description: "Высокопроизводительные компрессоры Shenling" },
  { title: "Теплообменники", slug: "heat-exchangers", description: "Эффективный теплообмен Shenling" },
  { title: "Вентиляционные системы", slug: "ventilation", description: "Чистый воздух с системами Shenling" },
  { title: "Руфтопы", slug: "rooftops", description: "Комплексные решения для крыш от Shenling" },
  { title: "Осушители", slug: "dehumidifiers", description: "Контроль влажности на производстве с Shenling" },
  { title: "Прецизионные кондиционеры", slug: "precision-ac", description: "Точный климат-контроль Shenling" },
  { title: "Стоичные прецизионные кондиционеры", slug: "rack-precision-ac", description: "Оптимизация для серверных стоек Shenling" },
];

const applicationAreas = [
  { title: "Центры обработки данных", slug: "data-centers", description: "Энергоэффективные решения для ЦОД." },
  { title: "Промышленные процессы", slug: "industrial-processes", description: "Надежное оборудование для промышленности." },
  { title: "Производство литиевых батарей", slug: "lithium-battery", description: "Контроль микроклимата для производства." },
  { title: "Накопители энергии (BESS)", slug: "bess", description: "Терморегуляция для накопителей энергии." },
  { title: "Энергетика", slug: "power-industry", description: "Решения для гидро- и ветроэнергетики." },
  { title: "Химическая промышленность", slug: "chemical-industry", description: "Антикоррозийные и взрывозащищенные системы." },
  { title: "Специализированные объекты", slug: "specialized-facilities", description: "Чистые помещения и лаборатории." },
  { title: "Транспортная инфраструктура", slug: "transport-infrastructure", description: "Решения для метро и поездов." },
  { title: "Аэропорты", slug: "airports", description: "Оборудование для ангаров и ВПП." },
  { title: "Медицина", slug: "medicine", description: "Стерильные решения для здравоохранения." },
  { title: "Атомная энергетика", slug: "nuclear-power", description: "Сейсмостойкое оборудование для АЭС." },
  { title: "Нефтегазовый сектор", slug: "oil-gas", description: "Криогенные установки и рекуперация ЛОС." },
  { title: "Обработка осадков", slug: "sludge-treatment", description: "Низкотемпературные сушилки." },
  { title: "Премиум-сегмент", slug: "premium-segment", description: "Энергоэффективные решения для отелей." },
  { title: "Муниципальные объекты", slug: "municipal-commercial", description: "Энергосбережение для городов." },
];

const productsByApplicationType = [
    { title: "Все серии", slug: "all-series", description: "Универсальные решения для всех отраслей." },
    { title: "Серия накопителей энергии", slug: "energy-storage-series", description: "Блок контроля температуры жидкостного охлаждения." },
    { title: "Серия прямого расширения (DX)", slug: "dx-series", description: "Кондиционеры, осушители и чистые кондиционеры." },
    { title: "Серия хостов", slug: "host-series", description: "Чиллеры и тепловые насосы." },
    { title: "Конечное оборудование", slug: "terminal-equipment", description: "Осушители, блоки кондиционирования, фанкойлы." },
    { title: "Серия ИКТ", slug: "ict-series", description: "Прецизионные кондиционеры для ЦОД и офисов." },
    { title: "Серия АЭС", slug: "npp-series", description: "Оборудование для атомных электростанций." },
    { title: "Экологическая серия", slug: "eco-series", description: "Обработка отходов, рекуперация газов, мониторинг." },
    { title: "Морская серия", slug: "marine-series", description: "Кондиционеры и чиллеры для судов." },
];


const ListItem = React.forwardRef(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Factory className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl">Shenling Russia</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink to="/" className={navigationMenuTriggerStyle()}>
                  Главная
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Продукция</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {productCategories.map((category) => (
                      <ListItem
                        key={category.title}
                        title={category.title}
                        to={`/products/${category.slug}`}
                      >
                        {category.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Продукция по применению</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-3">
                    {productsByApplicationType.map((appType) => (
                      <ListItem
                        key={appType.slug}
                        title={appType.title}
                        to={`/products-by-application/${appType.slug}`}
                      >
                        {appType.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Преимущества</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                     <ListItem to="/advantages/professional-solutions" title="Профессиональные решения">
                        Маркетинг, НИОКР, производство, сервис, инжиниринг.
                      </ListItem>
                      <ListItem to="/advantages/custom-plan" title="Индивидуальный план">
                        Персональный подход и решения от Shenling.
                      </ListItem>
                      <ListItem to="/advantages/smart-manufacturing" title="Интеллектуальное производство">
                        Digital lean, IoT, облачные технологии.
                      </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Области применения</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-3">
                    {applicationAreas.slice(0, 9).map((area) => (
                      <ListItem
                        key={area.slug}
                        title={area.title}
                        to={`/application-areas/${area.slug}`}
                      >
                        {area.description}
                      </ListItem>
                    ))}
                     <ListItem to="/application-areas" title="Все области применения" className="md:col-span-2 lg:col-span-3 text-center font-semibold">
                        Посмотреть все 15 областей применения решений Shenling.
                      </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to="/about" className={navigationMenuTriggerStyle()}>
                  О компании
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink to="/contact" className={navigationMenuTriggerStyle()}>
                  Контакты
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button>
              <ShoppingCart className="mr-2 h-5 w-5" /> Запрос
            </Button>
          </div>

          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t bg-background"
        >
          <nav className="flex flex-col space-y-1 p-4">
            <NavLink to="/" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${ isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent" }`} onClick={toggleMobileMenu}>Главная</NavLink>
            
            <div className="px-3 py-2">
              <span className="text-base font-medium text-muted-foreground">Продукция</span>
              <ChevronDown className="inline h-4 w-4 ml-1" />
            </div>
            <div className="pl-6 flex flex-col space-y-1">
              {productCategories.map((category) => (
                <NavLink key={category.slug} to={`/products/${category.slug}`} className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${ isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent" }`} onClick={toggleMobileMenu}>{category.title}</NavLink>
              ))}
            </div>

            <div className="px-3 py-2">
              <span className="text-base font-medium text-muted-foreground">Продукция по применению</span>
              <ChevronDown className="inline h-4 w-4 ml-1" />
            </div>
            <div className="pl-6 flex flex-col space-y-1">
              {productsByApplicationType.slice(0,5).map((appType) => (
                <NavLink key={appType.slug} to={`/products-by-application/${appType.slug}`} className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${ isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent" }`} onClick={toggleMobileMenu}>{appType.title}</NavLink>
              ))}
               <NavLink to="/products-by-application" className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${ isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent" }`} onClick={toggleMobileMenu}>Все серии</NavLink>
            </div>

            <div className="px-3 py-2">
              <span className="text-base font-medium text-muted-foreground">Преимущества</span>
              <ChevronDown className="inline h-4 w-4 ml-1" />
            </div>
            <div className="pl-6 flex flex-col space-y-1">
                <NavLink to="/advantages/professional-solutions" className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${ isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent" }`} onClick={toggleMobileMenu}>Профессиональные решения</NavLink>
                <NavLink to="/advantages/custom-plan" className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${ isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent" }`} onClick={toggleMobileMenu}>Индивидуальный план</NavLink>
                <NavLink to="/advantages/smart-manufacturing" className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${ isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent" }`} onClick={toggleMobileMenu}>Интеллектуальное производство</NavLink>
            </div>

            <div className="px-3 py-2">
              <span className="text-base font-medium text-muted-foreground">Области применения</span>
              <ChevronDown className="inline h-4 w-4 ml-1" />
            </div>
            <div className="pl-6 flex flex-col space-y-1">
              {applicationAreas.slice(0,5).map((area) => ( 
                <NavLink key={area.slug} to={`/application-areas/${area.slug}`} className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${ isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent" }`} onClick={toggleMobileMenu}>{area.title}</NavLink>
              ))}
               <NavLink to="/application-areas" className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${ isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent" }`} onClick={toggleMobileMenu}>Все области</NavLink>
            </div>

            <NavLink to="/about" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${ isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent" }`} onClick={toggleMobileMenu}>О компании</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${ isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent" }`} onClick={toggleMobileMenu}>Контакты</NavLink>
            
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" className="w-full"><Search className="mr-2 h-5 w-5" /> Поиск</Button>
              <Button className="w-full"><ShoppingCart className="mr-2 h-5 w-5" /> Запрос</Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export default Header;
