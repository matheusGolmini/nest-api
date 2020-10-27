import { InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
    @IsString()
    @IsNotEmpty({ message: 'Este campo não pode ser vazio'})
    @IsOptional()
    name?: string;

    @IsEmail()
    @IsNotEmpty({ message: 'Este campo não pode ser vazio'})
    @IsOptional()
    email?: string;
}