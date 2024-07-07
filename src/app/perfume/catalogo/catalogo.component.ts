import { Component, OnInit } from '@angular/core';
import { IPerfume } from '../../Interfaces/perfume';
import { PerfumesService } from '../perfumes.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  perfumes: IPerfume[] = [];
  filtradoPerfume: IPerfume[] = [];
  categorias = [
    { id: 1, nombre: 'Mujer' },
    { id: 2, nombre: 'Hombre' },
    { id: 3, nombre: 'Infantil' }
  ];
  categoriaSeleccionada: number | null = null;
  isResultLoaded = false;
  txtBuscar: string = '';

  constructor(private _perfumeService: PerfumesService) {}

  ngOnInit(): void {
    this.obtenerPerfumes();
  }

  obtenerPerfumes() {
    this._perfumeService.getPerfumes().subscribe(
      perfumes => {
        this.perfumes = perfumes;
        console.log('Perfumes:', this.perfumes);
        this.filtrarPerfumes(); 
      },
      error => {
        console.error('Error al obtener perfumes:', error);
      }
    );
  }

  filtrarPerfumes() {
    if (this.categoriaSeleccionada) {
      this.filtradoPerfume = this.perfumes.filter(perfume => perfume.categoriaId === this.categoriaSeleccionada);
    } else {
      this.filtradoPerfume = [...this.perfumes];
    }

    this.filtradoPerfume = this.filtradoPerfume.filter(perfume =>
      perfume.nombre.toLowerCase().includes(this.txtBuscar.toLowerCase())
    );

    this.isResultLoaded = true;
  }

  filtrarCategoria(idCategoria: number) {
    this.categoriaSeleccionada = idCategoria;
    this.filtrarPerfumes();
  }

  buscarPerfumes() {
    this.filtrarPerfumes();
  }
}
