import { Link, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/Navbar';

import HomePage from './Pages/Home';
import SignUpForm from './components/form/Form';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
