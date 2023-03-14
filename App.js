import { StatusBar } from 'expo-status-bar';

import { NativeBaseProvider, Box, HStack, Text, VStack } from "native-base";

import ChatHistory from './components/ChatHistory';

import ChatBox from './components/ChatBox';

import { Provider } from 'react-redux';
import store from './redux/store'

export default function App() {

  return (
    <Provider store={store}>
      <NativeBaseProvider>
          <Box safeAreaTop bg Color="violet.800" />
          <HStack bg="violet.800" px="3" py="3" w="100%">
            <Text color="white" fontSize="20" fontWeight="bold">
               ShitChat
            </Text>
          </HStack>
          <VStack w="100%" flex={1}>
            <ChatHistory flex={1}/>
            <ChatBox/>
          </VStack>
          <Box safeAreaBottom />
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </Provider>
  );
}