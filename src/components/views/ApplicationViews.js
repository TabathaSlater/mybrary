import { Outlet, Route, Routes } from "react-router-dom";
import { Books } from "../books/Books";
import { Library } from "../library/Library";
import { SearchContainer } from "../search/SearchContainer";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }>

        <Route path="/home" element={<Books />} />

        <Route path="/search_results" element={<SearchContainer />} />

        <Route path="/library" element={<Library />} />
      </Route>
    </Routes>
  );
};
