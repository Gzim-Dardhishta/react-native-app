export const BACKGROUND_COLOR = '#3E3649';

const getStartOfWeek = (date: Date, weekStartsOn: number = 1): Date => {
    const dayOfWeek = date.getDay();
    const difference = (dayOfWeek < weekStartsOn ? 7 : 0) + dayOfWeek - weekStartsOn;
    const monday = new Date(date);
    monday.setDate(date.getDate() - difference);
    monday.setHours(0, 0, 0, 0);
    return monday;
};

const threeWeeksAgo = new Date();
threeWeeksAgo.setDate(threeWeeksAgo.getDate() - 21);
const mondayFromThreeWeeksAgo = getStartOfWeek(threeWeeksAgo);

export const data = new Array(7).fill(null).map((_, weekIndex) => {
    return new Array(7).fill(null).map((__, dayIndex) => {
        const day = new Date(
            mondayFromThreeWeeksAgo.getTime() + 86400000 * (weekIndex * 7 + dayIndex)
        );

        const value = Math.random();

        return {
            day: day,
            value: value,
        };
    });
});

/*
Example of a resulting object in the 'data' array:
[
  [
    { day: 2024-06-24T00:00:00.000Z, value: 0.123456789 }, // Monday of the first week
    { day: 2024-06-25T00:00:00.000Z, value: 0.987654321 }, // Tuesday of the first week
    { day: 2024-06-26T00:00:00.000Z, value: 0.456789123 }, // Wednesday of the first week
    { day: 2024-06-27T00:00:00.000Z, value: 0.654321987 }, // Thursday of the first week
    { day: 2024-06-28T00:00:00.000Z, value: 0.789123456 }, // Friday of the first week
    { day: 2024-06-29T00:00:00.000Z, value: 0.321987654 }, // Saturday of the first week
    { day: 2024-06-30T00:00:00.000Z, value: 0.987654321 }, // Sunday of the first week
  ],
  [
    { day: 2024-07-01T00:00:00.000Z, value: 0.123456789 }, // Monday of the second week
    // ... (similar objects for each day of the second week)
  ],
  // ... (similar arrays for each subsequent week)
]
*/
