import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";

AppDataSource.initialize().then(async () => {
  const newUser = new User();
  newUser.firstName = "fu";
  newUser.lastName = "totoro";
  newUser.age = 18;
  newUser.email = "2@qq.com";
  //await AppDataSource.manager.save(newUser);

  const newPofile = new Profile();
  newPofile.bio = "fu的个人介绍";
  newPofile.user = newUser;
  await AppDataSource.manager.save(newPofile);
});
