import React, { useMemo } from 'react'
import { Text, View } from 'react-native'

import { Friend } from './Friend'

interface Props {
  data: {
    id: number
    name: string
    likes: number
  }[]
}

export function FriendList({ data }: Props) {
  const totalLikes = useMemo(() => {
    return data.reduce((acc, cur) => {
      return acc + cur.likes
    }, 0)
  }, [data])

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>
      {data.map(item => <Friend key={item.id} data={item} />)}
    </View>
  )
}