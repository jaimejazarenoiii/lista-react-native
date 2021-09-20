import React, { useState } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TextInput,
  Alert
} from 'react-native'
import { Overlay, FormToolbar } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { addShop } from '../redux/actions'
const { width, height } = Dimensions.get('window')

interface Props { onDismiss: () => void }
export const ShopForm: React.FC<Props> = (props) => {
  const [name, onChangeName] = useState<string>('')
  let [budget, onChangeBudget] = useState<number>(0)
  const dispatch = useDispatch()

  function closeModal() {
    props.onDismiss()
  }

  function onChangedBudgetText(budgetAmount: string) {
    budget = Number(budgetAmount)
  }

  function save() {
    dispatch(addShop(name, budget))
    closeModal()
  }

  return (
    <View style={ styles.parentView }>
      <Overlay onDismiss={ closeModal }/>
      <View style= { styles.containerView }>
        <FormToolbar
          onDismiss={ closeModal }
          onSave= { save }/>
        <View style={ styles.content }>
          <View style={ styles.form }>
            <TextInput
              style={ styles.input }
              onChangeText={ onChangeName }
              value={ name }
              placeholder='Name'
            />
            <TextInput
              style={ styles.input }
              onChangeText={ onChangedBudgetText }
              placeholder='Budget'
              keyboardType='decimal-pad'
            />
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  parentView: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-end',
  },
  containerView: {
    height: '90%',
    width: width,
    paddingTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    overflow: 'hidden',
  },
  content: {
    backgroundColor: '#F2F2F7',
    height: '100%'
  },
  form: {
    backgroundColor: 'white',
    marginTop: 30,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10
  },
  input: {
    borderBottomWidth: 0.4,
    borderColor: 'gray',
    marginBottom: 10
  }
})
