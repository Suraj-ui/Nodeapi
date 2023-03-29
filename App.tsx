/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Formscreen } from './components/Formscreen';



// import {SplashScreen} from './components/SplashScreen';




const Stack = createNativeStackNavigator();
function App(): JSX.Element {
 
  return (
  <NavigationContainer>
<Stack.Navigator screenOptions={{headerTintColor:"#fff", headerStyle:{
  backgroundColor:"#3E8EDE"
}}}>
{/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
{/* <Stack.Screen name='Login' component={Login} options={{title:"User Login"}} /> */}
<Stack.Screen name='Formscreen' component={Formscreen} options={{title:"Home",
}} />

</Stack.Navigator>
  </NavigationContainer>
  );
}





export default App;
