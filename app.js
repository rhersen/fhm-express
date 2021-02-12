/* eslint-disable no-unused-vars */
import axios from "axios";
import createError from "http-errors";
import express from "express";
import path from "path";
import xlsx from "xlsx";
import { addHours, addMinutes, isPast, parse } from "date-fns";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";
import deaths from "./src/deaths.js";
import reactViews from "express-react-views";
import cases from "./src/cases.js";

const app = express();

// view engine setup
app.set(
  "views",
  path.join(path.dirname(fileURLToPath(import.meta.url)), "views")
);
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "public")
  )
);

const cache = {};

async function getBook() {
  const { data, status, statusText } = await axios.get(
    "https://www.arcgis.com/sharing/rest/content/items/b5e7488e117749c19881cce45db13f7e/data",
    {
      responseType: "arraybuffer",
    }
  );
  console.log(status, statusText, data.length, "bytes");
  const book = xlsx.read(data);
  const [, date] = /\w*\s*(.+)/.exec(
    book.SheetNames[book.SheetNames.length - 1]
  );
  const fileReleased = addHours(parse(date, "d MMM yyyy", new Date()), 14);
  cache.book = book;
  cache.expires = addMinutes(fileReleased, 1430);
  return book;
}

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

app.use("/7", async (req, res, next) => {
  if (cache.book && !isPast(cache.expires)) {
    console.log("FHM data cached until UTC:", cache.expires);
    res.render("SevenDayPerMillion", { cases: cases(cache.book), population });
  } else {
    const book = await getBook();
    res.render("SevenDayPerMillion", { cases: cases(book), population });
  }
});

app.use("/14", async (req, res, next) => {
  if (cache.book && !isPast(cache.expires)) {
    console.log("FHM data cached until UTC:", cache.expires);
    res.render("FourteenDayPer1e5", { cases: cases(cache.book), population });
  } else {
    const book = await getBook();
    res.render("FourteenDayPer1e5", { cases: cases(book), population });
  }
});

app.use("/change", async (req, res, next) => {
  if (cache.book && !isPast(cache.expires)) {
    console.log("FHM data cached until UTC:", cache.expires);
    res.render("WeeklyChange", { cases: cases(cache.book), population });
  } else {
    const book = await getBook();
    res.render("WeeklyChange", { cases: cases(book), population });
  }
});

app.use("/deaths", async (req, res, next) => {
  if (cache.book && !isPast(cache.expires)) {
    console.log("FHM data cached until UTC:", cache.expires);
    res.render("Deaths", { deaths: deaths(cache.book) });
  } else {
    const book = await getBook();
    res.render("Deaths", { deaths: deaths(book) });
  }
});
app.use("/map", async (req, res, next) => {
  if (cache.book && !isPast(cache.expires)) {
    console.log("FHM data cached until UTC:", cache.expires);
    res.render("Map", { cases: cases(cache.book), population });
  } else {
    const book = await getBook();
    res.render("Map", { cases: cases(book), population });
  }
});

app.use("/chart", async (req, res, next) => {
  if (cache.book && !isPast(cache.expires)) {
    console.log("FHM data cached until UTC:", cache.expires);
    res.render("Chart", { cases: cases(cache.book), population });
  } else {
    const book = await getBook();
    res.render("Chart", { cases: cases(book), population });
  }
});

app.use("/", (req, res, next) => {
  res.render("index");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
