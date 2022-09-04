import React from 'react'
import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function Post({ imgUrl, name }) {
    return (<>
    {/* post header */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between' ,paddingVertical:10,backgroundColor:'white'}}>
            <View style={{ flexDirection: 'row',alignItems:'center',marginLeft:15 }}>
                <View style={{ width: 30, height: 30, borderRadius: 100 }}>
                    <img src={imgUrl} alt='profile' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 100 }} />
                </View>
                <Text style={{ marginLeft:10,fontWeight:'bold'}}>{name}</Text>
            </View>
            <Entypo name="dots-three-vertical" size={18} color="black" />
        </View >

        {/* -----post image----- */}
        <View style={{ width: '100%',objectFit:'cover'}}>
                    <img src={imgUrl} alt='profile' style={{ width: '100%', height: '100%', objectFit: 'cover',}} />
                </View>


        {/* ---------post likes,comments... */}
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10,paddingHorizontal:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'40%'}}>
            <Feather name="heart" size={28} color="black" />
            <FontAwesome name="comment-o" size={28} color="black" />
            <Feather name="send" size={28} />
            </View>
            <MaterialIcons name="bookmark-outline" size={28} color="black" />
        </View>

        <View style={{paddingHorizontal:15}}>
        <Text style={{fontWeight:'bold',fontSize:18,}}>2,380 likes</Text>
        <Text style={{fontSize:18,}}>
            <Text style={{fontWeight:'bold',fontSize:18,}}>PokemonSjel </Text>
            <Text>Can you relate with it?</Text>
            <Text style={{color:'gray'}}>...more</Text>
            </Text>

            <Text style={{color:'gray',fontSize:18,}}>View all 68 comments</Text>

            <Text style={{color:'gray',fontSize:14,fontWeight:200}}>3 days ago</Text>
        </View>
        </>)
}

export default Post