import React from "react";

function PageNumbers({ list, postPerPage, setPageNumber }) {
  const numberList = [];

  for (let i = 1; i < list.length / postPerPage; i++) {
    numberList.push(i);
  }

  const decreasePageNumber = () => {
    setPageNumber(oldNumber => {
      let index = oldNumber -1;
      if(index<=0) {
        index = numberList[numberList.length-1];
      }
      return index;
    })
  }
  
  const increasePageNumber = () => {
    setPageNumber(oldNumer => {
      let index = oldNumer + 1;
      if(index > (numberList.length)) {
        index = 1;
      }
      return index;
    })
  }

  return (
    <section className="d-flex justify-content-center mt-3">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={decreasePageNumber}>
              Previous
            </button>
          </li>
          {numberList.map((num, i) => {
            return (
              <li key={i} className="page-item">
                <button type="button" className="page-link" onClick={() => setPageNumber(num)}>
                  {num}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button className="page-link" onClick={increasePageNumber}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default PageNumbers;
