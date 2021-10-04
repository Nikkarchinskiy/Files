const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const logger = (updatedUsers) => console.table(updatedUsers);

function toggleUserState(allUsers, userName) {
  return new Promise((resolve, reject) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedUsers);
  });
}

// toggleUserState(users, "Ajax").then(logger);
toggleUserState(users, "Lux").then(logger);
// toggleUserState(users, "Lux").then(logger);
toggleUserState(users, "Mango").then(logger);
