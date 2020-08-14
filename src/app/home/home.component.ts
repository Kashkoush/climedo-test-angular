import { Component, OnInit } from '@angular/core';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faHospital = faHospital;
  departments: any;

  constructor(private contetntService: ContentService) { }

  ngOnInit(): void {
    // get the deparments
    this.departments = this.contetntService.getDepartments();
  }

  search(keyWord) {
    this.departments = this.contetntService.searchDepartments(keyWord);
  }

  deleteDepartment(index, name) {
    if (confirm("Are you sure to delete the " + name + " department")) {
      this.contetntService.deleteDepartment(index);
    }
  }

}
