import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import Config from 'react-native-config';
import Loading from '../component/Loading/Loading';
import Error from '../component/Error/Error';
import useFetch from '../hooks/useFetch';
import EpisodesCard from '../component/episodesCard/EpisodesCard';


const EpisodeDetail = (route) => {
  const {id} =route.params;
  console.log(id)

  const {loading,data,error} = useFetch(`${Config.Epi_API_URL}/${id}`)

if(loading) {
  return <Loading />
}
if(error) {
  return <Error />
}
const renderEpisode = ({item}) => 
  <EpisodesCard id={item.id} name={item.name} air_date={item.air_date} episode={item.episode} />

  return (
  
      <FlatList  data={data} renderItem={renderEpisode} /> 
    
  );
}
const size = Dimensions.get('window')
export default EpisodeDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#e0e0e0',
    borderWidth:1,
    borderColor:'#bdbdbd',
    margin:10,
    flexDirection:'row'
    
 },
 body_container: {
     flex:1,
     padding:5,
     justifyContent:'space-between'
 },
 header: {
     fontWeight:'bold',
     fontSize:18
 },
 date: {
     textAlign:'right',
     fontStyle:'italic'
 },
 image: {
     height:size.height,
     width:size.height
 },
 season: {
     textAlign:'justify',
     top:32,
     fontStyle:'italic',
     fontSize:15
 }

});