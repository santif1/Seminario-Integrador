import { Module } from "@nestjs/common";
import { EmpleadoModule } from "./empleado/empleado.module";
import { StockModule } from "./stock/stock.module";
import { VentasModule } from "./ventas/ventas.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [EmpleadoModule, StockModule, VentasModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}