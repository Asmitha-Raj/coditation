import React, { useState, useEffect } from 'react';
import './App.css';
import CategoryComponent from "./components/categoryComponent.js";
import ProductComponent from "./components/productComponent.js";
import AccountMenu from "./components/menu.js";

export const appStateContext = React.createContext({});

function App() {
  const [currentState, setCurrentState] = useState("Category");
  useEffect(()=>{
    // console.log("currentState", currentState);
  },[currentState]);
  return (
    <appStateContext.Provider value={{currentState, setCurrentState}}>
      <div className="App">
        <AccountMenu />
        <h3>{currentState} Home Page</h3>
        {
          currentState === "Category" ?
            <div style={{ marginTop: 10 }}>
              <CategoryComponent />
            </div> :
            <div style={{ marginTop: 10 }}>
              <ProductComponent />
            </div>
        }
      </div>
    </appStateContext.Provider>

  );
}

export default App;
