import React from 'react';
import { SafeAreaView, SectionList, Text } from 'react-native';

import { NearEarthObject } from '../models';
import NEOCell from './NEOCell';

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
    <SafeAreaView style={{flex: 7, backgroundColor: 'yellow'}}>
      <SectionList 
        sections={sections}
        keyExtractor={ (item) => item.id }
        renderItem={({item}) => (
          <NEOCell object={item} />
        )}
        renderSectionHeader={({section: {headerCount}}) => (
          <Text>{headerCount} Results</Text>
        )}
      />
    </SafeAreaView>
  )
};

export default NEOList;
