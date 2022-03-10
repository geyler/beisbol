import resultadosDelDia from "../datos/resultadosDelDia";
import Image from 'next/image';

export default function Resultados(props) {
  return (
    <div className="home">

      <ul className="resultados-del-dia">
        {props?.data?.map((resultado, key) => (
           resultado.estado ? (<li key={key}>
            <div className="estado-del-juego">
              <span className='estado-del-juego'>{resultado?.estado}</span></div>
              <span className='span-outs'>{resultado?.outs}</span>
            <div className="equipo-visitante resultado">
              <div className="logo-equipo">
                <Image src={`/logos/${resultado?.visitanteLogo}.png`} width='30' height='30'/>
                <span>{resultado?.visitante}</span>
              </div>
              <div className="carreras">{resultado?.visitanteCarreras}</div>
            </div>
            <div className="equipo-local resultado">
              <div className="logo-equipo">
              <Image src={`/logos/${resultado?.localLogo}.png`} width='30' height='30'/>
                <span>{resultado?.local}</span>
              </div>
              <div className="carreras">{resultado?.localCarreras}</div>
            </div>
          </li>) : ''
        ))}
      </ul>

      <ul className="resultados-del-dia">
        {props?.data?.map((resultado, key) => (
         
         
         resultado.estadoAyer ? (<li key={key}>
            <div className="estado-del-juego">{resultado?.estadoAyer}</div>
            
            <div className="equipo-visitante resultado">
              <div className="logo-equipo">
              <Image src={`/logos/${resultado?.visitanteLogoAyer}.png`} width='30' height='30'/>
                <span>{resultado?.visitanteAyer}</span>
              </div>
              <div className="carreras">{resultado?.visitanteCarrerasAyer}</div>
            </div>

            <div className="equipo-local resultado">
              <div className="logo-equipo">
              <Image src={`/logos/${resultado?.localLogoAyer}.png`} width='30' height='30'/>
                <span>{resultado?.localAyer}</span>
              </div>
              <div className="carreras">{resultado?.localCarrerasAyer}</div>
            </div>

          </li>) : ''
        ))}
      </ul>

    </div>
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
