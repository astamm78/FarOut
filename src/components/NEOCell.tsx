import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { NearEarthObject } from '../models';
import { Palette } from 'src/utils';

interface NEOCellProps {
  object: NearEarthObject;
}

const NEOCell: React.FC<NEOCellProps> = ({ object }) => {
  const [displayExtra, setDisplayExtra] = useState<boolean>(false);

  const toggleDisplay = () => {
    setDisplayExtra(!displayExtra);
  }

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.objectName}>{object.name}</Text>
        <Pressable onPress={toggleDisplay}>
          <Text style={styles.expandButton}>{displayExtra ? 'Show Less' : 'Show More'}</Text>
        </Pressable>
      </View>
      {
        displayExtra && (
          <View style={styles.fullInfoContainer}>
            <DetailSection header='Estimated Diameter' description={object.estimatedDiameterDescription()} />
            <DetailSection header='Relative Velocity' description={object.relativeVelocityMPHDescription()} />
            <DetailSection header='Miss Distance' description={object.missDistanceDescription()} />
            <DetailSection header='Potential Hazard' description={object.potentialHazerdDescription()} />
          </View>
        )
      }
    </View>
  )
};

interface DetailSectionProps {
  header: string;
  description: string;
}

const DetailSection: React.FC<DetailSectionProps> = ({ header, description }) => {
  return (
    <View style={styles.detailSection}>
      <Text style={styles.detailSectionHeader}>{header}:</Text>
      <Text style={styles.detailSectionDescription}>{description}</Text>
    </View>
  )
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderBottomColor: Palette.medBlue,
    borderBottomWidth: 1,
  },
  
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  objectName: {
    fontFamily: 'NotoSans_200ExtraLight',
    fontSize: 22,
  },

  expandButton: {
    color: Palette.lightBlue,
  },

  fullInfoContainer: {
    flex: 1,
    marginTop: 12,
  },

  detailSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginBottom: 12,
  },

  detailSectionHeader: {
    fontFamily: 'NotoSans_200ExtraLight',
    fontSize: 16,
    marginRight: 4,
    color: Palette.lightBlue,
  },

  detailSectionDescription: {
    fontFamily: 'NotoSans_400Regular',
  },
})

export default NEOCell;
