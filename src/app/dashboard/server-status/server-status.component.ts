import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: string = 'online';
  ngOnInit() {
    setInterval(() => {
      const statuses = ['online', 'offline', 'unknown'];
      const randomIndex = Math.floor(Math.random() * statuses.length);
      this.currentStatus = statuses[randomIndex];
    }, 5000);
  }
}
