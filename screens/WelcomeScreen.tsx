import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { View, SafeAreaView, StatusBar, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import {COLORS, SHADOWS, images, } from '../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (

        <View style={styles.container} >
          <StatusBar style="light" />
        <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        {/* Title & Logo */}
        <View style={styles.logoContainer}>
        <View style={styles.logoView}>
          <Icon name='water-check' size={300} color={COLORS.accent} />
          </View>
        <Text variant="displayMedium" style={styles.welcomeContent} >
            D r y C h e c k
          </Text>
          
        </View>
      </LinearGradient>
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeContent: {
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
  },
  logoView: {
    display: 'flex',
    boxShadow: SHADOWS.medium,
    textAlign: 'center',
  },
})
export default WelcomeScreen