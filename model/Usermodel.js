const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Usermodel = new Schema(
  {
    fristName: {
      type: String,
      require: true,
      trim: true,
      text: true,
    },
    lastName: {
      type: String,
      require: true,
      trim: true,
      text: true,
    },
    userName: {
      type: String,
      require: true,
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    coverphoto: {
      type: String,
      trim: true,
    },
    brithDay: {
      type: Number,
      require: true,
      trim: true,
    },
    brithMonth: {
      type: Number,
      require: true,
      trim: true,
    },
    brithYear: {
      type: Number,
      require: true,
      trim: true,
    },
    gender: {
      type: String,
      require: true,
    },
    verfied: {
      type: Boolean,
      default: false,
    },
    friend: {
      type: mongoose.Types.ObjectId, // another way let {ObjectId} = mongoose.Schema
      ref: "User",
    },
    follwing: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    follower: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    friendRequest: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    searchHistory: [
      {
        user: {
          type: mongoose.Types.ObjectId,
          ref: "User",
          require: true,
        },
        searchTime: {
          type: mongoose.Types.ObjectId,
          require: true,
        },
      },
    ],

    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      workplace: {
        type: String,
      },
      callage: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relation: {
        type: String,
        enum: ["single", "in a relationship", "divorce", "married"],
      },
      instragram: {
        type: String,
      },
      github: {
        type: String,
      },
      savePost: [
        {
          post: {
            type: mongoose.Types.ObjectId,
            ref: "Post",
          },
          saveTime: {
            type: Date,
            require: true,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", Usermodel);
