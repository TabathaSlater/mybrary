import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export const SearchPlaces = ({ handleLocation, fetchPlaces }) => {
  const navigate = useNavigate();

  return (
    <article className="place_article">

      <h3 className="place_header">Find Libraries</h3>
      <div className="place_info">
        Please enter your location with the city and state separated by a comma, and the state as an abbreviation.
        Example: Charleston, WV
      </div>
      <Form onSubmit={fetchPlaces}>
        <Form.Group controlId="formSearch" className="place_search">
          <div className="place_inputs">
            <Form.Control
              type="search"
              placeholder="City, State Abbreviation"
              className="searchField"
              onChange={(e) => {
                handleLocation(e);
              }}
            />
            <Button
              variant="secondary"
              className="search-btn"
              type="submit"
              onClick={(e) => {
                // e.preventDefault()
                navigate('/search_places')
              }}
            >Search
            </Button>
          </div>
        </Form.Group>
      </Form>
    </article>
  )
}