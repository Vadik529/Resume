import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CurrencyRate {
  [key: string]: number;
}

interface ExchangeRateData {
  rates: CurrencyRate;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount: number = 0;
  fromCurrency: string = 'UAH';
  toCurrency: string = 'UAH';
  result: number = 0;
  exchangeRates: CurrencyRate = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getExchangeRates();
  }

  getExchangeRates() {
    this.http.get<ExchangeRateData>('https://api.exchangerate-api.com/v4/latest/UAH').subscribe(data => {
      this.exchangeRates = data.rates;
      this.convertCurrency();
    });
  }

  convertCurrency() {
    const rateFrom = this.exchangeRates[this.fromCurrency];
    const rateTo = this.exchangeRates[this.toCurrency];

    if (this.fromCurrency === this.toCurrency) {
      this.result = this.amount;
    } else if (this.fromCurrency === 'UAH') {
      this.result = this.amount * rateTo;
    } else if (this.toCurrency === 'UAH') {
      this.result = this.amount / rateFrom;
    } else {
      const rateToUAH = 1 / rateTo;
      this.result = (this.amount * rateFrom) * rateToUAH;
    }
  }

  convertCurrencyFrom() {
    this.convertCurrency();
  }

  convertCurrencyTo() {
    this.convertCurrency();
  }
}
