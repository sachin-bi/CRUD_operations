
const User = require("../models/user");


async function handelGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    console.log(" -Get all uses done");
    return res.json(allDbUsers);
}


async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.userId);
    if (!user) {
        return res.status(404).json({ error: "user not found" })
    }
    console.log(" -get id done");
    return res.json(user);
}


async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.userId, { lastName: "Changed/see-code" });
    console.log(" -update done");
    return res.json({ status: "Update Done" });

}


async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.userId);
    console.log(" -delete id done");
    return res.json({ status: "delete Done" });
}


async function handleCreateNewUser(req, res) {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "all feilds are reqired" });
    }

    const result1 = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_Title,
    });
    console.log(" -post_done",);
    
    return res.status(201).json({
        msg: "POST success", id: result1._id,
    });
}


module.exports = {
    handelGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
};