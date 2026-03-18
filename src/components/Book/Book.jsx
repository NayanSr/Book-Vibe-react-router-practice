import { IoStar } from "react-icons/io5";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {bookId, rating, publisher, image, category, bookName } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
    <div className="p-6 rounded-xl bg-gray-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] shadow-blue-400/60 hover:shadow-blue-500/80 transition">
      <img
        className="w-44 h-64 bg-cover mx-auto rounded-md"
        src={image}
        alt=""
        srcset=""
      />
      <div className="border-t-2 border-dashed mt-4"></div>
      <span className="flex justify-between px-4 my-2">
        <p className="text-green-600">{publisher}</p>
        <p className="text-green-600">{category}</p>
      </span>
      <h2 className="text-lg font-semibold text-gray-800">{bookName}</h2>
      <h4 className="flex">
        Rating: {rating}{" "}
        <span>
          <IoStar className="text-2xl text-emerald-600" />
        </span>
      </h4>
    </div>
    </Link>
  );
};

export default Book;

/* 
author: "F. Scott Fitzgerald"
bookId: 1
bookName: "The Great Gatsby"
category: "Classic"
image: "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
publisher: "Scribner"
rating: 4.5
review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
tags: (2) ['Fiction', 'Romance']
totalPages: 192
yearOfPublishing: 1925
*/
