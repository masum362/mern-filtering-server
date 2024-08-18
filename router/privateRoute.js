import jwt from "jsonwebtoken";

const verify = (req, res, next) => {
  console.log("called verify");
  const token = req.headers?.authorization?.split(" ")[1] || "";
  
  //   console.log(req.headers)
  //   console.log({ token });
  try {
    if (!token) res.status(403).json({ message: "Invalid token" });
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) res.status(403).json({ message: error.message });
      req.userId = decoded.id;
      // console.log(decoded);
      next();
    });
  } catch (error) {
    console.log(error);
  }
};

export { verify };
