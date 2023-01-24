import { openDB } from 'idb';

//Create a function that can be used to start up the database
const initdb = async () =>
//Create a databased named jate and use version 1
  openDB('jate', 1, {
    //Set the database schema if not already defined
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      //Create an object store for our data in side of the jate database
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that takes some content and adds it to the IndexedDB database using the idb module
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1); //create connection to the jate database
  const tx = jateDb.transaction('jate', 'readwrite'); //create a new transaction and specify database and data priveleges
  const store = tx.objectStore('jate'); //open the desired object store
  const request = store.put({ id: 1, value: content }); //.put() method to pass in content to be udpated
  const result = await request; //confirm request
  console.log('🚀 - data saved to the database', result.value);
};

// Method that gets content from the IndexedDB database using the idb module
export const getDb = async () => {
  console.log('GET from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  result
    ? console.log('🚀 - data retrieved from the database', result.value)
    : console.log('🚀 - data not found in the database');
  // Check if a variable is defined and if it is, return it. See MDN Docs on Optional Chaining (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
  return result?.value;
};

initdb();
