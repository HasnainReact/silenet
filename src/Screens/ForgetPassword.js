import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ForgetPassword = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{position: 'relative', flex: 1}}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerlizeView}>
          <View style={styles.autBox}>
            <View style={styles.logoBox}>
              <Image
                source={require('../assets/logo.png')}
                style={{width: 80, height: 80, borderRadius: 90}}></Image>
            </View>
            <Text style={styles.fogotLoginTitle}>Forgot Password</Text>
            <View style={styles.inputBox}>
              <Text style={styles.fogetMail}>
                Enter Your Email Address and We will send You a Link to Reset
                Password
              </Text>
              <Text style={styles.inputLable}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="characters"
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="exaple@gmail.com"></TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonTxt}>Send Mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgetPassword;
const styles = StyleSheet.create({
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#5688E9',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#5688E9',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerlizeView: {
    width: '100%',
    top: '15%',
  },
  autBox: {
    width: '90%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      height: 0,
      width: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  fogotLoginTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 55,
    alignItems: 'center',
    justifyContent: 'center',
    color:'black',
  },
  inputBox: {
    marginTop: 10,
  },
  fogetMail: {
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLable: {
    fontSize: 17,
    marginBottom: 6,
    paddingTop: 20,
    color:'black',
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#dfe4ea',
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: 'black',
  },
  loginButton: {
    backgroundColor: '#5688E9',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  loginButtonTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
