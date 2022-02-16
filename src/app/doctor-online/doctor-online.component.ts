import { Component, OnInit } from '@angular/core';

export interface Doctor {
  name: string,
  status: string
}

@Component({
  selector: 'app-doctor-online',
  templateUrl: './doctor-online.component.html',
  styleUrls: ['./doctor-online.component.css']
})
export class DoctorOnlineComponent  {
  isDoctorOnline(doctor: Doctor) {
    if(doctor.status == 'active'){
      return true;
    } else {
      return false;
    }
  }
}
