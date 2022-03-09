import resultadosDelDia from './datos/resultadosDelDia';

export default function Resultados(props) {
  return (
    <ul>
      {props?.resultados?.map((resultado, key) => (
        <li key={key}>{resultado?.estado}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const data = await resultadosDelDia();
  return {
    props: {
      data,
    },
  };
}