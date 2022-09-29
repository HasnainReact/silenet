/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import ion-icon from 'react-native-vector-icons/ion-icon';

const ToDoList = ({ navigation }) => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <View style={styles.imgview}>
                <Image source={require('../assets/shape.png')} />
                <View style={styles.profilePic}>
                    <Image source={require('../assets/Ellipse.png')} />
                    <Text style={styles.txt}>Welcome Mary!</Text>
                </View>
            </View>
            <View style={styles.clockView}>
                {/* <View style={styles.centerview}> */}
                    <Image source={require('../assets/Clock.png')} />
                {/* </View> */}
            </View>
            <View style={{ height: '4%', width: '100%', backgroundColor: 'blue' }}>
                <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 16, color: 'black' }}>Tasks lists</Text>
            </View>
            <View style={{ height: '32%', padding: 8, width: '100%', elevation: 5, backgroundColor: 'yellow', marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10,backgroundColor:'pink' }}>
                    <View>
                        <Text style={{ marginLeft: 8, fontWeight: 'bold', color: 'black', fontSize: 16 }}>Daily Tasks</Text>
                    </View>
                    <TouchableOpacity>
                        {/* <Image style={{}} source={require('./src/assets/pluscircle.png')} /> */}
                        <Ionicons name='add-circle-outline' size={40} />
                    </TouchableOpacity>
                </View>
                <View style={{ margin: 10, marginLeft: 20 }}>
                    <Text style={{ color: 'black' }}>Learn Programming by 12am</Text>
                    <Text style={{ color: 'black', marginTop: 4 }}>Learn How to cook by 1pm</Text>
                    <Text style={{ color: 'black', marginTop: 4 }}>pick up by kids 2pm</Text>
                    <Text style={{ color: 'black', marginTop: 4 }}>Have Lunch at 3pm</Text>
                    <Text style={{ color: 'black', marginTop: 4 }}>Go visit mum by 4pm</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ToDoList;

const styles = StyleSheet.create({
    imgview: {
        height: '44%',
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#62D2C3',
    },
    profilePic: {
        height:150,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'yellow',
    },
    txt: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 4,
        fontSize: 18,
    },
    clockView: {
        height: '20%', width:'100%', alignItems: 'center', justifyContent:'center',
        backgroundColor: 'red',
    },
});
