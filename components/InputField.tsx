import { TextInput, StyleSheet, TextInputProps } from 'react-native';

export default function InputField(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#BDBDBD"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 13,
    color: '#222',
    fontFamily: 'Poppins-Regular',
    marginBottom: 16,
  },
});