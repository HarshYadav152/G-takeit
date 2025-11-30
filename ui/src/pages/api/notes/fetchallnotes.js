// src/pages/api/notes/fetchallnote.js
import dbConnect from "../../../utils/db";
import Notes from "../../../models/Notes";
import { verifyToken } from "../../../utils/auth";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  try {
    await dbConnect();
    
    // Verify authentication
    const user = await verifyToken(req);
    if (!user) {
      return res.status(401).json({ error: "Please authenticate with valid token" });
    }
    
    // Fetch notes for the user
    const notes = await Notes.find({ user: user.id });
    res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}