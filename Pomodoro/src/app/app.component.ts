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
  timeLeft:number;
  displayTimeLeft: number;
  interval;

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


  startTimer() {
    setTimeout(()=>{
      this.timerRunning = true;
    },1000);
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  // startTimer(){

  //   setTimeout(()=>{
  //     this.timerRunning = true;
  //   },1000);

  //   setTimeout(()=>{
  //     this.endTimer();
  //   },1000);

  // }

  endTimer(){

    setTimeout(()=>{
      this.timerRunning = false;
    },5000);

  }

  setTime(time:number){

    if (time === 5){
      this.timeLeft = 300000;
      this.displayTimeLeft = this.millisecondConverter(300000);
    }

    if (time === 10){
      this.timeLeft = this.millisecondConverter(600000);
    }

    if (time === 15) {
      this.timeLeft = this.millisecondConverter(900000);
    }

    if (time === 20){
      this.timeLeft = this.millisecondConverter(1.2e+6);
    }

    if (time === 25){
      this.timeLeft = this.millisecondConverter(1.5e+6);
    }

    if (time === 30){
      this.timeLeft = this.millisecondConverter(1.8e+6);
    }

  }

  millisecondConverter(ms){
    return Math.floor(ms / 60000);
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
