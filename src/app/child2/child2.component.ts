import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit, OnDestroy {
  s: string = "This text will be displayed after evey 1 minute";
  timeInterval: any;
  isvalid: boolean = false;

ngOnInit(){
  this.timeInterval=setInterval(() => {
    this.isvalid=!this.isvalid;
    setTimeout(() => {this.isvalid=!this.isvalid},2000)
  },10000)
}
  ngOnDestroy(){
    console.log("ngOnDestroy");
    clearInterval(this.timeInterval);
  }
}
