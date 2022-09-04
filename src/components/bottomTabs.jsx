import React from 'react'
import { View } from 'react-native'
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function BottomTabs({imgUrl}) {
  return (
    <View style={{position:'fixed',bottom:0,left:0,right:0,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',background:'white',paddingVertical:15,borderTopLeftRadius:40,borderTopRightRadius:40,}}>
        <Foundation name="home" size={24} color="black" />
        <Ionicons name="search-outline" size={24} color="black" />
        <MaterialIcons name="ondemand-video" size={24} color="black" />
        <Feather name="heart" size={28} color="black" />

       
                <View style={{ width: 30, height: 30, borderRadius: 100 }}>
                    <img src={imgUrl} alt='profile' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 100 }} />
                </View>
               
           
    </View>
  )
}

export default BottomTabs