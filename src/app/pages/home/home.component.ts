import {Component, OnInit, AfterViewInit} from '@angular/core';


import 'vanilla-tilt';
declare var VanillaTilt:any;
@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit, AfterViewInit {

    constructor() {}

    scroll = () => {
        function scrollHorizontally(e) {
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            document.getElementById('image_wrap').scrollLeft -= (delta*40); // Multiplied by 40
            e.preventDefault();
        }
        if (document.getElementById('image_wrap').addEventListener) {
            // IE9, Chrome, Safari, Opera
            document.getElementById('image_wrap').addEventListener("mousewheel", scrollHorizontally, false);
            // Firefox
            document.getElementById('image_wrap').addEventListener("DOMMouseScroll", scrollHorizontally, false);
        } else {
            // IE 6/7/8
            // document.getElementById('main-content').attachEvent("onmousewheel", scrollHorizontally);
        }
    }
    

    ngOnInit(): void {
        this.scroll();
    }

    ngAfterViewInit(): void {

    //   VanillaTilt.init(document.querySelectorAll(".home_text"), {
    //     max: 25,
    //     speed: 200
    //   });
    }



}
