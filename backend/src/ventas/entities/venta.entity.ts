import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { EmpleadoEntity } from '../../empleado/entities/empleado.entity';
import { DetalleVentaEntity } from './detalle.venta.entity';
import { ClienteEntity } from './cliente.entity';

@Entity('ventas')
export class VentaEntity {

    @PrimaryGeneratedColumn()
    numVenta: number;

    @Column()
    fecha: Date;

    @Column()
    total: number;

    @ManyToOne(()=> EmpleadoEntity, empleado => empleado.ventas)
    empleado: EmpleadoEntity;

    @OneToMany(() => DetalleVentaEntity, detalle => detalle.venta, {
        cascade: true,
        eager: true
    })
    detalles: DetalleVentaEntity;

    @ManyToOne(()=> ClienteEntity, cliente => cliente.ventas)
    cliente: ClienteEntity;
}