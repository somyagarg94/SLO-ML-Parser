import { Component } from '@angular/core';

@Component({
  selector: 'app-center-box-left',
  templateUrl: './center-box-left.component.html',
  styleUrls: ['./center-box-left.component.css']
})
export class CenterBoxLeftComponent  {
  data = {
    'simple key': 'simple value',
    'numbers': 1234567,
    'simple list': ['value1', 22222, 'value3'],
    'special value': undefined,
    'owner': null,
    'simple obect': {
      'simple key': 'simple value',
      'numbers': 1234567,
      'simple list': ['value1', 22222, 'value3'],
      'simple obect': {
        'key1': 'value1',
        'key2': 22222,
        'key3': 'value3'
      }
    }
  };

  get code () {
    return JSON.stringify(this.data, null, 2);
  }

  set code (v) {
    try{
      this.data = JSON.parse(v);
    }
    catch(e) {
      console.log('error occored while you were typing the JSON');
    };
  }
}