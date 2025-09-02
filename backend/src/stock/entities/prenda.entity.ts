import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn  } from "typeorm";
import { TalleEntity } from "./talle.entity";

@Entity('prendas')
export class PrendaEntity {
    @PrimaryColumn()
    codigo : string;

    @Column()
    descripcion: string;

    @Column()
    precio: number;

    @Column()
    cantidad: number;

    @ManyToOne(() => TalleEntity)
    @JoinColumn({ name: 'talle_id' })
    talle: TalleEntity;

}