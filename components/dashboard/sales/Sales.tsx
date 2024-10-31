import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const users = [
    {
        id: '1',
        name: 'Durim Mehmetaj',
        nickname: 'Durimi',
        time: '07:19',
        status: 'DIONA',
        total: '239.1€'
    },
    {
        id: '2',
        name: 'Agon Hadergjonaj',
        nickname: 'Agoni',
        time: '14:57',
        status: 'DIONA',
        total: '199.9€'
    },
];

const Sales = () => {
    const [activeTab, setActiveTab] = useState('Users'); // 'Users', 'Tables', 'Items'
    const [search, setSearch] = useState('');

    const renderUsers = () => (
        <FlatList
            data={users.filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
            )}
            renderItem={renderUserItem}
            keyExtractor={(item) => item.id}
        />
    );

    const renderUserItem = ({ item }: any) => (
        <View style={styles.userCard}>
            <View style={styles.userInfo}>
                <Ionicons name="person" size={24} color="white" />
                <View style={styles.userDetails}>
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.nickname}>{item.nickname}</Text>
                </View>
            </View>
            <View style={styles.userStatus}>
                <Text style={styles.status}>{item.status}</Text>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total: {item.total}</Text>
                </View>
            </View>
        </View>
    );

    const renderTables = () => (
        <View style={styles.contentContainer}>
            <Text style={styles.placeholderText}>Tables content goes here</Text>
        </View>
    );

    const renderItems = () => (
        <View style={styles.contentContainer}>
            <Text style={styles.placeholderText}>Items content goes here</Text>
        </View>
    );

    const renderContent = () => {
        if (activeTab === 'Users') {
            return renderUsers();
        } else if (activeTab === 'Tables') {
            return renderTables();
        } else if (activeTab === 'Items') {
            return renderItems();
        }
    };

    return (
        <View style={styles.container}>
            {/* Tabs */}
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'Users' && styles.activeTab]}
                    onPress={() => setActiveTab('Users')}
                >
                    <Text style={styles.tabText}>Users</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'Tables' && styles.activeTab]}
                    onPress={() => setActiveTab('Tables')}
                >
                    <Text style={styles.tabText}>Tables</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, activeTab === 'Items' && styles.activeTab]}
                    onPress={() => setActiveTab('Items')}
                >
                    <Text style={styles.tabText}>Items</Text>
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            {activeTab === 'Users' && (
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search for Workers..."
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
            )}

            {/* Content */}
            {renderContent()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        backgroundColor: '#EEE',
        borderRadius: 10,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    activeTab: {
        backgroundColor: '#6544de',
        borderRadius: 10,
    },
    tabText: {
        fontSize: 16,
        color: '#FFF',
    },
    searchBar: {
        marginTop: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#E6E6E6',
        fontSize: 16,
    },
    userCard: {
        backgroundColor: '#6544de',
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userDetails: {
        marginLeft: 10,
    },
    time: {
        fontSize: 12,
        color: '#FFF',
    },
    name: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 12,
        color: '#AAA',
    },
    userStatus: {
        alignItems: 'flex-end',
    },
    status: {
        fontSize: 12,
        color: '#F73A3A', // Red color for status
        fontWeight: 'bold',
    },
    totalContainer: {
        backgroundColor: '#2B2B2B',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    totalText: {
        color: '#FFF',
        fontSize: 14,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 18,
        color: '#888',
    },
});

export default Sales;
