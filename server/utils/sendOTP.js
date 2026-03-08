import nodemailer from "nodemailer";

export const sendOTP = async(email,otp)=>{

const transporter = nodemailer.createTransport({
service:"gmail",
auth:{
user:process.env.EMAIL,
pass:process.env.EMAIL_PASS
}
});

await transporter.sendMail({
from:process.env.EMAIL,
to:email,
subject:"Unify OTP",
text:`Your OTP is ${otp}`
});

};