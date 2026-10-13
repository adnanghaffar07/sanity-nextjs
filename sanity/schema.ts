import { type SchemaTypeDefinition } from "sanity";
import careers from "./schemas/careers-job";
import technologies from "./schemas/technologies";
import {
  logicalServices,
  subServiceSchema,
  techLogos,
} from "./schemas/logical-services";
import testimonial from "./schemas/testimonail-schema";
import faq from "./schemas/faq";
import partnershipSchema from "./schemas/partnership";
import serviceSummary from "./schemas/service-summary";
import valueBlueprints from "./schemas/value-bueprints";
import valueDiscoveryProcessPage from "./schemas/value-process";
import lifeAtCa from "./schemas/life-at-ca";
import news from "./schemas/news";
import calendlyMeeting from "./schemas/calendly-meeting";
import testing from "./schemas/testing";
import newsLetter from "./schemas/news-letter";
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

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    terms,
    careers,
    technologies,
    logicalServices,
    subServiceSchema,
    testimonial,
    news,
    faq,
    lifeAtCa,
    techLogos,
    partnershipSchema,
    serviceSummary,
    valueBlueprints,
    valueDiscoveryProcessPage,
    table,
    user,
    newsLetter,
    testing,
    paymentPlan, youtubeEmbed, blockContent,
    calendlyMeeting, resume, visitor,
    // New section-based service pages (legacy services above are unchanged)
    ...servicePageTypes,
    // Blog Post, Case Study, Value Blueprint and the Case Study Order
    ...contentTypes,
    // Every website form submission (see lib/forms)
    formSubmission,
  ],
};
