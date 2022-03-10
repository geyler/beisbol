import axios from "axios";
import * as cheerio from "cheerio";

export default async function controller() {
  let { data } = await axios.get("http://www.beisbolcubano.cu/");
  let $ = cheerio.load(data);
  let contenedor = $("#MainContent_MiniDayScore_UC_sidebarDayScore_Left");
  let contenedorAyer = $("#MainContent_PreviousMiniDayScore_UC_sidebarDayScore_Left");
  let resultados = [];

  $(contenedor)
    .find(".Mini_DayScore")
    .each(function () {
      let estado = $(this).find(".Mini_DayScore_Row span").text();

      let visitante = $(this).find('div:nth-child(1) > span.Mini_DayScore_Siglas.MDSN').text();
      let visitanteLogo = $(this).find('div:nth-child(1) > img').attr('src');
      let visitanteCarreras = $(this).find('div:nth-child(2) > div:nth-child(1) > span').text();

      let local = $(this).find('div:nth-child(2) > span.Mini_DayScore_Siglas.MDSN').text();
      let localLogo = $(this).find('div:nth-child(2) > img').attr('src');
      let localCarreras  = $(this).find('div:nth-child(2) > div:nth-child(2) > span').text();

      let vlogo = 'http://www.beisbolcubano.cu/' + visitanteLogo;
      let llogo = 'http://www.beisbolcubano.cu/' + localLogo;

      resultados.push({
        estado, visitante, local, vlogo, llogo, visitanteCarreras, localCarreras
      });
    });

    $(contenedorAyer)
    .find(".Mini_DayScore")
    .each(function () {
      let estadoAyer = $(this).find(".Mini_DayScore_Row span").text();

      let visitanteAyer = $(this).find('div:nth-child(1) > span.Mini_DayScore_Siglas.MDSN').text();
      let visitanteLogoAyer = $(this).find('div:nth-child(1) > img').attr('src');
      let visitanteCarrerasAyer = $(this).find('div:nth-child(2) > div:nth-child(1) > span').text();

      let localAyer = $(this).find('div:nth-child(2) > span.Mini_DayScore_Siglas.MDSN').text();
      let localLogoAyer = $(this).find('div:nth-child(2) > img').attr('src');
      let localCarrerasAyer = $(this).find('div:nth-child(2) > div:nth-child(2) > span').text();

      let vlogoAyer = 'http://www.beisbolcubano.cu/' + visitanteLogoAyer;
      let llogoAyer = 'http://www.beisbolcubano.cu/' + localLogoAyer;

      resultados.push({
        estadoAyer, visitanteAyer, localAyer, vlogoAyer, llogoAyer, visitanteCarrerasAyer, localCarrerasAyer
      });
    });

  return resultados;
}