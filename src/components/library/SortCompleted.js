import Form from "react-bootstrap/Form";

export const SortCompleted = ({setSortedBooks}) => {
  return (
    <Form.Select
      aria-label="Default select example"
      id="dropdown-basic"
      onChange={(e) => {
        setSortedBooks(e.target.value);
      }}
    >
      <option>Sort</option>
      <option value="Newest">Newest</option>
      <option value="Oldest">Oldest</option>
    </Form.Select>
  );
};
