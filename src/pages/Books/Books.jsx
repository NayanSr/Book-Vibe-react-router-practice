import { Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Book from "../../components/Book/Book";

const Books = ({ books }) => {
  // const [allBooks, setAllBooks]= useState([]);

  /* useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json')
        .then(res=>res.json())
        .then(data=>setAllBooks(data))
    },[]) */

  /*  useEffect(()=>{
      fetch('./booksData.json').then(res=>res.json()).then(data=>setAllBooks(data))
    },[]) */

  // const bookPromis=fetch('./booksData.json').then(res=>res.json())

  console.log(books);

  return (
    <div className="py-4 my-2">
      <h1 className="text-4xl font-semibold text-center">All Books</h1>
      <Suspense fallback={<h2 className="bg-green-500">Data is loading...</h2>}>
        <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4">
          {books?.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;

// https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json
