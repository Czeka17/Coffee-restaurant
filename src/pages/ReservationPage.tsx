import React, { useState, ChangeEvent } from 'react';
import Footer from '../components/footer/footer';
import ReservationPick from '../components/reservation/resevationPick';



const ReservationPage: React.FC = () => {
  

  return (
    <section > 
      <ReservationPick/>
      <Footer />
    </section>
  );
};

export default ReservationPage;
