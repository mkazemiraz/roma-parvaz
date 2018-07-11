import { ViewRoutingModule } from './view-routing.module';

describe('ViewRoutingModule', () => {
  let viewRoutingModule: ViewRoutingModule;

  beforeEach(() => {
    viewRoutingModule = new ViewRoutingModule();
  });

  it('should create an instance', () => {
    expect(viewRoutingModule).toBeTruthy();
  });
});
