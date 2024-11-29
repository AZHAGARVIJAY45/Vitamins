
import Vitamins from "./component/essvitamin/vitamins";
import Info from "./component/info/info";
import "./App.css"
import Ingredient from "./ingredients/ingredient";
import Latest from "./component/latest/latest";




function App() {
  return (
    <div className="App">
     <Vitamins/>
     <Info/>
     <Ingredient/>
     <Latest/>
    </div>
  );
}

export default App;
