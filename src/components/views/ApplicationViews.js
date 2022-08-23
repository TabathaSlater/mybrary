import { Outlet, Route, Routes } from "react-router-dom";
import { Books } from "../books/Books";
import { SearchBar } from "../search/SearchBar";
import { SearchContainer } from "../search/SearchContainer";

export const ApplicationViews = () => {

  return (
    <Routes>
      <Route path="/" element={
          <>
            <Outlet />
          </>
        }>

        <Route path="/home" element={ <Books />} />

        <Route path="/search_results" element={<SearchContainer />} />
        
      </Route>
    </Routes>
  );
};
