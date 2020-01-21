**Chris' IndexedDB API Cheat Sheet**

Deleting a database instance.

>       
    window.indexedDB.delete("carDatabase");


Creating/Opening a database instance (Name, Version of Instance).

>       
    const request = window.indexedDB.open("carDatabase", 1);



Triggered after an error with the connection. Optional, but you should have it.

>       
    request.onerror = event => {
    console.log("Error: " + e.target.errorCode);
    };


Creates an "objectStore" in the Database Instance. Basically a table within the Database. I'm defining a "keypath" its a unique, sort of a primary key I call "carID" and I force it to autoincrement.  "target" is the only property we care about from the "on change object", so it's destructured (ie: target = event.target). onupgradeneeded will only trigger/run if there are no changes. 

>       
      // Create an object store inside the onupgradeneeded method.
      request.onupgradeneeded = ({ target }) => {
        const db = target.result;
        const objectStore = db.createObjectStore("carListing", {keyPath: "carID", autoIncrement: true });
      };

Immediately after an "objectStore" is defined but inside the onupgradeneeded, like above... We can create an Index that we will use to get information or query on. It's a "column" that might be used to pull a record. We can have as many indexes as needed. This example has the name and keypath of "carmake", and is not unique, but we can force it to be. 

>     objectStore.createIndex("carmake", "carmake", { unique: false });

Once the database has been created and established we can start to use it, the browser will trigger onsuccess. 

>       
    request.onsuccess = event => {
    console.log(request.result);
    };

**Within the onsuccess block is where all of our transactions with the database can happen...**

Within the onsuccess block: First, for simplicity, we setup the db as the result of the connection and it's configuration. Next, we setup the transaction. In this case, we are only going to be dealing with the "carListing" objectStore (we can use all), we expect an array of results, and it has read/write permissions. Also, for simplicity, we set a variable as carListingStore to handle the future transactions. 

>       
    const db = request.result;
    const transaction = db.transaction(["carListing"], "readwrite");
    const carListingStore = transaction.objectStore("carListing");
  
      
      
Within the onsuccess block: We are now able to ".add" items to the objectStore. We can also use ".put" to update when paired with a result (or "insert", if record doesn't exist)
>       
    carListingStore.put({ carmake: "Mazda", carmodel: "Rx-7" });
    carListingStore.put({ carmake: "Ford", carmodel: "Mustang" });
    carListingStore.put({ carmake: "Toyota", carmodel: "Tundra" });
    carListingStore.put({ carmake: "Honda", carmodel: "Pilot"  });
  
      
Within the onsuccess block: We can query an item by using the keypath (or as we can think of it as a primary id) by using "get".

>       
      const getRequest = carListingStore.get("1");
      getRequest.onsuccess = () => {
        console.log(getRequest.result);
      };  
      getRequest.onerror = e => {
          console.log("Error: " , e.target);
      };
    
Within the onsuccess block: We can query an item by using any "Index" we have specified by using "getAll".

>       
    
	  const carmakeIndex = carListingStore.index("carmake");
      const getRequestByMake = carmakeIndex.getAll("Honda");
      getRequestByMake.onsuccess = () => {
        console.log(getRequestByMake.result); 
      }; 
      getRequestByMake.onerror = e => {
        console.log("Error: " , e.target);
      }; 
    
    
Within the onsuccess block: We can open a Cursor request returning all of the documents/records.

>       
    
     const getCursorRequest = carListingStore.openCursor();
          getCursorRequest.onsuccess = e => {
            const cursor = e.target.result;
            if (cursor) {
              console.log(cursor.value);
              cursor.continue();
            } else {
              console.log("No documents left!");
            }
          };     
          
Within the onsuccess block: We UPDATE a record based on a get on id #4 

>       
    
     const getRequestByIdToUpdate = carListingStore.get(4);
        
          getRequestByIdToUpdate.onsuccess = () => {
            var data = getRequestByIdToUpdate.result;
            data.carmodel = "Pilot";
            var updateModelRequest = carListingStore.put(data);

            updateModelRequest.onsuccess = function() {
              console.log(getRequestByIdToUpdate);
            };
          }; 
 
 Within the onsuccess block: We can clear an objectstore. This might be done after data has been successfully transferred to a server-based database.

>       
    
     const store = transaction.objectStore("carListing");
     store.clear(); 
 
          
 
          
--

**IndexedDB Terms**

**Database** - This is the highest level of IndexedDB. It contains the object stores, which in turn contain the data you would like to persist. You can create multiple databases with whatever names you choose, but generally there is one database per app.

**Object store** - An object store is an individual bucket to store data. You can think of object stores as being similar to tables in traditional relational databases. Typically, there is one object store for each 'type' (not JavaScript data type) of data you are storing. For example, given an app that persists blog posts and user profiles, you could imagine two object stores. Unlike tables in traditional databases, the actual JavaScript data types of data within the store do not need to be consistent (for example, if there are three people in the 'people' object store, their age properties could be 53, 'twenty-five', and unknown ).

**Index** - An Index is a kind of object store for organizing data in another object store (called the reference object store) by an individual property of the data. The index is used to retrieve records in the object store by this property. For example, if you're storing people, you may want to fetch them later by their name, age, or favorite animal.

**Operation** - An interaction with the database.

**Transaction** - A transaction is wrapper around an operation, or group of operations, that ensures database integrity. If one of the actions within a transaction fail, none of them are applied and the database returns to the state it was in before the transaction began. All read or write operations in IndexedDB must be part of a transaction. This allows for atomic read-modify-write operations without worrying about other threads acting on the database at the same time.

**Cursor** - A mechanism for iterating over multiple records in database.





