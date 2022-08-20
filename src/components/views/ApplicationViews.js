import { Route, Routes } from "react-router-dom";
import { Books } from "../books/Books";

export const ApplicationViews = () => {
  const localMybraryUser = localStorage.getItem("mybrary_user");
  const mybraryUser = JSON.parse(localMybraryUser);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="introduction">
              {""}
              Nice to see you, {mybraryUser.username}!
            </div>
            <Books />

          </>
        }>




        </Route>
    </Routes>
  );
};
