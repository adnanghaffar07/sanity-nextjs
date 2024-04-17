import { type SchemaTypeDefinition } from "sanity";
import careers from "./schemas/careers-job";
import blog from "./schemas/blog-sub-page";
import services from "./schemas/services";
import technologies from "./schemas/technologies";
import testimonial from "./schemas/testimonail-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, blog, careers, technologies, testimonial],
};
