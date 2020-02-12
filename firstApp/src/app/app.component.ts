import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  selectedPath : File = null;
  name:String = 'abhishek';
  
  constructor(private http:HttpClient){
    
  }
ClientList:any[]= [
  {
    'ClientId' : '20',
    'ClientName' : 'Arun Kumar',
    'PoliceStation' : 'Dum Dum',
    'ClientBmiList':[
      {
        'bmiId' : '2',
        'weight': '100',
        'weight_unit' : 'kg',
        'height' : '145',
        'bmi_class' : '25',
         'bp' : '87'
      },
      {
        'bmiId' : '3',
        'weight': '91',
        'weight_unit' : 'kg',
        'height' : '145',
        'bmi_class' : '25',
         'bp' : '84'
      },
      {
        'bmiId' : '4',
        'weight': '70',
        'weight_unit' : 'kg',
        'height' : '145',
        'bmi_class' : '25',
         'bp' : '89'
      }
    ]    
  },
  {
    'ClientId' : '21',
    'ClientName' : 'Tania Roy',
    'PoliceStation' : 'Barasat',
    'ClientBmiList':[
      {
        'bmiId' : '6',
        'weight': '55',
        'weight_unit' : 'kg',
        'height' : '120',
        'bmi_class' : '25',
         'bp' : '87'
      },
      {
        'bmiId' : '7',
        'weight': '59',
        'weight_unit' : 'kg',
        'height' : '120',
        'bmi_class' : '25',
         'bp' : '84'
      },
      {
        'bmiId' : '8',
        'weight': '60',
        'weight_unit' : 'kg',
        'height' : '120',
        'bmi_class' : '25',
         'bp' : '89'
      }
    ]    
  }
]
  onFileSelected(event){    
    console.log(event);
    this.selectedPath = <File>event.target.files[0];
    console.log(this.selectedPath);
  }

  onUpload(){
    const fd = new FormData();
    fd.append('file', this.selectedPath, this.selectedPath.name);

    this.http.post('http://192.168.1.71:8080/client/uploadFile', fd)
    .subscribe(res =>{
      console.log("happy");
    });
  }

  getcolor(){
    return 'blue';
  }
}
