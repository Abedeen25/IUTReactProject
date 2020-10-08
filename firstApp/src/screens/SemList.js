import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity,FlatList } from 'react-native';

const listOfSem = (props) => {
    const semData = [
        {
            key: '1',
            semester: 'First semester',
            courses: [
                {course:'SWE 4101', key:'1'},
                {course:'SWE 4102', key:'2'},
                {course:'SWE 4103', key:'3'},
                {course:'SWE 4105', key:'4'},

            ]
        },
        {
            key: '2',
            semester: 'Second semester',
            courses: [
                {course:'SWE 4201', key:'1'},
                {course:'SWE 4202', key:'2'},
                {course:'SWE 4203', key:'3'},
                {course:'SWE 4205', key:'4'},

            ]
        },
        {
            key: '3',
            semester: 'Third semester',
            courses: [
                {course:'SWE 4301', key:'1'},
                {course:'SWE 4302', key:'2'},
                {course:'SWE 4303', key:'3'},
                {course:'SWE 4305', key:'4'},

            ]
        }
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={semData}
                renderItem={function ({ item }) {
                    return (
                        <TouchableOpacity style={styles.listItems}
                            onPress={
                                function () {
                                    props.navigation.navigate("Course List", item.courses);
                                }
                            }
                        >
                            <Text style={styles.textStyle}>{item.semester}</Text>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    );
}

let styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },

    listItems:{
        alignItems: "center",
        height:60,
        backgroundColor: '#00bd7b',
        width:300,
        margin:10,
        justifyContent:'center',
        borderRadius:5,
    },

    textStyle:{
        fontSize:22,
        color: '#fff',
    }
});

export default listOfSem;