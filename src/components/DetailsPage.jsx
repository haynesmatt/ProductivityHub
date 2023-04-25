import './DetailsPage.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { supabase } from '../client'
import NavBar from './NavBar';

const DetailsPage = () => {

    let id = useParams().id;

    const [post, setPost] = useState([{
        id: 0,
        title: '',
        description: '',
        upvote_count: 0,
        created_at: ''
    }])

    const deletePost = async (event) => {
      event.preventDefault();
  
      await supabase
        .from('Posts')
        .delete()
        .eq('id', props.id);
  
        window.location = "/";
    }

    const updateLikes = async (event) => {

      event.preventDefault();
  
      await supabase
          .from('Posts')
          .update({ upvote_count: post[0].upvote_count + 1 })
          .eq('id', id);
  
      window.location = `/details/${post[0].id}`;
  }

    useEffect (() => {
        const fetchPost = async () => {

            const { data } = await supabase
            .from('Posts')
            .select()
            .eq('id', id);

            setPost(data);
        }
        fetchPost();
    }, []);

    return (
        <div className='DetailsPage'>
            <NavBar />
            <div className="info">
              <h5 className='date'>{post[0].created_at}</h5>
              <h2 className='title'>{post[0].title}</h2>
              <h3 className='description'>{post[0].description}</h3>
              <button className='upvotes-button' onClick={updateLikes}>❤️ {post[0].upvote_count}</button>
              <Link to={`/edit/${post[0].id}`}>
                <button className='edit-button'>Edit Post</button>
              </Link>
              <button className='delete-button' onClick={deletePost}>Delete Post</button>
            </div>
        </div>
    );
  };
  
  export default DetailsPage;