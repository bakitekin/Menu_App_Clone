import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]); // Kategorileri saklamak için bir durum (state) oluşturur ve başlangıç değerini boş bir dizi olarak ayarlar.
  const navigate = useNavigate(); // Sayfalar arasında gezinmek için navigate fonksiyonunu elde eder.

  useEffect(() => {
    axios
      .get("http://localhost:4000/categories")
      .then((response) => setCategories(response.data)) // Gelen yanıtı kullanarak categories durumunu günceller.
      .catch((error) => console.error(error));
  }, []);

  const handleCategoryClick = (category) => {
    onCategorySelect(category.name); // Seçilen kategoriyi parent bileşene iletmek için onCategorySelect fonksiyonunu çağırır.
    navigate("/menu");
  };

  return (
    <div className="bg-[#303132] p-4">
      <div className="font-extrabold text-2xl sm:p-4">
        <div className="grid grid-cols-2 gap-2 items-center justify-evenly sm:flex sm:flex-wrap text-black w-full">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-yellow-500 shadow-2xl px-4 py-4 text-center rounded-md hover:bg-opacity-85"
            >
              <button
                className="w-full"
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
