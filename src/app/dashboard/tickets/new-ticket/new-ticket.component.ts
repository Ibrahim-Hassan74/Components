import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // @Output() add = new EventEmitter<{
  //   title: string;
  //   ticketText: string;
  // }>();
  add = output<{
    title: string;
    text: string;
  }>();
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredText = '';
  enteredTitle = '';
  ngOnInit(): void {
    console.log('OnInit');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log(this.form?.nativeElement);
  }
  onSubmit() {
    // console.log(title, ticketText);
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    this.enteredText = '';
    this.enteredTitle = '';
    // this.form?.nativeElement.reset();
    // console.dir(this.form());
  }
}
