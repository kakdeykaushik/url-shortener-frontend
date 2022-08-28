import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';
import RegisterPage from './pages/register'; 
import LoginPage from "./pages/login";
import CreatePage from "./pages/create";
import AdminPage from "./pages/admin";


function App() {
  return (
    <BrowserRouter>
    <div className="container dark">
        <div className="app">
          <Routes>
            <Route path="/" element={<Navigate replace to="/register" />} />
            <Route path="/register/" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create" name="create" exact element={<CreatePage />} />
            <Route path="/admin/:slug" element={<AdminPage />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
