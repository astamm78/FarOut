import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { NearEarthObject } from '../models';
import NEOCell from './NEOCell';

interface NEOListProps {
  objects: NearEarthObject[];
}

const NEOList: React.FC<NEOListProps> = ({ objects }) => {
  return (
    <SafeAreaView style={{flex: 7, backgroundColor: 'yellow'}}>
      <ScrollView>
        {
          objects.map(object => (
            <NEOCell key={object.id} object={object} />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  )
};

export default NEOList;
