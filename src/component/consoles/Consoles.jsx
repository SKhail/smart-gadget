import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebaseApp from '../corousal/firebase'; // Adjust the path as needed
import React, { useState, useEffect } from 'react';

export default function Consoles(props) {
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    const database = getDatabase(firebaseApp);
    const consolesRef = ref(database, 'consoles'); // Assuming the database reference is 'consoles'

    const fetchData = () => {
      onValue(consolesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setConsoles(data); // Set consoles state to the fetched data
        } else {
          setConsoles([]); // If data is null, set consoles state to an empty array
        }
      });
    };

    fetchData(); // Fetch data when component mounts

    return () => {
      // Clean up the event listener when component unmounts
      off(consolesRef);
    };
  }, []);

  // Function to add the console to the basket
  const handleAddToBasket = (consoleId) => {
    const currentConsole = consoles.find(itemObj => itemObj.key === consoleId);
    props.addToCart(currentConsole);
    // logic to add to the basket here
    console.log(`Added console with ID ${consoleId} to basket`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Consoles</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Object.values(consoles).map((console) => (
            <div key={console.key} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={console.image}
                  alt={console.model}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{console.model}</h3>
                  <p className="mt-1 text-sm text-gray-500">{console.price}</p>
                </div>
                <div className="flex items-center flex-col">
                  {/* Add button to add the item to the basket */}
                  <button
                    onClick={() => handleAddToBasket(console.key)}
                    className="mt-2 text-sm font-medium text-white bg-black px-3 py-1 rounded-md hover:bg-gray-900"
                  >
                    Add to basket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
