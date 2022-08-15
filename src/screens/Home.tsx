import React, { useCallback, useState } from 'react'

import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import { FriendList } from '../components/FriendList'

interface Data {
  id: string
  name: string
  likes: number

}

export function Home() {
  const [name, setName] = useState('')
  const [friends, setFriends] = useState([])

  async function handleSearch() {
    const response = await fetch(`http://192.168.0.53:3333/friends?q=${name}`)
    const data = await response.json()

    const formattedData = data.map((item: Data) => ({
      id: item.id,
      name: item.name,
      likes: item.likes,
      online: `${new Date().getHours()}:${new Date().getMinutes()}`
    }))

    setFriends(formattedData)
  }

  const handleFollow = useCallback(() => {
    console.log("follow user")
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>

      <TextInput
        placeholder="Nome do amigo"
        onChangeText={setName}
        style={styles.input}
      />
      
      <Button
        title="Buscar"
        onPress={handleSearch}
      />

      <FriendList data={friends} follow={handleFollow} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10
  }
})