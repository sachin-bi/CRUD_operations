
const express = require("express");
const{ 

    handelGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,

} = require("../controllers/user");



const router = express.Router();

router.route("/")
    .get(handelGetAllUsers)
    .post(handleCreateNewUser);

router
    .route("/:userId")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;


// OLD-CODES
// router.get("/", async(req, res) => {
//     const allDbUsers = await User.find({});
//     // console.log(req.headers);   //display header in terminal
//     res.setHeader("X-myName", "Sachin Ray"); //Setting custom response headers 
//     return res.json(allDbUsers);     //give res as json file
// }); 

// // Routes
// router
//     .route("/:userId")
//     .get(async (req, res) => {
//         const user = await allDbUsers.findById(req.params.userId);
//         if (!user) {
//             return res.status(404).json({ error: "user not found" })
//         }
//         console.log("get by id done");
//         return res.json(user);

//         // const id = Number(req.params.userId);
//         // const user = users.find((user) => user.id === id);

//     })
//     .delete(async (req, res) => {
//         await User.findByIdAndDelete(req.params.userId);
//         return res.json({ status: "delete Done" })

//         // // del user with id
//         // const id = Number(req.params.userId);
//         // const userToDel = users.find((user) => user.id === id);
//         // const index = users.indexOf(userToDel);
//         // if (!userToDel) {
//         //     return res.json({ status: " Not Foundd id-", id, message: "Not Present" });
//         // } else {
//         //     users.splice(index, 1);
//         //     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//         //         res.status(204).json({
//         //             status: "Success",
//         //             data: null,
//         //             message: "Deleted Successfully ",
//         //         });
//         //         console.log("Deleted req made of id ", id);
//         //     });   // return res.json({ status: "Pending Delete res-" });  
//         // }
//     })

//     .patch(async (req, res) => {

//         await User.findByIdAndUpdate(req.params.userId, { lastName: "Changed" });
//         return res.json({ status: "Update Done" })

//         // //edit user with id
//         // const id = Number(req.params.userId);
//         // const userToUpdate = users.find(el => el.id === id);
//         // //if not
//         // if (!userToUpdate) {
//         //     return res.status(404).json({
//         //         status: "Failed",
//         //         message: id + " id not found"
//         //     })
//         // }
//         // const userIndex = users.indexOf(userToUpdate);
//         // Object.assign(userToUpdate, req.body);
//         // users[userIndex] = userToUpdate;

//         // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//         //     res.status(200).json({
//         //         status: "Success",
//         //         message: "Updated Successfully ",
//         //         data: {
//         //             userToUpdate
//         //         },
//         //     });
//         //     console.log("Update made of id ", id);
//         // });
//     });


// router.post("/", async (req, res) => {
//     //Create new user
//     const body = req.body;
//     if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
//         return res.status(400).json({ msg: "all feilds are reqired" });
//     }

//     const result1 = await User.create({
//         firstName: body.first_name,
//         lastName: body.last_name,
//         email: body.email,
//         gender: body.gender,
//         job_title: body.job_Title,
//     });
//     console.log("post_done",);
//     return res.status(201).json({
//         msg: "success",
//         result1
//     });
//     // users.push({ id: users.length + 1, ...body });
//     // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     //     return res.status(201).json({
//     //         status: "Success-", id: users.length,
//     //         data: {
//     //             body
//     //         }
//     //     });
//     // });
//     // console.log("Body",body);
// });

// // x-coustumHeader


// // router.get("/users", async(req, res) => {
// //     const allDbUsers = await User.find({});
// //     const html = `
// //         <ul>
// //         ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
// //         </ul>
// //     `;
// //     res.status(200).send(html);
// //     console.log("get (user details) req done");
// // });

// module.exports = router;
