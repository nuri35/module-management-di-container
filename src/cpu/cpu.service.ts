import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('drawinng 10 watts of power from power service');
    this.powerService.supplyPower(100);
    return a + b;
  }
}
