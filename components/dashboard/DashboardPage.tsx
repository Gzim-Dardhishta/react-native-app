import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DashboardHeader from './DashboardHeader';
import SalesCard from './SalesCard';
import { WeeklyBarChart } from './charts';
import { BACKGROUND_COLOR, data } from './constants';

const DashboardPage = () => {
    const [activeWeekIndex, setActiveWeekIndex] = useState(0);

    return (
        <View>
            <DashboardHeader />
            <SalesCard />
            <WeeklyBarChart
                weeks={data}
                activeWeekIndex={activeWeekIndex}
                onWeekChange={setActiveWeekIndex}
            />
        </View>
    )
}

export default DashboardPage

const styles = StyleSheet.create({})