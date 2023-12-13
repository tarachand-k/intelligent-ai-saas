import { PrismaClient } from "@prisma/client";

global.prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma.$connect();
}

export default global.prisma;
