import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../components/header'
import ScrollingProfiles from '../components/scrollingProfiles'

const data = [
    {
        imgUrl:require('../../assets/profile1.jpg'),name:'Beth'
    },
    {
        imgUrl:require('../../assets/profile2.jpg'),name:'Rocco'
    },
    {
        imgUrl:require('../../assets/profile3.jpg'),name:'James'
    },
    {
        imgUrl:require('../../assets/profile4.jpg'),name:'Cathie'
    },
    {
        imgUrl:require('../../assets/profile5.jpg'),name:'Sammy'
    },
    {
        imgUrl:require('../../assets/profile6.jpg'),name:'Julian'
    },
    {
        imgUrl:require('../../assets/profile7.jpg'),name:'Mike'
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
 
 
</ScrollView>

  
  </>)
}

export default MainPage