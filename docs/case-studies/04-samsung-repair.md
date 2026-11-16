# 04 — Samsung Repair

## Making a complex repair network feel simple

**Project:** Samsung UK / Ireland Support Repair  
**Role:** Frontend developer, one of three primary developers  
**Context:** Established production application; iterative enhancement and maintenance  
**Technologies and services:** JavaScript, PHP middleware, AWS-hosted services, Qudini, IGSPN, LikeWise, Sprinklr

### Overview

Samsung's repair experience connected customers to troubleshooting, repair options, authorised service locations and appointment bookings. The application depended on an existing PHP and JavaScript implementation and multiple external systems.

As one of three primary developers, I contributed to extending and maintaining that established experience, working with external service integrations and validating booking flows as new stores became available.

### The challenge

The work was not a greenfield rebuild. Changes had to fit into established customer journeys, vendor integrations and booking processes. A frontend change could affect service selection, session state, availability or downstream service-request creation.

### Store availability and booking validation

Stores were managed through Qudini. When additional stores became available, I checked API accessibility and booking readiness, signed into the Qudini management platform to inspect configuration, and QA-tested bookings with test stores before validating real stores.

The booking journey involved store data, slot lookup and reservation through Qudini, service request creation through Samsung's IGSPN integration, and final booking confirmation. These were existing services that the team maintained and extended, not systems I claim to have built from scratch.

### A focused feature: battery replacement

A March 2025 functional analysis describes a dedicated battery-replacement journey for eligible UK and Ireland smartphone customers. It required recognising a LikeWise troubleshooting event, preserving a battery-replacement flag in session state, adapting existing booking steps, and sending the correct service reason through Qudini.

The document records my involvement reviewing the analysis and following up on LikeWise event stability and Qudini booking information. It documents requirements and dependencies; it does not, by itself, prove every proposed change shipped.

### Working across service boundaries

The wider system used PHP middleware and external APIs, including Qudini for appointments and IGSPN for Samsung service requests. A separate technical assessment identifies possible Qudini API migration and security improvements; those should be presented as assessed work rather than completed implementation unless confirmed.

Sprinklr provided customer assistance within the wider support experience.

### What this project demonstrates

Engineering in a legacy production environment means understanding existing contracts, coordinating across services, testing beyond the browser, and making incremental changes without disrupting customer journeys. My contribution was part of a three-developer team rather than sole ownership of the platform.

### Visual direction

- Lead with the real vendor map / availability screenshot.
- Use repair-options and repair-home screenshots to tell the customer journey.
- Retain the portfolio's paper / ink / orange editorial design and oversized `04`.
- Keep the visual treatment documentary; let the actual product UI and integration story lead.
- Use assets from `public/projects/samsung-repair/`, never a remote screenshot service.

### Evidence and claims to verify

- D2SR-342 Battery Service – Repair Page Updates Functional Analysis V0.02 (March 2025).
- Booking System Overview (Qudini & IGSPN APIs).
- Security/API assessment notes.
- Confirm which proposed changes shipped before adding outcomes or metrics.
- Do not publish internal endpoint URLs, credentials, customer data, or sensitive integration payloads.
