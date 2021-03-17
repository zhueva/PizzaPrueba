import React from "react";
import { BreadCrumb, Image } from "../../../../components";
import css from "./pizza.module.css";

export function Pizza({ pizza }) {
  const { name, price } = pizza;
  const items = [{ text: "Carta", url: "/" }, { text: name }];

  return (
    <section>
      <BreadCrumb items={items} />
      <div className={css.container}>
      <Image
        public_id={pizza.image.public_id}
        width="8"
        height="5"
        small={400}
        big={800}
      />
      </div>
      <h2>{name}</h2>
      <h3>Descripcion de la pizza</h3>
      <h3>{price}€</h3>
    </section>
  );
}
