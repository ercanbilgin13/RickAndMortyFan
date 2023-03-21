import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EpisodeDetail from './src/pages/EpisodeDetail';
import Characters from './src/pages/Characters';
import FavCharacters from './src/pages/FavCharacters';



import Home from './Home';


const App = () => {

 const Stack = createNativeStackNavigator();

return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Rick&Morty " component={Home} />
        <Stack.Screen name="Episodes" component={EpisodeDetail}/>
        <Stack.Screen name="Rick&Morty Characters" component={Characters}/>
        <Stack.Screen name="Favourite Characters" component={FavCharacters}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
