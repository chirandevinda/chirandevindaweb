import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
// import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Projects from "./components/projects/projects";
import Certificate from "./components/certificates/Certificate";
import Education from "./components/education/education";

import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Education/>
      <Projects/>
      <Certificate/>
      {/* <ProductList /> */}
      <Contact />
    </div>
  );
};

export default App;
