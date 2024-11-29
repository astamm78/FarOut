import React from 'react';
import { Button, Pressable, StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface FODatePickerProps {
  selectedDate: Date;
  onDateSelect: (event: DateTimePickerEvent, date?: Date) => void;
  hideDatePicker: () => void;
}

const FODatePicker: React.FC<FODatePickerProps> = ({ selectedDate, onDateSelect, hideDatePicker }) => {
  return (
    <View style={styles.container}>
        <Button title='Close' onPress={hideDatePicker} />
        <View style={styles.pickerContainer}>
          <DateTimePicker
            value={selectedDate}
            mode='date'
            onChange={onDateSelect}
            minimumDate={new Date()}
          />
        </View>
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: 100,
    paddingTop: 90,
  },
  
  pickerContainer: {
    padding: 20,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
  },
})

export default FODatePicker;
