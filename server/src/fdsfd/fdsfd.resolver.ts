import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FdsfdResolverBase } from "./base/fdsfd.resolver.base";
import { Fdsfd } from "./base/Fdsfd";
import { FdsfdService } from "./fdsfd.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Fdsfd)
export class FdsfdResolver extends FdsfdResolverBase {
  constructor(
    protected readonly service: FdsfdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
