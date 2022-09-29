/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import styles from './components/externalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
//   const [IncommingData, setIncommingData] = useState([]);

useEffect(() => {
    replaceScreen();
  }, []);

  const replaceScreen = async () => {
    try {
      AsyncStorage.getItem('@check').then(value => {
        if (value) {
          navigation.replace('ShowData');
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const verifyUser = async () => {
    if (userName && password) {
      try {
        const uName = await AsyncStorage.getItem('@userName');
        const pWord = await AsyncStorage.getItem('@password');
        if (uName && pWord) {
            console.log(uName,pWord);
            if (userName === uName && password === pWord) {
                await AsyncStorage.setItem('@check','1');
                navigation.replace('ShowData');
            } else {
                Alert.alert('User Name or password is incorrect');
            }
        } else {
            Alert.alert('This username does not exit');
        }
      } catch (e) {
        console.log('This is cath block code ====> ', e);
      }
    } else {
      Alert.alert('Fill all the information');
    }
  };
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar animated={true} backgroundColor="#8BACED" />
      {/* <View style={styles.headerImageCon}>
        <Image source={require('../assets/shape.png')} />
      </View> */}
      <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>

      <View style={[styles.LoginImageCon, styles.center]}>
        <Image
          style={styles.LoginImage}
          source={require('../assets/newLogo.png')}
        />
      </View>

      <View style={[styles.center, styles.InputMainCon]}>
        <View style={styles.InputCon}>
          <Text style={styles.InputTxt}>Name</Text>
          <TextInput
            style={styles.Input}
            placeholder="Enter your Name"
            // autoCapitalize="characters"
                // keyboardType="email-address"
                // textContentType="emailAddress"
            value={userName}
            onChangeText={setUserName}
          />
        </View>
        <View style={styles.InputCon}>
          <Text style={styles.InputTxt}>Password</Text>
          <TextInput
            style={styles.Input}
            placeholder="Enter your Password"
            value={password}
            onChangeText={setPassword}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('ForgotPassword')}>
          <Text style={styles.Forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('Register')}>
          <Text style={styles.accountBtn}>Don't have an Account</Text>
          <Text style={styles.Forgot}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.center, styles.loginBtnCon]}>
        <TouchableOpacity
          style={[styles.loginbtn, styles.center]}
          onPress={() => verifyUser()}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
