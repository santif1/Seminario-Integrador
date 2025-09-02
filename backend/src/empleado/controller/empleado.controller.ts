import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  ParseIntPipe,
  HttpStatus,
  HttpCode
} from '@nestjs/common';
import { EmpleadoService } from '../service/empleado.service';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';
import { UpdateEmpleadoDto } from '../dto/update-empleado.dto';
import { EmpleadoEntity } from '../entities/empleado.entity';

@Controller('empleados')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Get()
  async findAll(): Promise<EmpleadoEntity[]> {
    return await this.empleadoService.findAll();
  }

  @Get('search')
  async search(@Query('q') searchTerm: string): Promise<EmpleadoEntity[]> {
    return await this.empleadoService.searchByName(searchTerm);
  }

  @Get('count')
  async count(): Promise<{ total: number }> {
    const total = await this.empleadoService.count();
    return { total };
  }

  @Get('role/:roleId')
  async findByRole(
    @Param('roleId', ParseIntPipe) roleId: number
  ): Promise<EmpleadoEntity[]> {
    return await this.empleadoService.findByRole(roleId);
  }

  @Get('legajo/:legajo')
  async findByLegajo(@Param('legajo') legajo: string): Promise<EmpleadoEntity> {
    return await this.empleadoService.findByLegajo(legajo);
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number
  ): Promise<EmpleadoEntity> {
    return await this.empleadoService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createEmpleadoDto: CreateEmpleadoDto): Promise<EmpleadoEntity> {
    return await this.empleadoService.create(createEmpleadoDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmpleadoDto: UpdateEmpleadoDto
  ): Promise<EmpleadoEntity> {
    return await this.empleadoService.update(id, updateEmpleadoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.empleadoService.remove(id);
  }

  // Endpoint para dashboard - se puedes expandir
  @Get(':id/dashboard')
  async getDashboard(@Param('id', ParseIntPipe) id: number): Promise<any> {
    const empleado = await this.empleadoService.findOne(id);
    
    // Aca hay que agregar lógica para obtener datos del dashboard
    // como ventas del empleado, estadísticas, etc.
    return {
      empleado,
      // estadisticas: await this.getEmpleadoStats(id),
      // ventasRecientes: await this.getVentasRecientes(id),
    };
  }
}