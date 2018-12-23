import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pomodoro';
  timerRunning = false;

  ngOnInit(){
    M.AutoInit();
    const elems = document.querySelectorAll('.dropdown-trigger');
    const instances = M.Dropdown.init(elems, {hover:true, inDuration:500, outDuration:500});
    const instance = M.Dropdown.getInstance(elems[0]);
    setTimeout(()=>{
      instance.open();
    },1000);
    setTimeout(()=>{
      instance.close();
    }, 2000);
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

  setTime(minutes){
    console.log(minutes)
  }
}
