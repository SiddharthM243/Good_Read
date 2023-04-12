import AboutPage from "./pages/AboutPage";
// import BookDetailPage from "./pages/BookDetailPage";
import BookPage from "./pages/BookPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/book" element={<BookPage/>}/>
        {/* <Route path="/bookdetail" element={<BookDetailPage/>}/> */}
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>

    </Router>
  );
}

export default App;
