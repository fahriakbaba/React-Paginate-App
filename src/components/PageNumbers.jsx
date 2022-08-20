import React from "react";

function PageNumbers({ list, postPerPage, setPageNumber }) {
  const numberList = [];

  for (let i = 1; i < list.length / postPerPage; i++) {
    numberList.push(i);
  }

  console.log("pagenumbers: ", numberList);

  return (
    <section className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#/">
              Previous
            </a>
          </li>
          {/* <li className="page-item">
            <a className="page-link" href="#7">
              1
            </a>
          </li> */}
          {numberList.map((num) => {
            return (
              <li className="page-item">
                <a className="page-link" href="#7">
                  {num}
                </a>
              </li>
            );
          })}
          <li className="page-item">
            <a className="page-link" href="#/">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default PageNumbers;
