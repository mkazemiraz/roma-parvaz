import { ViewMerchantRoutingModule } from './view-merchant-routing.module';

describe('ViewMerchantRoutingModule', () => {
  let viewMerchantRoutingModule: ViewMerchantRoutingModule;

  beforeEach(() => {
    viewMerchantRoutingModule = new ViewMerchantRoutingModule();
  });

  it('should create an instance', () => {
    expect(viewMerchantRoutingModule).toBeTruthy();
  });
});
