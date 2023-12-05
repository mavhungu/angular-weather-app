import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from './weather';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class WeatherService {


  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
    .set('units','metric')
    .set('q', city)
    .set('appId', environment.apiKey);

    return this.http.get<Weather>(environment.apiUrl + 'weather', { params: options });
  }

  postWeather(name: string, surname: string): Observable<Weather> {
    return this.http.post<Weather>('/api/ronewa',{name, surname}, httpOptions);
  }
}
