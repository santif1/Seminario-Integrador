/*import { EmpleadoI } from '../interfaces/empleado.interface';*/
import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEntity } from './roles.entity';

@Entity('empleados')
export class EmpleadoEntity /* implements EmpleadoI */ {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ unique: true })
    legajo: string;

    @Column()
    telefono: string;

    @ManyToOne(() => RoleEntity, role => role.empleados, { eager: true })
    @JoinColumn({ name: 'rol_id' })
    rol: RoleEntity;
    
}