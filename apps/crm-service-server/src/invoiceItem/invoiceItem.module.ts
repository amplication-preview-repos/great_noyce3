import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InvoiceItemModuleBase } from "./base/invoiceItem.module.base";
import { InvoiceItemService } from "./invoiceItem.service";
import { InvoiceItemController } from "./invoiceItem.controller";
import { InvoiceItemResolver } from "./invoiceItem.resolver";

@Module({
  imports: [InvoiceItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [InvoiceItemController],
  providers: [InvoiceItemService, InvoiceItemResolver],
  exports: [InvoiceItemService],
})
export class InvoiceItemModule {}
