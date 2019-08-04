import { NgModule } from '@angular/core';
import {OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS, OWL_DATE_TIME_LOCALE} from 'ng-pick-datetime';

// learn more about this from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
export const MY_NATIVE_FORMATS = {
  fullPickerInput: {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'},
  datePickerInput: {year: 'numeric', month: 'numeric', day: 'numeric'},
  timePickerInput: {hour: 'numeric', minute: 'numeric'},
  monthYearLabel: {year: 'numeric', month: 'short'},
  dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
  monthYearA11yLabel: {year: 'numeric', month: 'long'},
};

@NgModule({
  imports: [OwlDateTimeModule, OwlNativeDateTimeModule],
  providers: [
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS},
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'de'},
  ],
})
export class TimeModule {
}
