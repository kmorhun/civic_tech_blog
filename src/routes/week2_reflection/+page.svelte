<div class="container my-5">
    <button class="btn btn-secondary" on:click={() => window.history.back()}>
        Back to Main Page
    </button>

    <hr>

    <h2>Week 3: 9/28/2026</h2>
    <h1>From ADU Zoning to Civic Technology</h1>
    <p><i>By: Kateryna Morhun</i></p>

    <h2>Comparing Massachusetts and Boston ADU Regulations</h2>

    <p>In 2024, Massachusetts passed the Affordable Housing Act, which made ADUs available by right on any lot in a single-family zoning district anywhere in Massachusetts (Except for Boston). The Act implies specific features about the process of building ADUs in practice, including owner occupancy <i>not</i> being required, special permitting for ADUs <i>not</i> being required as long as the ADUs met specific criteria, and removing parking mandates for properties within a 1/2 mile of a transit station.</p>
    
    <p>Notably, the act does not apply to Boston. Boston has its own ADU laws, which require owner occupancy, a permitting process that includes ADU design approval and adherence to local zoning codes, and parking requirements based on location. Boston is <i>also</i> running a pilot program in Mattapan with even less restrictive ADU laws than even the state-wide laws (e.g. Mattapan ADUs can be sold and condoized separately, whereas the state law does not specify this)</p>    
    
    <p>The differences manifest this way because in Boston, the lots are already smaller and denser -- Will Cohen, a Senior Zoning Reform Planner at the Boston Planning and Development Agency, remarked that 99% of lots in Boston already break existing zoning laws, so a more freeing zoning law is necessary in order to make any headway in reducing the barrier to building ADUs. Expectedly, 90% of ADU requests to the city of Boston are for attached or internal ADUs, because that is what Boston has space for. To contrast, the average mostly single-family town in Massachusetts has much larger lots with big backyards that can fit detached ADUs, so these are the more common ADU types built.</p>
    
    <p>What is similar is the homeowners’ motivations for building ADUs. Both Will and Gwendolyn Hellen-Sands, a Regional Housing Planner at the MAPC, described people’s primary motivations for building ADUs in Boston and MAPC communities respectively as wanting to build places for their family members to stay and build generation wealth.</p>
    
    <p>So in practice, ADU challenges and opportunities manifest differently in Boston compared to other Massachusetts towns, but homeowners’ motivations for building them seem to largely agree.</p>

    <h2>What Makes These Rules Difficult to Navigate?</h2>

    <p>When it comes to actually navigating the ADU laws and other zoning laws on the ground for any individual ADU project, many nuances rear their ugly heads. </p>

    <p>First, the rules are constantly changing. Some zoning laws are mandates that override any local laws to the contrary (e.g the MBTA Communities Act). Other zoning laws are state recommendations that get interpreted and written as customized legislation for each municipality with the help of individuals like Gwendolyn at organizations like MAPC. To the average homeowner, it can be very confusing to know what laws are actually applicable to their particular property.</p>

    <p>Say a homeowner figures out which zoning laws apply to their lot and identifies their buildable area using setbacks. This still isn’t enough. When actual construction is considered, a deluge of other regulations, including fire code for sprinklers, stair heights, access to the ADU entrance requirements, etc, parking availability laws, and layered ordinances like park proximity and FEMA flood zone designations, materially affect the legality, feasibility, and financial commitment of any particular ADU project. For example, the town of Littleton (population ~10,000) has a <a href="https://ma-littleton.civicplus.com/DocumentCenter/View/308/Residential-Construction-Checklist-PDF">construction checklist</a> that includes permit applications for water testing, worker’s comp, residential driveway plan, etc. And each town has their own checklist, official or otherwise.</p>


    <p>And even with the "what to build" settled, Gwendolyn and Elizabeth Christoforetti, an urban designer and active participant in the Mattapan zoning reform implementation, emphasized that there is no settled financial aid from banks or the state for building an ADU. So, since you can’t get a mortgage or other loan to build an ADU, the homeowner also needs $200k at bare minimum of liquid cash or a high interest loan to finance the building of the ADU. Given this, it’s clear that building an ADU is currently a labor of love, not a way to make a quick buck.</p>

    <p>For implementers of any tools to support this navigation, a massive challenge lies in operationalizing the complexity of zoning law. As Sara Bronin, the founder of the National Zoning Atlas, emphasized, zoning law consists of both the text and the map, and it’s common for the map to have a district not in the text, and vice versa, and many towns GIS files are poorly maintained or otherwise messy, which means a lot of manual verification is required to ensure that zoning districts are properly expressed. This is critical to establish the trustworthiness of any public interest tech tool for zoning.</p>

    <h2>What Could a Tool Actually Help With?</h2>

    <p>One thing that I’m convinced of after having spoken to many experts and read up on ADUs and zoning in Boston, Mattapan, the MAPC region, and nationally, is that ADUs are not going to solve the housing and affordability crisis in Boston alone. Will Cohen emphasized that one apartment building built using Article 80 would add more units of housing than even the most successful ADU initiative in Boston. But the conversations also suggested that making ADUs less confusing to build could pave the way for more ambitious and more effective zoning reform.</p>

    <p>On that note, I feel that just a "What/how can I build on my lot" ADU tool for homeowners would be incomplete unless it contained:</p>
    <ol>
        <l1>An explanation of setbacks and the zoning laws that govern each property by address.</l1>
        <li>Visuals that create an intuitive understanding of internal, attached, and detached ADUs for a particular property.</li>
        <l1>An explanation of how fire codes, park ordinances, flood zones, and other overlay legislation affect what can be built on a particular property.</l1>
        <li>A realistic and sobering breakdown of project costs and sources of funding, and the out-of-pocket cost for the homeowner.</li>
    </ol>

    <p>Many of these requirements are highly specific to a town, so a tool that is customized for the context of a specific town would be more helpful for the average homeowner in town than a generic one that vaguely explains zoning.</p>

    <h2>What Would We Need to Build It?</h2>

    <p>Building a “What/how can I build on my lot” ADU tool requires:</p>

    <ol>
        <li>GIS data with parcel geometry, labeled with zoning districts, floodwater districts, park ordinance districts, and various geoprocessing results of lot measurements, and cleaned to remove federal land, water, roads, and unusual geometry. One example source of files is <a href="https://experience.arcgis.com/experience/d72761ca66c44a6bb51e030c569e4f72/page/Download-Parcels#widget_21=active_datasource_id:dataSource_2,center:-7959610.232236023%2C5241602.563467693%2C102100,scale:6951.838795374416,level:16.459934384165823,rotation:0,viewpoint:%7B%22rotation%22%3A0%2C%22scale%22%3A6951.838795374416%2C%22targetGeometry%22%3A%7B%22spatialReference%22%3A%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D%2C%22x%22%3A-7959610.232236023%2C%22y%22%3A5241602.563467693%7D%7D">MassGIS</a></li>
        <li>GIS data with floodwater regions to intersect with parcels</li>
        <li>GIS data with park ordinance districts to intersect with parcels</li>
        <li>A collection of questions that can be answered either by homeowners or via GIS that can, like a decision tree, determine whether each of internal, attached, or detached ADUs are possible</li>
        <li>Fire and other building codes, and a technical pipeline that converts the PDFs to useful programmatic rules that can be operationalized in the decision tree</li>
        <li>Expertise on ADU financing to determine the relevant levers that a homeowner has access to to finance their ADU. </li>
        <li>Homeowners from the chosen municipality to test the tool on their property and identify UI/usability challenges.</li>
    </ol>


</div>