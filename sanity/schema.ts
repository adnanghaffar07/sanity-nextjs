import { type SchemaTypeDefinition } from "sanity";
import careers from "./schemas/careers-job";
import blog from "./schemas/blog-sub-page";
import technologies from "./schemas/technologies";

import {
  logicalServices,
  subServiceSchema,
  techLogos,
} from "./schemas/logical-services";
import testimonial from "./schemas/testimonail-schema";
import portfolioSchema from "./schemas/portfolio";
import faq from "./schemas/faq";
import partnershipSchema from "./schemas/partnership";
import serviceSummary from "./schemas/service-summary";
import valueBlueprints from "./schemas/value-bueprints";
import popup from "./schemas/popup";
import valueDiscoveryProcessPage from "./schemas/value-process";
import lifeAtCa from "./schemas/life-at-ca";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blog,
    careers,
    technologies,
    logicalServices,
    subServiceSchema,
    testimonial,
    portfolioSchema,
    faq,
    lifeAtCa,
    techLogos,
    partnershipSchema,
    serviceSummary,
    valueBlueprints,
    popup,
    valueDiscoveryProcessPage
  ],
};
