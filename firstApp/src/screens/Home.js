import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, View, Dimensions, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

let HomeScreen = (props) => {
    const dim = Dimensions.get("screen");
    return (
        <View style={styles.container} height={dim.height}>
            <Image
                style={styles.imageStyle}
                source={require('./../../assets/150px-Islamic_University_of_Technology_(coat_of_arms).png')}
            />
            <View style={styles.textField}>
                <Text style={styles.textStyle}>Department of CSE</Text>
                <Text style={styles.textStyle}>Program: SWE</Text>
            </View>
            <TouchableOpacity style={styles.TOButton}
                onPress={
                    function () {
                        props.navigation.navigate("My Profile");
                    }
                }
            >
                <Text style={styles.TOText}>My Profile</Text>
            </TouchableOpacity>
            <View>
                <Button
                    title='Semesterwise Course List'
                    color='#00bd7b'
                    onPress={
                        function () {
                            props.navigation.navigate("Semester");
                        }
                    }
                />
                <View style={styles.spacer}></View>
                <Button
                    title='List of Faculty Members'
                    color='#00bd7b'
                    onPress={
                        function () {
                            props.navigation.navigate("Faculties");
                        }
                    }
                />
            </View>
        </View>
    );
}

let styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 30,
            color: '#00bd7b',
            alignSelf: 'center',
        },

        container: {
            padding: 20,
            alignItems: 'center',
            backgroundColor: '#FFF',
        },

        textField: {
            paddingVertical: 20,
        },

        imageStyle: {
            marginTop: 70,
        },

        spacer: {
            height: 20,
        },

        TOButton: {
            backgroundColor: '#fa564b',
            height: 40,
            justifyContent: 'center',
            marginBottom: 20,
            width: 150,
            alignItems: 'center',
            borderRadius: 5,
        },

        TOText: {
            color: 'white',
            fontWeight: 'bold'
        }
    }
);

export default HomeScreen;