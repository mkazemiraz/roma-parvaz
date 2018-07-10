import { AddMerchantRoutingModule } from './add-merchant-routing.module';

describe('AddMerchantRoutingModule', () => {
  let addMerchantRoutingModule: AddMerchantRoutingModule;

  beforeEach(() => {
    addMerchantRoutingModule = new AddMerchantRoutingModule();
  });

  it('should create an instance', () => {
    expect(addMerchantRoutingModule).toBeTruthy();
  });
});
