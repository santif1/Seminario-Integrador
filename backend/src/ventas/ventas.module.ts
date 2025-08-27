import { Module } from '@nestjs/common';
import { VentasController } from './service/ventas.controller';
import { VentasService } from './service/ventas.service';
import { StockModule } from './stock/stock.module';

@Module({
  controllers: [VentasController],
  providers: [VentasService],
  imports: [StockModule]
})
export class VentasModule {}
