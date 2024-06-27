/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { InvoiceItemService } from "../invoiceItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { InvoiceItemCreateInput } from "./InvoiceItemCreateInput";
import { InvoiceItem } from "./InvoiceItem";
import { InvoiceItemFindManyArgs } from "./InvoiceItemFindManyArgs";
import { InvoiceItemWhereUniqueInput } from "./InvoiceItemWhereUniqueInput";
import { InvoiceItemUpdateInput } from "./InvoiceItemUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class InvoiceItemControllerBase {
  constructor(
    protected readonly service: InvoiceItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: InvoiceItem })
  @nestAccessControl.UseRoles({
    resource: "InvoiceItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createInvoiceItem(
    @common.Body() data: InvoiceItemCreateInput
  ): Promise<InvoiceItem> {
    return await this.service.createInvoiceItem({
      data: {
        ...data,

        invoice: data.invoice
          ? {
              connect: data.invoice,
            }
          : undefined,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        invoice: {
          select: {
            id: true,
          },
        },

        price: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [InvoiceItem] })
  @ApiNestedQuery(InvoiceItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "InvoiceItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async invoiceItems(@common.Req() request: Request): Promise<InvoiceItem[]> {
    const args = plainToClass(InvoiceItemFindManyArgs, request.query);
    return this.service.invoiceItems({
      ...args,
      select: {
        createdAt: true,
        id: true,

        invoice: {
          select: {
            id: true,
          },
        },

        price: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: InvoiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "InvoiceItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async invoiceItem(
    @common.Param() params: InvoiceItemWhereUniqueInput
  ): Promise<InvoiceItem | null> {
    const result = await this.service.invoiceItem({
      where: params,
      select: {
        createdAt: true,
        id: true,

        invoice: {
          select: {
            id: true,
          },
        },

        price: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: InvoiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "InvoiceItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateInvoiceItem(
    @common.Param() params: InvoiceItemWhereUniqueInput,
    @common.Body() data: InvoiceItemUpdateInput
  ): Promise<InvoiceItem | null> {
    try {
      return await this.service.updateInvoiceItem({
        where: params,
        data: {
          ...data,

          invoice: data.invoice
            ? {
                connect: data.invoice,
              }
            : undefined,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          invoice: {
            select: {
              id: true,
            },
          },

          price: true,

          product: {
            select: {
              id: true,
            },
          },

          quantity: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: InvoiceItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "InvoiceItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteInvoiceItem(
    @common.Param() params: InvoiceItemWhereUniqueInput
  ): Promise<InvoiceItem | null> {
    try {
      return await this.service.deleteInvoiceItem({
        where: params,
        select: {
          createdAt: true,
          id: true,

          invoice: {
            select: {
              id: true,
            },
          },

          price: true,

          product: {
            select: {
              id: true,
            },
          },

          quantity: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}