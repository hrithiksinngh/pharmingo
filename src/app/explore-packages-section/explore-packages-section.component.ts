import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore-packages-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './explore-packages-section.component.html',
  styleUrl: './explore-packages-section.component.css',
})
export class ExplorePackagesSectionComponent {
  packages_cards_data = [
    {
      title: 'Basic Access',
      price: '$249',
      description:
        'For 1 *ATC code, indication or #MOA across 7 key countries. Covers only: EU4, UK, USA & Japan',
      subText: '*Anatomical Therapeutic Chemical, #Mechanism of Action ',
      buttonText: 'Select Plan',
    },
    {
      title: 'Enhanced Access',
      price: '$849',
      description:
        'For 1 *ATC code, indication or #MOA across 63 countries. Note: Only 31 countries available for market access',
      subText: '*Anatomical Therapeutic Chemical, #Mechanism of Action ',
      buttonText: 'Select Plan',
    },
    {
      title: 'Custom Report',
      price: '$3999',
      description:
        'One-time custom report comparing pricing, regulatory approval, *HTA decisions and dosing for 3-5 drugs',
      subText: '*Health technology Assessment, #Mechanism of Action ',
      buttonText: 'Talk to Team',
    },
    {
      title: 'Consultaion',
      price: '$299',
      description:
        'One hour virtual consultation with an expert on HTA decisions, drug pricing or dosing ',
      subText: '*Health technology Assessment, #Mechanism of Action ',
      buttonText: 'Talk to Team',
    },
  ];
}
