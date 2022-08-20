import React from "react";

function Loading() {
  return (
    <section style={{minHeight:"100vh"}} className="d-flex justify-content-center align-items-center">
      <div class="loader"></div>
      <span className="ms-2 fs-1 f">Loading...</span>
    </section>
  );
}

export default Loading;
