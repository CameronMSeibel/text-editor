import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

/**
 * Write a new object to the database.
 * @param {String} content Contentful payload of the transaction.
 */
export const putDb = async (content) => {
  try{
    if(content){
      const db = await openDB("jate");
      const tx = db.transaction("jate", "readwrite");
      const store = tx.objectStore("jate");
      const result = await store.add({value: content});
      console.log("Stored: ", result)
    }
    console.log("No content to store.")
  }catch(error){
    console.error(error);
  }
}

/**
 * Get all objects in the database.
 * @returns {Object[]} all objects in the database
 */
export const getDb = async () => {
  try{
    const db = await openDB("jate");
    const tx = db.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const result = await store.getAll();
    return result;
  }catch(error){
    console.error(error);
  }
}
initdb();
