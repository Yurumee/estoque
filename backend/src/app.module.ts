import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { authModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [authModule, ProdutoModule, UsuarioModule]
})
export class AppModule {}
