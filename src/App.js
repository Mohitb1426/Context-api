import React, { createContext } from "react";
import CompA from "./components/CompA";

const fName = createContext();
const sName = createContext();
function App() {
  return (
    <>
      <fName.Provider value={'Context1'}>
        <sName.Provider value={'Context2'}>
          <CompA />
        </sName.Provider>
      </fName.Provider>
    </>
  );
}

export default App;
export { fName, sName };
