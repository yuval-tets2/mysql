import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FdsfdServiceBase } from "./base/fdsfd.service.base";

@Injectable()
export class FdsfdService extends FdsfdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
