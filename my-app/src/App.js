import React, { Suspense, lazy } from "react";
import "./App.css";

// Lazy load components
const Vitamins = lazy(() => import("./component/essvitamin/vitamins"));
const Info = lazy(() => import("./component/info/info"));
const Ingredient = lazy(() => import("./component/ingredients/ingredient"));
const Latest = lazy(() => import("./component/latest/latest"));
const Contact = lazy(() => import("./component/contact/contact"));

function App() {
  return (
    <div className="App">
      
      <Suspense fallback={<div>Loading...</div>}>
        <Vitamins />
        <Info />
        <Ingredient />
        <Latest />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
