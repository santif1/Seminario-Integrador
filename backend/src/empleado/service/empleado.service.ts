import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoEntity } from '../entities/empleado.entity';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';
import { UpdateEmpleadoDto } from '../dto/update-empleado.dto';

@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(EmpleadoEntity)
    private readonly empleadoRepository: Repository<EmpleadoEntity>,
  ) {}

  async findAll(): Promise<EmpleadoEntity[]> {
    return await this.empleadoRepository.find({
      relations: ['rol']
    });
  }

  async findOne(id: number): Promise<EmpleadoEntity> {
    const empleado = await this.empleadoRepository.findOne({
      where: { id },
      relations: ['rol']
    });

    if (!empleado) {
      throw new NotFoundException(`Empleado con ID ${id} no encontrado`);
    }

    return empleado;
  }

  async findByLegajo(legajo: string): Promise<EmpleadoEntity> {
    const empleado = await this.empleadoRepository.findOne({
      where: { legajo },
      relations: ['rol']
    });

    if (!empleado) {
      throw new NotFoundException(`Empleado con legajo ${legajo} no encontrado`);
    }

    return empleado;
  }

  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<EmpleadoEntity> {
    try {
      const { rolId, ...empleadoData } = createEmpleadoDto;
      
      const empleado = this.empleadoRepository.create({
        ...empleadoData,
        rol: { id: rolId } as any // TypeORM manejará la relación
      });
      
      return await this.empleadoRepository.save(empleado);
    } catch (error) {
      if (error.code === '23505') { // Unique constraint violation
        throw new ConflictException('El legajo ya existe');
      }
      throw error;
    }
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto): Promise<EmpleadoEntity> {
    const empleado = await this.findOne(id);
    
    try {
      const { rolId, ...empleadoData } = updateEmpleadoDto;
      
      Object.assign(empleado, empleadoData);
      
      if (rolId) {
        empleado.rol = { id: rolId } as any;
      }
      
      return await this.empleadoRepository.save(empleado);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('El legajo ya existe');
      }
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    const empleado = await this.findOne(id);
    await this.empleadoRepository.remove(empleado);
  }

  // Métodos adicionales útiles
  async findByRole(roleId: number): Promise<EmpleadoEntity[]> {
    return await this.empleadoRepository.find({
      where: { rol: { id: roleId } },
      relations: ['rol']
    });
  }

  async searchByName(searchTerm: string): Promise<EmpleadoEntity[]> {
    return await this.empleadoRepository
      .createQueryBuilder('empleado')
      .leftJoinAndSelect('empleado.rol', 'rol')
      .where('empleado.nombre ILIKE :search OR empleado.apellido ILIKE :search', {
        search: `%${searchTerm}%`
      })
      .getMany();
  }

  async count(): Promise<number> {
    return await this.empleadoRepository.count();
  }
}