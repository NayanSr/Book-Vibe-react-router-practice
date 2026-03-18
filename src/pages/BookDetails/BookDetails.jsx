import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { addBookToLs } from "../../utility/addToLs";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  if (!id && !books) {
    return <h3>Loading...</h3>;
  }
  const clickedBook = books?.find((book) => book.bookId === parseInt(id));
  const {
    bookName,
    author,
    image,
    category,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = clickedBook;

  // console.log(id, books, clickedBook)

  const handleMarkAsRead = (id) => {
    addBookToLs(id, "readList");

   
  
    
  };
  const handleAddToWishlist = (id) => {
    addBookToLs(id, "wishlist");
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-blue-50 p-6 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.1)] overflow-hidden grid md:grid-cols-2 gap-6">
        {/* 📘 Book Image */}
        <div className="p-6 flex items-center justify-center bg-gray-50">
          <img
            src={image}
            alt={bookName}
            className="w-64 h-96 object-cover rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:scale-105 transition"
          />
        </div>

        {/* 📖 Book Info */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{bookName}</h1>
            <p className="text-gray-500 mt-1">by {author}</p>

            {/* Category */}
            <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
              {category}
            </span>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">{rating}</span>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Details */}
            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-semibold">Publisher:</span> {publisher}
              </p>
              <p>
                <span className="font-semibold">Pages:</span> {totalPages}
              </p>
              <p>
                <span className="font-semibold">Year:</span> {yearOfPublishing}
              </p>
            </div>

            {/* Review */}
            <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-5">
              {review}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => handleMarkAsRead(id)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Already Read
            </button>
            <button
              onClick={() => handleAddToWishlist(id)}
              className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
