import { Module } from "@nestjs/common";
import { FdsfdModuleBase } from "./base/fdsfd.module.base";
import { FdsfdService } from "./fdsfd.service";
import { FdsfdController } from "./fdsfd.controller";
import { FdsfdResolver } from "./fdsfd.resolver";

@Module({
  imports: [FdsfdModuleBase],
  controllers: [FdsfdController],
  providers: [FdsfdService, FdsfdResolver],
  exports: [FdsfdService],
})
export class FdsfdModule {}
