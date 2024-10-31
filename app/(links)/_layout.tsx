import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Home } from '.'
import { Stack } from 'expo-router'

const HomeLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="links"
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
        </>
    )
}

export default HomeLayout