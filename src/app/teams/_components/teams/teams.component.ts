import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MembersComponent } from '../members/members.component';
import { SubteamsComponent } from '../subteams/subteams.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  flag: boolean = true;
  bunits: any;
  addTeam: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.createDummyData();
    this.createAddTeamForm();
  }

  createDummyData() {
    this.bunits = [
      {
        f1: 'Team 1',
        f2: '3',
        f3: '56',
        f4: 'Ranjan Kumar Das',
        f5: 'Champak Meheta',
      },
      {
        f1: 'Team 2',
        f2: '0',
        f3: '12',
        f4: 'Ranjan Kumar Das',
        f5: 'Champak Meheta',
      },
      {
        f1: 'Team 3',
        f2: '6',
        f3: '36',
        f4: 'Ranjan Kumar Das',
        f5: 'Champak Meheta',
      },
      {
        f1: 'Team 4',
        f2: '1',
        f3: '4',
        f4: 'Ranjan Kumar Das',
        f5: 'Champak Meheta',
      },
      {
        f1: 'Team 5',
        f2: '0',
        f3: '15',
        f4: 'Ranjan Kumar Das',
        f5: 'Champak Meheta',
      },
    ];
  }

  openSubTeams() {
    this.modalService.open(SubteamsComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        //this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  openTeamMembers() {
    this.modalService.open(MembersComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        //this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  createAddTeamForm() {
    this.addTeam = this.formBuilder.group({
      teamName: null,
      teamManager: null,
      addMembers: null,
      selectedUser: null,
      subTeam: null,
      description: null,
    });
  }

  createTeam() {}

  onSubmitAddTeam() {
    console.log(this.addTeam.value);
  }
}
