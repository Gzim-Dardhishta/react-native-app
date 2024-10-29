import { Text, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';

export type Day = {
    day: Date;
    value: number; // 0 - 1
};

type SingleBarChartProps = {
    maxHeight: number;
    width: number;
    day: Day;
};

export const SingleBarChart = ({
    maxHeight,
    width,
    day,
}: SingleBarChartProps) => {
    const rStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(maxHeight * day.value),
            opacity: withTiming(day.value),
        };
    }, [day.value, maxHeight]);

    // Format the day using Intl.DateTimeFormat
    const formattedDay = new Intl.DateTimeFormat('en-US', {
        weekday: 'narrow',
    }).format(day.day);

    return (
        <View>
            <Animated.View
                style={[
                    {
                        width: width,
                        backgroundColor: '#0B1F3B',
                        borderRadius: 15,
                        borderCurve: 'continuous',
                    },
                    rStyle,
                ]}
            />
            <Text
                style={{
                    width: width,
                    textAlign: 'center',
                    fontSize: 12,
                    marginTop: 5,
                    color: '#808080',
                    fontFamily: 'FiraCode-Regular',
                    textTransform: 'lowercase',
                }}
            >
                {formattedDay}
            </Text>
        </View>
    );
};
