// we are going to need a service in order to deal with the data base, get the actual data etc...
import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly ItemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.ItemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.ItemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.ItemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.ItemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.ItemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
