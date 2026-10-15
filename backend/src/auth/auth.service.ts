import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { authDto } from "./dto";
import { TUsuario } from "./entities/user.entity";
import * as argon from 'argon2';
@Injectable()
export class AuthService {
    // repositorio de produtos para as querys
    constructor(
        @InjectRepository(TUsuario)
        private UsuarioRepository: Repository<TUsuario>
    ) {}

    // recebe um dto no mesmo padrão do authDto
    async login(dto: authDto){
        // checar se usuario existe
        const userExists = await this.UsuarioRepository.findOne({
            where: {
                login: dto.login
            }
        })

        console.log(userExists)

        if (!userExists)
        {
            return new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Usuário não existe!'
            },
            HttpStatus.NOT_FOUND
            )
        }
        
        // checar senha
        const checaSenhas = await argon.verify(userExists.senha, dto.senha)
        console.log(checaSenhas)
        
        // enviar o usuario, caso senhas coincidam
        if (checaSenhas)
        {
            return userExists
        }
        else
        {
            return new HttpException({
                status: HttpStatus.UNAUTHORIZED,
                error: 'Senhas ou login não coincidem'
            },
            HttpStatus.UNAUTHORIZED
            )
        }


    }

    // recebe um dto no mesmo padrão do authDto
    async cadastrarUsuario(dto: authDto){
        // checa se o usuario ja existe
        const userExists = await this.UsuarioRepository.exists({
            where: {
                login: dto.login
            }    
        })

        if (userExists)
        {
            // return {"status":409, "msg":"Usuário já cadastrado!"}
            return new HttpException({
                status: HttpStatus.CONFLICT,
                error: 'Usuário já cadastrado!'
            },
            HttpStatus.CONFLICT
            )
        }

        // checa se a senha tem mais de 4 caracteres
        else if (dto.senha.length <= 3)
        {
            // return {"status":400, "msg":"Senha muito curta!"}
            return new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Senha muito curta!'
            },
            HttpStatus.BAD_REQUEST
            )

        }
    
        else if (dto.senha.length >= 4 && !userExists)
        {
            // gera hash de senha para ser armazenada no banco de dados
            const senhaCripto = await argon.hash(dto.senha)
            
            // cria uma nova instancia do usuario e armazena no banco
            const user = await this.UsuarioRepository.insert({
                    login: dto.login,
                    senha: senhaCripto
                },
            )
        
            // busca o novo usuario criado
            const newUser = this.UsuarioRepository.findOne({
                where: {
                    login: dto.login
                },
                select: { senha: false }
            })

            // retorna o usuario para pagina principal
            return newUser
        }
    }

    signup(){
        return 'sair'
    }
}