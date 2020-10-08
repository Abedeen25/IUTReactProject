import React from 'react';
import {Text, View, Dimensions, StyleSheet, Image, FlatList} from 'react-native';

const MyProfile = ()=>{
    const dim = Dimensions.get("screen")
    const user = {
        Name: 'Iftekharul Abedeen',
        'Student ID': 170042083,
        'Room No': 'N/A',
        Email: 'iftekharul@iut-dhaka.edu'
    }
    return(
        <View style={styles.container} height= {dim.height}>
            <Image style={styles.profImage}
                source = {require('./../../assets/profile.png')}
            />
            <Text style={styles.TextStyle} width={dim.width}>Name: {user.Name}</Text>
            <Text style={styles.TextStyle} width={dim.width}>Student ID: {user['Student ID']}</Text>
            <Text style={styles.TextStyle} width={dim.width}>Room No: {user['Room No']}</Text>
            <Text style={styles.TextStyle} width={dim.width}>Email: {user['Email']}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 50,
    },

    profImage:{
        height:300,
        width: 300,
        marginBottom:50,
    },

    TextStyle:{
        fontSize: 22,
        color: '#333',
        padding:10,        
    },
});

export default MyProfile;