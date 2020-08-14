import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  EditDepartment: FormGroup

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {

    const editedDepartment =

    this.EditDepartment = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'APIKey': new FormControl(null, Validators.required),
      'contactName': new FormControl(null, Validators.required),
      'contactEmail': new FormControl(null, [Validators.required, Validators.email]),
      'contactPhone': new FormControl(null, Validators.required),
    })
  }

}
