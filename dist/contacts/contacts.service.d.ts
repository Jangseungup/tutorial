import { Contact, Prisma } from '.prisma/client';
import { PrismaService } from './prisma.service';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Contact[]>;
    get(id: number): Promise<Contact>;
    create(contactCreateInput: Prisma.ContactCreateInput): Promise<Contact>;
    delete(id: number): Promise<Contact>;
    update(id: number, contactUpdateInput: Prisma.ContactUpdateInput): Promise<Contact>;
}
