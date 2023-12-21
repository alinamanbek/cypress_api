import { BaseController } from "../api-core/Controllers/BaseController";

describe('Login Api Suite', () => {
  const baseController = new BaseController();
  let urlencoded;  

  before(async () => {
     
    urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "password");
    urlencoded.append("username", "Admin");
    urlencoded.append("password", "Admin@Navi");

    // Call authorization method with the initialized urlencoded
    await baseController.authorization(urlencoded);
  });

  it('Authorized to page and client', async () => {
    const notifications = await baseController.getNotificationList();
   cy.log(notifications);
  });
});
