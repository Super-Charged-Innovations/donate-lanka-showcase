export interface SDG {
  id: number;
  title: string;
  description: string;
  sriLankanContext: string;
  importance: string;
  color: string;
  iconPath: string;
  projectCount: number;
}

export const sdgData: SDG[] = [
  {
    id: 1,
    title: "No Poverty",
    description: "End poverty in all its forms everywhere",
    sriLankanContext: "Support livelihoods and emergency relief for vulnerable Sri Lankan communities.",
    importance: "Poverty is the root barrier that prevents families from accessing education, healthcare, and opportunities. When we lift people out of poverty, we unlock human potential and create ripple effects across entire communities. Breaking the cycle of poverty means children can stay in school, families can afford nutritious food, and communities can invest in their own development.",
    color: "#E5243B",
    iconPath: "/sdg-icons/sdg-01.jpg",
    projectCount: 45
  },
  {
    id: 2,
    title: "Zero Hunger",
    description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture",
    sriLankanContext: "Fund nutrition, school meals, and sustainable agriculture projects in rural areas.",
    importance: "Hunger and malnutrition directly impact cognitive development, learning ability, and economic productivity. Children who lack proper nutrition struggle in school and carry those disadvantages into adulthood. By ensuring food security, we're not just feeding people today—we're building healthier, more capable future generations who can contribute fully to their communities.",
    color: "#DDA83A",
    iconPath: "/sdg-icons/sdg-02.jpg",
    projectCount: 32
  },
  {
    id: 3,
    title: "Good Health and Well-being",
    description: "Ensure healthy lives and promote well-being for all at all ages",
    sriLankanContext: "Back health camps, maternal care, and mental health services across the island.",
    importance: "Health is the foundation upon which everything else is built. Without access to quality healthcare, families face financial ruin from medical costs, children miss school due to preventable illnesses, and workers lose income. Investing in health creates resilient communities where people can pursue education, work, and dreams without the constant threat of disease holding them back.",
    color: "#4C9F38",
    iconPath: "/sdg-icons/sdg-03.jpg",
    projectCount: 58
  },
  {
    id: 4,
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
    sriLankanContext: "Sponsor school upgrades, scholarships, and digital literacy initiatives.",
    importance: "Education is the greatest equalizer and the key to breaking intergenerational cycles of poverty. Quality education empowers individuals with critical thinking, skills, and opportunities to innovate and lead. When children receive good education, they're equipped to solve tomorrow's challenges, drive economic growth, and uplift entire communities through knowledge and leadership.",
    color: "#C5192D",
    iconPath: "/sdg-icons/sdg-04.jpg",
    projectCount: 67
  },
  {
    id: 5,
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls",
    sriLankanContext: "Empower women and girls through leadership, safety, and skills training projects.",
    importance: "When women and girls are empowered, entire economies transform. Studies show that investing in women's education and economic participation yields the highest returns for community development. Gender equality means unlocking the potential of half the population, leading to better family health outcomes, increased household income, and more inclusive decision-making at all levels of society.",
    color: "#FF3A21",
    iconPath: "/sdg-icons/sdg-05.jpg",
    projectCount: 29
  },
  {
    id: 6,
    title: "Clean Water and Sanitation",
    description: "Ensure availability and sustainable management of water and sanitation for all",
    sriLankanContext: "Bring safe drinking water and sanitation facilities to remote villages.",
    importance: "Access to clean water and sanitation is fundamental to human dignity and health. Waterborne diseases keep children out of school and adults out of work. When communities have clean water, girls no longer spend hours fetching water and can attend school, disease rates plummet, and economic productivity soars. Safe sanitation prevents the spread of illness and protects water sources for future generations.",
    color: "#26BDE2",
    iconPath: "/sdg-icons/sdg-06.jpg",
    projectCount: 41
  },
  {
    id: 7,
    title: "Affordable and Clean Energy",
    description: "Ensure access to affordable, reliable, sustainable and modern energy for all",
    sriLankanContext: "Promote solar, biogas, and clean cooking solutions for off-grid communities.",
    importance: "Energy access transforms lives by enabling education after dark, powering healthcare facilities, supporting small businesses, and connecting communities to information. Clean energy specifically addresses climate change while providing economic opportunities in renewable sectors. When families switch from kerosene to solar, they save money, breathe cleaner air, and children can study safely at night.",
    color: "#FCC30B",
    iconPath: "/sdg-icons/sdg-07.jpg",
    projectCount: 23
  },
  {
    id: 8,
    title: "Decent Work and Economic Growth",
    description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
    sriLankanContext: "Create jobs, vocational training, and support for small businesses.",
    importance: "Decent work provides more than income—it offers dignity, purpose, and stability. When people have fair employment opportunities, they can support their families, contribute to their communities, and plan for the future. Sustainable economic growth creates a virtuous cycle where businesses thrive, innovation flourishes, and opportunities multiply, lifting entire regions out of poverty.",
    color: "#A21942",
    iconPath: "/sdg-icons/sdg-08.jpg",
    projectCount: 35
  },
  {
    id: 9,
    title: "Industry, Innovation and Infrastructure",
    description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
    sriLankanContext: "Rebuild schools, clinics, and bridges; foster local innovation.",
    importance: "Infrastructure connects communities to opportunities—roads bring goods to market, internet access opens doors to education and commerce, and resilient buildings protect against disasters. Innovation drives progress by finding better solutions to old problems. When we invest in infrastructure and foster innovation, we create the foundation for sustainable development that benefits everyone.",
    color: "#FD6925",
    iconPath: "/sdg-icons/sdg-09.jpg",
    projectCount: 28
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries",
    sriLankanContext: "Champion inclusion for marginalized groups and persons with disabilities.",
    importance: "Inequality undermines social cohesion and economic growth by excluding capable people from contributing fully. When we reduce inequalities based on income, geography, gender, disability, or ethnicity, we tap into previously marginalized talent and perspectives. An inclusive society where everyone has fair opportunities is stronger, more innovative, and more resilient than one where potential goes wasted.",
    color: "#DD1367",
    iconPath: "/sdg-icons/sdg-10.jpg",
    projectCount: 19
  },
  {
    id: 11,
    title: "Sustainable Cities and Communities",
    description: "Make cities and human settlements inclusive, safe, resilient and sustainable",
    sriLankanContext: "Enable safe housing, disaster resilience, and urban green spaces.",
    importance: "As more people move to cities, sustainable urban planning becomes critical for quality of life. Safe, accessible public spaces foster community bonds and economic activity. Disaster-resilient infrastructure protects lives and livelihoods. Green spaces improve mental health and air quality. Building sustainable cities now ensures that growing urban populations can thrive without depleting resources or harming the environment.",
    color: "#FD9D24",
    iconPath: "/sdg-icons/sdg-11.jpg",
    projectCount: 31
  },
  {
    id: 12,
    title: "Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns",
    sriLankanContext: "Support recycling, upcycling, and sustainable farming projects.",
    importance: "Our current consumption patterns are depleting Earth's resources faster than they can regenerate. Responsible production and consumption reduce waste, pollution, and resource depletion while creating economic opportunities in recycling, upcycling, and sustainable industries. By shifting to circular economy models, we ensure resources remain available for future generations while creating jobs and reducing environmental harm today.",
    color: "#BF8B2E",
    iconPath: "/sdg-icons/sdg-12.jpg",
    projectCount: 22
  },
  {
    id: 13,
    title: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts",
    sriLankanContext: "Plant trees, restore mangroves, and back climate adaptation efforts.",
    importance: "Climate change is the defining challenge of our time, threatening food security, water availability, and coastal communities. Rising temperatures, extreme weather, and sea-level rise disproportionately harm vulnerable populations. Taking climate action now—through mitigation and adaptation—protects lives and livelihoods while creating opportunities in green industries. Every action to reduce emissions and build resilience safeguards our shared future.",
    color: "#3F7E44",
    iconPath: "/sdg-icons/sdg-13.jpg",
    projectCount: 44
  },
  {
    id: 14,
    title: "Life Below Water",
    description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
    sriLankanContext: "Protect Sri Lanka's coral reefs, marine life, and coastal fisheries.",
    importance: "Oceans provide food, livelihoods, and regulate our climate. Marine ecosystems are under severe threat from overfishing, pollution, and warming waters. For island nations and coastal communities, healthy oceans are essential for survival and prosperity. Protecting marine life sustains fisheries that feed millions, preserves biodiversity, and maintains the ocean's role in absorbing carbon and producing oxygen.",
    color: "#0A97D9",
    iconPath: "/sdg-icons/sdg-14.jpg",
    projectCount: 26
  },
  {
    id: 15,
    title: "Life on Land",
    description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
    sriLankanContext: "Conserve rainforests, wildlife, and promote biodiversity-friendly farming.",
    importance: "Forests and ecosystems provide clean air, water, food, and medicines while supporting countless species. Biodiversity loss threatens food security and ecosystem stability. Protecting forests combats climate change while sustaining indigenous communities and wildlife. When we preserve and restore terrestrial ecosystems, we maintain the natural systems that all life depends on and ensure future generations inherit a healthy, vibrant planet.",
    color: "#56C02B",
    iconPath: "/sdg-icons/sdg-15.jpg",
    projectCount: 33
  },
  {
    id: 16,
    title: "Peace, Justice and Strong Institutions",
    description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels",
    sriLankanContext: "Foster social cohesion, disaster response, and legal aid programs.",
    importance: "Without peace, justice, and strong institutions, no other development goal can be achieved sustainably. Conflict destroys infrastructure, displaces populations, and diverts resources from development. Access to justice protects rights and enables people to resolve disputes fairly. Transparent, accountable institutions build trust and ensure resources reach those who need them most, creating stable foundations for prosperity.",
    color: "#00689D",
    iconPath: "/sdg-icons/sdg-16.jpg",
    projectCount: 18
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development",
    sriLankanContext: "Collaborate with NGOs, government, and local leaders for maximum impact.",
    importance: "No single organization, government, or sector can achieve the SDGs alone. Partnerships multiply impact by combining resources, expertise, and networks. When businesses, governments, NGOs, and communities work together, solutions scale faster and reach more people. Collaboration enables knowledge sharing, reduces duplication, and creates synergies where the whole becomes greater than the sum of its parts.",
    color: "#19486A",
    iconPath: "/sdg-icons/sdg-17.jpg",
    projectCount: 15
  }
];