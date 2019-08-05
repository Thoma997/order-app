import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private today: Date = new Date();
  private pickupDate: Date;
  private branch: string;

  constructor(private apiService: ApiService) { }

  setPickupDate(pickupDate: Date){
    this.pickupDate = pickupDate;
  }

  getNow(){
    let now: Date = new Date();
    return now;
  }

  getPickupDiff(): number{
    let pickupDiffMS: number = this.pickupDate.getTime() - this.today.getTime();
    let pickupDiffDays: number = pickupDiffMS / 86400000; // 1000 * 60 * 60 * 24

    return pickupDiffDays;
  }

  getPickupDate(): Date {
    return this.pickupDate;
  }

  setBranch(branch:string){
    this.branch = branch;
  }

  getBranch(): string {
    return this.branch;
  }

  sendInfoToApi(){
    this.apiService.sendPickupToApi(this.pickupDate, this.branch);
  }
}
