import { Routes, Route } from "react-router-dom";
import routeConstant from "./route/routeConstants";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Rooms from "./views/Rooms/Rooms";
import RestoandBar from "./views/RestoandBar/RestoandBar";
import Blog from "./views/Blog/Blog";
import Contact from "./views/Contact/Contact";
import Navigation from "./Component/navigation";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path={routeConstant.HOME} element={<Home />} />
        <Route path={routeConstant.ABOUT} element={<About />} />
        <Route path={routeConstant.ROOMS} element={<Rooms />} />
        <Route path={routeConstant.RESTOANDBAR} element={<RestoandBar />} />
        <Route path={routeConstant.BLOGS} element={<Blog />} />
        <Route path={routeConstant.CONTACT} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
