// import express = require("express");
// const { createNote, listNotes, deleteNotes,listNote } = require("./noteController");
// const { multer, storage } = require("../middleware/multerMiddleware");

// const  noteRoutes = express.Router();
// // attach multer middleware if uploading a file named 'file'
// const upload= multer({storage:storage})
// noteRoutes.route("/").post(upload.single('file'), createNote).get(listNotes)

// noteRoutes.route("/:id").delete(deleteNotes).get(listNote)






// export = noteRoutes

import express = require("express");

const {
  createNote,
  listNotes,
  deleteNotes,
  listNote,
} = require("./noteController");

import upload = require("../middleware/multerMiddleware");

const noteRoutes = express.Router();

/* ---------------- CREATE + GET ALL ---------------- */
noteRoutes
  .route("/")
  .post(upload.single("file"), createNote)
  .get(listNotes);

/* ---------------- SINGLE NOTE ---------------- */
noteRoutes
  .route("/:id")
  .get(listNote)
  .delete(deleteNotes);

export = noteRoutes;