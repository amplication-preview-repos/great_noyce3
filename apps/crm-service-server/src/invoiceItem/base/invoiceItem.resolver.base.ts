/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { InvoiceItem } from "./InvoiceItem";
import { InvoiceItemCountArgs } from "./InvoiceItemCountArgs";
import { InvoiceItemFindManyArgs } from "./InvoiceItemFindManyArgs";
import { InvoiceItemFindUniqueArgs } from "./InvoiceItemFindUniqueArgs";
import { CreateInvoiceItemArgs } from "./CreateInvoiceItemArgs";
import { UpdateInvoiceItemArgs } from "./UpdateInvoiceItemArgs";
import { DeleteInvoiceItemArgs } from "./DeleteInvoiceItemArgs";
import { Invoice } from "../../invoice/base/Invoice";
import { Product } from "../../product/base/Product";
import { InvoiceItemService } from "../invoiceItem.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InvoiceItem)
export class InvoiceItemResolverBase {
  constructor(
    protected readonly service: InvoiceItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "InvoiceItem",
    action: "read",
    possession: "any",
  })
  async _invoiceItemsMeta(
    @graphql.Args() args: InvoiceItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [InvoiceItem])
  @nestAccessControl.UseRoles({
    resource: "InvoiceItem",
    action: "read",
    possession: "any",
  })
  async invoiceItems(
    @graphql.Args() args: InvoiceItemFindManyArgs
  ): Promise<InvoiceItem[]> {
    return this.service.invoiceItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => InvoiceItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InvoiceItem",
    action: "read",
    possession: "own",
  })
  async invoiceItem(
    @graphql.Args() args: InvoiceItemFindUniqueArgs
  ): Promise<InvoiceItem | null> {
    const result = await this.service.invoiceItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InvoiceItem)
  @nestAccessControl.UseRoles({
    resource: "InvoiceItem",
    action: "create",
    possession: "any",
  })
  async createInvoiceItem(
    @graphql.Args() args: CreateInvoiceItemArgs
  ): Promise<InvoiceItem> {
    return await this.service.createInvoiceItem({
      ...args,
      data: {
        ...args.data,

        invoice: args.data.invoice
          ? {
              connect: args.data.invoice,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InvoiceItem)
  @nestAccessControl.UseRoles({
    resource: "InvoiceItem",
    action: "update",
    possession: "any",
  })
  async updateInvoiceItem(
    @graphql.Args() args: UpdateInvoiceItemArgs
  ): Promise<InvoiceItem | null> {
    try {
      return await this.service.updateInvoiceItem({
        ...args,
        data: {
          ...args.data,

          invoice: args.data.invoice
            ? {
                connect: args.data.invoice,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => InvoiceItem)
  @nestAccessControl.UseRoles({
    resource: "InvoiceItem",
    action: "delete",
    possession: "any",
  })
  async deleteInvoiceItem(
    @graphql.Args() args: DeleteInvoiceItemArgs
  ): Promise<InvoiceItem | null> {
    try {
      return await this.service.deleteInvoiceItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Invoice, {
    nullable: true,
    name: "invoice",
  })
  @nestAccessControl.UseRoles({
    resource: "Invoice",
    action: "read",
    possession: "any",
  })
  async getInvoice(
    @graphql.Parent() parent: InvoiceItem
  ): Promise<Invoice | null> {
    const result = await this.service.getInvoice(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async getProduct(
    @graphql.Parent() parent: InvoiceItem
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
