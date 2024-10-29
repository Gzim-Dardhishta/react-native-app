import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SalesCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <FontAwesome name="briefcase" size={32} color="white" />
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>Kushtrim Hadergjonaj</Text>
                    <Text style={styles.status}>All Domain's are working correctly!</Text>
                </View>
                <View style={styles.salesInfo}>
                    <Text style={styles.salesLabel}>Total Sales</Text>
                    <Text style={styles.salesAmount}>838.50€</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 5,
        width: '90%',
        alignSelf: 'center',
    },
    iconContainer: {
        backgroundColor: '#0B1F3B',
        padding: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 1,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfo: {
        flexDirection: 'column',
        flexShrink: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0B1F3B',
        flexWrap: 'wrap',
    },
    status: {
        fontSize: 14,
        color: '#636E72',
        flexWrap: 'wrap',
    },
    salesInfo: {
        alignItems: 'flex-end',
        flexShrink: 0,
    },
    salesLabel: {
        fontSize: 14,
        color: '#0B1F3B',
        fontWeight: 'bold',
    },
    salesAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0B1F3B',
    },
});

export default SalesCard;
