import API from './api';

export default class GlobalCases {
  constructor(globalCases, newGlobalCases, globalDeaths, globalRecovered, newDeaths, newRecovered) {
    this.api = new API();
    this.globalCases = globalCases;
    this.newGlobalCases = newGlobalCases;
    this.globalDeaths = globalDeaths;
    this.globalRecovered = globalRecovered;
    this.newDeaths = newDeaths;
    this.newRecovered = newRecovered;
  }

  renderData() {
    this.api.getSummary()
      .then((data) => {
        const cases = data.Global;
        this.globalCases.innerHTML = cases.TotalConfirmed;
        this.newGlobalCases.innerHTML = `New Cases: ${cases.NewConfirmed}`;
        this.globalDeaths.innerHTML = cases.TotalDeaths;
        this.newDeaths.innerHTML = `New Cases: ${cases.NewDeaths}`;
        this.globalRecovered.innerHTML = cases.TotalRecovered;
        this.newRecovered.innerHTML = `New Cases: ${cases.NewRecovered}`;
      });
  }
}
