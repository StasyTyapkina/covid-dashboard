import './css/main.css';
import './scss/main.scss';
import Map from './components/map.js';
import GlobalCases from './components/globalCases.js';
import CasesByCountry from './components/casesByCountry.js';
import StatisticsChart from './components/chart.js';

const globalCases = document.querySelector('#globalCases'),
      newGlobalCases = document.querySelector('#newGlobalCases'),
      globalDeaths = document.querySelector('#globalDeaths'),
      globalRecovered = document.querySelector('#globalRecovered'),
      newDeaths = document.querySelector('#newDeaths'),
      newRecovered = document.querySelector('#newRecovered'),
      casesByCountry = document.querySelector('#casesByCountry'),
      btn = document.querySelector('#todayGlobal'),
      canvas = document.querySelector('#myChart');

const global = new GlobalCases(globalCases, newGlobalCases, globalDeaths, globalRecovered, newDeaths, newRecovered);
global.renderData();      

const casesByCountryTable = new CasesByCountry(casesByCountry, btn);
casesByCountryTable.renderCasesData();

const chart = new StatisticsChart(canvas);
chart.renderChart();
// chart.getData();

const bigMap = new Map();