import { Component, OnInit } from '@angular/core';
import {CryptoService} from '../crypto-service.service';

@Component({
  selector: 'app-crypto-form',
  templateUrl: './crypto-form.component.html',
  styleUrls: ['./crypto-form.component.css']
})
export class CryptoFormComponent implements OnInit {
  constructor(public cryptoService: CryptoService) { }
  top100cryptos;

  cryptoSurvey ={
    name:'',
    favoriteCrypto:'',
    comments: ''
  };

    todaysDate = new Date();

    sendForm() {
      console.log(this.cryptoSurvey);
    }

  ngOnInit() {
    this.cryptoService.getCryptos().subscribe((data)=>{
      this.top100cryptos = data;
    }
    })
  }


}
