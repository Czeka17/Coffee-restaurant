import React, { useState, ChangeEvent } from 'react';
import Navigation from '../components/ui/navigation';
import Footer from '../components/footer/footer';
import ReservationPick from '../components/reservation/resevationPick';



const ReservationPage: React.FC = () => {
  

  return (
    <section>
      <Navigation />
      <ReservationPick/>
      <Footer />
    </section>
  );
};

export default ReservationPage;
