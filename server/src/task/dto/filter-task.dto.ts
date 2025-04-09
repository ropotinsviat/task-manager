import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class FilterTaskDto {
  @IsOptional()
  @IsString()
  titleOrDescription?: string;

  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  @IsBoolean()
  completed?: boolean;
}
