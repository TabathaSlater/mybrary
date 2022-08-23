import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { NavBar } from "./components/nav/NavBar";
import { ApplicationViews } from "./components/views/ApplicationViews";
import { Authorized } from "./components/views/Authorized";
import { Header } from "./components/views/Header";

export const Mybrary = () => {
  return (
    <div className="Mybrary">
      <div>
        {/* <NavBar /> */}
        <Header />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="*"
          element={
            <Authorized>
              <>
                <NavBar />
                <ApplicationViews />
              </>
            </Authorized>
          }
        />
      </Routes>
    </div>
  );
};
