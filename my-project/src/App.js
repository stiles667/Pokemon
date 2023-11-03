// Import application styles
import "./App.css";

// Import necessary components for route handling
import { Route, Routes } from "react-router-dom";

// Import application components
import Main from "./composant/Main";
import PokeDex from "./composant/PokeDex";

// Define the App component
function App() {
  return (
    // Create a container for the application
    <div className="App">
      {/* Define the routes for the application */}
      <Routes>
        {/* Route for the home page, which displays the Main component */}
        <Route path="/" element={<Main />} />
        {/* Route for the PokeDex page, which displays the PokeDex component */}
        <Route path="/PokeDex" element={<PokeDex />} />
      </Routes>
    </div>
  );
}

// Export the App component so it can be used in other parts of the application
export default App;
