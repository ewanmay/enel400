import * as React from "react";
import { Component } from "react";
import { View, Text } from "react-native";
import { PantryItem } from "../../../ducks/pantry/interfaces";
import { pantryItemStyles } from "../styles";

interface PantryItemProps {
  details: PantryItem
}

const PantryItem = ({ details }: PantryItemProps) => {
  const { containerStyle, textStyle } = pantryItemStyles;
  const { id, name, quantity, price, expirationDate } = details;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{name}</Text>
    </View>
  );
};

export default PantryItem;
