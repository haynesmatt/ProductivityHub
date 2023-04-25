import './DetailsPage.css';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { supabase } from '../client'
import NavBar from './NavBar';

const DetailsPage = () => {

    const [post, setPost] = useState([{
        id: 0,
        title: '',
        description: '',
        upvote_count: 0,
        created_at: ''
    }])
    
    let id = useParams().id;

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
              <h3 classname='description'>{post[0].description}</h3>
              <button className='upvotes-button'>❤️ {post[0].upvote_count}</button>
            </div>
        </div>
    );
  };
  
  export default DetailsPage;