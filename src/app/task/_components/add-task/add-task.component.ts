import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  contactForm: FormGroup;
  isLoading = false;
  isCollapsed = true;
  isPositionCollapsed = true;
  isCapabilityCollapsed = true;

  time: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  get form() {
    return this.contactForm.controls;
  }

  initForm() {
    this.contactForm = this.fb.group({
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      taskType: null,
      dueDate: null,
      time: null,
      outcome: null,
      delegatedTo: null,
      relatedTo: null,
      collaborator: null,
      selectedUser: null,
      markComplete: null,
    });
  }

  addTaskSubmit() {
    alert('Yet to be done');
  }
}
