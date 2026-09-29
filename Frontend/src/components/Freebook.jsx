import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { AuthContext } from "../context/AuthProvider";

const Freebook = () => {
  const [book, setBook] = useState([]);
const {API} = useContext(AuthContext);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${API}/book`);
        const data = res.data.filter(
          (data) => data.category === "Free"
        ).slice(0,6);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2 text-black dark:text-white">
            Free Offered Courses
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
        <div className="mt-5 flex gap-32 overflow-x-auto pb-4 scrollbar-hide">
          {book.map((item) => (
            <div
              key={item.id}
              className="w-[280px] min-w-[280px] shrink-0"
            >
              <Cards item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Freebook;