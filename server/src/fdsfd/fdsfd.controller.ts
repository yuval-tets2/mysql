import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FdsfdService } from "./fdsfd.service";
import { FdsfdControllerBase } from "./base/fdsfd.controller.base";

@swagger.ApiTags("fdsfds")
@common.Controller("fdsfds")
export class FdsfdController extends FdsfdControllerBase {
  constructor(
    protected readonly service: FdsfdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
