import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function ChatScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerIcon}>⌂</Text>
                <Text style={styles.headerTitle}>W.A.M</Text>
                <Text style={styles.headerIcon}>🔍</Text>
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                <TouchableOpacity style={styles.suggestionButton}>
                    <Text style={styles.buttonText}>Propose moi des activités</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.suggestionButton}>
                    <Text style={styles.buttonText}>Montre moi les meilleurs bars</Text>
                </TouchableOpacity>

                {/* Voice Search Bar */}
                <View style={styles.voiceSearchBar}>
                    <Text style={styles.micIcon}>🎤</Text>
                    <Text style={styles.searchHint}>Recherchez quoi faire</Text>
                </View>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <Text style={styles.navIcon}>⚙️</Text>
                <Text style={styles.navIcon}>❓</Text>
                <Text style={styles.navIcon}>📍</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#65adf1',
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
    },
    headerIcon: {
        color: 'white',
        fontSize: 24,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    suggestionButton: {
        backgroundColor: '#65adf1',
        padding: 15,
        borderRadius: 25,
        marginBottom: 15,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    voiceSearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 25,
        marginTop: 20,
    },
    micIcon: {
        fontSize: 24,
        marginRight: 10,
    },
    searchHint: {
        color: '#666',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: '#65adf1',
    },
    navIcon: {
        color: 'white',
        fontSize: 24,
    },
});