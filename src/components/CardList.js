import React from "react";
import Card from "./Card";

const CardList = ({ asanas }) => {
  // if (true) {
  //   throw new Error('Noooooooo!');
  // }
  return (
    <div>
      {asanas.map((yoga, i) => {
        return (
          <Card
            key={asanas[i].id}
            id={asanas[i].id}
            sanskrit_name={asanas[i].sanskrit_name}
            english_name={asanas[i].english_name}
            img_url={asanas[i].img_url}
          />
        );
      })}
    </div>
  );
}

export default CardList;
