import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { HStack, Icon, IconButton, Input } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addUserMessage } from '../redux/chatHistorySlice';

const ChatBox = () => {

  const [chatMessage, setChatMessage] = useState("")

  const dispatch = useDispatch()

  return (
    <>
        <HStack p={2} space={2}>
            <Input flex={7} placeholder="Type something here..." 
              onChangeText={(text) => setChatMessage(text)}
              value={chatMessage}
            />
            <IconButton 
                flex={1}
                borderRadius="sm"
                variant="solid"
                icon={<Icon as={FontAwesome} name="send" size="lg" color="white" />}
                onPress={()=>{
                  // console.log('Sending message: ${chatMessage}')
                  const action = addUserMessage(chatMessage);
                  dispatch(action);
                  // dispatch(updateUsername(chatMessage))
                  setChatMessage("");
                }}
            />
        </HStack>
    </>
  )
}

export default ChatBox