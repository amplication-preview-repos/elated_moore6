import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GraphQlService } from "./graphql.service";

@swagger.ApiTags("graphQls")
@common.Controller("graphQls")
export class GraphQlController {
  constructor(protected readonly service: GraphQlService) {}
}
