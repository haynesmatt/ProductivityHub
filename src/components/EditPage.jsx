import './EditPage.css'
import NavBar from './NavBar'
import { supabase } from '../client'
import { useState } from 'react';
import { useParams } from "react-router-dom";

function EditPage() {

    let id = useParams().id;

    const [post, setPost] = useState({
        title: '',
        description: ''
      });

    const handleTextInputInput = (event) => {
        const { name, value } = event.target;
        setPost(prevPost => ({
            ...prevPost,
            [name]: value
          }));
    }

    const updatePost = async (event) => {

        event.preventDefault();
    
        await supabase
            .from('Posts')
            .update({ title: post.title, description: post.description })
            .eq('id', id);
    
        window.location = '/';
    }

    return (
        <div className="EditPage">

            <NavBar />

            <div className="form-container">

                <h2>Edit Your Productivity Post</h2>

                <form className="title-form">
                    <input type="text" placeholder="Enter Title" name="title" onChange={handleTextInputInput}/>
                </form>

                <form className="decription-form">
                    <input className="title" type="text" placeholder="Enter Description" name="description" onChange={handleTextInputInput}/>
                </form>

                <input type="submit" value="Submit" className="action-button" onClick={updatePost}/>

            </div>

        </div>
    )
}

export default EditPage;