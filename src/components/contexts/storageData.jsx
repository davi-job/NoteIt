import React from "react";

import { useState, createContext, useEffect } from "react";
import { v4 as uuid } from "uuid";

// Deafult data
let data = {
    spaces: [
        {
            id: uuid(),
            name: "Welcome!",
            color: "#6d6",
            notes: [
                {
                    id: uuid(),
                    title: "This is a test note",
                    items: [
                        {
                            id: uuid(),
                            text: "Task 1",
                            checked: true,
                        },
                        {
                            id: uuid(),
                            text: "Task 2",
                            checked: false,
                        },
                        {
                            id: uuid(),
                            text: "Task 3",
                            checked: true,
                        },
                    ],
                },
            ],
        },
    ],
};

// Create a context
const DataContext = createContext(null);

// Create a provider component
function DataProvider({ children }) {
    // Get localData from Local Storage or use data
    const [localData, setLocalData] = useState(() => {
        const storedData = localStorage.getItem("localData");
        return storedData ? JSON.parse(storedData) : data;
    });

    // Update localData in the Local Storage when localData changes
    useEffect(() => {
        localStorage.setItem("localData", JSON.stringify(localData));
    }, [localData]);

    return (
        <DataContext.Provider value={{ localData, setLocalData }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };
