import './App.css';
import { Routes, Route } from "react-router";
import SearchActivities from "./search-act/index.js";
import UserComponent from './user/index.js';
import HomeComponent from './homepage';
import LoginComponent from './login-page';


function App() {
  return (
    <div className={"container"}>
      {/* <h1>This is Real Plus1!</h1> */}
      <Routes>
        <Route path="/user/search-act" element={<SearchActivities />} />
        <Route path="/user" element={<UserComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
