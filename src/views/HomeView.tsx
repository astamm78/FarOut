import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from "react-native";

import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { Header, FODatePicker, NEOList } from '../components';
import { NearEarthObject } from '../models';
import { loadNEOs } from '../network';

const HomeView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [nearEarthObjects, setNearEarthObjects] = useState<NearEarthObject[]>([]);

  const onDateSelect = useCallback((event: DateTimePickerEvent, date?: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const objects = await loadNEOs(selectedDate);
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
    <View style={styles.container}>
      <Header 
        selectedDate={selectedDate}
        showDatePicker={showDatePicker}
      />
      {
        showPicker && (
          <FODatePicker 
            selectedDate={selectedDate}
            onDateSelect={onDateSelect}
            hideDatePicker={hideDatePicker}
          />
        )
      }
      <NEOList objects={nearEarthObjects} />
    </View>
  )
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

export default HomeView;
