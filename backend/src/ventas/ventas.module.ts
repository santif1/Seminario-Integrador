import { Module } from '@nestjs/common';
import { VentasController } from './controller/ventas.controller';
import { VentasService } from './service/ventas.service';
import { AppModule } from '../app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from '../empleado/entities';

@Module({
  controllers: [VentasController],
  providers: [VentasService],
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5434,
        database: 'ventas',
        username: 'postgres',
        password: 'postgres',
        synchronize: false,
        dropSchema: false,
        entities,
      }),
      TypeOrmModule.forFeature(entities),
    ]
})
export class VentasModule {}
