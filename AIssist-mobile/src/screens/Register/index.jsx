import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";

export default function RegisterScreen({navigation}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
     const data = {
       name:name,
       email: email,
       password: password,
     };
 
     const config = {
       method: "post",
       data,
       url: "http://127.0.0.1:8000/api/v0.0.1/register",
     };
     try {
       const res = await axios(config);
       if (res.data.status == "success") {
         await AsyncStorage.setItem("@token", res.data.authorisation.token);
         console.log("success");
       }
     } catch (error) {
       return error;
     }
   };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                 <Text style={styles.inputLabel}>  <Ionicons name="person" size={24} style={styles.icon} /> Name</Text>
                 <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  onChangeText={text => setName(text)}
                  setName={setName}
                  name={name}
                 />
            </View>
            <View style={styles.inputContainer}>
                 <Text style={styles.inputLabel}> <Ionicons name="ios-mail" size={24} style={styles.icon} /> Email</Text>
                 <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  onChangeText={text => setEmail(text)}
                  setEmail={setEmail}
                  email={email}
                 />
            </View>
            <View style={styles.inputContainer}>
                 <Text style={styles.inputLabel}> <Ionicons name="key-outline" size={24} style={styles.icon} /> Password</Text>
                 <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  onChangeText={text => setPassword(text)}
                  setPassword={setPassword}
                  password={password}
                  secureTextEntry
                 />
            </View>
            <TouchableOpacity style={styles.button} >
                 <Text style={styles.buttonText} onPress={handleRegister}>REGISTER</Text>
            </TouchableOpacity>
            <View >
                  <Text style={styles.loginText}>Already have an account? <TouchableOpacity  onPress={() => navigation.navigate('Login')}><Text style={styles.loginLink}>Login Now</Text></TouchableOpacity ></Text>
            </View>
        </SafeAreaView>
    );
}