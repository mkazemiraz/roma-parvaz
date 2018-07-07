import { DashboardLoginModule } from './dashboard-login.module';

describe('DashboardLoginModule', () => {
  let dashboardLoginModule: DashboardLoginModule;

  beforeEach(() => {
    dashboardLoginModule = new DashboardLoginModule();
  });

  it('should create an instance', () => {
    expect(dashboardLoginModule).toBeTruthy();
  });
});
