import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  providers: [CpuService],
  imports: [PowerModule], // <--  power modulunde export edılenler listeleniyor. power modulun'dan dışa aktarma olarak listelenen her şeyi burdakı servıslerımızde kullanabılrız
  exports: [CpuService],
})
export class CpuModule {}
