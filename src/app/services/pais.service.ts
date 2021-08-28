import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}

  getPaises() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es').pipe(
      map((resp: any = []) => {
        return resp.map((pais: { name: any; alpha3Code: any }) => {
          return {
            name: pais.name,
            code: pais.alpha3Code,
          };
        });
      })
    );
  }
}
