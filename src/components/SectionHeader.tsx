import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Palette } from 'src/utils';

interface SectionHeaderProps {
  count: number;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ count }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{count} Results</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Palette.callout,
  },

  text: {
    color: 'white',
    fontFamily: 'NotoSans_700Bold',
  }
})

export default SectionHeader;
