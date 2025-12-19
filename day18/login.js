import { signUser } from "../day17/auth.js";

export function login(req, res) {
  const { email, password } = req.body;
  if(email==="admin@gmail.com" && password==="admin123"){
    return res.json({ token: signUser({ email }) });
  }
  res.status(401).json({ message:"Invalid credentials" });
}
