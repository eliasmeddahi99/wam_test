import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export function MapScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerIcon}>⌂</Text>
                <Text style={styles.headerTitle}>W.A.M</Text>
                <Text style={styles.headerIcon}>🔍</Text>
            </View>

            {/* Map */}
            <View style={styles.mapContainer}>
                <MapView style={styles.map} />
                
                {/* Category Filters */}
                <View style={styles.filters}>
                    <Text style={styles.filterIcon}>🍽️</Text>
                    <Text style={styles.filterIcon}>🎵</Text>
                    <Text style={styles.filterIcon}>🎨</Text>
                    <Text style={styles.filterIcon}>🏛️</Text>
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
    mapContainer: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    filters: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    filterIcon: {
        fontSize: 24,
        marginHorizontal: 10,
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