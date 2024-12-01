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
        <Text style={styles.hint}>(Tap on date to change)</Text>
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
    fontSize: 48,
    textTransform: 'uppercase',
    marginBottom: 2,
    fontFamily: 'NotoSans_200ExtraLight',
  },

  subheadText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'NotoSans_400Regular',
    lineHeight: 28,
  },

  subheadCallout: {
    fontSize: 18,
    fontFamily: 'NotoSans_600SemiBold',
    color: Palette.darkBlue,
  },

  hint: {
    textAlign: 'center',
  }
})

export default Header;
