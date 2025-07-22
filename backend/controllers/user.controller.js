import User from "../models/user.model.js";

export const getuserForsidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const users = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );

    res.status(200).json(users);

  } catch (error) {
    console.error("Error in getuserForsidebar:", error.message);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
