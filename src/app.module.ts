import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { PrismaService } from './contacts/prisma.service';

@Module({
  imports: [ContactsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
