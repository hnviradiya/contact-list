import { Test, TestingModule } from '@nestjs/testing';
import { ContactListController } from './contact-list.controller';

describe('ContactListController', () => {
  let controller: ContactListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactListController],
    }).compile();

    controller = module.get<ContactListController>(ContactListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
