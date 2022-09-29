/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
  ///////////////////////////// Login Screen /////////////////////////////
  body: {
    height: '100%',
    width: '100%',
    position:'relative',
    flex:1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImageCon: {
    height: '22%',
    width: '100%',
    // backgroundColor:'#FFFFFFaa',
  },
  LoginImageCon: {
    height: '40%',
    backgroundColor: '#FFFFFFaa',

  },
  LoginImage: {
    height: "100%",
    width: "100%",
    // backgroundColor:'white'
  },
  InputMainCon: {
    height: '40%',
    width: '100%',
    backgroundColor: '#FFFFFFaa',
    alignItems: 'flex-end',
  },
  InputCon: {
    height: 80,
    width: '100%',
    // backgroundColor: '#FFFFFFaa',
  },
  Input: {
    borderWidth: 0.5,
    borderColor: 'grey',
    width: 320,
    alignSelf: 'center',
    borderRadius: 15,
    paddingLeft: 20,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  InputTxt: {
    // marginVertical: ,
    marginLeft: 35,
    color: 'black',
  },
  Forgot: {
    color: '#5688E9',
    // backgroundColor:'red',
    marginRight: '10%',
  },
  accountBtn: {
    color: 'black',
    // backgroundColor:'red',
    marginRight: 5,
    textAlign:'center',
  },
  loginbtn: {
    width: 320,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#5688E9',
    
  },
  loginBtnCon: {
    height: '20%',
    backgroundColor: '#FFFFFFaa',
    // paddingTop: 10,
    justifyContent: 'flex-start',
  },
  btnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  ///////////////////////////// Register Screen /////////////////////////////
  headerTxtCon: {
    height: '30%',
    width: '100%',
    // backgroundColor:'red',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  subText: {
    fontSize: 22,
    color: 'black',
  },
  registerInputCon: {
    height: '70%',
    width: '100%',
    backgroundColor: '#FFFFFFaa',
    marginTop:20,
  },
  registerBtnCon: {
    height: '30%',
    backgroundColor: '#FFFFFFaa',
    
  },
  signinCon: {
    height: 30,
    width: '70%',
    marginTop: 5,
    flexDirection: 'row',
    // backgroundColor:'yellow',
  },
  smallTxt: {
    fontSize: 13,
    color: 'black',
  },
  siginTxt: {
    fontWeight: 'bold',
    color: '#5688E9',
  },
  ///////////////////////////// ShowData Screen /////////////////////////////
  header: {
    height: '10%',
    width: '100%',
    backgroundColor: '#5688E9',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  headerTxt: {
    fontSize: 20,
    width: 240,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    width: 80,
    flexDirection: 'row',
    // backgroundColor:'pink',
    justifyContent: 'space-between',
  },
  listcontainer: {
    height: '90%',
    width: '100%',
    // backgroundColor:'pink',
  },
  list: {
    height: 90,
    width: '100%',
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  planner: {
    height: 80,
    width: '72%',
    // backgroundColor: 'blue',
    alignItems: 'flex-start',
  },
  button: {
    height: 80,
    width: '18%',
    // backgroundColor:'red',
  },
  timeTxt: {
    fontSize: 15,
    color: 'grey',
  },
  plusView: {
    position: 'absolute',
    bottom: 50,
    right: 50,
  },
  modalView: {
    height: 50,
    width: 100,
    elevation: 10,
    borderRadius: 2,
    backgroundColor: '#F0F0F0',
    alignSelf: 'flex-end',
    marginRight: 25,
    marginTop: 45,
  },
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
});

export default styles;
