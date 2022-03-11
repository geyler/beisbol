import resultadosDelDia from "../datos/resultadosDelDia";
import Image from "next/image";
import Menu from "../componentes/Menu";
export default function Resultados(props) {

  return (
    <div className="home">
      <Menu />

      <div className="resultados-del-dia-en-vivo">
        <div className="titulo-contenedor">
          <h3>{props?.data[0]?.tituloHoy}</h3>
          <span>{props?.data[0]?.fechaHoy}</span>
        </div>
        <ul className="resultados-del-dia">
          {props?.data?.map((resultado, key) =>
            resultado.estado ? (
              <li key={key}>
                <div className="estado-li">
                  <div className="estado-del-juego">
                    <span className="estado-del-juego">
                      {resultado?.estado}
                    </span>
                  </div>
                  <div className="estado-del-juego-outs">
                    <span className="span-outs">{resultado?.outs}</span>
                  </div>
                </div>
                <div className="equipo-visitante resultado">
                  <div className="logo-equipo">
                    <div className="logo-nombre">
                      <Image
                        src={`/logos/${resultado?.visitanteLogo}.png`}
                        width="40"
                        height="40"
                      />
                      <span>{resultado?.visitante}</span>
                    </div>
                    <div className="carreras">
                      {resultado?.visitanteCarreras}
                    </div>
                  </div>
                </div>
                <div className="equipo-local resultado">
                  <div className="logo-equipo">
                    <div className="logo-nombre">
                      <Image
                        src={`/logos/${resultado?.localLogo}.png`}
                        width="40"
                        height="40"
                      />
                      <span>{resultado?.local}</span>
                    </div>
                    <div className="carreras">{resultado?.localCarreras}</div>
                  </div>
                </div>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>

      <div className="resultados-anteriores">
        <div className="titulo-contenedor">
          <h3>{props?.data[0]?.tituloAyer}</h3>
          <span>{props?.data[0]?.fechaAyer}</span>
        </div>
        <ul className="resultados-del-dia">
          {props?.data?.map((resultado, key) =>
            resultado.estadoAyer ? (
              <li key={key}>
                <div className="estado-del-juego estado-li">
                  {resultado?.estadoAyer}
                </div>

                <div className="equipo-visitante resultado">
                  <div className="logo-equipo">
                    <div className="logo-nombre">
                      <Image
                        src={`/logos/${resultado?.visitanteLogoAyer}.png`}
                        width="40"
                        height="40"
                      />
                      <span>{resultado?.visitanteAyer}</span>
                    </div>
                    <div className="carreras">
                      {resultado?.visitanteCarrerasAyer}
                    </div>
                  </div>
                </div>

                <div className="equipo-local resultado">
                  <div className="logo-equipo">
                    <div className="logo-nombre">
                      <Image
                        src={`/logos/${resultado?.localLogoAyer}.png`}
                        width="40"
                        height="40"
                      />
                      <span>{resultado?.localAyer}</span>
                    </div>
                    <div className="carreras">
                      {resultado?.localCarrerasAyer}
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
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
