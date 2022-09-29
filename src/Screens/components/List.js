/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import styles from './externalStyle';

const List = ({ data }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <TouchableOpacity>
            <View style={[styles.center, styles.list]}>
                <View style={[styles.center, styles.planner]}>
                    <Text style={styles.heading}>{data.title}</Text>
                    <Text style={styles.timeTxt}>{data.time}</Text>
                </View>
                <View style={[styles.button, styles.center]}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#5688E9' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default List;
