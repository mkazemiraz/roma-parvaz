import { EditMerchantRoutingModule } from './edit-merchant-routing.module';

describe('EditMerchantRoutingModule', () => {
  let editMerchantRoutingModule: EditMerchantRoutingModule;

  beforeEach(() => {
    editMerchantRoutingModule = new EditMerchantRoutingModule();
  });

  it('should create an instance', () => {
    expect(editMerchantRoutingModule).toBeTruthy();
  });
});
