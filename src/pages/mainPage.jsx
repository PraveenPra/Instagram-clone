import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../components/header'
import ScrollingProfiles from '../components/scrollingProfiles'

const data = [
    {
        imgUrl:require('../../assets/profile1.jpg'),name:'Pal'
    },
    {
        imgUrl:require('../../assets/profile2.jpg'),name:'Rocco'
    },
    {
        imgUrl:require('../../assets/profile3.jpg'),name:'Sammy'
    }
];

function MainPage() {
  return (<>
  <Header/>
<ScrollView
horizontal={true}
showsHorizontalScrollIndicator={false}>
    {data.map((sp,index)=> <ScrollingProfiles key={'scrollingProfile'+index} imgUrl={sp.imgUrl} name={sp.name}/>
    )}
 <ScrollingProfiles imgUrl={require('../../assets/profile1.jpg')} name='pal'/>
 <ScrollingProfiles imgUrl={require('../../assets/profile2.jpg')} name='pal'/>
 <ScrollingProfiles imgUrl={require('../../assets/profile3.jpg')} name='pal'/>
 <ScrollingProfiles imgUrl={require('../../assets/profile1.jpg')} name='pal'/> 
 <ScrollingProfiles imgUrl={require('../../assets/profile2.jpg')} name='pal'/>
 <ScrollingProfiles imgUrl={require('../../assets/profile3.jpg')} name='pal'/>
 <ScrollingProfiles imgUrl={require('../../assets/profile1.jpg')} name='pal'/>
 
</ScrollView>
  <View>
 
  </View>
  
  </>)
}

export default MainPage