import { Test, TestingModule } from '@nestjs/testing';
import { AirportcounterService } from './airportcounter.service';

describe('AirportcounterService', () => {
  let service: AirportcounterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirportcounterService],
    }).compile();

    service = module.get<AirportcounterService>(AirportcounterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
