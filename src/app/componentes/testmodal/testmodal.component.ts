// test-modal.component.ts

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test-modal',
  templateUrl: './testmodal.component.html',
  styleUrls: ['./testmodal.component.css'],
})
export class TestModalComponent {
  @Input() id: string;

  constructor(private router: Router, public activeModal: NgbActiveModal) {}

  navigateToTest(id: string) {
    this.activeModal.close(); // Close the modal
    this.router.navigate(['/tests', id]);
  }
}
