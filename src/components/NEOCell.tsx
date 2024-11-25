import React from 'react';
import { Text, View } from 'react-native';

import { NearEarthObject } from '../models';

interface NEOCellProps {
  object: NearEarthObject;
}

const NEOCell: React.FC<NEOCellProps> = ({ object }) => {
  return (
    <View>
      <Text>{object.name}</Text>
      <Text>{object.estimatedDiameterDescription()}</Text>
      <Text>{object.relativeVelocityMPHDescription()}</Text>
      <Text>{object.missDistanceDescription()}</Text>
      <Text>{object.potentialHazerdDescription()}</Text>
    </View>
  )
};

export default NEOCell;
