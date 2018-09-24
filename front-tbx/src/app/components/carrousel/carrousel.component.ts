import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {



  index = 0;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '1234'.split('').map((x, i) => {
    const num = i+1;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `assets/collares/collar-${num}.jpg`,
      title: `${num}`
    };
  });

  constructor() { }

  ngOnInit() {
    //this.addImg();
  }

  private addImg() {

    for(let i = 1; i < 3; i++) {
      //this.avatars.push({ulr:'assets/collares/collar-'+i+'.jpg',title:'collar-'+i});
      //this.avatars.push({ulr:'assets/abrigos/abrigo-'+i+'.jpg',title:'abrigo-'+i});
    }

    console.log('avatars',this.avatars);
  }

  indexChanged(index) {
    //console.log(index);
  }

}
