export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: "gus-chat-backend",
    time: new Date().toISOString()
  });
}

