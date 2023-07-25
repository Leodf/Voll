import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Agendamento from '../screens/Agendamento';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Tab = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Agendamento"
          component={Agendamento}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
