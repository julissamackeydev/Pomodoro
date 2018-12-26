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
  timeLeft: number = 1.8e+6; //default, 30 minutes
  displayTimeLeft: number = this.millisecondConverter(this.timeLeft)-1;
  seconds: number = 60;
  interval;

  ngOnInit(){
    console.log('timerRunning', this.timerRunning);
    console.log('diplayTimer', this.displayTimeLeft);
    console.log('timeLeft', this.timeLeft);
    console.log('displayTimeLeft', this.displayTimeLeft);

    M.AutoInit();
    const elems = document.querySelectorAll('.dropdown-trigger');
    const instances = M.Dropdown.init(elems, {hover:true, inDuration:500, outDuration:500});
  }


  startTimer() {

    this.interval = setInterval(() => {
      
      this.timerRunning = true;
      
      if(this.timeLeft > 0) {
        this.timeLeft--;
        } 
        else{
        this.timeLeft = 60;
      }

      if(this.seconds > 0){
        this.seconds --;
      }
      else{
        this.displayTimeLeft --;
        this.seconds = 60;
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
    let seconds:number;

    if (time === 5){
      this.timeLeft = 300000;
      this.displayTimeLeft = this.millisecondConverter(300000);
    }

    if (time === 10){
      this.timeLeft = 600000;
      this.displayTimeLeft = this.millisecondConverter(600000);
    }

    if (time === 15) {
      this.timeLeft = 900000;
      this.displayTimeLeft = this.millisecondConverter(900000);
    }

    if (time === 20){
      this.timeLeft = 1.2e+6;
      this.displayTimeLeft = this.millisecondConverter(1.2e+6);
    }

    if (time === 25){
      this.timeLeft = 1.5e+6;
      this.displayTimeLeft = this.millisecondConverter(1.5e+6);
    }

    if (time === 30){
      this.timeLeft = 1.8e+6;
      this.displayTimeLeft = this.millisecondConverter(1.8e+6);
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
