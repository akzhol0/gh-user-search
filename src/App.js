import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { ContextSave } from "./components/context/index.js";

function App() {
  const [savedData, setSavedData] = useState(null);

  return (
    <div>
      <ContextSave.Provider value={{
        savedData,
        setSavedData,
      }}>
        <BrowserRouter>
          <AppRouter></AppRouter>
        </BrowserRouter>
      </ContextSave.Provider>
    </div>
  );
}

export default App;
