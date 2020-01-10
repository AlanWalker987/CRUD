import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs'
import { Lookup} from '../models/Lookup'

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor() { }

  private units : Lookup[] = [
    {name:'pcs1',code:"1",category:1},
    {name:'pcs2',code:"2",category:2},
    {name:'pcs3',code:"3",category:2},
    {name:'pcs4',code:"4",category:1},
  ]

  private productcatagories : Lookup[] = [
    {name:'pcs12',code:"1",category:1},
    {name:'pcs22',code:"2",category:2},
    {name:'pcs32',code:"3",category:2},
    {name:'pcs42',code:"4",category:1},
  ]

  getunits():Observable<Lookup[]>{
    return of(this.units);
  }

    getproductcatagories():Observable<Lookup[]>{
    return of(this.productcatagories);
  }
}
