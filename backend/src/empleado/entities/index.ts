import { PermissionEntity } from './permissions.entity';
import { RoleEntity } from './roles.entity';
import { EmpleadoEntity } from './empleado.entity';
import { VentaEntity} from '../../ventas/entities/venta.entity'
import { DetalleVentaEntity} from '../../ventas/entities/detalle.venta.entity'
import { PrendaEntity} from '../../stock/entities/prenda.entity'
import { TalleEntity} from '../../stock/entities/talle.entity'
import { ClienteEntity} from '../../ventas/entities/cliente.entity'

export const entities = [EmpleadoEntity, RoleEntity, PermissionEntity, VentaEntity, DetalleVentaEntity, PrendaEntity, ClienteEntity, TalleEntity];
