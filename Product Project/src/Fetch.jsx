import React, { useEffect, useState } from 'react';

function Fetch({
  posts,
  setPosts,
  selectedCategories,
  onDeletePost,
  onUpdatePost,
  loading,
  setLoading,
  error,
  setError,
  currentPage,
  onPageChange,
  sortOrder,
}) {
  const [editId, setEditId] = useState(null);
  const [newPrice, setNewPrice] = useState('');
  const [expandedIds, setExpandedIds] = useState([]);

  const postsPerPage = 4;

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5462/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError('Failed to fetch posts');
        setLoading(false);
      });
  }, [setPosts, setLoading, setError]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5462/posts/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          onDeletePost(id);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleUpdatePrice = (id) => {
    fetch(`http://localhost:5462/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((res) => res.json())
      .then((updatedPost) => {
        onUpdatePost(updatedPost);
        setEditId(null);
        setNewPrice('');
      })
      .catch((err) => console.log(err));
  };

  const handleReadMore = (id) => {
    setExpandedIds(
      expandedIds.includes(id)
        ? expandedIds.filter((eid) => eid !== id)
        : [...expandedIds, id]
    );
  };

  const sortPosts = (posts) => {
    let sorted = [...posts];
    if (sortOrder === 'price') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === '-price') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'title') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === '-title') {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }
    return sorted;
  };

  const sortedPosts = sortPosts(posts);

  const filteredPosts = selectedCategories.length
    ? sortedPosts.filter((post) => selectedCategories.includes(post.category))
    : sortedPosts;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1 className="products-heading">Products</h1>
      <div className="grid-container">
        {currentPosts.map((el) => (
          <div className="key-id" key={el.id}>
            <img src={el.image} alt="" />
            <h2 className="title">{el.title}</h2>
            <h4 className="price">$ {el.price}</h4>
            <span className="category">{el.category.replace(/_/g, ' ')}</span>
            <p className="description">
              {expandedIds.includes(el.id)
                ? el.description
                : `${el.description.slice(0, 100)}...`}
              {el.description.length > 100 && (
                <button
                  className="read-more"
                  onClick={() => handleReadMore(el.id)}
                >
                  {expandedIds.includes(el.id) ? 'Read Less' : 'Read More'}
                </button>
              )}
            </p>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
            <button onClick={() => handleEdit(el.id)}>Edit</button>
            {editId === el.id && (
              <div className="edit-panel">
                <input
                  type="number"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  placeholder="Enter new price"
                  step="0.01"
                />
                <button onClick={() => handleUpdatePrice(el.id)}>
                  Update Price
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Fetch;
