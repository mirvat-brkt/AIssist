import React , {useState, useEffect} from "react";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import "./styles.css";
import Confirmation from "../../components/ConfirmationDialog";

const Community = () => {

    const[posts, setPosts]= useState([]);
    const[comments, setComments]= useState([]);
    const token = localStorage.getItem("token");
    const postId = localStorage.getItem('postId');
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    function handleDeleteClick() {
        setShowDeleteDialog(true);
      }
      function handleDeleteCancel() {
        setShowDeleteDialog(false);
      }

    const getPosts = {
        method: 'GET',
        url: 'http://192.168.1.6:8000/api/v0.0.1/community/posts',
        headers: {
          'content-type': 'application/json',
          'Accept' : 'application/json',
          'Authorization': 'bearer ' + token
        },
      };
  
      useEffect(() => {
        axios.request(getPosts)
            .then(response => {
                console.log(response);
                setPosts(response.data.posts);
            })
            .catch(function (error) {
                console.error();
            });
      },[token]);

      const getComments = {
        method: 'GET',
        url: 'http://192.168.1.6:8000/api/v0.0.1/posts/'+postId+'/comments',
        headers: {
          'content-type': 'application/json',
          'Accept' : 'application/json',
          'Authorization': 'bearer ' + token
        },
      };
    
      useEffect(() => {
        axios.request(getComments)
            .then(response => {
                console.log(response);
                setComments(response.data.comments);
            })
            .catch(function (error) {
                console.error();
            });
      },[token, postId]);

      const handleDeletePost = async() => {
        const postId = localStorage.getItem('postId');
        axios.delete('http://192.168.1.6:8000/api/v0.0.1/community/'+postId, {
      }, {
          headers: {
              'content-type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}` 
          }
      }).then(response => {
        if (response.data.status == "success"){
            alert("Post deleted successfully");
        }
      })
        .catch(error => {
            console.log(error);
      });
      };


    return(
        <>
            <div className="body-community">
            <Sidebar/>
            <div className="title1">
            <h1>Community Moderation</h1>
            </div>
            <div className="mainPostView">
                <div >
                    {posts.map(post => (
                    <div className="postView">
                    <div key={post.id} >
                        <div className="imageView">
                            <img src={post.profile_picture} className="profilePhoto"></img>
                            <p className="username">{post.name}</p>
                        </div>
                    </div>
                    <div className="postContent">
                        <p>{post.content}</p>
                    </div>
                    <div className="actions">
                        <div>
                        <button onClick={() => {
                            localStorage.setItem('postId', JSON.stringify(post.id));
                            console.log(post.id);
                        }} className="action-button">Comments</button>
                        </div>
                        <div>
                        <button onClick={() => {
                            localStorage.setItem('postId', JSON.stringify(post.id));
                            console.log(post.id);
                            handleDeleteClick()
                        }} className="action-button delete">Delete</button>
                        {showDeleteDialog && (
                            <Confirmation
                            message="Are you sure you want to delete this post?"
                            onCancel={handleDeleteCancel}
                            onConfirm={handleDeletePost}
                            />)};
                        </div>
                    </div>
                    </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    );

};

export default Community;