import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { authModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [authModule, ProdutoModule, UsuarioModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'process.env'
    }),
    
    TypeOrmModule.forRootAsync({
      // imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "better-sqlite3",
        database: '../database/' + configService.get('DATABASE_URL'),
        synchronize: true,
        logging: false,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: [],
        subscribers: []
      }),
    })]
})
export class AppModule {}
