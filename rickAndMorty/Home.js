import React from 'react';
import { StyleSheet, Text, View,FlatList,Button } from 'react-native';
import EpisodesCard from './src/component/episodesCard/EpisodesCard';
import Config from 'react-native-config';
import useFetch from './src/hooks/useFetch';
import Loading from './src/component/Loading/Loading';
import Error from './src/component/Error/Error';


const Home = ({navigation}) => {

  const {loading,data,error} = useFetch('https://rickandmortyapi.com/api/episode')

if(loading) {
  return <Loading />
}
if(error) {
  return <Error />
}

const handleEpisodeSelect = (id) => {
  navigation.navigate('Episodes',{id})
}
 

  const renderEpisode = ({item}) => 
  <EpisodesCard id={item.id} name={item.name} air_date={item.air_date} episode={item.episode} onSelect={() => handleEpisodeSelect(item.id)} />

  return (
    <View>
     <Button title='Go to Characters Page' onPress={() => navigation.navigate('Rick&Morty Characters')} /> 
   
    <FlatList  data={data} renderItem={renderEpisode} /> 
    </View>
    );

};

export default Home;