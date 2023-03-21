import React, {useState,useEffect} from 'react';
import { StyleSheet,FlatList,Button,SafeAreaView,View,Text,TextInput,Alert } from 'react-native';
import useFetch from '../hooks/useFetch';
import CharactersCard from '../component/charactersCard/CharactersCard';
import Loading from '../component/Loading/Loading';
import Error from '../component/Error/Error';
import CheckBox from 'react-native-check-box';




const Characters = ({navigation}) => {
  // const [search, setSearch] = useState('');
  // const [filterData,setFilterData] = useState([])
   const [count,setCount]=React.useState(0)
  const [FavCharacters,setFavCharacters] = useState([])

  const {loading,data,error} = useFetch('https://rickandmortyapi.com/api/character')

  // setFilterData(data)

if(loading) {
  return <Loading />
}
if(error) {
  return <Error />
}
const onClick =(character) => {
   const newData = data.map(newItem => {
    if(newItem.id == character.id) {
      return{
        ...newItem,
        selected : true,
      }  
    }     setCount(count + 1)
    return{
      ...newItem,
      selected: false
      
    } 

   })
   setFavCharacters(newData)
   return count
}
// const searchFilterFunction = (text) => {
  
//   if (text) {
   
//     const newData = data.filter(
//       function (item) {
//         const itemData = item.name
//           ? item.name.toUpperCase()
//           : ''.toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//     });
//     setFilterData(newData);
//     setSearch(text);
//   } else {
//     setFilterData(data);
//     setSearch(text);
//   }
// };
// const ItemView = ({item}) => {
//   return (
//     <Text
//       style={styles.itemStyle}
//       onPress={() => getItem(item)}>
//       {item.id}
//       {'.'}
//       {item.name.toUpperCase()}
//     </Text>
//   );
// };

// const ItemSeparatorView = () => {
//   return (
//     <View
//       style={{
//         height: 0.5,
//         width: '100%',
//         backgroundColor: '#C8C8C8',
//       }}
//     />
//   );
// };
// const getItem = (item) => {

//   alert('Id : ' + item.id + ' Name : ' + item.name);
// };

    const renderCharacters = ({item}) => {
      return(
      <View>
       
        <CharactersCard  id={item.id} name={item.name} status={item.status} species={item.species} gender={item.gender} type={item.type} />
        <CheckBox style={styles.checkBox}
        disabled={false}
        onAnimationType='fill'
        offAnimationType='fade'
        boxType='square'
        onClick={()=> onClick(item.id)}
        key={item.id}

        />
      </View>
  )}
  const controlState = () => {
    if(count>10){
      Alert.alert('Warning', 'You can choose up to 10 characters', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }else {
      navigation.navigate('Favourite Characters')
    }

  }


  return (
    <SafeAreaView>
      <View>
      {/* <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        /> */}
        {/* <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        /> */}
     
      <Text style={styles.letter}>Would you want to choose your favorite characters?</Text>
      </View>
      <Button title='Complete Selection' onPress={()=> controlState} />
         <FlatList keyExtractor={item => `key-${item.id}`} data={data} renderItem={renderCharacters} />
         
    </SafeAreaView>
  );
}
export default Characters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter:{
    fontSize:25
  },
  checkBox:{
    position:'absolute'
    
  }
});