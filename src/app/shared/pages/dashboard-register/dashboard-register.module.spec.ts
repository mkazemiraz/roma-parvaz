import { DashboardRegisterModule } from './dashboard-register.module';

describe('DashboardRegisterModule', () => {
  let dashboardRegisterModule: DashboardRegisterModule;

  beforeEach(() => {
    dashboardRegisterModule = new DashboardRegisterModule();
  });

  it('should create an instance', () => {
    expect(dashboardRegisterModule).toBeTruthy();
  });
});
