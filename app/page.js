import React from "react";
import Header from "./components/landing/Header";
import EventList from "./components/landing/EventList";

function Home() {
  return (
    <section class="container">
      <Header />
      <EventList/>
    </section>
  );
}

export default Home;
