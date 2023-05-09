import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.css'],
  animations: [
    trigger('swipeUpIn', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-in-out'),
      ]),
    ]),
    trigger('swipeDownIn', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('600ms ease-in-out'),
      ]),
    ]),
  ],
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

  open(content: any) {
    this.modalService.open(content);
  }

  navigateToTest(id: string) {
    this.modalService.dismissAll(); // Close the modal
    this.router.navigate(['/tests', id]);
  }
}
