import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  emoji: string;
  tag?: string;
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="catalogo-wrapper">
      <header class="cat-header">
        <h1>Catálogo</h1>
        <p>{{ productosFiltrados().length }} productos disponibles</p>
      </header>

      <div class="controls">
        <input
          class="search"
          type="text"
          placeholder="Buscar productos..."
          [(ngModel)]="busqueda"
        />
        <div class="filtros">
          <button
            *ngFor="let cat of categorias"
            [class.active]="categoriaActiva() === cat"
            (click)="categoriaActiva.set(cat)"
            class="filtro-btn"
          >{{ cat }}</button>
        </div>
      </div>

      <div class="grid" *ngIf="productosFiltrados().length > 0; else vacio">
        <div class="producto-card" *ngFor="let p of productosFiltrados()">
          <span *ngIf="p.tag" class="tag">{{ p.tag }}</span>
          <div class="producto-emoji">{{ p.emoji }}</div>
          <div class="producto-info">
            <span class="categoria-label">{{ p.categoria }}</span>
            <h3>{{ p.nombre }}</h3>
            <div class="precio-row">
              <strong class="precio">\${{ p.precio.toLocaleString() }}</strong>
              <button class="add-btn" (click)="agregar(p)">+ Agregar</button>
            </div>
          </div>
        </div>
      </div>

      <ng-template #vacio>
        <div class="vacio">
          <span>🔍</span>
          <p>No se encontraron productos</p>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .catalogo-wrapper { padding: 3rem 4rem; max-width: 1200px; margin: 0 auto; }
    .cat-header { margin-bottom: 2rem; }
    .cat-header h1 {
      font-family: var(--font-display); font-size: 2.4rem; color: var(--dark);
    }
    .cat-header p { color: var(--mid); font-size: .9rem; margin-top: .3rem; }

    .controls { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
    .search {
      width: 100%; max-width: 420px;
      padding: .75rem 1.1rem;
      border: 1.5px solid #dde3ea;
      border-radius: var(--radius);
      font-family: var(--font-body); font-size: .95rem;
      outline: none; transition: border-color .2s;
    }
    .search:focus { border-color: var(--brand); }
    .filtros { display: flex; gap: .6rem; flex-wrap: wrap; }
    .filtro-btn {
      padding: .45rem 1.1rem;
      border: 1.5px solid #dde3ea;
      border-radius: 20px;
      background: transparent;
      font-family: var(--font-body); font-size: .85rem;
      cursor: pointer; color: var(--mid);
      transition: all .2s;
    }
    .filtro-btn:hover { border-color: var(--brand); color: var(--brand); }
    .filtro-btn.active {
      background: var(--brand); color: #fff;
      border-color: var(--brand);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1.2rem;
    }
    .producto-card {
      background: var(--white);
      border-radius: 14px;
      border: 1px solid rgba(0,0,0,.06);
      overflow: hidden;
      position: relative;
      transition: transform .2s, box-shadow .2s;
    }
    .producto-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 32px rgba(31,111,235,.15);
    }
    .tag {
      position: absolute; top: .7rem; left: .7rem;
      background: var(--brand); color: #fff;
      font-size: .7rem; font-weight: 600;
      padding: .2rem .55rem; border-radius: 6px;
      text-transform: uppercase; letter-spacing: .04em;
    }
    .producto-emoji {
      font-size: 3.5rem;
      display: flex; align-items: center; justify-content: center;
      padding: 2rem 0 1rem;
      background: var(--brand-light);
    }
    .producto-info { padding: 1rem; }
    .categoria-label {
      font-size: .72rem; color: var(--brand);
      font-weight: 600; text-transform: uppercase; letter-spacing: .05em;
    }
    .producto-info h3 {
      font-size: .95rem; font-weight: 600;
      color: var(--dark); margin: .3rem 0 .8rem;
    }
    .precio-row { display: flex; align-items: center; justify-content: space-between; }
    .precio { font-size: 1.1rem; color: var(--dark); }
    .add-btn {
      background: var(--brand); color: #fff;
      border: none; border-radius: 8px;
      padding: .4rem .9rem; font-size: .8rem; font-weight: 600;
      cursor: pointer; font-family: var(--font-body);
      transition: background .2s;
    }
    .add-btn:hover { background: var(--brand-dark); }

    .vacio {
      text-align: center; padding: 4rem;
      color: var(--mid); font-size: 1rem;
    }
    .vacio span { font-size: 3rem; display: block; margin-bottom: 1rem; }

    @media (max-width: 768px) {
      .catalogo-wrapper { padding: 2rem 1.5rem; }
    }
  `]
})
export class CatalogoComponent {
  busqueda = '';
  categoriaActiva = signal('Todos');
  categorias = ['Todos', 'Electrónica', 'Ropa', 'Hogar', 'Deportes'];

  productos: Producto[] = [
    { id: 1, nombre: 'Auriculares Inalámbricos', precio: 1299, categoria: 'Electrónica', emoji: '🎧', tag: 'Nuevo' },
    { id: 2, nombre: 'Smartwatch Pro', precio: 2499, categoria: 'Electrónica', emoji: '⌚', tag: 'Oferta' },
    { id: 3, nombre: 'Teclado Mecánico', precio: 899, categoria: 'Electrónica', emoji: '⌨️' },
    { id: 4, nombre: 'Camiseta Premium', precio: 349, categoria: 'Ropa', emoji: '👕' },
    { id: 5, nombre: 'Sudadera Urban', precio: 649, categoria: 'Ropa', emoji: '🧥', tag: 'Popular' },
    { id: 6, nombre: 'Zapatillas Runner', precio: 1199, categoria: 'Deportes', emoji: '👟' },
    { id: 7, nombre: 'Lámpara de Escritorio', precio: 459, categoria: 'Hogar', emoji: '🪔' },
    { id: 8, nombre: 'Set de Sartenes', precio: 789, categoria: 'Hogar', emoji: '🍳', tag: 'Nuevo' },
    { id: 9, nombre: 'Yoga Mat Pro', precio: 399, categoria: 'Deportes', emoji: '🧘' },
    { id: 10, nombre: 'Mochila Táctica', precio: 699, categoria: 'Ropa', emoji: '🎒' },
    { id: 11, nombre: 'Monitor 27"', precio: 4599, categoria: 'Electrónica', emoji: '🖥️', tag: 'Oferta' },
    { id: 12, nombre: 'Pesas Ajustables', precio: 1599, categoria: 'Deportes', emoji: '🏋️' },
  ];

  productosFiltrados = computed(() => {
    const q = this.busqueda.toLowerCase();
    const cat = this.categoriaActiva();
    return this.productos.filter(p => {
      const matchCat = cat === 'Todos' || p.categoria === cat;
      const matchQ = p.nombre.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  });

  agregar(p: Producto) {
    alert(`"${p.nombre}" agregado al carrito ✓`);
  }
}