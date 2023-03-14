import { View, Text } from 'react-native'
import React from 'react'
import { FlatList, HStack } from 'native-base'
import { useSelector } from 'react-redux'

const ChatHistory = () => {

  const chatHistory = useSelector(state => state.chatroom.chatHistory)

  console.log('Showing chat history:');
  console.log(chatHistory);

  return (
    <>
      <FlatList data={chatHistory}
        renderItem={({ item }) => (
          <HStack p={3} space={3} flexWrap={'wrap'} >
            <Text>{item.sender}</Text>
            <Text>{item.text}</Text>
          </HStack>
        )}
      >

      </FlatList>
    </>
  )
}

export default ChatHistory