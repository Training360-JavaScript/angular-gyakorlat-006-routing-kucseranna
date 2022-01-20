import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    return [
      {
        name: "I'll Sleep When I'm Dead Tour",
        date: "01-SEP-1993",
        time: "19:00",
        location: {
          address: "MTK Stadion",
          city: "Budapest",
          country: "Hungary",
        }
      },
      {
        name: "These Days Tour",
        date: "18-JUN-1996",
        time: "18:00",
        location: {
          address: "Óbudai-Sziget",
          city: "Budapest",
          country: "Hungary",
        }
      },
      {
        name: "This House Is Not for Sale Tour",
        date: "17-JUL-2019",
        time: "20:00",
        location: {
          address: "Ernst Happel Stadion",
          city: "Vienna",
          country: "Austria",
        }
      },
    ]
  }
}
