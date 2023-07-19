import AppWrapper from "../ui/wrapper"
import classes from './reservationPick.module.css';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, query, orderByChild, equalTo, onValue, off } from 'firebase/database';
import { openingHours } from "../../openingHours/openingHours";
import ContactModal from "../contact/contactModal";
const firebaseConfig = {
  apiKey: "AIzaSyCu6erLV-7g2jVrkHkF9vOPRgZLuX84dMo",
  authDomain: "coffee-restaurant-ca1d9.firebaseapp.com",
  databaseURL: "https://coffee-restaurant-ca1d9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "coffee-restaurant-ca1d9",
  storageBucket: "coffee-restaurant-ca1d9.appspot.com",
  messagingSenderId: "781872609130",
  appId: "1:781872609130:web:6bb56e9e7942b61f565713",
  measurementId: "G-H1ZLLTYJRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

interface OpeningHour {
    day: string;
    startTime: string;
    endTime: string;
  }
  interface Reservation {
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
    numberOfCustomers: number;
  }

function ReservationPick(){
    const today = new Date().toISOString().split('T')[0];
    


  const [selectedDate, setSelectedDate] = useState<string>('');
  const [availableHours, setAvailableHours] = useState<string[]>([]);
  const [hourSelected, setHourSelected] = useState(false)
  const [hourOfReservation, setHourOfReservation] = useState('')
  const [existingReservations, setExistingReservations] = useState<Reservation[]>([]);
  const [numberOfCustomers, setNumberOfCustomers] = useState<number>(0);

  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [showModal,setShowModal] = useState(false)
const [response,setResponse] = useState('')
const [responseParagraph, setResponseParagraph] = useState('')

const hideModalHandler = () => {
  setShowModal(false)
}

useEffect(() => {
  const database = getDatabase();
  const reservationsRef = ref(database, 'reservations');

  const reservationsQuery = query(reservationsRef, orderByChild('date'), equalTo(selectedDate));

  const reservationsListener = (snapshot: import("firebase/database").DataSnapshot) => {
    const reservations: Reservation[] = [];

    snapshot.forEach((childSnapshot) => {
      const reservation = childSnapshot.val() as Reservation;
      reservations.push(reservation);
    });

    setExistingReservations(reservations);
  };

  const listenForReservations = () => {
    const listener = onValue(reservationsQuery, reservationsListener);
    return listener; // Return the listener
  };

  const unsubscribe = listenForReservations(); // Store the listener in a variable

  return () => {
    unsubscribe(); // Call the unsubscribe function to remove the listener
  };
}, [selectedDate]);
useEffect(() => {
  // Update the available hours based on existing reservations
  if (existingReservations.length > 0) {
    const reservedHours: string[] = [];

    existingReservations.forEach((reservation) => {
      reservedHours.push(reservation.time);
    });
  }
}, [existingReservations]);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  
    if(selectedDate === today){
      const now = new Date();
      const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const availableHoursToday = availableHours.filter((hour) => {
      const [hourStr, minuteStr] = hour.split(':');
      const hourInt = parseInt(hourStr, 10);
      const minuteInt = parseInt(minuteStr, 10);
      if (hourInt > currentHour) {
        return true;
      } else if (hourInt === currentHour && minuteInt >= currentMinute) {
        return true;
      }
      return false;
    });
    setAvailableHours(availableHoursToday);
    return
    }
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
  
        current.setMinutes(current.getMinutes() + 60);
      }
  
      setAvailableHours(availableHours);
    } else {
      setAvailableHours([]);
    }
  };
  
  const isHourReserved = (hour: string) => {
    const reservationExists = existingReservations.some(
      (reservation) =>
        reservation.date === selectedDate &&
        reservation.time === hour &&
        reservation.numberOfCustomers === numberOfCustomers
    );
    return reservationExists;
  };
  const getDayOfWeek = (date: string) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayIndex = new Date(date).getDay();
    return days[dayIndex];
  };

  const saveReservation = (event: React.FormEvent) => {
    if(!name || !email || !phone || !email.includes('@')){
      return;
    }
    event.preventDefault();
    const reservation = {
      date: selectedDate,
      time: hourOfReservation,
      name: name,
      email: email,
      phone: phone,
      numberOfCustomers: numberOfCustomers,
    };
    console.log('Saving reservation:', reservation);
    const database = getDatabase();
  
    const conflictingReservation = existingReservations.find(
      (existingReservation) =>
        existingReservation.date === selectedDate &&
        existingReservation.time === hourOfReservation &&
        existingReservation.numberOfCustomers >= numberOfCustomers
    );
  
    if (conflictingReservation) {
      console.error('A conflicting reservation exists. Please choose a different time or number of customers.');
      return;
    }
  
    push(ref(database, 'reservations'), reservation)
      .then(() => {
        setShowModal(true)
        setResponse('Success!')
        setResponseParagraph('Your table has been reserved successfully!')
        setName('');
        setEmail('');
        setPhone('');
        setHourSelected(false);
        setNumberOfCustomers(1);
        setSelectedDate('');
      })
      .catch((error) => {
        setShowModal(true)
        setResponse('Error!')
        setResponseParagraph('Failed to connect to database!')
      });
  };
  
  

    return  <div className={classes.reservation}>
        <AppWrapper>
          {!hourSelected && <div>
            <div className={classes.reservationContainer}>
  <label htmlFor="numberOfCustomers">Number of customers</label>
  <select
    id="numberOfCustomers"
    value={numberOfCustomers}
    onChange={(e) =>
      setNumberOfCustomers(Number(e.target.value))}
  >
    <option value="">Select</option>
    <option value={1}>1</option>
    <option value={2}>2</option>
    <option value={3}>3</option>
    <option value={4}>4</option>
    <option value={5}>5</option>
    <option value={6}>6</option>
  </select>
  <p>For reservation above 6 customers please contact us here : 324 567 890</p>
</div>

      {numberOfCustomers > 0 && <div className={classes.date}>
        <label htmlFor="date">Date</label>
        <input type="date" id="datePicker" min={today} onChange={handleDateChange} />
      </div>}
      {selectedDate && (
        <div className={classes.availableHours}>
          <p>Available Hours</p>
          {availableHours.length > 0 ? (
            <ul className={classes.hoursList}>
              {availableHours.map((hour) => (
                <li key={hour} className={isHourReserved(hour) ? classes.reserved : classes.free}    onClick={() => {
                  if (!isHourReserved(hour)) {
                    setHourOfReservation(hour);
                    setHourSelected(true);
                  }
                }} >{hour}</li>
              ))}
            </ul>
          ) : (
            <p>No available hours for the selected date.</p>
          )}
        </div>
      )}
      </div>}
      {hourSelected && <div><form className={classes.ReservationForm} onSubmit={saveReservation}>
  <div className={classes.reservationTime}>
    <p>{selectedDate}</p>
    <p>{hourOfReservation}</p>
  </div>
  <label htmlFor="name">Name</label>
  <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
  <label htmlFor="email">E-mail</label>
  <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  <label htmlFor="number">Phone number</label>
  <input id="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
  <button type="submit">Submit</button>
</form>
</div>}
      </AppWrapper>
      {showModal && <ContactModal response={response} responseParagraph={responseParagraph} hideModalHandler={hideModalHandler} />}
    </div>
}
export default ReservationPick