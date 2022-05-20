import "./App.css";
import Login from "./Components/Login";
import Sign from "./Components/Sign";
import Page from "./Components/Page";
import Uploads from "./Components/Uploads/Uploads";
import Slides from "./Components/SlideNav/Slides";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log(process.env.REACT_APP_SERVER_URL,"urlll")
  return (
    <>
    <h1>Welcome</h1>
     <Slides/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Page" element={<Page />} />
          <Route path="/Upload" element={<Uploads/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
