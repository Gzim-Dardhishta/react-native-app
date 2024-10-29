import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginForm from '@/components/login/LoginForm'

const SignIn = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <LoginForm />
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn