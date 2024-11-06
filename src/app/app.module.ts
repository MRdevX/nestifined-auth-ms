import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

const modules = [AuthModule, UsersModule];

@Module({
  imports: [CoreModule, ...modules],
})
export class AppModule {}
