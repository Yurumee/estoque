import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { authDto } from "./dto";

@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    // @body puxa dados do corpo da requisição
    // importamos o dto do auth
    login(@Body() auth: authDto) {
        return this.authService.login()
    }

    @Post('/sair')
    // @body puxa dados do corpo da requisição
    // importamos o dto do auth
    signup(@Body() auth: authDto) {
        return this.authService.signup()
    }
}