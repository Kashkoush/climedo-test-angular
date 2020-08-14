import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContentService } from '../content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  addDepartment: FormGroup;

  constructor(private contentService: ContentService, private router: Router) { }

  ngOnInit(): void {
    this.addDepartment = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'APIKey': new FormControl(null, Validators.required),
      'contactName': new FormControl(null, Validators.required),
      'contactEmail': new FormControl(null, [Validators.required, Validators.email]),
      'contactPhone': new FormControl(null, Validators.required),
    })
  }

  sendForm() {
    this.addDepartment.markAllAsTouched();
    if (this.addDepartment.status === "VALID") {
      // console.log(this.addDepartment.value);
      this.contentService.addDepartment(this.addDepartment.value);
      this.addDepartment.reset();
      this.router.navigate(['']);
    }
  }

}
