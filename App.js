/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import Login from './src/Screens/Login';
import ShowData from './src/Screens/ShowData';
import Register from './src/Screens/Register';
import ToDoList from './src/Screens/ToDoList';
import ForgetPassword from './src/Screens/ForgetPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEvent from './src/Screens/AddEvent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const App = () => {
  // const [replace,setReplace] = useState(false);

  // useEffect(() => {
  //   replaceScreen();
  // }, []);

  // const replaceScreen = async () => {
  //   try {
  //     AsyncStorage.getItem('@check').then(value => {
  //       if (value) {
  //         // navigation.replace('ShowData');
  //         setReplace(true);
  //       }
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <NavigationContainer>
      {/* {replace ?
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}}  name="ShowData" component={ShowData} />
      <Stack.Screen options={{headerShown:false}}  name="AddEvent" component={AddEvent} />
      <Stack.Screen  name="ToDoList" component={ToDoList} />
      </Stack.Navigator>
      :
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>
      <Stack.Screen options={{headerShown:false}} name="Register" component={Register}/>
      <Stack.Screen options={{headerShown:false}}  name="ShowData" component={ShowData} />
      <Stack.Screen options={{headerShown:false}}  name="AddEvent" component={AddEvent} />
      <Stack.Screen  name="ToDoList" component={ToDoList} />
      </Stack.Navigator>
      } */}
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>
      <Stack.Screen options={{headerShown:false}} name="ForgotPassword" component={ForgetPassword}/>
      <Stack.Screen options={{headerShown:false}} name="Register" component={Register}/>
      <Stack.Screen options={{headerShown:false}}  name="ShowData" component={ShowData} />
      <Stack.Screen options={{headerShown:false}}  name="AddEvent" component={AddEvent} />
      <Stack.Screen  name="ToDoList" component={ToDoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
