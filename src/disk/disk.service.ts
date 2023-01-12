import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}
  getData() {
    console.log('Drawing 5 watts of power from power service.');
    this.powerService.supplyPower(5);

    return 'data';
  }
}
