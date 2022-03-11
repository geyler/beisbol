import axios from "axios";
import * as cheerio from "cheerio";

export default async function controller() {
  let { data } = await axios.get("http://www.beisbolcubano.cu/");
  let $ = cheerio.load(data);
  let contenedor = $("#MainContent_MiniDayScore_UC_sidebarDayScore_Left");
  let contenedorAyer = $("#MainContent_PreviousMiniDayScore_UC_sidebarDayScore_Left");
  let tituloHoy = $('#MainContent_MiniDayScore_UC_sidebarDayScore_Left > div > div.widget_header_DayScore > h4 > b').text();
  let tituloAyer = $('#MainContent_PreviousMiniDayScore_UC_sidebarDayScore_Left > div > div.widget_header_DayScore > h4 > b').text();
  let fechaHoy = $('#MainContent_MiniDayScore_UC_fecha_link > a').text();
  let fechaAyer = $('#MainContent_PreviousMiniDayScore_UC_sidebarDayScore_Left > div > div.widget_header_DayScore > a').text();
  let resultados = [];

  resultados.push({
    tituloHoy, tituloAyer, fechaHoy, fechaAyer
  });

  $(contenedor)
    .find(".Mini_DayScore")
    .each(function () {
      let estado = $(this).find(".Mini_DayScore_Row span.span_estado").text();
      let outs = $(this).find(".Mini_DayScore_Row span.span_outs").text();

      let visitante = $(this).find('div:nth-child(1) > span.Mini_DayScore_Siglas.MDSN').text();
      let visitanteLogo = $(this).find('div:nth-child(1) > span.Mini_DayScore_Siglas.MDSS').text();
      let visitanteCarreras = $(this).find('div:nth-child(2) > div:nth-child(1) > span').text();

      let local = $(this).find('div:nth-child(2) > span.Mini_DayScore_Siglas.MDSN').text();
      let localLogo = $(this).find('div:nth-child(2) > span.Mini_DayScore_Siglas.MDSS').text();
      let localCarreras  = $(this).find('div:nth-child(2) > div:nth-child(2) > span').text();

      resultados.push({
        estado, visitante, local, visitanteLogo, localLogo, visitanteCarreras, localCarreras, outs
      });
    });

    $(contenedorAyer)
    .find(".Mini_DayScore")
    .each(function () {
      let estadoAyer = $(this).find(".Mini_DayScore_Row span").text();

      let visitanteAyer = $(this).find('div:nth-child(1) > span.Mini_DayScore_Siglas.MDSN').text();
      let visitanteLogoAyer = $(this).find('div:nth-child(1) > span.Mini_DayScore_Siglas.MDSS').text();
      let visitanteCarrerasAyer = $(this).find('div:nth-child(2) > div:nth-child(1) > span').text();

      let localAyer = $(this).find('div:nth-child(2) > span.Mini_DayScore_Siglas.MDSN').text();
      let localLogoAyer = $(this).find('div:nth-child(2) > span.Mini_DayScore_Siglas.MDSS').text();
      let localCarrerasAyer = $(this).find('div:nth-child(2) > div:nth-child(2) > span').text();

      resultados.push({
        estadoAyer, visitanteAyer, localAyer, visitanteLogoAyer, localLogoAyer, visitanteCarrerasAyer, localCarrerasAyer
      });
    });

  return resultados;
}