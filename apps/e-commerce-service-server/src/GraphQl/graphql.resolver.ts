import * as graphql from "@nestjs/graphql";
import { GraphQlService } from "./graphql.service";

export class GraphQlResolver {
  constructor(protected readonly service: GraphQlService) {}
}
