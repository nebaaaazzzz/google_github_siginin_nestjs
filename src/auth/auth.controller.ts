import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    return;
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: Request) {
    return this.authService.authLogin(req);
  }
  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth() {
    return;
  }

  @Get('github/redirect')
  @UseGuards(AuthGuard('github'))
  githubAuthRedirect(@Req() req: Request) {
    return this.authService.authLogin(req);
  }

  @Get('linkedin')
  @UseGuards(AuthGuard('linkedin'))
  async linkedinAuth() {
    return;
  }

  @Get('linkedin/redirect')
  @UseGuards(AuthGuard('linkedin'))
  linkedinAuthRedirect(@Req() req: Request) {
    return this.authService.authLogin(req);
  }
}
