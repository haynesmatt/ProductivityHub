import './App.css';
import NavBar from './components/NavBar'
import Card from './components/Card'
import { supabase } from './client'
import { useState, useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState([{
    id: 0,
    title: '',
    description: '',
    upvote_count: 0,
    created_at: ''
  }]);

  useEffect(() => {
  const fetchPosts = async () => {
    const {data} = await supabase
      .from('Posts')
      .select()
      .order('created_at', { ascending: true })

      // set state of posts
      setPosts(data);
  }
  fetchPosts()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <div className="sorting">
        <h4>Order by:</h4>
        <button>Newest</button>
        <button>Most Popular</button>
      </div>

      <div className="cards">
        {posts.map(post => (
          <Card id={post.id} title={post.title} description={post.description} upvote_count={post.upvote_count} date={post.created_at.toLocaleString()} />
        ))}
      </div>

    </div>
  )
}

export default App;