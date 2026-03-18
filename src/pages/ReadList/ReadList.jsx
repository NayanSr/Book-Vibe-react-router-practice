import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { getStoredDataFromLs } from "../../utility/addToLs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import Book from "../../components/Book/Book";

const ReadList = () => {
    const[readList, setReadList]=useState([]);
  const books = useLoaderData();

  useEffect(() => {
    const readBooksIdFromLs = getStoredDataFromLs("readList");
    const readBooksIdFromLsToNum= readBooksIdFromLs.map(i=>parseInt(i));
    const readBooks= books.filter(book=>readBooksIdFromLsToNum.includes(book.bookId));
    setReadList(readBooks)

    // console.log(readBooksIdFromLs, readBooksIdFromLsToNum, readBooks);
  }, []);
  return (
    <Tabs>
      <TabList>
        <Tab>Read List</Tab>
        <Tab>Wish List</Tab>
      </TabList>

      <TabPanel>
        <h2>Books I have read: {readList.length}</h2>
       <div className="w-1/4 mx-auto flex flex-col gap-4">
         {
            readList.map(b=><Book book={b} key={b.id}/>)
        }
       </div>
      </TabPanel>
      <TabPanel>
        <h2>Books I want to read</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ReadList;
