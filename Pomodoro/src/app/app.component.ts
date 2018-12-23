import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'pomodoro';
  timerRunning: boolean = false;
  displayTimer: boolean = true;
  minutes:number;
  seconds: number;

  ngOnInit(){
    M.AutoInit();
    const elems = document.querySelectorAll('.dropdown-trigger');
    const instances = M.Dropdown.init(elems, {hover:true, inDuration:500, outDuration:500});

    ///////////////// Maybe this is superfluous... 
    // const instance = M.Dropdown.getInstance(elems[0]);
    // setTimeout(()=>{
    //   instance.open();
    // },1000);
    // setTimeout(()=>{
    //   instance.close();
    // }, 2000);
  }

  startTimer(){

    setTimeout(()=>{
      this.timerRunning = true;
    },1000);

    setTimeout(()=>{
      this.endTimer();
    },1000);

  }

  endTimer(){

    setTimeout(()=>{
      this.timerRunning = false;
    },5000);

  }

  setTime(time:number){

    if (time === 5){
      // this.minutes = Math.floor((300000/1000/60)<< 0); 
      this.minutes = this.millisecondConverter(300000).minutes;
      // this.seconds = this.millisecondConverter(30000).seconds;
    }

    if (time === 10){
      this.minutes = 600000;
    }

    if (time === 15) {
      this.minutes = 900000;
    }

    if (time === 20){
      this.minutes = 1.2e+6;
    }

    if (time === 25){
      this.minutes = 1.5e+6;
    }

    if (time === 30){
      this.minutes = 1.8e+6;
    }

  }

  millisecondConverter(ms){
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000);
    // .toFixed(0);

    return {
      minutes: minutes,
      seconds: seconds
    };

  }
  toggleTimerDisplay(display:boolean){
    if(this.displayTimer === false){
      this.displayTimer = true;
    }
    else{
      this.displayTimer = false
    };
  }
}
