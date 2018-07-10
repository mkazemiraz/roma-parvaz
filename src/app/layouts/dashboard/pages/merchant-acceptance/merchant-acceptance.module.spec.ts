import { MerchantAcceptanceModule } from './merchant-acceptance.module';

describe('MerchantAcceptanceModule', () => {
  let merchantAcceptanceModule: MerchantAcceptanceModule;

  beforeEach(() => {
    merchantAcceptanceModule = new MerchantAcceptanceModule();
  });

  it('should create an instance', () => {
    expect(merchantAcceptanceModule).toBeTruthy();
  });
});
