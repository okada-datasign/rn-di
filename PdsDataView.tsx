import { PdsData } from './application/domain/models/PdsData';
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppContext } from './AppContext';

export const PdsDataView: React.FC = (props) => {
  const ctx = useContext(AppContext);
  const [pds, setPds] = useState<PdsData | undefined>(undefined);

  const onPress = () => {
    const output = ctx.PdsDataGet.execute({ id: '1' });
    setPds(output.pdsData);
  }

  return (
    <View>
      <Text>{pds ? pds.content.name :  'No Data'}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>GET</Text>
      </TouchableOpacity>
    </View>
  )
}