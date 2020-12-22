import API from './api';

export default class CasesByCountry {
  constructor(casesByCountry, btn) {
    this.api = new API();
    this.casesByCountry = casesByCountry;
    this.btn = btn;
    this.cases = [];
    this.casesNew = [];
  }

  render() {
    this.api.getSummary()
      .then((data) => {
        this.cases = Array.from(data.Countries)
          .sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
        this.casesNew = Array.from(data.Countries)
          .sort((a, b) => b.NewConfirmed - a.NewConfirmed);

        const c = this;
        c.btn.addEventListener('click', c.btnHandler);
        window.addEventListener('load', c.showCases(c.cases));
      });
  }

  btnHandler(event) {
    const c = this;
    if (event.target.innerHTML === 'all') {
      c.btn.innerHTML = 'today';
      this.showCases(c.cases);
    } else if (event.target.innerHTML === 'today') {
      c.btn.innerHTML = 'all';
      this.showCases(c.casesNew);
    }
  }

  showCases(cases) {
    this.cleanBox();

    Array.from(cases).forEach((country) => {
      const line = document.createElement('div');
      const count = document.createElement('p');
      const name = document.createElement('p');

      line.classList.add('line');
      count.classList.add('count');
      if (this.btn.innerHTML === 'all') {
        count.innerHTML = country.NewConfirmed;
      } else if (this.btn.innerHTML === 'today') {
        count.innerHTML = country.TotalConfirmed;
      }

      name.innerHTML = country.Country;

      line.append(count);
      line.append(name);
      this.casesByCountry.append(line);
    });
  }

  cleanBox() {
    this.casesByCountry.innerHTML = '';
  }
}
