import { Component, OnInit } from '@angular/core';

export class User {

  constructor(
    public firstName: string,
    public lastName: string,
    public adress: string,
    public city: string,
    public email: string,
    public phoneNumber: string,
  ) {  }
}
