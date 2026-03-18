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
    alert(`This book is already exist in ${keyName} `);
  } else {
    storedBooksData.push(id);
    const data = JSON.stringify(storedBooksData);
    localStorage.setItem(keyName, data);
  }
};


export {  addBookToLs, getStoredDataFromLs };

