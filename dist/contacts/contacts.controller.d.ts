import { Contact, Prisma } from '@prisma/client';
import { ContactsService } from './contacts.service';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    getAll(): Promise<Contact[]>;
    get(id: any): Promise<Contact>;
    create(createContactInput: Prisma.ContactCreateInput): Promise<Contact>;
    delete(id: any): Promise<Contact>;
    update(id: any, contactUpdateInput: Prisma.ContactUpdateInput): Promise<Contact>;
}
