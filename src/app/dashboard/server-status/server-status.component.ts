import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  // currentStatus: string = 'online';
  currentStatus = signal<string>('online');
  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(this.currentStatus());
    // });
  }
  ngOnInit() {
    const interval = setInterval(() => {
      const statuses = ['online', 'offline', 'unknown'];
      const randomIndex = Math.floor(Math.random() * statuses.length);
      this.currentStatus.set(statuses[randomIndex]);
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
