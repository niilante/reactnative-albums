import React from 'react'
import { View } from 'react-native'

export default CardSection = ({ children }) => {
  return (
    <View style={style.containerStyle}>
      {children}
    </View>
  )
}

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
}