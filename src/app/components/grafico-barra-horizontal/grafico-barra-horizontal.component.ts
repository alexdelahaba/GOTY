import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {
  results: any[] = [
    {
      "name": "juego 1",
      "value": 15
    },
    {
      "name": "juwgo 2",
      "value": 25
    },
    {
      "name": "juego 3",
      "value": 20
    },
    {
      "name": "juego 4",
      "value": 5
    }
  ];

  intervalo;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';


  constructor() { }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  ngOnInit(): void { }

  onSelect(event) {
    console.log(event);
  }

  randomizer() {
    const newResults = [...this.results];
    this.intervalo = setInterval(() => {
      console.log('interval');
      // tslint:disable-next-line: forin
      for (const i in newResults) {
        newResults[i].value = Math.round(Math.random() * 500);
      }
    }, 1500);

    this.results = newResults;
  }

}
