import { View, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'

const Bai2 = () => {
  return (

    <View>

      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />

      <ImageBackground style={{
        width: '100%', height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
        source={require('../img/bgr.jpeg')}
      >
        <View style={{ width: '100%', alignItems:'center', justifyContent:'center' }}>
          <Text style={{
            color: 'yellow',
            marginHorizontal: 100,
            // borderWidth: 1,
            fontWeight: 'bold',
            fontSize: 30
          }}>
            Hi EVERYONE !
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: '30%',
              height: "25%",
              justifyContent: 'center',
              alignItems: 'center', borderRadius: 10,
              backgroundColor: 'red'
            }}>
            <Text style={{ fontSize: 20, color: 'white' }}>
              Get Start
            </Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>

    </View>

  )
}

export default Bai2