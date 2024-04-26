import { type SchemaTypeDefinition } from "sanity";
import careers from "./schemas/careers-job";
import blog from "./schemas/blog-sub-page";
import services from "./schemas/services";
import technologies from "./schemas/technologies";
import newServices from "./schemas/new-ServicePage";
import { logicalServices, subServiceSchema } from "./schemas/logical-services";
import testimonial from "./schemas/testimonail-schema";
import portfolioSchema from "./schemas/portfolio";
import faq from "./schemas/faq";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    services,
    blog,
    careers,
    technologies,
    newServices,
    logicalServices,
    subServiceSchema,
    testimonial,
    portfolioSchema,
    faq,
  ],
};