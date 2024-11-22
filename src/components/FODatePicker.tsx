import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface FODatePickerProps {
  selectedDate: Date;
  onDateSelect: (event: DateTimePickerEvent, date: Date) => void;
}

const FODatePicker: React.FC<FODatePickerProps> = ({ selectedDate, onDateSelect }) => {
  return (
    <View>
      <DateTimePicker
        value={selectedDate}
        mode='date'
        onChange={onDateSelect}
        minimumDate={new Date()}
      />
    </View>
  )
};

export default FODatePicker;

