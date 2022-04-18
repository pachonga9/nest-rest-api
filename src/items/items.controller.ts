import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  // I am using Postman to make our requests.

  // Use the @Get decorator for retrieving data.
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  //   //   Getting URL Params:
  //   @Get(':id')
  //   findOne(@Param() param): string {
  //     return `Item ${param.id}`;
  //   }
  //   // or a cleaner way of doing it...
  //   @Get(':id')
  //   findOne_2(@Param('id') id): string {
  //     return `Item ${id}`;
  //   }
  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  // Use the @Post decorator for posting data.
  // Usually, when sending a post request, you are creating something, in this case, an item. So we need to send data...
  // In order to send data, in nest, we need to create what's called a Data Transfer Object (DTO).
  // A DTO is an object that determines how the data will be sent over the network.
  // I will create a folder inside the items folder called "dto".
  @Post()
  create(@Body() createItemDTO: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDTO);
  }

  // To delete data
  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  // To update data
  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }
}
