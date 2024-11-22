import React from 'react';
import { View, Text } from "react-native";

const HomeView: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home View</Text>
    </View>
  )
};

export default HomeView;
