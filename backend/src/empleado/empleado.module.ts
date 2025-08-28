import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities';
/*import { AuthGuard } from './middlewares/auth.middleware';
import { UsersController } from './users/users.controller';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { UsersModule } from './users/users.module';
import { MiddlewaresModule } from './middlewares/middleware.module';
import { JwtModule } from './jwt/jwt.module';
import { SeedService } from './users/seed.service';
import { JwtService } from './jwt/jwt.service';*/


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      database: 'empleados',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      dropSchema: true,
      entities,
    }),
    TypeOrmModule.forFeature(entities),
   /* RolesModule,
    PermissionsModule,
    UsersModule,
    MiddlewaresModule,
    JwtModule,
*/
  ],
  controllers: [AppController, /*UsersController*/],
  providers: [
    /*SeedService, JwtService*/
  ]
})
export class EmpleadoModule {}
