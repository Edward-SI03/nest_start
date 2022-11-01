import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AuthCredentialDto {
  @IsString()
  @MinLength(4)
  @MaxLength(12)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(12)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'only english, number',
  })
  password: string;
}
