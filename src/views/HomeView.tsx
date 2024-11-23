import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { FODatePicker } from '../components';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { NearEarthObject } from '../models';
import { loadNEOs } from '../network';

const HomeView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [nearEarthObjects, setNearEarthObjects] = useState<NearEarthObject[]>([]);

  const onDateSelect = useCallback((event: DateTimePickerEvent, selectedDate: Date) => {
    setSelectedDate(selectedDate);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const objects = await loadNEOs(selectedDate);
      console.log(objects);
      setNearEarthObjects(objects);
    }

    loadData();
  }, [selectedDate])

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
