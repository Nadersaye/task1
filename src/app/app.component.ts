import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component'
import {BioComponent} from './bio/bio.component'
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {FooterComponent} from './footer/footer.component'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,BioComponent,
    FooterComponent,BioComponent,SkillsComponent,PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
