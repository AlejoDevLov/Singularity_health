import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  public userToken = signal<string>('');
  public isAValidUser = signal<boolean>(false);

  constructor() { }

}
