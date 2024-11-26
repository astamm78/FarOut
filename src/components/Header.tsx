import React from "react";
import { Button, StyleSheet, Text, SafeAreaView, View } from "react-native";

import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface HeaderProps {
  selectedDate: Date;
  showPicker: boolean;
  showDatePicker: () => void;
  onDateSelect: (event: DateTimePickerEvent, selectedDate: Date) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedDate, showPicker, showDatePicker, onDateSelect}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.headerText}>Far Out!</Text>
        <Text style={styles.subheadText}>Showing Near Earth Objects for {selectedDate.toDateString()}</Text>
        <Button title='Change Date' onPress={showDatePicker} />

      </View>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: 'gray', 
    width: '100%',
    padding: 20,
  },

  subContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  headerText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    textTransform: 'uppercase',
    marginBottom: 10,
  },

  subheadText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
})

export default Header;
