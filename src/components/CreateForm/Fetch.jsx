import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:4000/blogs";

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const handleCreateBlog = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    }).then(() => {
      setReload((prev) => !prev);
      e.target.reset();
      setEdit(false);
    });
  };
  return (
    <div>
      <form onSubmit={handleCreateBlog} action="">
        <input type="text" name="title" />
        <button>Create</button>
      </form>
      {data?.map((blog) => (
        <div key={blog.id}>
          <p>{blog.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
