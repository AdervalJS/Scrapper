import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { FindResponse } from './dtos/responses.dto';

@Controller('chapter')
export class ChapterController {
  constructor(private chapterService: ChapterService) {}

  @Get('find')
  async find(@Query('id', ParseIntPipe) id: number): Promise<FindResponse> {
    return await this.chapterService.find(id);
  }
}
