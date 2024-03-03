import { Routes, Route, NavLink } from "react-router-dom";
import Counter from "./components/Counter";
import About from "./components/About";
import NotFound from "./components/NotFound";
import TestError from "./components/TestError";
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="nav-header">
        <NavLink className="counter-logo" to="/"><img src="./images/counter-logo.png" alt="logo" />
          Counter
        </NavLink>
        <nav>
          <NavLink className="nav-link" to="/test-error-boundary">Error Boundary</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route path="/test-error-boundary" element={<TestError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <p className="text-align-center">
          Copyright &copy; 2024 Ayaoba. <br />
          All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App;
