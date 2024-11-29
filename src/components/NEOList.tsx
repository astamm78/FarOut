import React from 'react';
import { SafeAreaView, SectionList, Text, View } from 'react-native';

import { NearEarthObject } from '../models';
import NEOCell from './NEOCell';
import SectionHeader from './SectionHeader';

interface NEOListProps {
  objects: NearEarthObject[];
}

const NEOList: React.FC<NEOListProps> = ({ objects }) => {
  const sections = [
    {
      headerCount: objects.length,
      data: objects
    }
  ]

  return (
    <SafeAreaView style={{flex: 7}}>
      <SectionList 
        sections={sections}
        keyExtractor={ (item) => item.id }
        renderItem={({item}) => (
          <NEOCell object={item} />
        )}
        renderSectionHeader={({section: {headerCount}}) => (
          <SectionHeader count={headerCount} />
        )}
      />
    </SafeAreaView>
  )
};

export default NEOList;
