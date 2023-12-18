import Header from "./components/layout/Header.jsx";
import Content from "./components/layout/Content.jsx";

import { useState, useContext } from "react";
import { DataContext } from "./components/contexts/storageData.jsx";

function App() {
    const { localData, setLocalData } = useContext(DataContext);

    const [activeSpace, setActiveSpace] = useState(0);

    return (
        <main>
            <div className="app_container">
                <Header
                    activeSpace={activeSpace}
                    setActiveSpace={setActiveSpace}
                />

                <Content activeSpace={activeSpace} />
            </div>
        </main>
    );
}

export default App;
