import React from 'react'
import { View } from 'react-native'

import { Friend } from './Friend'

interface Props {
  data: {
    id: number
    name: string
    likes: string
  }[]
}

export function FriendList({ data }: Props) {
  return (
    <View>
      {data.map(item => <Friend key={item.id} data={item} />)}
    </View>
  )
}