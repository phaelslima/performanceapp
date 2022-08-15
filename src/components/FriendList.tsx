import React, { useMemo } from 'react'
import { FlatList, Text, View } from 'react-native'

import { Friend } from './Friend'

interface Props {
  data: {
    id: string
    name: string
    likes: number
    online: string
  }[]
  follow: () => void
}

export function FriendList({ data, follow }: Props) {
  const totalLikes = useMemo(() => {
    return data.reduce((acc, cur) => {
      return acc + cur.likes
    }, 0)
  }, [data])

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Friend data={item} follow={follow} />}
      />
    </View>
  )
}