import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
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

    @Post()
    create(){
        this.ventasService.create();
    }
    //@Post()
    //create(@Body() dto: VentasDto){
    //    this.ventasService.create(dto);
    //
    //}
}
