import { View, Text, ImageBackground, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'

const Bai3 = () => {
  return (
    <View style={{ width: '100%', height: '100%', borderWidth: 2, flexDirection: 'column', }} >
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../img/bgr.jpeg')}
      >
        <View style={{ flex: 6, zIndex: 2 }}>
          <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />

          <View
            style={{
              width: '100%',
              height: '10%',
              // borderWidth: 1,
              // borderColor: 'blue',
              flexDirection: 'row',
              position: 'absolute',
              bottom: 20
            }}>
            <View
              style={{
                width: '50%',
                // borderWidth: 2,
                // borderColor: 'yellow'
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 30,
                  color: 'white',
                  marginStart: 20,
                  textTransform: 'uppercase'
                }}>
                Phố Bia
              </Text>
            </View>

            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                // backgroundColor: 'red',
                width: '50%',
                flexDirection: 'row',
                paddingEnd: 20,
                paddingBottom: 20
              }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require('../img/ic_star.png')}
              />
              <Text style={{ color: 'white', fontSize: 20 }}>
                5.0
              </Text>
            </View>

          </View>
          <View
            style={{
              width: "14%",
              height: "13%",
              position: 'flex',
              top: "92%",
              marginStart: "83%",
              // borderWidth: 1,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'yellow',


            }}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require('../img/heart.png')}
            />
          </View>



        </View>
        <View
          style={{
            flex: 4,
            // borderWidth: 1,
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            backgroundColor: 'white',
            zIndex: 1


          }}>
          <View style={{ width: '100%', padding: 15, }}>
            <View style={{ width: '100%', flexDirection: 'row', marginTop: 20 }}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require('../img/ic_position.png')}
              />
              <View style={{ width: '90%', justifyContent: 'center', }}>
                <Text
                  style={{
                    alignItems: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'blue'
                  }}>
                  Quản Nam
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: 'black',
                  marginVertical: 10
                }}>
                Thông Tin Chuyến Đi
              </Text>
            </View>
            <View>
              <Text>
                Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành phố Đà Nẵng khoảng 30 km về phía Nam.

                Hội An là một thành phố thuộc tỉnh Quảng Nam có nhiều khu phố cổ được xây từ thế kỷ 16 và vẫn còn tồn tại gần như nguyên vẹn đến nay. Trong các tài liệu cổ của phương Tây
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              borderWidth: 1,
              backgroundColor: 'blue',
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
              justifyContent: 'center',

            }}>
            <View
              style={{ width: '100%', flexDirection: 'row', paddingStart: 20 }}
            >
              <View style={{ width: '50%',flexDirection: 'row', alignItems:'center'}}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                  $100/
                </Text>
                <Text style={{ color: 'white', marginVertical: 5 }}>
                  ngày
                </Text>
              </View>

              <View style={{ width: '50%',alignItems:'center' }}>
                  <TouchableOpacity style={{width:'80%',padding:20, backgroundColor:'white', borderRadius:10, alignItems:'center', marginHorizontal:10}}>
                      <Text style={{fontSize:18, fontWeight:'bold', color:'blue'}}>
                        Đặt ngay
                      </Text>
                  </TouchableOpacity>
              </View>
            </View>




          </View>

        </View>


      </ImageBackground>
    </View>
  )
}

export default Bai3