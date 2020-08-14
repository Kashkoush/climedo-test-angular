import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContentService } from '../content.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  EditDepartment: FormGroup

  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const departmentName = this.route.snapshot.params['name'];
    const editedDepartment = this.contentService.showDepartment(departmentName);

    this.EditDepartment = new FormGroup({
      'name': new FormControl(editedDepartment.name, Validators.required),
      'APIKey': new FormControl(editedDepartment.APIKey, Validators.required),
      'contactName': new FormControl(editedDepartment.contactName, Validators.required),
      'contactEmail': new FormControl(editedDepartment.contactEmail, [Validators.required, Validators.email]),
      'contactPhone': new FormControl(editedDepartment.contactPhone, Validators.required),
    })
  }

  sendForm() {
    this.EditDepartment.markAllAsTouched();
    if (this.EditDepartment.status === "VALID") {
      // console.log(this.addDepartment.value);
      this.contentService.deleteDepartment(this.route.snapshot.params['index']);
      this.contentService.addDepartment(this.EditDepartment.value);
      this.EditDepartment.reset();
      this.router.navigate(['']);
    }
  }

}
