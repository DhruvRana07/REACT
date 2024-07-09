import { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Fetch from './Fetch';
import Filter from './Filter';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerPage = 6;

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5462/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch posts');
        setLoading(false);
      });
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategories.length === 0 || selectedCategories.includes(post.category))
  );

  return (
    <div className="app-container">
      <Form onAddPost={handleAddPost} />
      <Filter
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        setSortOrder={handleSortChange}
        onSearchChange={setSearchQuery}
      />
      <Fetch
        posts={filteredPosts}
        setPosts={setPosts}
        selectedCategories={selectedCategories}
        onDeletePost={handleDeletePost}
        onUpdatePost={handleUpdatePost}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        onPageChange={handlePageChange}
        sortOrder={sortOrder}  // Pass sortOrder as a prop
      />
    </div>
  );
}

export default App;
