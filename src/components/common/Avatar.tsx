import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface Props {
  uri: string;
  size?: number;
  online?: boolean;
  testID?: string;
}

export function Avatar({uri, size = 40, online, testID}: Props) {
  const radius = size / 2;
  const onlineDotSize = 10;

  return (
    <View
      testID={testID}
      style={[styles.container, {width: size, height: size, borderRadius: radius}]}>
      <Image
        source={{uri}}
        style={{width: size, height: size, borderRadius: radius}}
        resizeMode="cover"
      />
      {online === true && (
        <View
          style={[
            styles.onlineDot,
            {
              width: onlineDotSize,
              height: onlineDotSize,
              borderRadius: onlineDotSize / 2,
            },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});
