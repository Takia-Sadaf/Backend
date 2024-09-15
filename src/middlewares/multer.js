import multer from "multer"
const storage= multer.memoryStorage({

destination: function (req, file, cb) {
    cb(null, "./backend/learn")
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname )
  }
})
export const upload = multer({
    storage,
   })