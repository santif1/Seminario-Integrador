import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Empleado } from './empleado.entity';
import { PermissionEntity } from './permissions.entity';

@Entity('roles')
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column() 
    descripcion: string;

    @OneToMany(() => Empleado, empleado => empleado.rol)
    empleados: Empleado[];

    @ManyToMany(()=> PermissionEntity, permission => permission.roles, { eager: true })
    @JoinTable({ name: 'roles_permissions' })
    permissions: PermissionEntity[];
}