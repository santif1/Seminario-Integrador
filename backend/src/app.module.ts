import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VentasModule } from './ventas/ventas.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [VentasModule, StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
