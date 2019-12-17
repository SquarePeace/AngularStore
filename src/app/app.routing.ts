//importar los modulos de router de angular...
import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

//importar los componentes que quiero que sean una pagina exclusiva
import { HomeComponent } from "./components/home/home.component";
import { ProductsComponent } from "./components/products/products.component";
import { ArticleComponent } from "./components/article/article.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { ErrorComponent } from "./components/error/error.component";
import { SearchComponent } from "./components/search/search.component";
import { ArticleNewComponent } from "./components/article-new/article-new.component";
import { ArticleEditComponent } from "./components/article-edit/article-edit.component";

//array de mis rutas...
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductsComponent},
    {path: 'productos/articulo/:id', component: ArticleComponent},
    {path: 'productos/crear', component: ArticleNewComponent},
    {path: 'productos/editar/:id', component: ArticleEditComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: '**', component: ErrorComponent}
]

//exportar el modulo de rutas...
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);