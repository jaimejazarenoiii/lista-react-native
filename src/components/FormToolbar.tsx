import React, { useState } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text
} from 'react-native'

interface Props { onDismiss: () => void, onSave: () => void }
export const FormToolbar: React.FC<Props> = (props) => {
  function closeModal() {
    props.onDismiss()
  }

  function save() {
    props.onSave()
  }

  return (
    <View style={ styles.container }>
      <TouchableHighlight onPress={ closeModal }
        underlayColor='white'>
        <Text style={ styles.text }>Cancel</Text>
      </TouchableHighlight>
      <Text style={ styles.title }>
        Add Shopping Session
      </Text>
      <TouchableHighlight onPress={ save }
        underlayColor='white'>
        <Text style={ styles.text }>Save</Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
  }
})
