import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { TerminalComponent } from '../../shared/components/terminal/terminal.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ContainerComponent, TerminalComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
