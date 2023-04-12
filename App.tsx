/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import RootNavigator from './_app/components/navigation/StackNavigator/RootNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider>
          <QueryClientProvider client={queryClient}>
            <RootNavigator />
          </QueryClientProvider>
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
