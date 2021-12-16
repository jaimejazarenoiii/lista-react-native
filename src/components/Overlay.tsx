import React, { useState } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native'

interface Props { onDismiss: () => void }
export const Overlay: React.FC<Props> = (props) => {
  function closeModal() {
    props.onDismiss()
  }

  return (
    <TouchableHighlight onPress={ closeModal }
      style={ styles.overlay }>
      <View/>
    </TouchableHighlight>
  )
}
const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.4
  },
})
