import { View, StyleSheet } from 'react-native';

export default function TopLeftDesign() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.largeCircle} />
      <View style={styles.smallCircle} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 180,
    height: 120,
    zIndex: 1,
  },
  largeCircle: {
    position: 'absolute',
    width: 140,
    height: 200,
    borderRadius: 70,
    backgroundColor: '#E6FAFB',
    top: -40,
    left: -40,
  },
  smallCircle: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#B6F0F6',
    top: 10,
    left: 50,
    opacity: 0.7,
  },
});