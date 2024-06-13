// @refresh reset
import RNBottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import React, {useRef} from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  KeyboardAwareScrollView,
  KeyboardProvider,
  KeyboardToolbar,
} from 'react-native-keyboard-controller';
import {BottomSheet} from './BottomSheet';

const keyboardBottomOffset = Platform.OS === 'ios' ? 70 : 32;

function App(): React.JSX.Element {
  const sheetRef = useRef<RNBottomSheet>(null);

  return (
    <GestureHandlerRootView style={styles.flex}>
      <KeyboardProvider>
        <SafeAreaView style={[styles.background, styles.flex]}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.kasContentContainer}
            keyboardShouldPersistTaps="handled"
            bottomOffset={keyboardBottomOffset}>
            {Array(10)
              .fill('')
              .map((_item, index) => (
                <TextInput
                  key={index}
                  placeholderTextColor="lightgray"
                  placeholder="Type here..."
                  style={styles.input}
                />
              ))}
            <Button
              title="Open Sheet"
              onPress={() => {
                sheetRef.current?.expand();
              }}
            />
          </KeyboardAwareScrollView>
          <KeyboardToolbar />
          <BottomSheet ref={sheetRef}>
            <View style={styles.container}>
              <BottomSheetTextInput
                placeholderTextColor="lightgray"
                placeholder="Type here..."
                style={styles.input}
              />
            </View>
          </BottomSheet>
        </SafeAreaView>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  background: {backgroundColor: 'white'},
  input: {
    color: 'black',
    borderColor: 'darkgray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  container: {
    justifyContent: 'center',
    height: 200,
    padding: 24,
  },
  kasContentContainer: {flexGrow: 1, gap: 24, padding: 24},
});

export default App;
