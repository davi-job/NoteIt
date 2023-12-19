import React from "react";

import { useContext, useState } from "react";
import { DataContext } from "../contexts/storageData";

function Task({ item, notes, setNotes }) {
    const { localData, setLocalData } = useContext(DataContext);

    function editTask(id, text) {
        // Find the note that contains the item
        for (const note of notes) {
            for (const item of note.items) {
                if (item.id === id) {
                    // Update the item
                    item.text = text;
                }
            }
        }
    }

    function deleteTask(id) {
        // Create a new copy of the notes array
        let updatedNotes = notes;

        // Find the note that contains the item
        for (const note of updatedNotes) {
            let index = note.items.findIndex((item) => item.id === id);
            if (index !== -1) {
                // Remove the item
                note.items.splice(index, 1);

                break;
            }
        }

        setNotes(updatedNotes);
    }

    return (
        <li className="content__note-item" key={item.id}>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                    item.checked = !item.checked;
                    setLocalData({
                        ...localData,
                    });
                }}
            />

            <div
                spellCheck={false}
                suppressContentEditableWarning={true}
                contentEditable="true"
                onInput={(e) => editTask(item.id, e.currentTarget.textContent)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        e.currentTarget.blur();
                    }
                }}
                onBlur={(e) => {
                    if (e.currentTarget.textContent === "") {
                        deleteTask(item.id);
                    }

                    setLocalData({ ...localData });
                }}
            >
                {item.text}
            </div>
        </li>
    );
}

export default Task;
