import { MerchantManagementModule } from './merchant-management.module';

describe('MerchantManagementModule', () => {
  let merchantManagementModule: MerchantManagementModule;

  beforeEach(() => {
    merchantManagementModule = new MerchantManagementModule();
  });

  it('should create an instance', () => {
    expect(merchantManagementModule).toBeTruthy();
  });
});
