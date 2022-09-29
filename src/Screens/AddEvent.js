/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import React,{useState} from 'react'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';


const AddEvent = ({ navigation }) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <View>
        <TextInput style={styles.input} placeholder='UnTitled' placeholderTextColor='white'  >

        </TextInput>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
          <MaterialIcons name='delete' size={30} color='white' />
          </TouchableOpacity>
          <TouchableOpacity>
          <Entypo name='dots-three-vertical' size={30} color='white'/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.enable}>
          <Text style={styles.enableTxt}>Enable</Text>
          <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        </View>
        <View style={styles.enable}>
          <Text style={styles.enableTxt}>Vibrate</Text>
          <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        </View>
        <View style={styles.days}>
          <View style={styles.daysTxt}>
          <Text style={{fontSize:25,alignSelf:"center",fontWeight:'bold',color:'black'}}>Days</Text>
          </View>
          <View style={styles.din}>
            <View style={styles.dayRing}>
            <TouchableOpacity>
              <Text style={styles.singleDay}>S</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.dayRing}>
              <TouchableOpacity>
              <Text style={styles.singleDay}>M</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.dayRing}>
              <TouchableOpacity>
              <Text style={styles.singleDay}>T</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.dayRing}>
              <TouchableOpacity>
              <Text style={styles.singleDay}>W</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.dayRing}>
              <TouchableOpacity>
              <Text style={styles.singleDay}>T</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.dayRing}>
              <TouchableOpacity>
              <Text style={styles.singleDay}>F</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.dayRing}>
              <TouchableOpacity>
              <Text style={styles.singleDay}>S</Text>
              </TouchableOpacity>
              </View>

          </View>
        </View>
          <TouchableOpacity>
        <View style={styles.time}>
            <Text style={styles.startTime}>Start Time</Text>
            <Text style={styles.startTime} >12:00 pm</Text>

        </View>
          </TouchableOpacity>
          <TouchableOpacity>
        <View style={styles.time}>
            <Text style={styles.startTime}>End Time</Text>
            <Text style={styles.startTime} >01:00 pm</Text>

        </View>
          </TouchableOpacity>
          <View style={styles.enable}>
            <Text style={{fontSize:15,alignSelf:'center',marginLeft:10}}>Duration</Text>
            <Text style={{fontSize:15,alignSelf:'center',marginRight:10}}>1h  0min</Text>
          </View>

      </View>

    </SafeAreaView>
  )
}

export default AddEvent;
const styles = StyleSheet.create({
  body:{
    height:"100%",
    width:"100%",

  },
  header:{
    height:"10%",
    width:"100%",
    backgroundColor:'#5688E9',
    justifyContent:'space-evenly',
    flexDirection:'row',
    alignItems:'center'
  },
  input:{
    height:65,
    width:230,
    backgroundColor:'#5688E9',
    justifyContent:'center',
    alignSelf:'center',
    paddingLeft:10,
    fontSize:25,
    fontWeight:'bold',
    color:'white',
    borderBottomWidth:1,
    borderBottomColor:'white',
  },
  icons:{
    height:60,
    width:80,
    // backgroundColor:'pink',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  container:{
    height:"90%",
    width:"100%",
    // backgroundColor:"pink",
  },
  enable:{
    height:70,
    width:"100%",
    // backgroundColor:'grey',
    borderBottomWidth:1,
    justifyContent:'space-between',
    alignContent:"center",
    flexDirection:'row',
    borderBottomColor:'grey',

    
  },
  enableTxt:{
    fontSize:20,
    alignSelf:"center",
    color:'black',
    marginLeft:15,
  },
  days:{
    height:110,
    width:"100%",
    // backgroundColor:"grey",
    borderBottomWidth:1,
    borderBottomColor:'grey',

  },
  daysTxt:{
    height:45,
    width:"100%",
    // backgroundColor:'white',
  },
  din:{
    height:65,
    width:"100%",
    // backgroundColor:'blue',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'


  },
  singleDay:{
    fontSize:25,
    fontWeight:'bold',
    alignItems:'center',
    color:'black',
  },
  dayRing:{
    height:40,
    width:40,
    borderRadius:30,
    backgroundColor:"#5688E9",
    alignItems:'center',
    marginRight:5,

  },
  time:{
    height:70,
    width:"100%",
    // backgroundColor:'grey',
    borderBottomWidth:1,
    alignContent:"center",
    flexDirection:'row',
    borderBottomColor:'grey',
    justifyContent:'space-around'

  },
  startTime:{
    fontSize:20,
    alignSelf:"center",
    color:'black',
    marginLeft:15,
  }

})