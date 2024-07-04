import { Request } from "express";
import { Session, SessionData } from "express-session";

interface CustomSession extends SessionData {
  cartId?: string;
}

export interface CustomRequest extends Request {
  user?: { id: string };
  session: Session & Partial<CustomSession>; //TODO:
}
