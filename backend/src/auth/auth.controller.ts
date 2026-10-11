import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { authDto } from "./dto";

@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // entra no sistema
    @Post('/login')
    // @body puxa dados do corpo da requisição
    // importamos o dto do auth
    login(@Body() auth: authDto) {
        return this.authService.login(auth)
    }

    // cria um novo usuario
    @Post('/novo-usuario')
    // @body puxa dados do corpo da requisição
    // importamos o dto do auth
    novoUsuario(@Body() auth: authDto) {
        return this.authService.cadastrarUsuario(auth)
    }

    @Post('/sair')
    // @body puxa dados do corpo da requisição
    // importamos o dto do auth
    signup(@Body() auth: authDto) {
        return this.authService.signup()
    }
}