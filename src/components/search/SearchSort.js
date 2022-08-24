import { useState } from "react";
import Form from "react-bootstrap/Form";

export const SearchSort = ({ setTaco }) => {
  return (
    <Form.Select
      aria-label="Default select example"
      id="dropdown-basic"
      onChange={(e) => {
        setTaco(e.target.value);
      }}
    >
      <option>Sort</option>
      <option value="Newest">Newest</option>
      <option value="Oldest">Oldest</option>
    </Form.Select>
  );
};
