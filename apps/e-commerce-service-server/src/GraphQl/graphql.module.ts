import { Module } from "@nestjs/common";
import { GraphQlService } from "./graphql.service";
import { GraphQlController } from "./graphql.controller";
import { GraphQlResolver } from "./graphql.resolver";

@Module({
  controllers: [GraphQlController],
  providers: [GraphQlService, GraphQlResolver],
  exports: [GraphQlService],
})
export class GraphQlModule {}
