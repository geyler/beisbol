import axios from "axios";
import * as cheerio from "cheerio";

export default async function controller() {
  let { data } = await axios.get("http://www.beisbolcubano.cu/");
  let $ = cheerio.load(data);
  let contenedor = $("#MainContent_MiniDayScore_UC_sidebarDayScore_Left");
  let resultados = [];

  $(contenedor)
    .find(".Mini_DayScore")
    .each(function () {
      let estado = $(this).find(".Mini_DayScore_Row span").text();
      resultados.push({
        estado
      });
    });

  return resultados;
}