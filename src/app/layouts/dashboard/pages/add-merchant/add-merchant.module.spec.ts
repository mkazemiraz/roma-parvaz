import { AddMerchantModule } from './add-merchant.module';

describe('AddMerchantModule', () => {
  let addMerchantModule: AddMerchantModule;

  beforeEach(() => {
    addMerchantModule = new AddMerchantModule();
  });

  it('should create an instance', () => {
    expect(addMerchantModule).toBeTruthy();
  });
});
