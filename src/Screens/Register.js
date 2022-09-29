/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import styles from './components/externalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [consfirmPassword, setConsfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  // useEffect(() => {
  //   replaceScreen();
  // }, []);

  // const replaceScreen = async () => {
  //   try {
  //     AsyncStorage.getItem('@userName').then(value => {
  //       if (value) {
  //         navigation.replace('Login');
  //       }
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const AddUser = async () => {
    if (userName && email && password && consfirmPassword) {
      if (password === consfirmPassword) {
        // const data = [{username: userName, email: email, password: password}];
        // console.log(JSON.stringify(data));
        try {
          await AsyncStorage.setItem('@userName',userName);
          await AsyncStorage.setItem('@password',password);
          await AsyncStorage.setItem('@email',email);
          navigation.replace('Login');
        } catch (e) {
          console.log('This is cath block code ====> ', e);
        }
      } else {
        Alert.alert('Password and confrim password are not same');
      }
    } else {
      Alert.alert('Fill all the information');
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar animated={true} backgroundColor="#8BACED" />
      <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
     {/* <View style={{backgroundColor:'red', height:"10%"}}></View> */}
      <View style={styles.registerInputCon}>
      
        <View style={[styles.headerTxtCon, styles.center]}>
          <Text style={styles.heading}>Welcome To Silenet</Text>
          <Text style={styles.subText}>Let's Get Started</Text>
        </View>
        <View style={styles.InputCon}>
          <Text style={styles.InputTxt}>Username</Text>
          <TextInput
            style={styles.Input}
            placeholder="Enter your Username"
            value={userName}
            onChangeText={setUserName}
          />
        </View>
        <View style={styles.InputCon}>
          <Text style={styles.InputTxt}>Email</Text>
          <TextInput
            style={styles.Input}
            placeholder="Enter your Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.InputCon}>
          <Text style={styles.InputTxt}>Password</Text>
          <TextInput
            style={styles.Input}
            placeholder="Enter your Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.InputCon}>
          <Text style={styles.InputTxt}>Confirm Password</Text>
          <TextInput
            style={styles.Input}
            placeholder="Confirm Password"
            value={consfirmPassword}
            onChangeText={setConsfirmPassword}
          />
        </View>
      </View>
      <View style={[styles.center, styles.registerBtnCon]}>
        <TouchableOpacity
          style={[styles.loginbtn, styles.center]}
          onPress={() => AddUser()}>
          <Text style={styles.btnTxt}>Register</Text>
        </TouchableOpacity>
        <View style={[styles.signinCon, styles.center]}>
          <Text style={styles.smallTxt}>Already have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.smallTxt, styles.siginTxt]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
