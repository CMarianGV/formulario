import { Component } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';

declare let jsPDF;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formulario: FormGroup;
  constructor(private fb: FormBuilder){
    this.formulario = fb.group({
      nFolio: '',
      fecha: '',
      nomResidente: '',
      carrera: '',
      nomProyecto: '',
      periodoRealizacion: '',
      empresa: '',
      departamento: ''
    })
  }
  public generarPDF() {
    //this.formulario.value;
    var doc = new jsPDF();
    doc.setFont('helvetica');
    doc.setFontSize(10);
    doc.text(50,50, 'DEPARTAMENTO ACADÉMICO DE');
    doc.text(136,60, 'No. de oficio: ');

    doc.setFontType('bold');
    doc.text(158,60, this.formulario.value.nFolio);

    doc.setFontType('normal');
    doc.text(140,65, 'ASUNTO:');

    doc.setFontType('bold');
    doc.text(160,65, 'Asesor Interno de');
    doc.text(145,70, 'Residencias Profesionales.');

    doc.setFontSize(8);
    doc.text(130,80, 'H.H. Cuautla, Mor a ' + this.formulario.value.fecha);

    doc.setFontSize(10);
    doc.text(20,85, `
    C.
    DOCENTE
    PRESENTE.`);

    doc.setFontType('normal');
    doc.text(20,105, `
    Por este conducto informa a usted que ha sido asignado para fungir como  Asesor Interno del Proyecto de
    Residencias Profesionales que a continuación se describe:`);

    doc.rect(24, 118, 167, 40);
    doc.setLineWidth(0.5);
    doc.line(24, 126, 191, 126);
    doc.line(24, 134, 191, 134);
    doc.line(24, 142, 191, 142);
    doc.line(24, 150, 191, 150);

    doc.line(80, 158, 80, 118);

    doc.text(26,124, 'a) Nombre del Residente:');
    doc.text(85,124, this.formulario.value.nomResidente);
    doc.text(26,132, 'b) Carrera:');
    doc.text(85,132, this.formulario.value.carrera);
    doc.text(26,140, 'c) Nombre del Proyecto:');
    doc.text(85,140, this.formulario.value.nomProyecto);
    doc.text(26,148, 'd) Periodo de Realización:');
    doc.text(85,148, this.formulario.value.periodoRealizacion);
    doc.text(26,156, 'e) Empresa:');
    doc.text(85,156, this.formulario.value.empresa);

    doc.text(20,165, `
    Así mismo, le solicito dar el seguimiento pertienente a la realización del proyecto aplicando los lineamientos
    establecidos  para  ello,  en  el  Lineamientos  de  Residencias  Profesionales  del  Manual  Académico -
    Administrativo del TecNM.
    
    Agradezco de  antemano su valioso  apoyo en esta  importante actividad  para la  formación profesional  de
    nuestros estudiantes.


    Atentamente.`);

    doc.setFontType('bold');
    doc.text(20,210, `
    Nombre y firma
    JEFE DEL DEPARTAMENTO DE`);

    doc.setLineWidth(0.5);
    doc.line(80, 220, 170, 220);

    doc.setFontType('normal');
    doc.text(85,218, this.formulario.value.departamento);

    doc.setFontSize(8);
    doc.text(24,228, 'C.p. Expediente');
    doc.save('AsignacionAsersorInterno.pdf');
  }
}
