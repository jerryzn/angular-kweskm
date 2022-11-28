import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public issueFieldsForm: FormGroup;

  public fieldTypeList = [
    { name: 'Text', id: 1 },
    { name: 'Numeric', id: 2 },
    { name: 'Alpha Numeric', id: 3 },
    { name: 'Drop Down', id: 4 },
  ];

  public dropDownvalues: any = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.issueFieldsForm = this.formBuilder.group({
      issueFields: this.formBuilder.array([]),
    });
  }

  public addNewIssueFields() {
    console.log('add issue fields called ----');
    this.getIssueFormFields().push(this.newIssueField());
    console.log(this.getIssueFormFields().value);
  }

  public getIssueFormFields() {
    return this.issueFieldsForm.get('issueFields') as FormArray;
  }

  public newIssueField() {
    return this.formBuilder.group({
      labelName: '',
      type: '',
      mandatory: false,
      maxcharaters: '',
      dropdownvalue: '',
    });
  }

  public changeFieldTypeList(value: any) {
    console.log(value);
    this.dropDownvalues = [];
  }

  public removeIssueField(issueFieldIndex: any) {
    this.getIssueFormFields().removeAt(issueFieldIndex);
    console.log(this.getIssueFormFields().value);
  }

  public addDropDownValue(issueFieldIndex: string) {
    this.dropDownvalues.push({
      value: 'value' + issueFieldIndex,
      id: 1,
    });
    console.log(this.getIssueFormFields().value);
  }
}
