import { EditMerchantModule } from './edit-merchant.module';

describe('EditMerchantModule', () => {
  let editMerchantModule: EditMerchantModule;

  beforeEach(() => {
    editMerchantModule = new EditMerchantModule();
  });

  it('should create an instance', () => {
    expect(editMerchantModule).toBeTruthy();
  });
});
