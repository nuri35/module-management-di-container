import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('drawinng 10 watts of power from power service');
    this.powerService.supplyPower(100);
    return 'data';
  }
}
