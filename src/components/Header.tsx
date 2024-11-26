import React from 'react';
import { Pressable, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { displayString } from 'src/utils/DateHelper';

import { Palette } from 'src/utils';

interface HeaderProps {
  selectedDate: Date;
  showDatePicker: () => void;
}

const Header: React.FC<HeaderProps> = ({ selectedDate, showDatePicker }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.headerText}>Far Out!</Text>
        <Text style={styles.subheadText}>Showing Near Earth Objects for</Text>
        
        <Pressable onPress={showDatePicker} >
          <Text style={[styles.subheadText, styles.subheadCallout]}>{displayString(selectedDate)}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.lightBlue, 
    width: '100%',
    padding: 20,
    borderBottomColor: Palette.darkBlue,
    borderBottomWidth: 1,
  },

  subContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  headerText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 48,
    textTransform: 'uppercase',
    marginBottom:-4,
    fontFamily: 'NotoSans_200ExtraLight',
  },

  subheadText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'NotoSans_400Regular',
  },

  subheadCallout: {
    fontSize: 18,
    fontFamily: 'NotoSans_600SemiBold',
    color: Palette.darkBlue,
  },
})

export default Header;
