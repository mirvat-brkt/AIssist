import React, {useState, useEffect} from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Header1 from '../../components/Header1';
import CommentBox from '../../components/CommentBox';
import axios from 'axios';



const CommentsPage = () => {
  const[comments, setComments]= useState([]);
  const token = localStorage.getItem("token");
  const postId = localStorage.getItem('postId');


  const getComments = {
    method: 'GET',
    url: 'http://127.0.0.1:8000/api/v0.0.1/posts/'+postId+'/comments',
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


  const handleAddComment= (e) => {
    const [content, setContent] = useState('');

    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/v0.0.1/posts/'+postId+'/comments', {
        'content': content,
    }, {
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'bearer ' + token
        }
    })
    .then(response => {
        if (response.data.status == "success"){
            alert("Comment added");
        }
    })
    .catch(error => {
        console.log(error);
    });
};
  
    return (
      <View style={styles.commentView}>
        <Header1 title="Comments" backgroundColor='#F08080'  onPressBackButton={() => navigation.navigate('Comments')} />
        <View style={styles.mainCommentView}>
          <View>
          {comments.map(comment => (
            <View>
              <View style={styles.comment}> <Text style={styles.commentContent}>{comment.content}</Text></View>
            </View>
          ))}
          </View>
        </View>
        <View style={styles.box}>
              <CommentBox />
        </View>
      </View>
    );
  };
  
  export default CommentsPage;