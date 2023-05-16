import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { AuthGuard } from './_helpers/auth.guard';

import { TopNavModule } from './componentes/top-nav/top-nav.module';
import { HomeLandingModule } from './componentes/home-landing/home-landing.module';
import { ArticuloModule } from './componentes/articulo/articulo.module';
import { TestsModule } from './componentes/tests/tests.module';
import { SeccionesModule } from './componentes/secciones/secciones.module';
import { AutenticacionModule } from './componentes/autenticacion/autenticacion.module';
import { ContactosModule } from './componentes/contactos/contactos.module';
import { FooterComponent } from './componentes/footer/footer.component';
import { CrearArticuloComponent } from './componentes/crear-articulo/crear-articulo.component';
import { HomeLandingComponent } from './componentes/home-landing/home-landing.component';
import { TestModalComponent } from './componentes/testmodal/testmodal.component';

const appRoutes: Routes = [
  {
    path: 'signup',
    loadChildren: () =>
      import('./componentes/autenticacion/autenticacion.module').then(
        (m) => m.AutenticacionModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./componentes/autenticacion/autenticacion.module').then(
        (m) => m.AutenticacionModule
      ),
  },
  {
    path: 'articulo/:id',
    loadChildren: () =>
      import('./componentes/articulo/articulo.module').then(
        (m) => m.ArticuloModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'secciones/:id',
    loadChildren: () =>
      import('./componentes/secciones/secciones.module').then(
        (m) => m.SeccionesModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'contactos',
    loadChildren: () =>
      import('./componentes/contactos/contactos.module').then(
        (m) => m.ContactosModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'crear-articulo',
    component: CrearArticuloComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tests/:id',
    loadChildren: () =>
      import('./componentes/tests/tests.module').then((m) => m.TestsModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomeLandingComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CrearArticuloComponent,
    TestModalComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    TopNavModule,
    HomeLandingModule,
    ArticuloModule,
    TestsModule,
    AutenticacionModule,
    ContactosModule,
    BrowserAnimationsModule,
    SeccionesModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
