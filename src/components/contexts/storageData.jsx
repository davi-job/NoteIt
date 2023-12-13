import React from "react";
import { useState, createContext } from "react";

let data = {
    spaces: [
        {
            id: 0,
            name: "Job Uniformes",
            color: "#66f",
            notes: [
                {
                    id: 0,
                    title: "Lista de compras",
                    items: [
                        {
                            text: "Arroz",
                            checked: false,
                        },
                        {
                            text: "Feijão",
                            checked: false,
                        },
                        {
                            text: "Macarrão",
                            checked: false,
                        },
                    ],
                },

                {
                    id: 1,
                    title: "Lista de outras coisas",
                    items: [
                        {
                            text: "lorem ipsum",
                            checked: false,
                        },
                        {
                            text: "Ipsum lorem etc",
                            checked: false,
                        },
                    ],
                },

                {
                    id: 2,
                    title: "To-do",
                    items: [
                        {
                            text: "Check my e-mails",
                            checked: false,
                        },
                        {
                            text: "Make breakfast",
                            checked: false,
                        },
                        {
                            text: "Lorem ipsum dolor sit amet",
                            checked: false,
                        },
                    ],
                },
            ],
        },

        {
            id: 1,
            name: "Casa da Gente",
            color: "#f66",
            notes: [
                {
                    id: 0,
                    title: "Lista de coisas",
                    items: [
                        {
                            text: "coisa 1",
                            checked: true,
                        },
                        {
                            text: "Coisa 2",
                            checked: false,
                        },
                        {
                            text: "Coisa 3",
                            checked: true,
                        },
                    ],
                },

                {
                    id: 1,
                    title: "Games list",
                    items: [
                        {
                            text: "Red dead redemption 2",
                            checked: false,
                        },
                        {
                            text: "Lethal company 3: The revenge of the company",
                            checked: false,
                        },
                    ],
                },

                {
                    id: 2,
                    title: "To-do",
                    items: [
                        {
                            text: "Check my e-mails",
                            checked: false,
                        },
                        {
                            text: "Make breakfast",
                            checked: false,
                        },
                        {
                            text: "Lorem ipsum dolor sit amet",
                            checked: false,
                        },
                    ],
                },
            ],
        },

        {
            id: 2,
            name: "Some name",
            color: "#6f6",
            notes: [
                {
                    id: 0,
                    title: "Lista de compras",
                    items: [
                        {
                            text: "Arroz",
                            checked: false,
                        },
                        {
                            text: "Feijão",
                            checked: false,
                        },
                        {
                            text: "Macarrão",
                            checked: false,
                        },
                    ],
                },

                {
                    id: 1,
                    title: "Lista de outras coisas",
                    items: [
                        {
                            text: "lorem ipsum",
                            checked: false,
                        },
                        {
                            text: "Ipsum lorem etc",
                            checked: false,
                        },
                    ],
                },

                {
                    id: 2,
                    title: "To-do",
                    items: [
                        {
                            text: "Check my e-mails",
                            checked: false,
                        },
                        {
                            text: "Make breakfast",
                            checked: false,
                        },
                        {
                            text: "Lorem ipsum dolor sit amet",
                            checked: false,
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
    const [localData, setLocalData] = useState(data);

    return (
        <DataContext.Provider value={{ localData, setLocalData }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };
