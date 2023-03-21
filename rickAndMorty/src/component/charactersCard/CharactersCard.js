import React from "react";
import { View,Text,StyleSheet,Image,Dimensions } from "react-native";



const CharactersCard = (props) => {

    return (

            <View style={styles.containers}>
               
                <Image style={styles.images}  source={require('../../../assets/rick_and_morty.png')}  /> 
                <View style={styles.body_containers}>
                    <Text style={styles.headers}>Character {props.id} --  {props.name}</Text>
                    <Text style={styles.status}>{props.type}</Text>
                    <Text style={styles.status}>Status={props.status}</Text>
                    <Text style={styles.species}>{props.species}</Text>
                    <Text style={styles.species}>{props.gender}</Text>
                </View>
            </View>

    )
}
const size = Dimensions.get('window')
export default CharactersCard;

const styles = StyleSheet.create({
    containers: {
        backgroundColor:'#e0e0e0',
        borderWidth:1,
        borderColor:'#bdbdbd',
        margin:5,
        flexDirection:'row',
        
        
     },
     body_containers: {
         flex:1,
         padding:5,
         justifyContent:'space-between',
         
         
     },
     headers: {
         fontWeight:'bold',
         fontSize:18
     },
     species: {
         textAlign:'right',
         fontStyle:'italic'
     },
     images: {
         height:100,
         width:100
     },
     status: {
         textAlign:'justify',
         top:32,
         fontStyle:'italic',
         fontSize:15
     },
     
})