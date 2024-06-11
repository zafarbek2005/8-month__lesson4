import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./Create.scss";
const API_URL = "http://localhost:4000/blogs";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(false);
  const [reload, setReload] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [reload]);

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${API_URL}/${id}`, {
          method: "DELETE",
        }).then(() => {
          setReload((prev) => !prev);
          Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
        });
      }
    });
  };

  const handleCreateProduct = (e) => {
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

  const handleEditProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch(`${API_URL}/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    }).then(() => {
      setReload((prev) => !prev);
      setProduct(null);
      setEdit(false);
    });
  };

  const links = products.map((product) => (
    <div className="card" key={product.id}>
      <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-83687-35537.jpg&fm=jpg" alt={product.name} />
      <div className="pr_title">
        <h1>{product.title}</h1>
        <p className="price">{product.price}$</p>
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>  
      <div className="delet">
        <div className="delet_all">
          <button onClick={() => handleDeleteProduct(product.id)}>
            Delete
          </button>
        </div>
        <div className="delet_all1">
          <button
            onClick={() => {
              setProduct(product);
              setEdit(false);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="delet_all2">
        <button
          onClick={() => {
            setProduct(null);
            setEdit(true);
          }}
        >
          Create
        </button>
      </div>
      {edit && !product ? (
        <div className="hammasi show">
          <form onSubmit={handleCreateProduct} className="form">
            <div className="all">
              <h1>Create Product</h1>
              <input type="text" name="title" placeholder="Title" required />
              <input type="text" name="price" placeholder="Price" required />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      ) : null}

      {product ? (
        <div className="forma show">
          <form onSubmit={handleEditProduct}>
            <div className="all">
              <h1>Edit Product</h1>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={product.title}
                onChange={(e) =>
                  setProduct((prev) => ({ ...prev, title: e.target.value }))
                }
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={(e) =>
                  setProduct((prev) => ({ ...prev, price: e.target.value }))
                }
                required
              />
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      ) : null}

      <div className="wrapper container">{links}</div>
    </div>
  );
};

export default Product;
