import React from 'react';
import { Text, View } from 'react-native';
import { NearEarthObject } from '../models';

interface NEOListProps {
  objects: NearEarthObject[];
}

const NEOList: React.FC<NEOListProps> = ({ objects }) => {
  return (
    <View>
      {
        objects.map(object => (
          <Text key={object.id}>{object.name}</Text>
        ))
      }
    </View>
  )
};

export default NEOList;
