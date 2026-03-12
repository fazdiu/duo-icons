import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { AddCircle } from '../src';

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Icons</Text>

            <View style={styles.row}>
                <AddCircle color='red' data-id="888" />
                <AddCircle color='green' />
                <AddCircle color="royalblue" size={64} />
                <AddCircle color="orange" size={32} />
            </View>

            <Text style={styles.subtitle}>Compatible with iOS, Android and Web</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20, // Nota: gap funciona en versiones modernas de RN y Web
    },
});
