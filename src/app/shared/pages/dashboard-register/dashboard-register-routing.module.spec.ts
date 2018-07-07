import { DashboardRegisterRoutingModule } from './dashboard-register-routing.module';

describe('DashboardRegisterRoutingModule', () => {
  let dashboardRegisterRoutingModule: DashboardRegisterRoutingModule;

  beforeEach(() => {
    dashboardRegisterRoutingModule = new DashboardRegisterRoutingModule();
  });

  it('should create an instance', () => {
    expect(dashboardRegisterRoutingModule).toBeTruthy();
  });
});
