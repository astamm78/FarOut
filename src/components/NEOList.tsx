import React from 'react';
import { ScrollView } from 'react-native';

import { NearEarthObject } from '../models';
import NEOCell from './NEOCell';

interface NEOListProps {
  objects: NearEarthObject[];
}

const NEOList: React.FC<NEOListProps> = ({ objects }) => {
  return (
    <ScrollView>
      {
        objects.map(object => (
          <NEOCell key={object.id} object={object} />
        ))
      }
    </ScrollView>
  )
};

export default NEOList;
