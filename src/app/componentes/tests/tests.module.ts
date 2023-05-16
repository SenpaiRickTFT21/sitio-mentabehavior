import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests.component';
import { TestAdultoComponent } from './test-adulto/test-adulto.component';
import { FormsModule } from '@angular/forms';
import { TestNinoComponent } from './test-nino/test-nino.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { RouterModule } from '@angular/router';
const routes = [
  {
    path: '',
    component: TestsComponent,
  },
];
@NgModule({
  declarations: [
    TestsComponent,
    TestAdultoComponent,
    TestNinoComponent,
    ResultadoComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [TestsComponent],
})
export class TestsModule {}
