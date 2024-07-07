import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IPerfume } from '../Interfaces/perfume';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfumesService {
  private endpoint: string = environment.endPoint;
  private apiUrl: string = `${this.endpoint}Perfumes`;

  constructor(private http: HttpClient) {}

  getPerfumes(): Observable<IPerfume[]> {
    return this.http.get<IPerfume[]>(`${this.apiUrl}/listaPerfumes`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener perfumes:', error);
          return throwError(error);
        })
      );
  }

  filtrarPorCategoria(categoriaId: number): Observable<IPerfume[]> {
    return this.http.get<IPerfume[]>(`${this.apiUrl}/FiltrarPorCategoria/${categoriaId}`)
      .pipe(
        map(perfumes => {
          return perfumes.filter(perfume => perfume.categoriaId === categoriaId);
        }),
        catchError(error => {
          console.error(`Error al filtrar perfumes por categoría ${categoriaId}:`, error);
          return throwError(error);
        })
      );
  }
}
