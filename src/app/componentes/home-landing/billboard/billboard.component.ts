import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestModalComponent } from '../../testmodal/testmodal.component';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css'],
})
export class BillboardComponent implements OnInit {
  title = 'appBootstrap';
  closeResult: string;

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {}

  scrolltoDestacados(id) {
    let el = document.getElementById(id);
    el.scrollIntoView();
  }

  open() {
    const modalRef = this.modalService.open(TestModalComponent);
    modalRef.componentInstance.id = 'myId'; // You can pass data to your modal component here
  }

  navigateToTest(id: string) {
    this.modalService.dismissAll(); // Close the modal
    this.router.navigate(['/tests', id]);
  }
}
