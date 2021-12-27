import { Test, TestingModule } from '@nestjs/testing';
import { AirportcounterController } from './airportcounter.controller';

describe('AirportcounterController', () => {
  let controller: AirportcounterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirportcounterController],
    }).compile();

    controller = module.get<AirportcounterController>(AirportcounterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
