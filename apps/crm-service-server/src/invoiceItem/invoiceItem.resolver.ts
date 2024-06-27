import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InvoiceItemResolverBase } from "./base/invoiceItem.resolver.base";
import { InvoiceItem } from "./base/InvoiceItem";
import { InvoiceItemService } from "./invoiceItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InvoiceItem)
export class InvoiceItemResolver extends InvoiceItemResolverBase {
  constructor(
    protected readonly service: InvoiceItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
