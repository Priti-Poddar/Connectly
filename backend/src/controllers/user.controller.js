import { User } from "../models/user.model.js";
import { Meeting } from "../models/meeting.model.js";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import crypto from "crypto";


const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({
            message: "Username and password are required",
        });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).json({
                message: "User not found",
            });
        }

        if(await bcrypt.compare(password, user.password)) {
            const token = crypto.randomBytes(20).toString("hex"); //store token in local storage
            user.token = token;
            await user.save();
            return res.status(httpStatus.OK).json({ token: token });
        } else {
            return res.status(httpStatus.UNAUTHORIZED).json({
                message: "Invalid username or password",
            });
        }

    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: `Something went wrong: ${e}`,
        });
    }
}

const register = async (req, res) => {
    
    const { name, username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res
              .status(httpStatus.FOUND)
              .json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name: name,
            username: username,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(httpStatus.CREATED).json({
            message: "User created successfully"
        });

    } catch(e) {
        return res.json({message: `something went wrong: ${e}`});
    }

}

const getUserHistory = async (req, res) => {
  const { token } = req.query;

  try {
    const user = await User.findOne({ token: token });
      const meetings = await Meeting.find({ userId: user.username });

    res.json(meetings);
  } catch (e) {
    res.json({ message: `Something went wrong ${e}` });
  }
}

const addToHistory = async (req, res) => {
    const { token, meetingCode } = req.body;
    // console.log(token, meetingCode);

    try {
        const user = await User.findOne({ token: token });

        const newMeeting = new Meeting({
          userId: user.username,
          meetingCode: meetingCode,
        });

        await newMeeting.save();
        console.log("Added to history");
        

        res.status(httpStatus.CREATED).json({ message: "Added code to history"})
    } catch (e) {
        res.json({ message: `Something went wrong ${e}` });
    }
}

const deleteHistory = async (req, res) => {
    try {
        const { meetingCode } = req.body;
        console.log(meetingCode);
        let deletMeeting = await Meeting.findOneAndDelete({ meetingCode: meetingCode });
        console.log(deletMeeting);
        res
          .status(httpStatus.OK)
          .json({ message: "Deleted from meeting history" });
        
        
    } catch (e) {
        console.log(e);
        
    }
  
}

export { login, register, getUserHistory, addToHistory, deleteHistory };