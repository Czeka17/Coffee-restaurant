interface OpeningHour {
    day: string;
    startTime: string;
    endTime: string;
  }
const openingHours: OpeningHour[] = [
    { day: 'Sunday', startTime: '07:00', endTime: '18:30' },
    { day: 'Monday', startTime: '07:00', endTime: '18:30' },
    { day: 'Tuesday', startTime: '07:00', endTime: '18:30' },
    { day: 'Wednesday', startTime: '07:00', endTime: '18:30' },
    { day: 'Thursday', startTime: '08:00', endTime: '21:30' },
    { day: 'Friday', startTime: '08:00', endTime: '21:30' },
    { day: 'Saturday', startTime: '08:00', endTime: '21:30' },
  ];

  export { openingHours};