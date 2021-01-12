import React from "react";
import { View, TouchableOpacity,Text } from "react-native";

export default function TextButton({ onPress, children }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
