import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { FODatePicker } from '../components';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

const HomeView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const onDateSelect = (event: DateTimePickerEvent, selectedDate: Date) => {
    if (event.type === 'set') {
      setSelectedDate(selectedDate);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Home View</Text>
      <FODatePicker 
        selectedDate={selectedDate}
        onDateSelect={onDateSelect}
      />
    </View>
  )
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeView;
