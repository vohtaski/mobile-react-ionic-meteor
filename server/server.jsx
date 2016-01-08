if (MyData.find().count() === 0) {
  _.each(_.range(25), function(){
    MyData.insert({
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar()
    });
  });
}

if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
    username: "evgeny",
    password: "password",
    profile: {
      image: "https://avatars0.githubusercontent.com/u/158421?v=3&s=40"
    }
  })
}
