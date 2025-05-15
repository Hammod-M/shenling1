
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Factory } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
             <Factory className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold">Shenling Russia</span>
            </div>
            <p className="text-gray-400 mb-2 text-sm">
              ООО «АИЕ ГРУПП»
            </p>
            <p className="text-gray-400 mb-2 text-sm">
              ОГРН 1207700286298
            </p>
            <p className="text-gray-400 mb-6 text-sm">
              ИНН/КПП 7722490685/772201001
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Продукты
                </Link>
              </li>
               <li>
                <Link to="/advantages" className="text-gray-400 hover:text-white transition-colors">
                  Преимущества
                </Link>
              </li>
              <li>
                <Link to="/application-areas" className="text-gray-400 hover:text-white transition-colors">
                  Области применения
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Продукция</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/refrigeration" className="text-gray-400 hover:text-white transition-colors">
                  Холодильное оборудование
                </Link>
              </li>
              <li>
                <Link to="/products/compressors" className="text-gray-400 hover:text-white transition-colors">
                  Компрессоры
                </Link>
              </li>
              <li>
                <Link to="/products/heat-exchangers" className="text-gray-400 hover:text-white transition-colors">
                  Теплообменники
                </Link>
              </li>
              <li>
                <Link to="/products/ventilation" className="text-gray-400 hover:text-white transition-colors">
                  Вентиляционные системы
                </Link>
              </li>
              <li>
                <Link to="/products/rooftops" className="text-gray-400 hover:text-white transition-colors">
                  Руфтопы
                </Link>
              </li>
              <li>
                <Link to="/products/dehumidifiers" className="text-gray-400 hover:text-white transition-colors">
                  Осушители
                </Link>
              </li>
              <li>
                <Link to="/products/precision-ac" className="text-gray-400 hover:text-white transition-colors">
                  Прецизионные кондиционеры
                </Link>
              </li>
               <li>
                <Link to="/products/rack-precision-ac" className="text-gray-400 hover:text-white transition-colors">
                  Стоичные прецизионные кондиционеры
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Контактная информация</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">109052, г.Москва, ул.Нижегородская, д. 50, пом. XIV, ком.25</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">info@shenling.ru</span>
              </li>
               <li className="text-gray-400 text-xs">
                Р/счет 40702810301810000936<br/>
                АО "АЛЬФА-БАНК"<br/>
                Кор/счет 30101810200000000593<br/>
                БИК 30101810200000000593
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Shenling Russia. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
