export interface cellList {
    name: string;
    value: string;
}

export class BatteryModule {
 
    tid: string;
    timestamps: Array<string>;
    values: Array<number>
 
  constructor(tid: string, timestamps: Array<string>, values: Array<number>) {
    this.tid = tid;
    this.timestamps = timestamps;
    this.values = values;
  }
   
}