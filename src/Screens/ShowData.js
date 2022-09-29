/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './components/externalStyle';
import List from './components/List';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShowData = ({ navigation }) => {
  const date = new Date().toLocaleString();
  const DATA = [
    { title: 'Work', time: 'Mon-Fri 8:00 AM - 5:00 PM' },
    { title: 'School', time: 'Mon-Fri 7:30 AM - 12:00 PM' },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const logout = async () => {
    console.log('logout');
    try {
      await AsyncStorage.removeItem('@check');
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={styles.body}>
      <View style={[styles.center, styles.header]}>
        <Text style={styles.headerTxt}>Silenet</Text>
        {/* <Text style={styles.headerTxt}>{date.slice(11,)}</Text> */}
        <View style={styles.icon}>
          <TouchableOpacity>
            <Entypo name="share" color="white" size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Entypo name="dots-three-vertical" color="white" size={25} />
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <TouchableOpacity onPress={()=>setModalVisible(false)} style={{height:'100%',width:'100%'}}>
              <View style={[styles.center, styles.modalView]}>
                <TouchableOpacity onPress={() => logout()}>
                  <Text style={styles.smallTxt}>Logout</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </View>
      <View style={styles.listcontainer}>
        <FlatList data={DATA} renderItem={({ item }) => <List data={item} />} />
        <View style={styles.plusView}>
          <TouchableOpacity onPress={() => navigation.navigate('AddEvent')}>
            <AntDesign name="pluscircle" size={40} color="#5688E9" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShowData;
