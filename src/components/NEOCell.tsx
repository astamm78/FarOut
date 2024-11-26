import React, { useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';

import { NearEarthObject } from '../models';

interface NEOCellProps {
  object: NearEarthObject;
}

const NEOCell: React.FC<NEOCellProps> = ({ object }) => {
  const [displayExtra, setDisplayExtra] = useState<boolean>(false);

  const toggleDisplay = () => {
    setDisplayExtra(!displayExtra);
  }

  return (
    <View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text>{object.name}</Text>
        <Pressable onPress={toggleDisplay}>
          <Text>{displayExtra ? 'Show Less' : 'Show More'}</Text>
        </Pressable>
      </View>
      {
        displayExtra && (
          <View>
            <Text>{object.estimatedDiameterDescription()}</Text>
            <Text>{object.relativeVelocityMPHDescription()}</Text>
            <Text>{object.missDistanceDescription()}</Text>
            <Text>{object.potentialHazerdDescription()}</Text>
          </View>
        )
      }
    </View>
  )
};

export default NEOCell;
