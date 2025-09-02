import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrendaEntity } from '../entities/prenda.entity';

@Injectable()
export class StockService {
     @InjectRepository(PrendaEntity)
        private readonly PrendaRepository: Repository<PrendaEntity>
     

    async findAll() {
        return this.PrendaRepository.find();
    }

    async create(prenda: PrendaEntity) {
        return this.PrendaRepository.save(prenda);
    }

    async update(codigo: number, updateData: Partial<PrendaEntity>) {
        await this.PrendaRepository.update(codigo, updateData);
        return this.PrendaRepository.findOne({ where: { codigo } });
    }
}
