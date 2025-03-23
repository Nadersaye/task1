import { Component } from '@angular/core';
import { Skill } from '../models/skill.model';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-skills',
  imports: [NgbProgressbarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

skills:Skill[]=[
  new Skill("Html",90),
  new Skill("Css",80),
  new Skill("Js",70),
  new Skill("Angular",70),
  new Skill("flutter",90),
  new Skill("database",80)

];

}
