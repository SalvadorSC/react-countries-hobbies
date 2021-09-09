import "./App.css";
import Header from "./Components/Header/Header";
/* import Main from "./Main"; */
import Footer from "./Components/Footer/Footer.js";
import Sidebar from "./Components/Sidebar/Sidebar";
import ApartadoEmpleados from "./Components/ApartadoEmpleados/ApartadoEmpleados";
import ApartadoBanderas from "./Components/ApartadoBanderas/ApartadoBanderas";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaisDetails from "./Components/PaisDetails/PaisDetails";

function App() {
  return (
    <Router>
      <Header />
      <div className="contenido">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <ApartadoEmpleados />
          </Route>
          <Route path="/paises">
            <ApartadoBanderas />
          </Route>
          <Route path="/pais/:name">
            <PaisDetails />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
