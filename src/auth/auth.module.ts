import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google.strategy';
import { GithubStrategy } from './github.strategy';
import { LinkedinStrategy } from './linkedin.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, LinkedinStrategy, GithubStrategy],
})
export class AuthModule {}
