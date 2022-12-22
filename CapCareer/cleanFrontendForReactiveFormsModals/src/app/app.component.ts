import { Component, OnInit } from '@angular/core';
import { BackendService} from './shared/backendanbindung.service';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formModal: any;

  constructor() {}

  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    // throw new Error('Method not implemented.');
  }

  openFormModal() {
    this.formModal.show();
  }

  saveSomething() {
    this.formModal.hide();
  }
  title = 'cleanFrontendForReactiveFormsModals';


}
