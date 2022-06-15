import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";
export default function App() {
  const cards = data.map((item) => {
      console.log(item.coverImg);
    return (
      <Card
       key={item.id}
        item = {item}
      />
    );
  });
  return (
    <div>
      <Header />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      
    </div>
  );
}
