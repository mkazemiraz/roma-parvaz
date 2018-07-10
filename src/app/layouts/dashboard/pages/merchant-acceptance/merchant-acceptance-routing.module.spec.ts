import { MerchantAcceptanceRoutingModule } from './merchant-acceptance-routing.module';

describe('MerchantAcceptanceRoutingModule', () => {
  let merchantAcceptanceRoutingModule: MerchantAcceptanceRoutingModule;

  beforeEach(() => {
    merchantAcceptanceRoutingModule = new MerchantAcceptanceRoutingModule();
  });

  it('should create an instance', () => {
    expect(merchantAcceptanceRoutingModule).toBeTruthy();
  });
});
