import React from "react";
import { View, Text, TextInput, ScrollView, Image, StyleSheet } from 'react-native';

export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerIcon}>⌂</Text>
                <Text style={styles.headerTitle}>W.A.M</Text>
                <Text style={styles.headerIcon}>🔔</Text>
            </View>

            {/* Main Content */}
            <ScrollView style={styles.content}>
                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <Text>🔍</Text>
                    <TextInput 
                        placeholder="Recherchez"
                        style={styles.searchInput}
                    />
                    <Text>▼</Text>
                </View>

                {/* Categories */}
                <View style={styles.categories}>
                    <View style={styles.categoryRow}>
                        <View style={styles.categoryCard}>
                            <Image source={require('../../assets/restaurant.jpg')} style={styles.categoryImage} />
                            <Text style={styles.categoryText}>Restaurants</Text>
                        </View>
                        <View style={styles.categoryCard}>
                            <Image source={require('../../assets/club.jpg')} style={styles.categoryImage} />
                            <Text style={styles.categoryText}>Club/Bar</Text>
                        </View>
                        <View style={styles.categoryCard}>
                            <Image source={require('../../assets/activities.jpg')} style={styles.categoryImage} />
                            <Text style={styles.categoryText}>Activités</Text>
                        </View>
                    </View>
                    <View style={styles.categoryCard}>
                        <Image source={require('../../assets/cultural.jpg')} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>Visites culturelles</Text>
                    </View>
                </View>

                {/* Featured Section */}
                <Text style={styles.sectionTitle}>À la une</Text>
                <ScrollView horizontal style={styles.featuredScroll}>
                    <Image source={require('../../assets/ushuaia.jpg')} style={styles.featuredImage} />
                    <Image source={require('../../assets/niagara.jpg')} style={styles.featuredImage} />
                    <Image source={require('../../assets/louvre.jpg')} style={styles.featuredImage} />
                </ScrollView>
            </ScrollView>

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
        padding: 15,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 25,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
    },
    categories: {
        marginBottom: 20,
    },
    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    categoryCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden',
    },
    categoryImage: {
        width: '100%',
        height: 100,
    },
    categoryText: {
        textAlign: 'center',
        padding: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    featuredScroll: {
        marginBottom: 20,
    },
    featuredImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: 10,
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