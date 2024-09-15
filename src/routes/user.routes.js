import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.js";
const router=router()

router.route("/register").post(
    upload.fields([
        {
            name:'Image',
            maxCount:1
        }


    ]),
 
 registerUser)
router.route("/login").post(login)
export default router