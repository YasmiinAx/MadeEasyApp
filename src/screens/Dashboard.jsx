import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function DashboardScreen() {

    return (
        <View style={[styles.container, { paddingTop: 20 }]} contentContainerStyle={{ paddingBottom: 80 }}>

            {/* Header */}
            <Text style={styles.headerText}>Dashboard</Text>
            <Text style={styles.subheaderText}>Your weekly performance overview</Text>

            {/* Performance Cards */}
            <View style={styles.cardRow}>

                {/* This Week Card */}
                <View style={styles.performanceCard}>
                    <View style={styles.iconRow}>
                        <Image
                            source={require("../assets/images/trendup.png")}
                            style={styles.cardIcon}
                        />
                        <Text style={styles.iconLabel}>This Week</Text>
                    </View>

                    <Text style={styles.weekValue}>63</Text>
                    <Text style={[styles.changeText, { color: '#2FE942' }]}>
                        +15% from last week
                    </Text>
                </View>

                {/* Completion Card */}
                <View style={styles.performanceCard}>
                    <View style={styles.iconRow}>
                        <Image
                            source={require("../assets/images/target.png")}
                            style={styles.cardIcon}
                        />
                        <Text style={styles.iconLabel}>Completion</Text>
                    </View>

                    <Text style={styles.completionValue}>72%</Text>
                    <Text style={[styles.completionText, { color: '#2F5EE9' }]}>
                        Above target
                    </Text>
                </View>
            </View>

            {/* Weekly Chart */}
            <View style={styles.card}>
                <Text style={styles.cardHeader}>Weekly Tasks</Text>

                {/* Chart Legend */}
                <View style={styles.legendRow}>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: '#E891D6' }]} />
                        <Text style={styles.legendLabel}>Target</Text>
                    </View>

                    <View style={styles.legendItem}>
                        <View style={[styles.legendDot, { backgroundColor: '#FFFFFF' }]} />
                        <Text style={styles.legendLabel}>Completed</Text>
                    </View>
                </View>

                <Image
                    source={require("../assets/images/graph.png")}
                    style={styles.chartImage}
                    resizeMode="contain"
                />
            </View>

            {/* Summary */}
            <View style={styles.card}>
                <Text style={styles.cardHeader}>Summary</Text>

                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Total tasks completed</Text>
                    <Text style={styles.summaryValue}>72</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Average per day</Text>
                    <Text style={styles.summaryValue}>9.0</Text>
                </View>

                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Streak</Text>
                    <Text style={styles.summaryValue}>7 days</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#221520',
        padding: 20,
    },
    headerText: {
        paddingTop: 30,
        color: '#FFFFFF',
        fontSize: 25,
    },
    subheaderText: {
        color: '#A894A3',
        fontSize: 18,
        marginBottom: 12,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 25,
    },
    performanceCard: {
        backgroundColor: '#2D1F2B',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#3D2938',
        width: '48%',
        height: 150,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardIcon: {
        width: 30,
        height: 30,
        marginBottom: 8,
    },
    card: {
        backgroundColor: '#2D1F2B',
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#3D2938',
        marginBottom: 25,
    },
    cardHeader: {
        color: '#FFFFFF',
        fontSize: 22,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    summaryLabel: {
        color: '#A894A3',
        fontSize: 18,
    },
    summaryValue: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500',
    },
    weekValue: {
        color: '#FFFFFF',
        fontSize: 35,
    },
    completionValue: {
        color: '#FFFFFF',
        fontSize: 35,
    },
    chartImage: {
        width: '100%',
        height: 185,
    },
    changeText: {
        fontSize: 15,
        marginTop: 5,
    },
    completionText: {
        fontSize: 17,
        marginTop: 5,
    },
    iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    iconLabel: {
        color: '#A894A3',
        fontSize: 18,
        fontWeight: '500',
    },
    legendRow: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 10,
        marginTop: 5,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    legendDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    legendLabel: {
        color: '#A894A3',
        fontSize: 16,
    },
});
