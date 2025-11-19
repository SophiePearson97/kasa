import { useParams } from 'react-router-dom';

function Logement() {
  const { id } = useParams();

  return (
    <main>
      <h1>Logement details</h1>
      <p>Currently viewing logement with id: {id}</p>
    </main>
  );
}

export default Logement;