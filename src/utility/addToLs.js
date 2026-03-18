import Swal from "sweetalert2";

const getStoredDataFromLs = (keyName) => {
  const storedBooksSTR = localStorage.getItem(keyName);
  if (storedBooksSTR) {
    const storedBooksData = JSON.parse(storedBooksSTR);
    return storedBooksData;
  } else {
    return [];
  }
};

const addBookToLs = (id,keyName) => {
  const storedBooksData = getStoredDataFromLs(keyName);

  if (storedBooksData.includes(id)) {
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: `This book is already exist in ${keyName} `,
});
    return 'exist'
  } else {
    storedBooksData.push(id);
    const data = JSON.stringify(storedBooksData);
    localStorage.setItem(keyName, data);
    Swal.fire({
          title: `Added to ${keyName} list`,
          icon: "success",
          draggable: true,
        });
  }
};


export {  addBookToLs, getStoredDataFromLs };

