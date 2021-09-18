import React, { useEffect, useState } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions
} from 'react-native'
import { ShopInterface } from '../redux/types'
import { useSelector, useDispatch } from 'react-redux'
import { refreshList } from '../redux/actions/'
const { width } = Dimensions.get('window')

interface Props { shops: ShopInterface[] }
export const ShopRow: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const showImgIndex = props.shops.length > 1

  function updateList() {
    dispatch(refreshList())
  }

  function renderItem({ item, index }: { item: ShopInterface, index: number }) {
    const { name, date, budgetAmount, items } = item || {}
    return <View style={ [styles.container, index + 1 == props.shops.length ? styles.paddingBelow : null] }>
      <View style={ styles.leftContainer }>
        <Text style={ styles.title }>{ name }</Text>
        <Text style={ styles.dateLabel }>{ date.toLocaleString() }</Text>
      </View>
      <View style={ styles.rightContainer }>
        <Text style={ styles.info }>Budget</Text>
        <Text>{ budgetAmount }</Text>
        <Text style={ styles.info }>Spent</Text>
        <Text>
          200
        </Text>
      </View>
    </View>
  }

  useEffect(() => {
    updateList()
  }, [])

  return (
    <FlatList
      data={props.shops}
      renderItem={renderItem}
      horizontal={false}
      snapToAlignment={"start"}
      snapToInterval={width}
      decelerationRate={"fast"}
      pagingEnabled
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={ false }
    />
  )
}
const styles = StyleSheet.create({
  paddingBelow: {
    paddingBottom: 20
  },
  container: {
    backgroundColor: '#fff',
    minHeight: 100,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row'
  },
  leftContainer: {
    paddingLeft: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  rightContainer: {
    flexGrow: 1,
    paddingRight: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 5
  },
  dateLabel: {
    fontSize: 14
  },
  info: {
    fontSize: 12,
    color: '#A39E9E'
  }
})
