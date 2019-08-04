import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private today: Date = new Date();
  private pickupDate: Date;

  constructor() { }

  setPickupDate(pickupDate: Date){
    this.pickupDate = pickupDate;
  }

  getNow(){
    let now: Date = new Date();
    return now;
  }

  getPickupDiff(){
    let pickupDiffMS: number = this.pickupDate.getTime() - this.today.getTime();
    let pickupDiffDays: number = pickupDiffMS / 86400000; // 1000 * 60 * 60 * 24

    return pickupDiffDays;
  }
}
