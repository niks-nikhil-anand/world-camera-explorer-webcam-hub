# Public Camera Provider Catalog

## Global Directory of Open API and Public Camera Feed Providers

The proliferation of Internet of Things (IoT) infrastructure and the global push toward open government data have created an unprecedented ecosystem of publicly accessible camera feeds. Ranging from high-latency static image endpoints to continuous high-definition video streams, these optical sensors serve as the digital eyes of smart cities, transportation networks, meteorological observatories, and conservation organizations.

The integration of these disparate data sources requires a nuanced understanding of Application Programming Interfaces (APIs), authentication protocols, and licensing frameworks.

This catalog provides a comprehensive directory of legitimate camera providers, segmented by their operational domains. Beyond simple enumeration, it deconstructs the architectural standards—such as the European DATEX II specification versus North American GeoJSON standards—that dictate how visual data is consumed, normalized, and deployed in downstream applications.

---

## Highway and Municipal Traffic Camera Infrastructure

The management of arterial road networks and municipal transit corridors relies heavily on real-time visual verification. Transportation agencies globally have deployed extensive networks of CCTV cameras to monitor traffic density, verify automated incident alerts, and assess weather-related road conditions.

The technical delivery of these feeds varies dramatically across jurisdictions, reflecting different eras of digital infrastructure investment and divergent open data philosophies. Historically, state-level departments of transportation operated highly siloed systems—normalizing camera feeds across North America previously required parsing ArcGIS FeatureServers for certain regions, lazy-loaded map markers for others, and XOR-encrypted protocol buffers in the most extreme legacy edge cases. Today, platforms often utilize intermediary normalization layers to convert these diverse formats into standardized RESTful outputs.

California's Department of Transportation (Caltrans) maintains a legacy SOAP-like interface structured around district-level iteration, which aggregators frequently translate into unified GeoJSON payloads for seamless integration into mapping libraries. In contrast, modern municipal architectures utilize advanced data management platforms. The New York City Department of Transportation (NYCDOT) distributes its camera network data through the Socrata Open Data API (SODA) hosted on the NYC Open Data portal. This infrastructure allows developers to execute complex queries using limits, offsets, and precise sorting parameters. Notably, NYCDOT traffic cameras operate under a strict live-feed-only policy—the systems do not record or archive video footage. This architectural decision directly aligns with the city's legal frameworks, ensuring that FOIL requests for historical camera footage are preempted by the absence of stored video.

### Traffic Camera Providers

| Provider Name | Country | API or Feed URL | Feed Format | Terms of Use | Attribution Requirements | Update Frequency |
|---|---|---|---|---|---|---|
| California Department of Transportation (Caltrans) | USA | https://cwwp2.dot.ca.gov/data/d7/cctv/image/ | Static Image (JPEG) via SOAP-like API | Disclaimer of endorsement and liability; provided for information exchange | Implicit (Source: Caltrans/CWWP2) | 1 to 5 minutes |
| Washington State Department of Transportation (WSDOT) | USA | https://wsdot.com/travel/real-time/map/ | REST API / GeoJSON | Low volume use only; access may be restricted; WSDOT not liable for economic damages | "Washington State Department of Transportation" | Approximately every 5 minutes |
| Colorado Department of Transportation (COTRIP) | USA | https://data.cotrip.org/api/v1/cameras?apiKey= | REST API (JSON/XML) | CDOT Terms of Service; API Management portal registration required | "CDOT - Department of Transportation" | Up to 60 seconds for intelligent zones |
| New York City Department of Transportation (NYCDOT) | USA | https://webcams.nyctmc.org/map (SODA API: data.cityofnewyork.us) | REST API (JSON / Socrata) | Live feeds only; no recorded footage available | NYC Open Data attribution standards | Live feed / Real-time |
| Seattle Department of Transportation (SDOT) | USA | https://web.seattle.gov/Travelers/api/Map/Data? | REST API (JSON) | Public safety open data; no affiliation endorsement | "City of Seattle's Department of Transportation" | Every 10 seconds |
| Transport for London (TfL) | UK | https://api.tfl.gov.uk/Place/Type/JamCam | REST API (JSON) | Adherence to transport data terms and conditions | "Copyright TfL" | Frequent polling (Rate limited by app_key) |
| Gijon City Council | Spain | http://datosabiertos.malaga.eu/dataset/camaras-de-trafico/ (Aggregated via FEMP) | REST API (JSON) | Open Data initiatives under municipal transparency networks | Municipal Open Data attribution | Periodic |

---

## European Mobility and DATEX II Architectures

The European technical paradigm for traffic and mobility data is heavily driven by the DATEX II standard. This protocol was specifically engineered to harmonize traffic information exchange across the European Union, ensuring that cross-border logistics, emergency responders, and mobility services can consume camera data and road conditions through a standardized XML or JSON schema.

The Norwegian Public Roads Administration (Vegvesen) operates a highly structured DATEX II endpoint that delivers XML payloads containing CCTV site tables, travel times, and meteorological measurements. These endpoints utilize PULL mechanics secured by basic authentication, requiring explicit user registration before access is granted. The administration mandates the use of the Norwegian License for Open Government Data (NLOD), which strictly enforces accreditation requirements.

Finland's traffic management company, Fintraffic, maintains the Digitraffic platform, delivering vast amounts of road, marine, and rail data. To prevent backend resource exhaustion, Fintraffic has instituted mandatory HTTP header requirements, such as forcing `Accept-Encoding: gzip` for payload compression and recommending custom `Digitraffic-User` strings for all API requests. Failure to adhere to these structural constraints results in immediate request throttling and eventual rejection.

### European Mobility Providers

| Provider Name | Country | API or Feed URL | Feed Format | Terms of Use | Attribution Requirements | Update Frequency |
|---|---|---|---|---|---|---|
| Fintraffic (Digitraffic) | Finland | https://tie.digitraffic.fi/api/v3/metadata/cameras | OpenAPI (JSON / DATEX II) | Open Data terms; requires Digitraffic-User and compression headers | Traffic Management Company Fintraffic Ltd | Approximately every 10 minutes |
| Norwegian Public Roads Administration (Vegvesen) | Norway | https://datex-server-get-v3-1.atlas.vegvesen.no/datexapi/GetCCTVSiteTable | DATEX II (XML / PULL) | Norwegian License for Open Government Data (NLOD); Basic Auth required | "Made with data from The Norwegian Public Roads Administration" | Varies by camera type / continuous |

---

## Environmental, Meteorological, and Agricultural Observatories

Beyond urban traffic management, environmental agencies, agricultural observatories, and national park systems provide extensive optical data to monitor ecosystems, assess climatic anomalies, and evaluate recreational safety. These remote installations often operate under severe power and bandwidth constraints, utilizing solar arrays and intermittent satellite or cellular uplinks.

The National Park Service (NPS) API represents a definitive standard for federal open data implementation in the United States. Protected behind the api.data.gov authentication gateway, this API exposes 29 distinct endpoints spanning park profiles, alert systems, and an exhaustive directory of streaming and static webcams. The API permits complex geospatial and temporal filtering, returning highly structured JSON payloads that detail camera locations, subjects, and operational status. The imagery is routinely ingested by climatologists for ground-truth verification of localized weather phenomena.

The Iowa Environmental Mesonet (IEM), operated by Iowa State University, provides atmospheric and agricultural data through its extensive network of automated observations and webcams. The IEM infrastructure aggregates data from disparate sources—including WMO BUFR formats, citizen science networks like CoCoRaHS, and local campus webcams—into a centralized repository.

### Environmental & Meteorological Providers

| Provider Name | Country | API or Feed URL | Feed Format | Terms of Use | Attribution Requirements | Update Frequency |
|---|---|---|---|---|---|---|
| National Park Service (NPS) | USA | https://developer.nps.gov/api/v1/webcams | REST API (JSON) | Free under data.gov terms; standard API key limits apply (1,000 req/hr) | Implicit to NPS / data.gov | Varies (Live streaming & interval images) |
| Iowa Environmental Mesonet (IEM) | USA | https://mesonet.agron.iastate.edu/sites/windrose.phtml | Static Image / Time-lapse / BUFR | Open educational and scientific use | Iowa State University / IEM | Periodic / Daily |

---

## Global Aggregators and Leisure Platforms

The commercial and operational value of centralizing fragmented visual data has fueled the rise of robust third-party aggregators. These platforms harvest localized feeds from municipalities, tourism boards, and private businesses, normalizing them into highly queryable commercial APIs.

The Windy Webcams API exemplifies this massive centralization effort, aggregating thousands of global cameras and standardizing them through a V3 REST API. The technical architecture permits sophisticated geospatial manipulation—bounding box searches (`bbox`), proximity filtering (`nearby` radius up to 250km), and complex boolean category operations. This centralization is accompanied by stringent commercial licensing: Windy strictly prohibits the suppression of API-delivered advertisements and mandates explicit visual attribution.

In the winter sports sector, SnoCountry centralizes snow conditions, lift operations, and mountain webcams into structured JSON, XML, and HTML feeds. While the API is freely available for queries targeting single ski areas or single states, SnoCountry explicitly prohibits its use for broad regional mobile applications that could compete directly with the aggregator's own consumer-facing products.

Regional tourism boards increasingly utilize open data hubs. The Discover.swiss platform centralizes data regarding mountain accommodations, ski slope statuses, and localized webcams. In the Caribbean, entities like the Royal Sea Aquarium Resort in Curacao offer direct webcam feeds of their beach access points.

### Aggregator & Leisure Providers

| Provider Name | Country | API or Feed URL | Feed Format | Terms of Use | Attribution Requirements | Update Frequency |
|---|---|---|---|---|---|---|
| Windy Webcams | Global | https://api.windy.com/webcams/api/v3/webcams | REST API (JSON) | API Key required; no ad blocking; not for sensitive data collection | "Source: Windy.com" with hyperlink and Windy logo | Webcams updated within the last 24 hours (Active) |
| SnoCountry | USA | http://feeds.snocountry.net/getResortList.php | REST API (JSON/XML/HTML) | Free for single area/state; regional mobile apps strictly prohibited | Requires custom weather station input/branding | Daily / Periodic |
| Discover.swiss / IDM South Tyrol | Switzerland / Italy | https://databrowser.opendatahub.com/ | REST API (JSON) | Access limitations vary by specific endpoint; open data principles apply | Discover.swiss / Local Tourism Boards | Real-time / Periodic |
| Royal Sea Aquarium Resort | Curacao | https://www.royalseaquariumresort.com/webcam.asp | Live Streaming Video | Public viewing for tourism promotion | Royal Sea Aquarium Resort | Continuous Live Stream |

---

## Wildlife Conservation and Marine Research Telemetry

The intersection of marine biology, ornithology, and public engagement has yielded a specialized class of camera providers. These organizations rely on high-definition live streaming protocols to facilitate rigorous scientific observation while simultaneously executing global educational outreach.

The Cornell Lab of Ornithology utilizes continuous live streams of feeding stations and nesting boxes to pioneer massive citizen science initiatives. Through structured programs like "Cornell Feeders Live," "Hawk Happenings," and "Panama Live," thousands of global viewers actively monitor real-time video feeds. This distributed observation model generates formidable datasets that researchers correlate with external meteorological APIs for sophisticated statistical analyses regarding climatic impacts on avian behavioral patterns.

The Monterey Bay Aquarium leverages live camera feeds—such as the Jelly Cam, Sea Otter cam, and open ocean streams—to advance marine conservation and public education. The technological infrastructure required to maintain uninterrupted HD video feeds in corrosive, high-pressure marine environments necessitates profound engineering capabilities. The aquarium utilizes specialized light-field (plenoptic) imaging technology on ROVs for precise 3D surface reconstructions.

### Wildlife & Marine Providers

| Provider Name | Country | API or Feed URL | Feed Format | Terms of Use | Attribution Requirements | Update Frequency |
|---|---|---|---|---|---|---|
| Cornell Lab of Ornithology | USA | Bird Cams via allaboutbirds.org | Live Streaming Video (Embeds/HLS) | Acceptable use for educational/citizen science | The Cornell Lab of Ornithology | Continuous Live Stream |
| Monterey Bay Aquarium | USA | montereybayaquarium.org/animals-and-experiences/live-web-cams | Live Streaming Video (Embeds) | Binding terms of use for online services; ages 18+ or 14+ with guardian | Monterey Bay Aquarium Foundation | Continuous Live Stream |

---

## Macro-Logistics: Port Operations, Aviation, and Rail Networks

Global supply chains, international aviation, and mass transit railways mandate continuous optical oversight. Ports and airports are highly secure environments where public camera feeds must balance operational transparency with stringent security imperatives.

The Port of Long Beach utilizes webcams to monitor harbor traffic, docking procedures, and structural assets. Logistics operators and automated OSINT frameworks can ingest these streams to assess port congestion and track autonomous operations. In Europe, the Port of Rotterdam relies on cameras integrated with its Vessel Traffic Services (VTS).

Zurich Airport provides multiple high-definition streams covering distinct operational zones, including a controllable single-frame camera allowing public users to manipulate PTZ features. The Swiss Federal Railways (SBB) maintains a structured Open Data portal providing machine-readable datasets spanning infrastructure locations, rolling stock manifests, and real-time traffic alerts.

### Logistics, Aviation & Rail Providers

| Provider Name | Country | API or Feed URL | Feed Format | Terms of Use | Attribution Requirements | Update Frequency |
|---|---|---|---|---|---|---|
| Zurich Airport (Flughafen Zürich) | Switzerland | flughafen-zuerich.ch/en/passengers/experience/experiences/webcams | Live Streaming & Controllable Single-Frame PTZ | Acceptable use for personal/informational viewing | Flughafen Zürich AG | Continuous Live Stream / Real-time |
| Port of Long Beach | USA | hdontap.com/stream/247822/long-beach-harbor-live-webcam/ | Live Streaming Video | General viewing; managed via third-party streaming hosts | Port of Long Beach / HDOnTap | Continuous Live Stream |
| Port of Rotterdam | Netherlands | Provided via Harbour Master / VTS endpoints | Streaming / Navigational Data | Strictly regulated for port security and nautical communication | Port of Rotterdam Authority | Continuous / Real-time |
| SBB (Swiss Federal Railways) | Switzerland | data.sbb.ch/explore/ (Webcam integrations via station networks) | REST API / Direct stream | Open Data; non-critical, non-personal data only | SBB Open Data / OGD License | Varies by station / Real-time |

---

## Civic Topography and Academic Campuses

Municipalities and large academic institutions frequently deploy webcams for crowd management, event broadcasting, and localized weather reporting.

The University of Washington utilizes a network of campus webcams—including the Red Square cam and Cherry Blossom cam—for general security, public relations, and crowd management. The seasonal blooming of the Yoshino cherry trees attracts immense crowds; by providing a high-definition live stream, the university effectively manages physical foot traffic while allowing global audiences to participate virtually.

### Academic & Civic Providers

| Provider Name | Country | API or Feed URL | Feed Format | Terms of Use | Attribution Requirements | Update Frequency |
|---|---|---|---|---|---|---|
| University of Washington (UW) | USA | washington.edu/cherryblossoms/ & washington.edu/cambots/ | Live Streaming Video | Public educational outreach and traffic mitigation | University of Washington | Continuous Live Stream |

---

## Algorithmic Consumption and the Privacy Legal Frontier

The proliferation of open camera APIs has fundamentally transformed how optical data is processed. The traditional paradigm of human observation has been superseded by automated ingestion pipelines. Platforms like GitHub-hosted Model Context Protocol (MCP) servers now empower AI agents to programmatically query webcams based on precise geographic coordinates, ingest the returned JPEG payloads, and execute complex computer vision tasks autonomously.

Sophisticated observability platforms can be configured to continuously poll a National Park Service endpoint or a state transportation camera. The resulting images are passed directly to multimodal models instructed through system prompts to count commercial vehicles, assess avalanche risks, or detect architectural anomalies. The output is normalized into machine-readable time-series metrics and routed into dashboards for real-time statistical monitoring.

### The Edge-Computing Privacy Paradox

As algorithmic consumption accelerates, the tension between open data initiatives and individual privacy becomes unavoidable. Under GDPR and similar frameworks, high-resolution imagery poses significant legal liabilities.

Advanced providers implement rigorous edge-level obfuscation technologies:

- **Parquery** — Civic and commercial cameras for parking optimization and traffic analytics with dynamic blurring of pedestrians and license plates at the edge before transmission
- **Avisec** — High-definition construction cameras with delayed publishing features and built-in privacy protectors
- **NYCDOT** — Limits the entire camera network to live streaming only; hardware intentionally prevents recording or archiving

---

## Legal & Compliance Summary

Every integrated provider must have documented:

- Source URL
- Terms of service
- Redistribution policy
- Attribution requirements
- Contact information (if applicable)

### Absolute Prohibitions

- Never circumvent authentication
- Never access password-protected cameras
- Never display private or unauthorized CCTV feeds
- Never remove required branding or attribution
- Only aggregate feeds that are public or explicitly authorized

---

## Future Enhancements

- Automated provider onboarding
- AI-powered camera categorization
- Duplicate camera detection
- Live event detection
- Weather overlays
- Multi-language metadata
- Personalized recommendations
- Mobile applications
- Public API for developers

---

## Works Cited

1. Traffic Operations Manual Chapter 110 — Caltrans, https://dot.ca.gov/-/media/dot-media/programs/traffic-operations/documents/trafficops/202602-tom-ch-110-transportation-mgmt-centers-a11y.pdf
2. Developing a Public COVID-19 Data Dashboard — ROSA P, https://rosap.ntl.bts.gov/view/dot/64738/dot_64738_DS1.pdf
3. How to Get Real-Time Traffic Camera Feeds via API — DEV Community, https://dev.to/road511/how-i-normalized-30-different-511-traffic-apis-into-one-rest-endpoint-3cl9
4. California CATMS Project — Government Navigator
5. NYC Open Data, https://opendata.cityofnewyork.us/
6. NYC Traffic — Medium, https://medium.com/cloudera-inc/nyc-traffic-are-you-kidding-me-6d3fa853903b
7. Bulletin of the Technical Committee on December 2014
8. Download — NYC Open Data, https://data.cityofnewyork.us/api/views/63us-eqtq/rows.rdf
9. Caltrans Autonomous Vehicles Industry Survey
10. WSDOT Travel Information Cameras — ArcGIS Online, https://www.arcgis.com/home/item.html?id=6692b4f163bd4ec99b5a897b2d207aa6
11. Traveler Information Data Feed Access — COtrip.org, https://www.cotrip.org/help/117/Traveler-Information-Data-Feed-Access
12. CDOT Public Maps and Data, https://data-cdot.opendata.arcgis.com/
13. CDOT Real Time Data Feed (XML) — Colorado Information Marketplace, https://data.colorado.gov/Transportation/CDOT-Real-Time-Data-Feed-XML-/j3ch-zsvz
14. SWZ Device Specification — CDOT, https://www.codot.gov/business/designsupport/cdot-construction-specifications/2025-construction-specifications/swz-ppsp-1/guide-swz-device-specification
15. GitHub — seattle-traffic-cams, https://github.com/the-sink/seattle-traffic-cams
16. Trafikmon Seattle — Google Play, https://play.google.com/store/apps/details?id=com.dom925.cadmon.seattle
17. Transport for London API, https://api.tfl.gov.uk/
18. Guía de Datos Abiertos — FEMP
19. Datos Abiertos — FEMP
20. Towards interoperable traffic data sources — Aalto University
21. DATEX traffic information — Statens vegvesen, https://www.vegvesen.no/en/fag/technology/open-data/a-selection-of-open-data/what-is-datex/
22. DATEX II 3.1 Specification — Statens vegvesen
23. DATEX II 3.1 Documentation — Statens vegvesen
24. News — Digitraffic, https://www.digitraffic.fi/en/news/?tag=apis
25. Fintraffic Developer Day
26. Real-World Solutions with LLMCAM — NinjaLABO, https://ninjalabo.ai/blogs/llmcam_demo_1.html
27. CCTV Dataset — Dataportalen — Statens vegvesen, https://dataut.vegvesen.no/en/dataset/webkamera
28. National Park Service Connector — Microsoft Learn, https://learn.microsoft.com/en-us/connectors/nationalparkserviceip/
29. National Park Service API — Jentic, https://jentic.com/apis/nps.gov/national-park-service-us
30. Databases — Great Smoky Mountains NPS, https://www.nps.gov/grsm/learn/nature/datasets.htm
31. IEM Custom Wind Roses, https://www.mesonet.agron.iastate.edu/sites/dyn_windrose.phtml
32. IEM Site Wind Roses, https://mesonet.agron.iastate.edu/sites/windrose.phtml
33. Windy Python API Docs — dltHub, https://dlthub.com/context/source/windy-api
34. Migration from Webcams API v2 to v3, https://api.windy.com/webcams/version-transfer
35. windy-webcams-mcp-server — GitHub, https://github.com/Cyreslab-AI/windy-webcams-mcp-server/blob/main/README.md
36. Specific terms of use — Windy Webcams API, https://account.windy.com/agreements/windy-api-webcams-terms-of-use
37. General terms of use — Windy services, https://account.windy.com/agreements/windy-terms-of-use
38. SnoCountry Conditions JSON API Documentation, http://feeds.snocountry.net/
39. Data Browser — Open Data Hub, https://databrowser.opendatahub.com/
40. Marketplace — discover.swiss documentation, https://docs.discover.swiss/dev/devops/release-notes/PROD/marketplace/
41. Webcams — Royal Sea Aquarium Resort, https://www.royalseaquariumresort.com/webcam.asp
42. accesso Technology Group Stock Forecast
43. Past Investigations — Bird Cams Lab, https://birdcamslab.allaboutbirds.org/investigations-archive/
44. Cornell Feeders Live Final Report — Bird Cams Lab, https://birdcamslab.allaboutbirds.org/cornell-feeders-live-final-report/
45. Monterey Bay Aquarium — Sustainable Seafood
46. Live Streams for Students — UBC Teacher Education, https://scarfedigitalsandbox.teach.educ.ubc.ca/webcam-links/
47. In situ light-field imaging of octopus locomotion — PMC, https://pmc.ncbi.nlm.nih.gov/articles/PMC12545212/
48. MBARI Retrospective, https://www.mbari.org/wp-content/uploads/2015/10/MBARI-retrospective.pdf
49. Partner with us — Monterey Bay Aquarium, https://www.montereybayaquarium.org/change-impact/partner-with-us
50. Giant kelp — Monterey Bay Aquarium
51. Terms of use — Monterey Bay Aquarium, https://www.montereybayaquarium.org/about-us/terms-of-use
52. Cornell Lab of Ornithology — Sanmita Inc., https://www.sanmita.com/portfolio-item/the-cornell-lab-of-ornithology-2/
53. Zoos and aquariums live-streaming — CBS News
54. COVID-19 Outreach — AAPA
55. Long Beach Harbor Live Webcam — HDOnTap, https://hdontap.com/stream/247822/long-beach-harbor-live-webcam/
56. Gerald Desmond Bridge — Shutterstock
57. A Proactive Defense: OSINT Framework for Maritime Cybersecurity — ResearchGate
58. World's biggest shipping hubs — Maritime Professionals
59. Port Information Guide Rotterdam — Scribd
60. Webcams — Flughafen Zürich, https://www.flughafen-zuerich.ch/en/passengers/experience/experiences/webcams
61. Zürich Airport — WorldCam, https://worldcam.eu/webcams/europe/switzerland/17358-zurich-airport-dock-e-dock-b-werft-operation-center
62. Integrated Report 2021 — Flughafen Zürich AG
63. FAQs — Munich Airport
64. SBB Open Data, https://data.sbb.ch/pages/home/
65. SBB Datasets, https://data.sbb.ch/explore/
66. Webcams — Swiss Railways Society, https://swissrailsoc.org.uk/webcams/
67. Cherry blossoms at the UW, https://www.washington.edu/cherryblossoms/
68. Cherry blossoms live stream — UW External Affairs, https://www.washington.edu/externalaffairs/2017/03/22/cherry-blossoms-live-stream/
69. News & updates — UW Facilities, https://facilities.uw.edu/blog/tags/news-updates
70. CBE Marketing & Communications — UW Intranet
71. Web Cams — University of Washington, https://www.washington.edu/cambots/
72. Open Eagle Eye MCP Server — Claude Code Plugins, https://claudemarketplaces.com/mcp/stuchapin909/open-eagle-eye
73. How to automate image analysis with ChatGPT vision API — Grafana, https://grafana.com/blog/how-to-automate-image-analysis-with-the-chatgpt-vision-api-and-grafana-cloud-metrics/
74. Interactive Snow Avalanche Segmentation from Webcam Imagery — ResearchGate
75. Parquery — Vevey, https://parquery.com/parquery-vevey/
76. Parquery FAQ, https://parquery.com/faq/
77. Avisec Construction Cameras, https://avisec.com/en/
