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
import news from "./schemas/news";
import contactForm from "./schemas/contactForm";
import calendlyMeeting from "./schemas/calendly-meeting";
import testing from "./schemas/testing";
import newsLetter from "./schemas/news-letter";
import user from "./schemas/user";
import paymentProposal from "./schemas/payment-proposal";
import paymentPlan from "./schemas/payment-plan";
import table from "./schemas/table";
import youtubeEmbed from "./schemas/youtubeEmbed";
import blockContent from "./schemas/blockContent";
import fbMetaLeads from "./schemas/fb-meta-leads";
import resume from "./schemas/resume";
import terms from "./schemas/terms";
import mobileQuoteLead from "./schemas/mobile-quote-lead";
import mobileServiceHeroForm from "./schemas/mobileServiceHeroForm";
import visitor from "./schemas/visitor";
import { servicePageTypes } from "./schemas/service-page";
import { contentTypes } from "./schemas/content-types";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    fbMetaLeads,
    terms,
    blog,
    careers,
    technologies,
    logicalServices,
    subServiceSchema,
    testimonial,
    // Old combined type, kept unchanged as the legacy source of the
    // documents copied into Blog Post / Case Study / Value Blueprint.
    { ...portfolioSchema, title: "Old: Blogs, Case Studies & Blueprints (legacy)" },
    news,
    faq,
    lifeAtCa,
    techLogos,
    partnershipSchema,
    serviceSummary,
    valueBlueprints,
    popup,
    valueDiscoveryProcessPage,
    table,
    user,
    newsLetter,
    paymentProposal,
    testing,
    paymentPlan, youtubeEmbed, blockContent, contactForm,
    calendlyMeeting, resume, mobileQuoteLead, mobileServiceHeroForm, visitor,
    // New section-based service pages (legacy services above are unchanged)
    ...servicePageTypes,
    // Blog Post, Case Study, Value Blueprint (split out of the legacy portfolio type)
    ...contentTypes,
  ],
};
