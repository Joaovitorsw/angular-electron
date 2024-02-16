import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }
}
