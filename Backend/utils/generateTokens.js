import jwt from "jsonwebtoken";
const generateToken = (id) => {
   const secret="panther"
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
// console.log(process.env.JWT_SECRET);
export default generateToken;
