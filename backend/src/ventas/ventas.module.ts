import { Module } from '@nestjs/common';
import { VentasController } from './controller/ventas.controller';
import { VentasService } from './service/ventas.service';
import { AppModule } from '../app.module';

@Module({
  controllers: [VentasController],
  providers: [VentasService],
  imports: [AppModule]
})
export class VentasModule {}
