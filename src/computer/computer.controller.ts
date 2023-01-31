import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    console.log('getting data from cpu service');
    this.cpuService.compute(1, 2);
    console.log('getting data from disk service');
    this.diskService.getData();
  }
}
