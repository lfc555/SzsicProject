/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PizzaTranslator from './module/component/input';
import HomeScreen from './module/component/pages/Home';
import DetailScreen from './module/component/pages/Detail';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//
const App: () => Node = () => {

  const isDarkMode = useColorScheme() == 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // 父：tab bottom
  const Tab = createBottomTabNavigator();
  //子：stack 
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName="Details">
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{
            title: '主页', headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          initialParams={{ itemId: 42 }} />
        <Stack.Screen name="Details"
          component={DetailScreen}
          options={{
            title: '详细',
            headerRight: () => (
              <Button
                onPress={() => alert('执行!')}
                title="操作"
                color="#fff"
              />
            ),
          }}
          initialParams={{ itemId: 42 }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};
//创建样式
const styles = StyleSheet.create({

});

export default App;
