import { AddRoutingModule } from './add-routing.module';

describe('AddRoutingModule', () => {
  let addRoutingModule: AddRoutingModule;

  beforeEach(() => {
    addRoutingModule = new AddRoutingModule();
  });

  it('should create an instance', () => {
    expect(addRoutingModule).toBeTruthy();
  });
});
