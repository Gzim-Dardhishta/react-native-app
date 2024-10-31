import { Link } from "expo-router"
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export const Home = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#111' }}>
            <Link href={'/dashboard'} style={styles.link}>Dashboard</Link>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'flex-start',
        fontSize: 20,
        color: 'blue'
    },
});