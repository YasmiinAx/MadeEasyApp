import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function DashboardScreen() {

    // percentage change
const calculateWeeklyChange = (currentWeekTotal, lastWeekTotal) => {
    if (lastWeekTotal === 0) {
        return currentWeekTotal > 0 ? 100 : 0; // If last week was 0, show 100% increase
    }
    
    const change = ((currentWeekTotal - lastWeekTotal) / lastWeekTotal) * 100;
    return Math.round(change); // Round
};

// hard Coded at the moment
const currentWeekTasks = 63;
const lastWeekTasks = 55; 

// used for changing display depending if it is increase or decrease from last week
const weeklyChange = calculateWeeklyChange(currentWeekTasks, lastWeekTasks);
const isIncrease = weeklyChange >= 0;
const isDecrease = weeklyChange < 0;

//average calculation
const averagePerDay = (currentWeekTasks / 7).toFixed(1);

// hard coded at the moment
const targetTasks = 100; // weekly target
const completedTasks = 72; // weekly completed
const completionPercentage = Math.round((completedTasks / targetTasks) * 100); 
const aboveTarget = completionPercentage >= 100;

// Display as text
const changeText = `${isIncrease ? '+' : ''}${weeklyChange}% from last week`;
    
    return (
        <ScrollView style={[styles.container, { paddingTop: 60 }]} contentContainerStyle={{ paddingBottom: 80 }}>
            {/* Header */}
            <Text style={styles.headerText}>Dashboard</Text>
            <Text style={styles.subheaderText}>Your weekly performance overview</Text>

            {/* Performance */}
            <View style={styles.cardRow}>
                {/* This Week Card */}
                <View style={styles.performanceCard}>
                    <View style={styles.dashImagePlaceholder}>
                        <Text style={styles.numberDisplay}>
                        {isIncrease ? '📈' : '📉'} This Week
                        </Text>
                        <Text style={[styles.weekValue, { marginTop: 10 }]}>{currentWeekTasks}</Text>
                        <Text style={[styles.changeText, { color: isIncrease ? '#2FE942' : '#ab0a0aff' }]}>
                            {changeText}
                        </Text>
                    </View>
                </View>

                {/* Completion */}
                <View style={styles.performanceCard}>
                    <Text style={styles.cardLabel}>🎯 Completion</Text>
                    <Text style={styles.completionValue}>{completionPercentage}%</Text>
                    <Text style={[styles.completionText, { color: aboveTarget ? '#2FE942' : '#ab0a0aff' }]}>
                        {aboveTarget ? 'Above target' : 'Below target'}
                    </Text>
                </View>
            </View>

            {/* Chart */}
            <View style={styles.card}>
                <Text style={styles.cardHeader}>Weekly Tasks</Text>
                <View style={styles.dashChartPlaceholder}>
                    <Text style={styles.numberDisplay}>📈 Weekly Chart Image</Text>
                </View>
            </View>

            {/* summary info */}
            <View style={styles.card}>
                <Text style={styles.cardHeader}>Summary</Text>
            {/* uses our hard coded constants and calculation to display accurately*/}
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Total tasks completed</Text>
                    <Text style={styles.summaryValue}>{completedTasks}</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Average per day</Text>
            {/* uses our hard coded constants and calculation to display accurately*/}
                    <Text style={styles.summaryValue}>{averagePerDay}</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Streak</Text>
                    <Text style={styles.summaryValue}>7 days</Text>
                </View>
            </View>
        </ScrollView>
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
        marginBottom: 15,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 15,
    },
    performanceCard: {
        backgroundColor: '#2D1F2B',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#3D2938',
        width: '48%',
        height: 140,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#2D1F2B',
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#3D2938',
        marginBottom: 15,
    },
    cardHeader: {
        color: '#FFFFFF',
        fontSize: 22,
        paddingBottom: 5,
    },
    dashImagePlaceholder: {
        alignItems: 'center',        
    },
    dashChartPlaceholder: {
        height: 200,
        alignItems: 'center',
    },
    numberDisplay: {
        color: '#A894A3',
        fontSize: 14,
        textAlign: 'center',
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
        fontSize: 36,
        fontWeight: 'bold',
    },
    completionValue: {
        color: '#FFFFFF',
        fontSize: 36,
        fontWeight: 'bold',
    },
    generalLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        marginBottom: 10,
    },

});