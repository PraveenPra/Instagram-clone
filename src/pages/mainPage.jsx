import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../components/header'
import Post from '../components/post';
import ScrollingProfiles from '../components/scrollingProfiles'
import moment from 'moment/moment';
import BottomTabs from '../components/bottomTabs';

const scrollableProfilesList = [
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

const postsList = [
    {
        imgUrl:require('../../assets/postBridge.jpg'),
        name:'Beth',
        likes:20,
        comments:['Look at this','So blue','So spectacular','London bridge is falling down'],
        time:moment.utc("2022-9-04 12:00:24").local().startOf('seconds').fromNow()
    },
    {
        imgUrl:require('../../assets/postHoney.jpg'),
        name:'Honey_bunny_',
        likes:2,
        comments:['Always have patience my friend','Yummy','So sweet','Cant wait','Yumm',],
        time:moment.utc("2022-9-03 1:00:24").local().startOf('seconds').fromNow()
    },
    {
        imgUrl:require('../../assets/postGardening.jpg'),
        name:'Judith##',
        likes:910,
        comments:['Teaching how to care plants',],
        time:moment.utc("2022-9-04 17:00:24").local().startOf('seconds').fromNow()
    },{
        imgUrl:require('../../assets/postPizza.jpg'),
        name:'Pizza_ooo',
        likes:19,
        comments:['Have a bite','Deliciouso'],
        time:moment.utc("2022-8-04 12:00:24").local().startOf('seconds').fromNow()
    }
]

function MainPage() {
  return (<View 
//   style={{backgroundColor: '#FAFAFA',}}
>
  <Header/>
<ScrollView
horizontal={true}
showsHorizontalScrollIndicator={false}>
    {/* <ScrollingProfiles imgUrl={sp.imgUrl} name='Your story' yourStory={true}/> */}

    {scrollableProfilesList.map((sp,index)=> <ScrollingProfiles key={'scrollingProfile'+index} imgUrl={sp.imgUrl} name={sp.name}/>
    )}
</ScrollView>


  {postsList.map((post,postIndex)=>
  <Post key={'post'+postIndex} imgUrl={post.imgUrl} name={post.name} likes={post.likes} comments={post.comments} time={post.time} commentsCount={Object.keys(post.comments).length}/>
  )}


  <BottomTabs imgUrl={require('../../assets/profile1.jpg')}/>
  </View>)
}

export default MainPage