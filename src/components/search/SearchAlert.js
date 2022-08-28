import { Button, Alert } from "react-bootstrap";

export const SearchAlert = ({ handleCloseAlert }) => {
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>Success!</Alert.Heading>
        <p>Your book has been added</p>
      </Alert>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}>
        <Button
          variant="secondary"
          style={{ margin: "1.5%" }}
          onClick={(clickEvent) => {
            handleCloseAlert(clickEvent);
          }}
        >Close
        </Button>
      </div>
    </div>
  );
};
