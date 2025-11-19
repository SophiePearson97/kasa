import logements from '../../data/logements.json';

function Home() {
  console.log('Home page logements:', logements); // just to confirm it's working

  return (
    <main>
      <h1>Accueil Kasa (Home)</h1>
      <p>There are {logements.length} logements in the JSON.</p>
    </main>
  );
}

export default Home;