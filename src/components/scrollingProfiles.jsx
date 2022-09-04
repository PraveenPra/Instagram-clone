import React from 'react'
import { View, Image, Text } from 'react-native'

function ScrollingProfiles({ imgUrl, name }) {
  return (<View style={{ flex: 1 }}>
    <View style={{ width: 80, height: 80, border: '3px solid #F20776', padding: 5, margin: 5, backgroundColor: '#FAFAFA', borderRadius: 100 }}>
      <img src={imgUrl} alt='profile' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 100 }} />


    </View>
    <Text style={{ textAlign: 'center' }}>{name}</Text>

  </View>)
}

export default ScrollingProfiles