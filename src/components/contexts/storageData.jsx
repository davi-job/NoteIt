import React from "react";
import { useState, createContext, useEffect } from "react";

let data = {
    spaces: [
        {
            id: 0,
            name: "Welcome!",
            color: "#6d6",
            notes: [
                {
                    id: 0,
                    title: "This is a test note",
                    items: [
                        {
                            id: 0,
                            text: "Task 1",
                            checked: true,
                        },
                        {
                            id: 1,
                            text: "Task 2",
                            checked: false,
                        },
                        {
                            id: 2,
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
    const [localData, setLocalData] = useState(() => {
        const storedData = localStorage.getItem("localData");
        return storedData ? JSON.parse(storedData) : data;
    });

    useEffect(() => {
        localStorage.setItem("localData", JSON.stringify(localData));
        console.log("localData updated");
    }, [localData]);

    return (
        <DataContext.Provider value={{ localData, setLocalData }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };
