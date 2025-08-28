import { Controller, Get, Post, Put, Patch, Delete, Param } from '@nestjs/common';
import { VentasService } from '../service/ventas.service';

@Controller('ventas')
export class VentasController {

    constructor(
        private ventasService: VentasService
    ){}

    @Get()
    findAll(){
        return this.ventasService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.ventasService.findOne(id);
    }

}
