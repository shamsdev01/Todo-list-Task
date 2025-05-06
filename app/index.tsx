import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import TopLeftDesign from '@/components/Design';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TopLeftDesign />
      <View style={styles.content}>
        <Image
          source={require('../assets/images/back-to-school.png')}
          accessibilityLabel="Back to school"
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Gets things with TODOs</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.
        </Text>
        <Button title="Get Started" onPress={() => router.push('/onboard')} />
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
  image: {
    width: 180,
    height: 180,
    marginBottom: 32,
  },
  title: {
    fontSize: 18,
    // fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#222',
    fontFamily: 'Poppins-Bold',
  },
  description: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
  },
});