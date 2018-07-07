import { DashboardLoginRoutingModule } from './dashboard-login-routing.module';

describe('DashboardLoginRoutingModule', () => {
  let dashboardLoginRoutingModule: DashboardLoginRoutingModule;

  beforeEach(() => {
    dashboardLoginRoutingModule = new DashboardLoginRoutingModule();
  });

  it('should create an instance', () => {
    expect(dashboardLoginRoutingModule).toBeTruthy();
  });
});
