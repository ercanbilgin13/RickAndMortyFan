import React from "react";
import { View,Text,StyleSheet,Image,TouchableWithoutFeedback } from "react-native";


const EpisodesCard = (props,onSelect) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image}  source={require('../../../assets/rick-and-morty.png')}  /> 
                <View style={styles.body_container}>
                    <Text style={styles.header}>Episode {props.id} --  {props.name}</Text>
                    <Text style={styles.season}>{props.episode}</Text>
                    <Text style={styles.date}>{props.air_date}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
       
    )
}
export default EpisodesCard;

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
        height:100,
        width:100
    },
    season: {
        textAlign:'justify',
        top:32,
        fontStyle:'italic',
        fontSize:15
    }

})
