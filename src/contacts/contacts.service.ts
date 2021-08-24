import { Contact, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ContactsService {
    constructor(private prisma: PrismaService) {}

    async getAll(): Promise<Contact[]> {
        return await this.prisma.contact.findMany();
    }

    async get(id : number): Promise<Contact> {
        return await this.prisma.contact.findUnique({where: {id}});
    }

    async create(
        contactCreateInput: Prisma.ContactCreateInput,
    ): Promise<Contact> {
        return await this.prisma.contact.create({
            data: contactCreateInput,
        });
    }

    async delete(id : number): Promise<Contact> {
        return await this.prisma.contact.delete({where : {id}})
    }

    async update(
        id: number, 
        contactUpdateInput: Prisma.ContactUpdateInput,
        ): Promise<Contact> {
            return await this.prisma.contact.update( {
                where: {id},
                data: contactUpdateInput,
            });
        } 
}
