import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/reducers'
import {
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Image,
  Modal,
  Text
} from 'react-native'
import { ShopForm } from './ShopForm'
import { ShopRow } from '../components/ShopRow'
const { width, height } = Dimensions.get('window');

interface Props { }
export const ShopList: React.FC<Props> = (props) => {
  const [count, setCount] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const { shops } = useSelector((state: RootState) => state.shops)
  function displayPopup() {
    setModalVisible(!modalVisible)
  }

  return (
    <View style={ styles.containerView }>
      <View style={ styles.topView }>
        <Text style={ styles.largeTitle }>
          Shopping Sessions
        </Text>
        <TouchableHighlight onPress={ displayPopup }
          style={ styles.button } underlayColor='transparent'>
          <Text style={ styles.buttonText }>Add Shop</Text>
        </TouchableHighlight>
      </View>
      <ShopRow shops={ shops }/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ShopForm 
          onDismiss={ () => {
            setModalVisible(false)
          }} 
        />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    height: "100%",
    backgroundColor: '#F2F2F7'
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  largeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: 'black'
  },
  button: {
    padding: 10
  },
  buttonText: {
    color: 'blue',
  },
  imageView: {
    height: width * 0.7,
    width: width * 0.7,
    alignSelf: 'center'
  },
  title: {
    fontSize: 42,
    textAlign: 'center'
  }
})
