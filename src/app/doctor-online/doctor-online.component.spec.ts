import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorOnlineComponent, Doctor } from './doctor-online.component';

describe('DoctorOnlineComponent', () => {
  let doctorComponent: DoctorOnlineComponent;

  beforeEach(()=>{
    doctorComponent = new DoctorOnlineComponent();
  });

  it('should return true when doctor.status is active', () => {
    //arrange
    const doctor: Doctor = {name: 'Apolonio', status: 'active'};
    
    //act
    const online = doctorComponent.isDoctorOnline(doctor);

    //assert
    expect(online).toBe(true);
  });

  it('should return false when doctor.status is inactive', () => {
    //arrange
    const doctor: Doctor = {name: 'Apolonio', status: 'inactive'};
    
    //act
    const online = doctorComponent.isDoctorOnline(doctor);

    //assert
    expect(online).toBe(false);
  });

});
