import { Request } from 'express';
import { EmpleadoEntity } from '../../empleado/entities/empleado.entity';

export interface RequestWithUser extends Request {
  user?: EmpleadoEntity;
}
