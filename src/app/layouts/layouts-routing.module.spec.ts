import { LayoutsRoutingModule } from './layouts-routing.module';

describe('LayoutsRoutingModule', () => {
  let layoutsRoutingModule: LayoutsRoutingModule;

  beforeEach(() => {
    layoutsRoutingModule = new LayoutsRoutingModule();
  });

  it('should create an instance', () => {
    expect(layoutsRoutingModule).toBeTruthy();
  });
});
