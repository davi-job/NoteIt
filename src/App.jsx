import Header from "./components/layout/Header.jsx";
import Content from "./components/layout/Content.jsx";

import { useState } from "react";

function App() {
    const [activeSpace, setActiveSpace] = useState(0);

    return (
        <main>
            <div className="app_container">
                <Header
                    activeSpace={activeSpace}
                    setActiveSpace={setActiveSpace}
                />
                <Content />
            </div>
        </main>
    );
}

export default App;
