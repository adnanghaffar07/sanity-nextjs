import { type SchemaTypeDefinition } from "sanity";
import careers from "./schemas/careers-job";
import technologies from "./schemas/technologies";
import {
  logicalServices,
  subServiceSchema,
  techLogos,
} from "./schemas/logical-services";
import partnershipSchema from "./schemas/partnership";
import serviceSummary from "./schemas/service-summary";
import valueBlueprints from "./schemas/value-bueprints";
import valueDiscoveryProcessPage from "./schemas/value-process";
import lifeAtCa from "./schemas/life-at-ca";
import news from "./schemas/news";
import user from "./schemas/user";
import paymentPlan from "./schemas/payment-plan";
import table from "./schemas/table";
import youtubeEmbed from "./schemas/youtubeEmbed";
import blockContent from "./schemas/blockContent";
import resume from "./schemas/resume";
import terms from "./schemas/terms";
import visitor from "./schemas/visitor";
import { servicePageTypes } from "./schemas/service-page";
import { contentTypes } from "./schemas/content-types";
import { formSubmission } from "./schemas/form-submission";
import { homePage } from "./schemas/home-page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    terms,
    careers,
    technologies,
    logicalServices,
    subServiceSchema,
    news,
    lifeAtCa,
    techLogos,
    partnershipSchema,
    serviceSummary,
    valueBlueprints,
    valueDiscoveryProcessPage,
    table,
    user,
    paymentPlan, youtubeEmbed, blockContent,
    resume, visitor,
    // New section-based service pages (legacy services above are unchanged)
    ...servicePageTypes,
    // Blog Post, Case Study, Value Blueprint and the Case Study Order
    ...contentTypes,
    // Home page content (testimonials, FAQs)
    homePage,
    // Every website form submission (see lib/forms)
    formSubmission,
  ],
};
