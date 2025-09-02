import { Controller, Get, Post, Patch, Param, Body} from '@nestjs/common';
import { StockService } from '../service/stock.service';
import { PrendaEntity } from '../entities/prenda.entity';


@Controller('stock')
export class StockController {
    constructor(private readonly stockService: StockService) {}

    @Get()
    findAll() {
        return this.stockService.findAll();
    }

    @Post()
    create(prenda: PrendaEntity) {
        return this.stockService.create(prenda);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateData: Partial<PrendaEntity>) {
        return this.stockService.update(id, updateData);
    }
}
