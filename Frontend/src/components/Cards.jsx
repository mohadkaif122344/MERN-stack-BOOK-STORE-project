const Cards = ({ item }) => {
  return (
    <div className="mt-4 my-3 p-4">
      <div
        className="w-80 h-96 bg-white dark:bg-slate-800
        rounded-xl shadow-lg overflow-hidden
        border border-gray-200 dark:border-gray-700
        hover:scale-105 hover:shadow-2xl
        duration-300"
      >
        <div className="h-48 bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover "
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white truncate">
              {item.name}
            </h2>
            <span className="text-xs bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400 px-2 py-1 rounded-full whitespace-nowrap">
              {item.category}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {item.title}
          </p>
          <div className="flex items-center justify-between mt-6">
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              ${item.price}
            </span>
            <button
              className="px-4 py-2 rounded-full
              border border-pink-500 text-pink-500
              hover:bg-pink-500 hover:text-white
              duration-200 cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;