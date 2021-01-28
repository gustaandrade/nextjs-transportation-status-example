import React, { useEffect, useState } from 'react';

import { useGetItemRequest } from '../../hooks/useGetItemRequest';
import PokeItemSkeleton from '../PokeItemSkeleton';
import styles from './styles.module.css';

// export async function getStaticProps() {
//   const lineData = useGetLineRequest(4);
// }

const PokeItem: React.FC = () => {
  const pokeData = useGetItemRequest(25);

  return (
    <div className={styles.container}>
      {/* <PokeItemSkeleton /> */}

      {pokeData === null && <PokeItemSkeleton />}

      {pokeData !== null && (
        <div className={styles.card}>
          <div className={styles.photo}>
            <img src={pokeData.sprites.front_default} alt={pokeData.name} />
          </div>
          <div className={styles.description}>
            <p className={styles.poke_number}>#0{pokeData.id}</p>
            <p className={styles.poke_description}>{pokeData.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokeItem;
