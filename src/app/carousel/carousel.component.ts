import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){

      $('.carousel').carousel(
        {
          fullWidth: true,
          indicators: false,
        });


      autoplay();

      function autoplay(): any {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 5000);
      }


    });
  }
}
