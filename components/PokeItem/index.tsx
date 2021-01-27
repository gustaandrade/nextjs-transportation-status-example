import { useGetItemRequest } from '../../hooks/useGetItemRequest';
import styles from './index.module.css';

// export async function getStaticProps() {
//   const lineData = useGetLineRequest(4);
// }

const PokeItem: React.FC = () => {
  const pokeData = useGetItemRequest(25);

  console.log(pokeData);

  return (
    <div className={styles.container}>
      <div className={styles.line_identifier}>
        {pokeData !== null && <p>{pokeData.id}</p>}
        {pokeData === null && <p>null</p>}
      </div>
      <div className={styles.line_description}>
        {pokeData !== null && <p>{pokeData.name}</p>}
        {pokeData === null && <p>null</p>}
      </div>
    </div>
  );
};

export default PokeItem;
