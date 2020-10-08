import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, View, Dimensions, StyleSheet,FlatList } from 'react-native';

const CourseList = (props)=>{
    let datam = props.route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{datam.semester}</Text>
            <FlatList
            data = {datam.courses}
            renderItem = {function({item}){
            return(<View style={styles.listItems}><Text style={styles.textStyle}>{item.key}. {item.course}</Text></View>)
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
        backgroundColor: '#f55a3b',
        width:300,
        margin:10,
        justifyContent:'center',
        borderRadius:5,
    },

    textStyle:{
        fontSize:22,
        color: '#fff',
    },

    title:{
        fontSize:30,
        marginBottom:20,
        color: '#f55a3b'
    }
});

export default CourseList;