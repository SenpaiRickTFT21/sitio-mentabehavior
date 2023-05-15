import { NgModule } from '@angular/core';
import { TopNavComponent } from './top-nav.component';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TopNavComponent],
  exports: [TopNavComponent],
  imports: [CommonModule, NgbCollapseModule, NgbDropdownModule],
})
export class TopNavModule {}
