const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ success:false });

  try {
    const decoded = jwt.verify(token, "dev-secret");
    req.user = decoded;
    next();
  } catch {
    return res.status(403).json({ success:false });
  }
};