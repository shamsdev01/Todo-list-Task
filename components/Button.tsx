import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
};

export default function Button({ onPress, title }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7DEDF3',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 24,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});