import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DashboardHeader from './DashboardHeader';
import SalesCard from './SalesCard';
import { WeeklyBarChart } from './charts';
import { BACKGROUND_COLOR, data } from './constants';
import Sales from './sales/Sales';

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
            <Sales />
        </View>
    )
}

export default DashboardPage

const styles = StyleSheet.create({})