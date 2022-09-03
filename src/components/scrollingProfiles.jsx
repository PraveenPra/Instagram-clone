import React from 'react'
import { View,Image ,Text} from 'react-native'

function ScrollingProfiles({imgUrl,name}) {
  return (
 <View style={{width:80,height:80,border:'3px solid #F20776',borderRadius:100,padding:5,margin:5,backgroundColor:'#FAFAFA'}}>
       <img src={imgUrl} alt='Insta-Name' style={{width:'100%',height:'100%',borderRadius:100}}/>

       <Text style={{paddingVertical:10,textAlign:'center'}}>{name}</Text>
       </View>
      
   
  )
}

export default ScrollingProfiles