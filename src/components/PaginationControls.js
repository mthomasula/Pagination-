import { useState } from "react";

function PaginationControles({ lastPage, pageForward, pageBack }) {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          pageBack();
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          pageForward();
        }}
      >
        Next
      </button>
    </div>
  );
}

export default PaginationControles;
