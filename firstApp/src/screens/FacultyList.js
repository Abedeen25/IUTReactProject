import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const FacultyList = ()=>{
    const Faculties = [
        {key: '1', name: "Bakhtiar Hasan"},
        {key: '2', name: "Faisal Hussain"},
        {key: '3', name: "Tasnim Ahmed"},
        {key: '4', name: "Mohayeminul Islam"},
        {key: '5', name: "Tajkia Toma"},
        {key: '6', name: "Hasanul Kabir"},
        {key: '7', name: "Sabbir Ahmed"},
        {key: '8', name: "Ridwan Kabir"},
        {key: '9', name: "Muhammad Mahbub Alam"},
        {key: '10', name: "Abu Raihan Mostofa Kamal"},
        {key: '11', name: "Tareque Mohmud Chowdhury"},
        {key: '12', name: "Hasan Mahmud"},
        {key: '13', name: "Md. Sakhawat Hossen"},
        {key: '14', name: "Rafsanjany Kushol"},
        {key: '15', name: "A.B.M. Ashikur Rahman"}
    ];
    
    return(
        <View style={styles.ViewStyle}>
            <FlatList
            data = {Faculties}
            renderItem = {function({item}){
                return(<Text style={styles.TextStyle}>{item.name}</Text>)
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        TextStyle:{
            fontSize: 22,
            color: '#333',
            padding:25,
            borderColor:'#EEE',
            borderWidth: 2,
        },
        ViewStyle:{
            backgroundColor:'white',
        }
    }
);

export default FacultyList;