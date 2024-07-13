import { Controller, Get, NotFoundException, Param, Req, UnauthorizedException, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { TokenPayload } from "src/auth/jwt.strategy";
import { PrismaService } from "src/prisma/prisma.service";


@Controller('places')
@UseGuards(JwtAuthGuard)
export class GetAllPlacesController {
    constructor(
        private prisma: PrismaService
    ) {}

    @Get('')
    async handle(
        @Req() request: Request,
    ) {
        const user = request.user as TokenPayload

        const place = await this.prisma.place.findMany()

        if (!place) {
            throw new NotFoundException('There is no places available')
        }

        return place
    }
}