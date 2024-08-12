import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleCategoryClick = (category) => {
    onCategorySelect(category.name);
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
