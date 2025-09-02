import { Request } from 'express';
import { EmpleadoEntity } from '../entities/empleado.entity';

export interface RequestWithEmpleado extends Request {
  empleado?: EmpleadoEntity;
}
