
import { PrismaClient } from "../generated/prisma"; // Adjust path based on your file location

//const db = new PrismaClient();

//export default db; // ✅ This is important
//export  const db = new PrismaClient();
//import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

db.snippet.create({
  data: {
    title:'Title!',
    code:'const abc = () => {}'
  }
})