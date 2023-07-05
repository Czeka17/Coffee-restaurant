import AppWrapper from "../ui/wrapper"
import classes from './reservationPick.module.css';
import React, { useState, ChangeEvent } from 'react';
interface OpeningHour {
    day: string;
    startTime: string;
    endTime: string;
  }
  interface ReservedHour {
    hour: string;
  }
function ReservationPick(){
    const today = new Date().toISOString().split('T')[0];
    
    const openingHours: OpeningHour[] = [
        { day: 'Sunday', startTime: '07:00', endTime: '18:30' },
        { day: 'Monday', startTime: '07:00', endTime: '18:30' },
        { day: 'Tuesday', startTime: '07:00', endTime: '18:30' },
        { day: 'Wednesday', startTime: '07:00', endTime: '18:30' },
        { day: 'Thursday', startTime: '08:00', endTime: '21:30' },
        { day: 'Friday', startTime: '08:00', endTime: '21:30' },
        { day: 'Saturday', startTime: '08:00', endTime: '21:30' },
      ];
      
  const reservedHours:ReservedHour[] = [
    {hour: '10:30'},{ hour: '19:30'}
  ]

  const [selectedDate, setSelectedDate] = useState<string>('');
  const [availableHours, setAvailableHours] = useState<string[]>([]);
  const [numberOfCustomers, setNumberOfCustomers] = useState<number>(1);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  
    const selectedDay = openingHours.find(
      (hour) => hour.day.toLowerCase() === getDayOfWeek(selectedDate).toLowerCase()
    );
  
    if (selectedDay) {
      const start = new Date(`2000-01-01T${selectedDay.startTime}`);
      const end = new Date(`2000-01-01T${selectedDay.endTime}`);
  
      const availableHours: string[] = [];
      let current = new Date(start);
  
      while (current <= end) {
        const formattedTime = current.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: false,
        });
  
        availableHours.push(formattedTime);
  
        current.setMinutes(current.getMinutes() + 30);
      }
  
      setAvailableHours(availableHours);
    } else {
      setAvailableHours([]);
    }
  };
  
  const isHourReserved = (hour: string) => {
    return reservedHours.some((reservedHour) => reservedHour.hour === hour);
  };
  const getDayOfWeek = (date: string) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayIndex = new Date(date).getDay();
    return days[dayIndex];
  };

  const handleNumberOfCustomersChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const numberOfCustomers = parseInt(event.target.value);
    setNumberOfCustomers(numberOfCustomers);
  };

  const totalPrice = numberOfCustomers * 2;
    return  <div>
        <AppWrapper>
      <div className={classes.reservationContainer}>
        <label htmlFor="numberOfCustomers">Number of customers</label>
        <select id="numberOfCustomers" onChange={handleNumberOfCustomersChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
        <div><p>{totalPrice}€</p></div>
      </div>
      <div className={classes.date}>
        <label htmlFor="date">Date</label>
        <input type="date" id="datePicker" min={today} onChange={handleDateChange} />
      </div>
      {selectedDate && (
        <div>
          <label htmlFor="hour">Available Hours</label>
          {availableHours.length > 0 ? (
            <ul className={classes.hoursList}>
              {availableHours.map((hour) => (
                <li key={hour} className={isHourReserved(hour) ? classes.reserved : classes.free} >{hour}</li>
              ))}
            </ul>
          ) : (
            <p>No available hours for the selected date.</p>
          )}
        </div>
      )}
      </AppWrapper>
    </div>
}
export default ReservationPick