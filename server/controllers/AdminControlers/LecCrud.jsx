const Lecture = require("../../models/Lecture");
const mongoose = require("mongoose");
const { json } = require("express/lib/response");

exports.LecCreate = (req, res) => {
    console.log("Inside Lecturer create");
  
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.regNo || !req.body.gender || !req.body.honorific || !req.body.password) {
        return res.status(400).json({ message: "All fields are required" });
    }
  
    Lecture.find({ regNo: req.body.regNo })
      .exec()
      .then((existLec) => {

        if (existLec.length >= 1) {
          return res.status(409).json({
            message: "Lecture Already Exist",
          });
        } else {
            console.log("Inside exist lec else");
              const createLec = new Lecture({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                regNo: req.body.regNo,
                phone: req.body.phone,
                email: req.body.email,
                password: req.body.password,
                role:"lecture",
                gender:req.body.gender,
                honorific:req.body.honorific,
                image:req.body.image,
                department:req.body.department,
                module: req.body.module,
                password: 12345,
              });
              createLec
                .save()
                .then((result) => {
                  console.log(result);
                  res.status(201).json({
                    message: "Lecture Create Successfully",
                    lecture: result,
                  });
                })
                .catch((err) => {
                  console.log("Lectre Create Error" + err);
                  res.status(500).json({
                      message:"Lectre_Create_Error: "+ err,
                  });
                });

        }
      });
  };

exports.LecGet = (req, res) => {
  console.log("inside LecGet");

  Lecture.find()
    .exec()
    .then((lecturer) => {return res.status(200).json(lecturer)
      
    })
    .catch((err) => {
      console.log("Lec_get_Error: " + err);
      res.status(500).json({
        message:"Lec_get_Error: "+ err,
      });
    });
};



exports.upadateAdminProfile = async (req, res) => {
  console.log("insidse upadateAdminProfile");
  AdminUser.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
        res.json({
          message: "Admin update failed! ",
          success: false,
        });
      } else {
        console.log("Admin upadated user!");
        res.json({
          message: "successfully Admin updated",
          success: true,
          user: data,
        });
      }
    }
  )
    .clone()
    .catch((err) => {
      console.log("Admin Update Error: " + err);
      res.status(500).json({
        vehUpdate_Error: err,
        message: err,
        success: false,
        icon: "error",
        title: "Admin update failed!",
        user: data,
      });
    });
};

exports.DeleteAdmin = async (req, res) => {
  console.log("insidse DeleteAdmin");
  console.log(req.params.id);

  await AdminUser.findByIdAndDelete(req.params.id, (error, result) => {
    if (error)
      res.status(400).json({
        message: err,
        success: false,
      });
    else console.log("Admin has been deleted!");

    res.status(200).json({
      message: "Admin has been deleted!",
      success: true,
    });
  })
    .clone()
    .catch((err) => {
      console.log("Admin Delete Error: " + err);
      res.status(500).json({
        message:"AdminDelete_Error: "+err,
        success: false,
      });
    });
};
