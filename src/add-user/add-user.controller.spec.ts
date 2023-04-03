import { Test, TestingModule } from '@nestjs/testing';
import { AddUserController } from './add-user.controller';

describe('AddUserController', () => {
  let controller: AddUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddUserController],
    }).compile();

    controller = module.get<AddUserController>(AddUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
