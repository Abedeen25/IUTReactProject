import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import FacultyList from './src/screens/FacultyList';
import MyProfile from './src/screens/Profile';
import listOfSem from './src/screens/SemList';
import CourseList from './src/screens/CourseList';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Faculties" component={FacultyList}/>
        <stack.Screen name="My Profile" component={MyProfile}/>
        <stack.Screen name="Semester" component={listOfSem}/>
        <stack.Screen name="Course List" component={CourseList}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;