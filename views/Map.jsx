import React from "react";

export default function Map({ cases }) {
  const population = {
    Totalt_antal_fall: 10230000,
    Blekinge: 159748,
    Dalarna: 287795,
    Gotland: 59636,
    Gävleborg: 287333,
    Halland: 333202,
    Jämtland_Härjedalen: 130697,
    Jönköping: 363351,
    Kalmar: 245415,
    Kronoberg: 201290,
    Norrbotten: 250230,
    Skåne: 1376659,
    Stockholm: 2374550,
    Sörmland: 297169,
    Uppsala: 383044,
    Värmland: 282342,
    Västerbotten: 271621,
    Västernorrland: 245380,
    Västmanland: 275634,
    Västra_Götaland: 1724529,
    Örebro: 304634,
    Östergötland: 465214,
  };

  const sandhammaren = { y: 55.387522, x: 14.185065 };
  const fosby = { y: 59.2257424, x: 11.6937195 };
  const treriksröset = { y: 69.0507753, x: 20.5171448 };
  const haparanda = { y: 65.840444, x: 24.076838 };
  const furuvik = { y: 60.6499265, x: 17.3371703 };
  const grøvelsjøen = { y: 62.2634423, x: 12.3006323 };
  const brömsebro = { y: 56.2992432, x: 15.9891883 };
  const båstad = { y: 56.4278324, x: 12.8248392 };
  const oxelösund = { y: 58.6734704, x: 17.0545007 };
  const billdal = { y: 57.5735092, x: 11.9138001 };
  const rörbäcksnäs = { y: 61.12886, x: 12.8050636 };
  const stekenjokk = { y: 65.0698147, x: 14.2659379 };
  const vindelkroken = { y: 66.2666664, x: 15.5412453 };
  const jävre = { y: 65.1528011, x: 21.4794835 };
  const salusand = { y: 63.4700831, x: 19.2520158 };
  const njurundabommen = { y: 62.2680333, x: 17.3652393 };
  const järsjö = { y: 60.1427778, x: 18.5163299 };
  const nynäshamn = { y: 58.9123653, x: 17.9108162 };
  const flatvarp = { y: 57.985413, x: 16.7949144 };
  const hoburg = { y: 56.9289992, x: 18.1299352 };
  const visby = { y: 57.6271917, x: 18.2735696 };
  const sudersand = { y: 57.9493628, x: 19.1184951 };
  const hoting = { y: 64.1137273, x: 16.1950004 };
  const ytterhogdal = { y: 62.1748893, x: 14.9323852 };
  const sölvesborg = { y: 56.0497402, x: 14.5768039 };
  const rumpeboda = { y: 56.4516997, x: 14.4223001 };
  const markaryd = { y: 56.4589499, x: 13.5825608 };
  const eringsboda = { y: 56.4385185, x: 15.3574556 };
  const arnö = { y: 59.4988811, x: 17.1783612 };
  const avesta = { y: 60.1405361, x: 16.1639807 };
  const noppikoski = { y: 61.4932749, x: 14.8351696 };
  const vingåker = { y: 59.0503859, x: 15.8397022 };
  const skinnskatteberg = { y: 59.825645, x: 15.6763624 };
  const fredriksberg = { y: 60.1409872, x: 14.3645216 };
  const finnerödja = { y: 58.924554, x: 14.4314438 };
  const visingsö = { y: 58.0457454, x: 14.329842 };
  const katthult = { y: 57.6888032, x: 15.5562243 };
  const aaseda = { y: 57.167505, x: 15.3351557 };
  const skeppshult = { y: 57.1274509, x: 13.3616952 };
  const falsterbo = { y: 55.3960591, x: 12.8232552 };
  const torhamn = { y: 56.0946438, x: 15.8236561 };
  const sandhamn = { y: 59.2878805, x: 18.9020756 };

  const Uppsala = [furuvik, avesta, arnö, järsjö];
  const Skåne = [
    sandhammaren,
    falsterbo,
    båstad,
    markaryd,
    rumpeboda,
    sölvesborg,
  ];
  const Blekinge = [rumpeboda, eringsboda, brömsebro, torhamn, sölvesborg];
  const Norrbotten = [vindelkroken, treriksröset, haparanda, jävre];
  const Västerbotten = [stekenjokk, vindelkroken, jävre, salusand, hoting];
  const Västernorrland = [hoting, salusand, njurundabommen, ytterhogdal];
  const Gotland = [hoburg, visby, sudersand];
  const Stockholm = [järsjö, sandhamn, nynäshamn, arnö];
  const Jämtland_Härjedalen = [
    grøvelsjøen,
    stekenjokk,
    hoting,
    ytterhogdal,
    noppikoski,
  ];
  const Gävleborg = [noppikoski, ytterhogdal, njurundabommen, furuvik, avesta];
  const Sörmland = [arnö, nynäshamn, oxelösund, vingåker];
  const Västmanland = [avesta, arnö, vingåker, skinnskatteberg];
  const Dalarna = [
    rörbäcksnäs,
    grøvelsjøen,
    noppikoski,
    avesta,
    skinnskatteberg,
    fredriksberg,
  ];
  const Värmland = [fosby, rörbäcksnäs, fredriksberg, finnerödja];
  const Örebro = [finnerödja, fredriksberg, skinnskatteberg, vingåker];
  const Västra_Götaland = [billdal, fosby, finnerödja, visingsö, skeppshult];
  const Östergötland = [
    visingsö,
    finnerödja,
    vingåker,
    oxelösund,
    flatvarp,
    katthult,
  ];
  const Kalmar = [katthult, flatvarp, brömsebro, eringsboda, aaseda];
  const Kronoberg = [aaseda, eringsboda, rumpeboda, markaryd, skeppshult];
  const Halland = [båstad, billdal, skeppshult, markaryd];
  const Jönköping = [skeppshult, visingsö, katthult, aaseda];

  const f = (a, pop) => (a.reduce((a, b) => a + b, 0) / pop) * 1e5;

  if (!cases.Totalt_antal_fall) return <p>...</p>;

  const dates = Object.keys(cases.Totalt_antal_fall);
  const day = dates.length - 1;
  const headers = Object.keys(cases);
  const columns = headers.map((header) =>
    dates.map((date) => cases[header][date])
  );

  const color = (x) => `rgb(${red(x)},${green(x)},${blue(x)})`;

  const values = Object.fromEntries(
    columns
      .map((column, colIndex) => [headers[colIndex], column])
      .map(([region, column]) => {
        return [region, f(column.slice(day - 13, day + 1), population[region])];
      })
  );

  const xy = (coord) => [coord.x, 70 - coord.y];
  const points = (region) => region.map(xy).toString();

  return (
    <div className="map">
      <span>{dates[day]}</span>
      <svg viewBox="10 0 15 15">
        <polygon points={points(Skåne)} fill={color(values.Skåne)} />
        <polygon points={points(Blekinge)} fill={color(values.Blekinge)} />
        <polygon points={points(Uppsala)} fill={color(values.Uppsala)} />
        <polygon points={points(Norrbotten)} fill={color(values.Norrbotten)} />
        <polygon
          points={points(Västerbotten)}
          fill={color(values.Västerbotten)}
        />
        <polygon
          points={points(Västernorrland)}
          fill={color(values.Västernorrland)}
        />
        <polygon points={points(Gotland)} fill={color(values.Gotland)} />
        <polygon points={points(Stockholm)} fill={color(values.Stockholm)} />
        <polygon
          points={points(Jämtland_Härjedalen)}
          fill={color(values.Jämtland_Härjedalen)}
        />
        <polygon points={points(Gävleborg)} fill={color(values.Gävleborg)} />
        <polygon points={points(Sörmland)} fill={color(values.Sörmland)} />
        <polygon
          points={points(Västmanland)}
          fill={color(values.Västmanland)}
        />
        <polygon points={points(Dalarna)} fill={color(values.Dalarna)} />
        <polygon points={points(Värmland)} fill={color(values.Värmland)} />
        <polygon points={points(Örebro)} fill={color(values.Örebro)} />
        <polygon
          points={points(Västra_Götaland)}
          fill={color(values.Västra_Götaland)}
        />
        <polygon
          points={points(Östergötland)}
          fill={color(values.Östergötland)}
        />
        <polygon points={points(Kalmar)} fill={color(values.Kalmar)} />
        <polygon points={points(Kronoberg)} fill={color(values.Kronoberg)} />
        <polygon points={points(Halland)} fill={color(values.Halland)} />
        <polygon points={points(Jönköping)} fill={color(values.Jönköping)} />
      </svg>
    </div>
  );
}

function interpolate(x0, y0, x1, y1, x) {
  return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
}

function red(x) {
  if (x < 60) return interpolate(0, 245, 60, 230, x);
  return interpolate(60, 230, 960, 135, x);
}

function green(x) {
  if (x < 60) return interpolate(0, 214, 60, 148, x);
  if (x < 120) return interpolate(60, 148, 120, 88, x);
  if (x < 960) return interpolate(120, 88, 960, 0, x);
  return 0;
}

function blue(x) {
  if (x > 50) return 0;
  return interpolate(0, 100, 50, 0, x);
}
