// Components
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import PrivateRoute from "./PrivateRoute";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer position="top-right" />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="*" element={<Error404 />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
