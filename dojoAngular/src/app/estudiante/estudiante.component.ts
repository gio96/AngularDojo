import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  @Input() receptor: String; 
  constructor() { }

  ngOnInit() {
  }

}
