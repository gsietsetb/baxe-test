import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from './screens/Home';
import palette, {eColor} from './ui/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import C from 'consistencss';
import {View} from 'react-native';
/*TODO
import Chat from './screens/Chat';
import Community from './screens/Community';
import Finance from './screens/Finance';
import Ecosystem from './screens/Ecosystem';*/

type Route = {
  name: string;
  component: React.ComponentType<any>;
  iconName: {
    focused: string;
    unfocused: string;
  };
};

export const routes: Route[] = [
  {
    name: 'Home',
    component: Home,
    iconName: {
      focused: 'home',
      unfocused: 'home-outline',
    },
  },
  {
    name: 'Chat',
    component: Home,
    iconName: {
      focused: 'chatbox',
      unfocused: 'chatbox-outline',
    },
  },
  {
    name: 'Community',
    component: Home,
    iconName: {
      focused: 'people',
      unfocused: 'people-outline',
    },
  },
  {
    name: 'Finance',
    component: Home,
    iconName: {
      focused: 'wallet',
      unfocused: 'wallet-outline',
    },
  },
  {
    name: 'Ecosystem',
    component: Home,
    iconName: {
      focused: 'planet',
      unfocused: 'planet-outline',
    },
  },
];

const Tab = createMaterialBottomTabNavigator();

export const AppWrapper = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={[C.bgWhite, C.radiustop4, eColor(undefined, 2).border]}
        inactiveColor={palette.grayIcon}
        screenOptions={({route}) => ({
          tabBarColor: palette.grayIcon,
          tabBarInactiveTintColor: palette.grayIcon,
          tabBarBadge: route.name === routes[1].name && 4,
          tabBarIcon: ({focused, color}) => {
            const routeInfo = routes.find(r => r.name === route.name);
            const iconName = focused
              ? routeInfo?.iconName.focused
              : routeInfo?.iconName.unfocused;
            return focused ? (
              <View style={[C.bgWhite, C.top_1, C.w20, C.itemsCenter]}>
                <LinearGradient
                  style={[
                    C.p1,
                    C.radius3,
                    C.itemsCenter,
                    C.justifyCenter,
                    C.h9,
                    C.w9,
                  ]}
                  colors={palette.gradientRedPurple.colors}>
                  <Icon
                    name={iconName as string}
                    size={24}
                    color={palette.white}
                  />
                </LinearGradient>
              </View>
            ) : (
              <Icon name={iconName as string} size={24} color={color} />
            );
          },
        })}>
        {routes.map(route => (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppWrapper;
