import React from 'react';
import { Text, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';

export default function LaunchScreen() {
    return(
        <SafeAreaView style={styles.mainViewLaunch}>
          <Image
          style={styles.logoLaunch} 
          source={require('../../../assets/images/Logo.png')}
            />
        </SafeAreaView >
    );
}