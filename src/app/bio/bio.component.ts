import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-bio',
  imports: [],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent {
  constructor(private sanitizer: DomSanitizer) {}  downloadResume() {
    const url = this.sanitizer.bypassSecurityTrustResourceUrl(
      '../../assets/documents/nader_resume.pdf'
    );

    const link = document.createElement('a');
    link.href = url.toString();
    link.download = 'Nader_Sayed_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
