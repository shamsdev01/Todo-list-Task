import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TopLeftDesign from '@/components/Design';
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TopLeftDesign />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome back</Text>
        <Image
          source={require('../assets/images/back-to-school.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.inputGroup}>
          <InputField
            placeholder="Enter your Email"
            keyboardType="email-address"
          />
          <InputField
            placeholder="Enter Password"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgot}>Forget password ?</Text>
        </TouchableOpacity>
        <Button title="Login" onPress={() => router.push('/dashboard')} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => router.push('/onboard')}>
            <Text style={styles.footerLink}>Sign Up</Text>
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
    zIndex: 11,
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
    marginBottom: 16,
  },
  image: {
    width: 160,
    height: 100,
    marginBottom: 32,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 8,
  },
  forgotContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  forgot: {
    fontSize: 13,
    color: '#4EC5CE',
    fontFamily: 'Poppins-Regular',
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