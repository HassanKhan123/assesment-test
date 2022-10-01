// * TODO: Implement function for updating user's step data in store
// * TODO: Function for getting user's step data may need some adjustments
module.exports = function stepService(store) {
  const service = {};

  service.get = (username) => {
    const user = store[username];

    console.log("user========", typeof user);
    if (typeof user === "function") return undefined;

    return user ? user : undefined;
  };

  service.add = (username, ts, cumulativeSteps) => {
    const user = store[username];

    console.log(user, "==========");

    if (!user) {
      store[username] = { ts, cumulativeSteps };
    } else {
      user.cumulativeSteps = user.cumulativeSteps + cumulativeSteps;
    }

    return store;
    // Assume that `store` is initially an empty object {}. An example `store` is:
    // {
    //   jenna: {
    //     ts: 1503256778463,
    //     cumulativeSteps: 12323,
    //   },
    //   james: {
    //     ts: 1503256824767,
    //     cumulativeSteps: 587,
    //   },
    // }
  };

  service.update = (cumulativeSteps, ts, username) => {
    store[username] = { ts, cumulativeSteps };
    return store;
  };

  return service;
};
