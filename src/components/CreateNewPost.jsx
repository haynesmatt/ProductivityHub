import './CreateNewPost.css'
import NavBar from './NavBar'
import { supabase } from '../client'
import { useState } from 'react';

function CreateNewPost() {

    const [post, setPost] = useState({
        title: '',
        description: '',
        upvote_count: 0
      });

    const handleTextInputInput = (event) => {
        const { name, value } = event.target;
        setPost(prevPost => ({
            ...prevPost,
            [name]: value
          }));
    }

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
        .from('Posts')
        .insert({title: post.title, description: post.description})
        .select();

        window.location = "/";
    }

    return (
        <div className="CreateNewPost">

            <NavBar />


            <div className="form-container">

                <h2>Create A New Productivity Post</h2>

                <form className="title-form">
                    <input type="text" placeholder="Enter Title" name="title" onChange={handleTextInputInput}/>
                </form>

                <form className="decription-form">
                    <input className="title" type="text" placeholder="Enter Description" name="description" onChange={handleTextInputInput}/>
                </form>

                <input type="submit" value="Submit" className="action-button" onClick={createPost}/>

            </div>

        </div>
    )
}

export default CreateNewPost;