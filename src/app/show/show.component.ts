import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  department: any;

  constructor(private contentService: ContentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const departmentName = this.route.snapshot.params['name'];
    this.department = this.contentService.showDepartment(departmentName);
  }

}
