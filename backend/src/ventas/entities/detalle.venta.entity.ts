import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { VentaEntity } from './venta.entity';

@Entity()
export class DetalleVentaEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> VentaEntity, venta => venta.detalles, {
        onDelete: 'CASCADE'
    })
    venta: VentaEntity;

    @Column()
    cantidad: number;

    @Column()
    subtotal: number;

    @OneToMany(()=> PrendaEntity, prenda => prenda.ventas)
}