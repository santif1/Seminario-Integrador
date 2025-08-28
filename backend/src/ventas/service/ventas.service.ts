import { Injectable } from '@nestjs/common';

@Injectable()
export class VentasService {

    async findAll(){
        return "Todas las ventas";
    }

    async findOne(id: number){
        return "venta con id: " + id;
    }
}
