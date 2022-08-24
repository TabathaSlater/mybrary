import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.css";
import { useNavigate } from "react-router-dom";

//Parent component = SearchBar
export const SearchBooks = ({ handleSearch, fetchMethod }) => {
  const navigate = useNavigate();

  return (
    <>
      <Form onSubmit={fetchMethod}>
        <Form.Group controlId="formSearch" className="searchGroup">
          <Form.Control
            type="search"
            placeholder="search books"
            className="searchField"
            onChange={(e) => {
              handleSearch(e);
            }}
          />
          <Button
            variant="secondary"
            className="search-btn"
            type="submit"
            onClick={() => {
              // e.preventDefault()
              navigate("/search_results");
            }}
          >
            Search
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};
