import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { NavBar } from "./components/nav/NavBar";
import { Source } from "./components/source/Source";
import { ApplicationViews } from "./components/views/ApplicationViews";
import { Authorized } from "./components/views/Authorized";
import { Header } from "./components/views/Header";

export const Mybrary = () => {
    const location = useLocation()


        return (
            <div className="Mybrary">
            <div>
              {/* <NavBar /> */}
              <Header />
            </div>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
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
        )
    } 