import API from './api';

/* eslint-disable no-unused-vars */
export default class CasesByCountry {
  constructor(casesByCountry, btn) {
    this.api = new API();
    this.casesByCountry = casesByCountry;
    this.btn = btn;
  }

  cleanBox() {
    this.casesByCountry.innerHTML = '';
    // while (this.casesByCountry.firstChild) {
    //   this.casesByCountry.removeChild(this.casesByCountry.firstChild);
    // }
  }

  renderCasesData() {
    this.api.getSummary()
      .then((data) => {
        // console.log(data);
        const cases = Array.from(data.Countries)
          .sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
        const casesNew = Array.from(data.Countries)
          .sort((a, b) => b.NewConfirmed - a.NewConfirmed);
        // console.log(data.Countries);
        const c = this;
        Array.from(cases).forEach((country) => {
          const line = document.createElement('div');
          const count = document.createElement('p');
          const name = document.createElement('p');
          line.classList.add('line');
          count.classList.add('count');
          count.innerHTML = country.TotalConfirmed;
          name.innerHTML = country.Country;
          line.append(count);
          line.append(name);
          c.casesByCountry.append(line);
        });

        function btnHandler() {
          if (c.btn.innerHTML === 'all') {
            c.btn.innerHTML = 'today';
            c.cleanBox();
            Array.from(cases).forEach((country) => {
              const line = document.createElement('div');
              const count = document.createElement('p');
              const name = document.createElement('p');
              line.classList.add('line');
              count.classList.add('count');
              count.innerHTML = country.TotalConfirmed;
              name.innerHTML = country.Country;
              line.append(count);
              line.append(name);
              c.casesByCountry.append(line);
            });
          } else if (c.btn.innerHTML === 'today') {
            c.btn.innerHTML = 'all';
            c.cleanBox();
            Array.from(casesNew).forEach((country) => {
              const line = document.createElement('div');
              const count = document.createElement('p');
              const name = document.createElement('p');
              line.classList.add('line');
              count.classList.add('count');
              count.innerHTML = country.NewConfirmed;
              name.innerHTML = country.Country;
              line.append(count);
              line.append(name);
              c.casesByCountry.append(line);
            });
          }
        }

        this.btn.addEventListener('click', btnHandler);
      });
  }
}
