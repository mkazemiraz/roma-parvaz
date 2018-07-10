import { ViewMerchantModule } from './view-merchant.module';

describe('ViewMerchantModule', () => {
  let viewMerchantModule: ViewMerchantModule;

  beforeEach(() => {
    viewMerchantModule = new ViewMerchantModule();
  });

  it('should create an instance', () => {
    expect(viewMerchantModule).toBeTruthy();
  });
});
