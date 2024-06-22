import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favs from "./Pages/Favs";
import Detail from "./Pages/Detail";
import Contact from "./Pages/Contact";
import { routes } from "./utils/routes";
import Layout from "./Layout/Layout";
import { useOdontoContext } from './Context/Context';


function App() {
  const { state } = useOdontoContext();
  const { darkMode } = state;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
          <Route path={routes.favs} element={<Favs/>}/>
          <Route path="/dentist/:id" element={<Detail/>}/>
          <Route path='*' element={<h1>Error 404 - Page not found</h1>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
