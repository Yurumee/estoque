import { Injectable } from "@nestjs/common";
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
    login(dto: authDto){
        return 'login'
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
            return {"status":409, "msg":"Usuário já cadastrado!"}
        }
        
        // checa se a senha tem mais de 4 caracteres
        if (dto.senha.length < 3)
        {
            return {"status":400, "msg":"Senha muito curta!"}
        }
    
        // gera hash de senha para ser armazenada no banco de dados
        const senhaCripto = await argon.hash(dto.senha)

        // cria uma nova instancia do usuario e armazena no banco
        const user = await this.UsuarioRepository.insert({
            login: dto.login,
            senha: senhaCripto
        },
        )
        
        // busca o novo usuario criado
        const newUser = this.UsuarioRepository.findOneBy({login: dto.login})

        // retorna o usuario para pagina principal
        return newUser
    }

    signup(){
        return 'sair'
    }
}