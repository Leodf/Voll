import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Inicio from './screens/Inicio';
import Consultas from './screens/Consultas';
import Explorar from './screens/Explorar';
import Perfil from './screens/Perfil';

const Tab = createBottomTabNavigator();
const tabs = [
  {
    name: 'Inicio',
    component: Inicio,
    icon: 'home',
  },
  {
    name: 'Consultas',
    component: Consultas,
    icon: 'calendar',
  },
  {
    name: 'Explorar',
    component: Explorar,
    icon: 'search',
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: 'person',
  },
];

const Home: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#002851',
          // height: '9%',
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: '#339cff',
        tabBarInactiveTintColor: '#FFF',
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name={tab.icon} size={size} color={color} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Home;
