import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DashboardHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Dashboard</Text>

            <TouchableOpacity>
                <Text style={styles.headerButton}>Details</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#808080',
    },
    headerButton: {
        color: '#808080',
        fontSize: 16,
    },
});

export default DashboardHeader;
