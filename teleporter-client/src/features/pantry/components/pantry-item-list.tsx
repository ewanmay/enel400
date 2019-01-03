import * as React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import PantryItemElement from './pantry-item';
import { PantryItem } from '../../../ducks/pantry/interfaces';

const PantryItemList = ({ currentGroup }: any) => {
  const { pantryItems } = currentGroup;
  console.log(pantryItems);

  return ( <View>{renderItems(pantryItems)}</View>)
}

const renderItems = (pantryItems: Array<PantryItem>) => {
  return pantryItems.map(item => <PantryItemElement key={item.id} details={item} />)
}

export default PantryItemList