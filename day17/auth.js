import jwt from "jsonwebtoken";
export function signUser(data) {
  return jwt.sign(data, "SECRET");
}
export function verify(req,res,next){
  try{
    const token = req.headers.authorization.split(" ")[1];
    req.user = jwt.verify(token, "SECRET");
    next();
  } catch {
    res.status(401).json({message:"Unauthorized"});
  }
}
