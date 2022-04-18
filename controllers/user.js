const jsonfile = require("jsonfile");
const path = require("path");
const filePath = path.join(__dirname, "../db/users.json");

exports.getUsers = (req, res) => {
    const users = jsonfile.readFileSync(filePath);
    res.json(users);
};

exports.postLogin = (req, res, next) => {
    const { username, password } = req.body;
    const users = jsonfile.readFileSync(filePath);
    const user = users.filter(
        (u) => u.username === username && u.password === password
    );

    if (user.length > 0) {
        req.user = users[0];
        return next();
    }else {
        const err = new Error("Username and Password wrong! check your username and password!");
        err.status = 401;
        return next(err);
    }
};

exports.loginSuccess = (req, res) => {
    res.json({ status: "login Success", data: req.user });
};

exports.postRegister = (req, res, next) => {
    const { username, password, full_name } = req.body;
    const users = jsonfile.readFileSync(filePath);
    const lastUser = users[users.length - 1].id;
    const newUser = lastUser + 1;

    const user = users.filter((u) => u.username === username);
    if (user.length > 0) {
        const err = new Error("Username is available, pick another!");
        return next(err);
    } else {
        const person = {
            id: newUser,
            username: username,
            password: password,
            full_name: full_name, 
        };
        users.push(person);
        jsonfile.writeFileSync(filePath, users);
        req.newUser = person;

        return next();
    }
};

exports.registerSuccess = (req, res) => {
    res.json({ status: "register success", data: req.newUser });
};

exports.getLogin = (req, res) => {
    res.render("login");
};

exports.getRegister = (req, res) => {
    res.render("register");
};

