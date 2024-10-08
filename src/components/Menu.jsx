import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Menu = ({ selectedCategory }) => {
  // selectedCategory prop'unu alır
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]); // Filtrelenmiş menü öğelerini saklamak için bir durum

  const navigate = useNavigate();

  useEffect(() => {
    axios("http://localhost:4000/menu")
      .then((response) => {
        setMenuItems(response.data);
        setFilteredItems(response.data); // Başlangıçta tüm öğeleri göster
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Eğer bir kategori seçildiyse menüyü filtrele
      const filtered = menuItems.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(menuItems); // Eğer kategori seçili değilse tüm menüyü göster
    }
  }, [selectedCategory, menuItems]); // selectedCategory veya menuItems değiştiğinde bu effect çalışır

  return (
    <div className="bg-[#303132] w-full h-full min-h-screen p-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 place-items-center">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-black text-yellow-500 rounded-lg shadow-2xl overflow-hidden w-full max-w-lg h-[500px] flex flex-col"
          >
            <img
              className="w-full h-1/2 object-cover"
              src={item.img}
              alt={item.title}
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start sm:gap-2 mb-4">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-xl font-semibold">${item.price}</p>
                </div>
                <p className="text-white">{item.desc}</p>
              </div>
              <button
                className="bg-gray-400 hover:opacity-80 text-black font-bold py-2 px-4 rounded w-full mt-4"
                onClick={() => navigate("/menu")}
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
