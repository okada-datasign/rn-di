import React, { FC, useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FooAppContext } from './FooApplication';

export const FooView: FC = (props) => {
  const app = useContext(FooAppContext);
  return (
    <View>
      <Text>FooView</Text>
    </View>
  )
};