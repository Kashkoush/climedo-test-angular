import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  departments = [
    { name: 'Cardiology', APIKey: 'asbdkha-12371ksjd-k12lkj31k', contactName: 'Frederico Sanchez', contactEmail: 'franz@gamil.com', contactPhone: '00201004042132' },
    { name: 'Oncology', APIKey: 'asbdkha-978ykshekjuqhw-k12lkj31k', contactName: 'Allan Smith', contactEmail: 'smith@gamil.com', contactPhone: '004930901820' },
  ];

  constructor() {}

  getDepartments() {
    return this.departments;
  }

  searchDepartments(keyWord: string) {
    return this.departments.filter(department => Object.values(department).some(val => val.toLowerCase().includes(keyWord.toLowerCase())));
  }

  deleteDepartment(index: number) {
    return this.departments.splice(index, 1);
  }

  showDepartment(name: string) {
    return this.departments.find(department => department.name.toLowerCase() == name.toLowerCase())
  }

  addDepartment(Department) {
    this.departments.push(Department)
  }

}
