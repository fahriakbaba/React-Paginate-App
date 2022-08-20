import React from "react";

function Post({postPerPage, pageNumber,list}) {
    const lastIndexOf = postPerPage* pageNumber;
    const firstIndexOf = lastIndexOf - postPerPage;
    const post = list.slice(firstIndexOf, lastIndexOf);
  
  return (
    <ul className="list-group mt-3">
      {post.map((item) => {
        return (
          <li key={item.id} className="list-group-item list-group-item-action">
            <h6 className="text-capitalize text-success">{item.name}</h6>
            <p className="text-muted">{item.email}</p>
            <p>{item.body}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Post;
