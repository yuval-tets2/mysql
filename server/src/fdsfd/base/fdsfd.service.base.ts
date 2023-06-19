/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Fdsfd } from "@prisma/client";

export class FdsfdServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FdsfdCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.FdsfdCountArgs>
  ): Promise<number> {
    return this.prisma.fdsfd.count(args);
  }

  async findMany<T extends Prisma.FdsfdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FdsfdFindManyArgs>
  ): Promise<Fdsfd[]> {
    return this.prisma.fdsfd.findMany(args);
  }
  async findOne<T extends Prisma.FdsfdFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FdsfdFindUniqueArgs>
  ): Promise<Fdsfd | null> {
    return this.prisma.fdsfd.findUnique(args);
  }
  async create<T extends Prisma.FdsfdCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FdsfdCreateArgs>
  ): Promise<Fdsfd> {
    return this.prisma.fdsfd.create<T>(args);
  }
  async update<T extends Prisma.FdsfdUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FdsfdUpdateArgs>
  ): Promise<Fdsfd> {
    return this.prisma.fdsfd.update<T>(args);
  }
  async delete<T extends Prisma.FdsfdDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FdsfdDeleteArgs>
  ): Promise<Fdsfd> {
    return this.prisma.fdsfd.delete(args);
  }
}
