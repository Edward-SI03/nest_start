import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './boad-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    // const board = this.create({
    //   title,
    //   description,
    //   status: BoardStatus.PUBLIC,
    // });

    // await this.save(board);

    const board = new Board();
    board.title = title;
    board.description = description;
    board.status = BoardStatus.PUBLIC;
    await board.save();

    return board;
  }
}
