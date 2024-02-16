import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule],
})
export class DetailPage implements OnInit {
  ngOnInit(): void {
    console.log('DetailPage INIT');
  }
}
