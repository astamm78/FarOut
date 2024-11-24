import React, { useState, useEffect, useCallback } from 'react';
import { Button, StyleSheet, Text, SafeAreaView } from "react-native";

import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { FODatePicker, NEOList } from '../components';
import { NearEarthObject } from '../models';
import { loadNEOs } from '../network';

const HomeView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [nearEarthObjects, setNearEarthObjects] = useState<NearEarthObject[]>([]);

  const onDateSelect = useCallback((event: DateTimePickerEvent, selectedDate: Date) => {
    setSelectedDate(selectedDate);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const objects = await loadNEOs(selectedDate);
      console.log(objects);
      setNearEarthObjects(objects);
      hideDatePicker();
    }

    loadData();
  }, [selectedDate])

  const showDatePicker = useCallback(() => {
    setShowPicker(true);
  }, []);

  const hideDatePicker = useCallback(() => {
    setShowPicker(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Far Out!</Text>
      <Text>Showing Near Earth Objects for {selectedDate.toDateString()}</Text>
      <Button title='Change Date' onPress={showDatePicker} />
      {
        showPicker && (
          <FODatePicker 
            selectedDate={selectedDate}
            onDateSelect={onDateSelect}
          />
        )
      }
      <NEOList objects={nearEarthObjects} />
    </SafeAreaView>
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
