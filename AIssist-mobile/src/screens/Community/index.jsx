import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CommunityScreen() {
    const[postContent,setPostContent]= useState('');
    const[posts, setFeed]= useState([]);
    const token = localStorage.getItem("token");

    const getPosts = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/v0.0.1/community/posts',
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
                setFeed(response.data.posts);
            })
            .catch(function (error) {
                console.error();
            });
      },[]);
      return(
        <SafeAreaView>
            <Header/>
            <View style={styles.main}>
                <Text style={styles.Heading}>Community</Text>
                <View style={styles.TextInputView}>
                    <TextInput value={postContent} onChangeText={(val)=>setPostContent(val)} multiline={true}
        numberOfLines={20}
        placeholder="Enter your text here..." style={styles.TextInput}></TextInput>
                </View>
                <View style={styles.mainPostView}>
                        <View style={styles.postView}>
      {posts.map(post => (
        <View key={post.id} style={styles.postTitle}>
            <View style={styles.imageView}>
                <Image style={styles.profilePhoto} source={{uri:post.profile_picture}}></Image>
                <Text style={styles.username}>{post.name}</Text>
          </View>
          <View>options</View>
        </View>
      ))}
    </View>
                </View>
            
            </View>
        </SafeAreaView>
    );
}