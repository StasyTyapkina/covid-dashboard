/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import './css/main.css';
import './scss/main.scss';
import Map from './components/map.js';
import GlobalCases from './components/globalCases.js';
import CasesByCountry from './components/casesByCountry.js';
import StatisticsChart from './components/chart.js';

const globalCases = document.querySelector('#globalCases');
const newGlobalCases = document.querySelector('#newGlobalCases');
const globalDeaths = document.querySelector('#globalDeaths');
const globalRecovered = document.querySelector('#globalRecovered');
const newDeaths = document.querySelector('#newDeaths');
const newRecovered = document.querySelector('#newRecovered');
const casesByCountry = document.querySelector('#casesByCountry');
const btn = document.querySelector('#todayGlobal');
const canvas = document.querySelector('#myChart');

const global = new GlobalCases(globalCases, newGlobalCases,
  globalDeaths, globalRecovered, newDeaths, newRecovered);
global.renderData();

const casesByCountryTable = new CasesByCountry(casesByCountry, btn);
casesByCountryTable.renderCasesData();

const chart = new StatisticsChart(canvas);
chart.renderChart();
// chart.getData();

const bigMap = new Map();
