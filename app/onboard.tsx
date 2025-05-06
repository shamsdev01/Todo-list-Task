import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import TopLeftDesign from '@/components/Design';
import Button from '@/components/Button';
import { useRouter } from 'expo-router';
import InputField from '@/components/InputField';

export default function Onboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TopLeftDesign />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Onboard!</Text>
        <Text style={styles.subtitle}>Let's help to meet up your {'\n'}tasks.</Text>
        <View style={styles.inputGroup}>
          <InputField
            placeholder="Enter your full name"
          />
          <InputField
            placeholder="Enter your Email"
            keyboardType="email-address"
          />
          <InputField
            placeholder="Enter Password"
            secureTextEntry
          />
          <InputField
            placeholder="Confirm password"
            secureTextEntry
          />
        </View>
        <Button title="Register" onPress={() => {}} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => router.push('/sign-in')}>
            <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FFFE',
    position: 'relative',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 80,
  },
  title: {
    fontSize: 20,
    color: '#222',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginBottom: 32,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 24,
  },
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  footerText: {
    fontSize: 13,
    color: '#222',
    fontFamily: 'Poppins-Regular',
  },
  footerLink: {
    fontSize: 13,
    color: '#4EC5CE',
    fontFamily: 'Poppins-Regular',
  },
});