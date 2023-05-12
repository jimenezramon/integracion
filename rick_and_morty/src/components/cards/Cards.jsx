import React from 'react'
import Card from '../card/Card';
import styles from './Cards.module.css';
export default function Cards({ characters }) {

 
  const vcard = characters.map(({ id, name, status, species, gender, origin, image }) =>
    <Card key={id.toString()}
      name={name}
      status={status}
      species={species}
      gender={gender}
      origin={origin.name}
      image={image}
    />);
//className={styles.divCards}
  return <div className={styles.divCards}>
    {vcard}
  </div>;
}
