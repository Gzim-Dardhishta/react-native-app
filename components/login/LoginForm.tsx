import { useRouter } from 'expo-router';
import React from 'react'
import { Text, StyleSheet, SafeAreaView, Image, TextInput, Button, View } from 'react-native'
const image = require('../../assets/images/secure.png')

const LoginForm = () => {
  const router = useRouter();

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title} >LoginForm</Text>

      <Image source={image} style={styles.image} resizeMode='contain' />

      <View style={{ width: '100%' }}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="email@example.com"
        />
      </View>

      <View style={{ width: '100%' }}>

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="*******"
        />
      </View>

      <Button
        onPress={() => router.push('/')}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Text style={styles.forgot}>Forgot password?</Text>
    </SafeAreaView>
  )
}

export default LoginForm


const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    margin: 'auto'
  },
  title: {
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center'
  },
  image: {
    width: 100,
    height: 100,
    margin: 'auto'
  },
  input: {
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#c2c2c2',
    color: '#818181',
    width: '100%'
  },
  label: {
    fontSize: 16,
    color: '#818181',
    display: 'flex',
    justifyContent: 'flex-start',
    width: 'auto',
    marginLeft: 0
  },
  forgot: {
    fontSize: 14,
    color: '#0084ff',
    textAlign: 'right',
    marginTop: 12
  }
});