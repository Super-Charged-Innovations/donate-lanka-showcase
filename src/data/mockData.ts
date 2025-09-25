import { Project, ProjectStatus } from '@/types/project';
import { User } from '@/types/user';
import { Donation } from '@/types/donation';
import { addDays, subDays, addHours } from 'date-fns';

// Mock Users - Authentic Sri Lankan Creators
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'priya.fernando@rururalhope.lk',
    firstName: 'Priya',
    lastName: 'Fernando',
    name: 'Priya Fernando',
    displayName: 'Priya Fernando',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    role: 'creator',
    accountStatus: 'active',
    verificationStatus: 'verified',
    bio: 'Founder of Rural Hope Foundation, dedicated to improving education and water access in remote villages across Uva and Eastern provinces. Former teacher turned social entrepreneur.',
    location: 'Badulla, Uva Province',
    createdAt: subDays(new Date(), 180),
    updatedAt: new Date(),
    creatorProfile: {
      organizationType: 'nonprofit',
      rating: 4.8,
      totalReviews: 147,
      successfulProjects: 12,
      completionRate: 95
    },
    totalRaised: 2850000,
    projectsCreated: 15,
    projectsSupported: 34
  },
  {
    id: '2',
    email: 'anura.silva@techforgood.lk',
    firstName: 'Anura',
    lastName: 'Silva',
    name: 'Anura Silva',
    displayName: 'Anura Silva',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    role: 'creator',
    accountStatus: 'active',
    verificationStatus: 'verified',
    bio: 'Software engineer and conservationist developing innovative tech solutions for wildlife protection. Alumni of University of Peradeniya, now working to bridge technology and conservation.',
    location: 'Kandy, Central Province',
    createdAt: subDays(new Date(), 90),
    updatedAt: new Date(),
    creatorProfile: {
      organizationType: 'business',
      rating: 4.6,
      totalReviews: 89,
      successfulProjects: 8,
      completionRate: 88
    },
    totalRaised: 1450000,
    projectsCreated: 11,
    projectsSupported: 23
  },
  {
    id: '3',
    email: 'sanduni.perera@oceanguards.lk',
    firstName: 'Sanduni',
    lastName: 'Perera',
    name: 'Sanduni Perera',
    displayName: 'Sanduni Perera',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    role: 'creator',
    accountStatus: 'active',
    verificationStatus: 'verified',
    bio: 'Marine biologist and founder of Ocean Guards Lanka, protecting sea turtle nesting sites and coral reefs along Sri Lankan coastline. PhD from University of Colombo.',
    location: 'Mirissa, Southern Province',
    createdAt: subDays(new Date(), 120),
    updatedAt: new Date(),
    creatorProfile: {
      organizationType: 'nonprofit',
      rating: 4.9,
      totalReviews: 203,
      successfulProjects: 18,
      completionRate: 97
    },
    totalRaised: 3200000,
    projectsCreated: 22,
    projectsSupported: 67
  },
  {
    id: '4',
    email: 'chaminda.wickramasinghe@ayubowan.foundation',
    firstName: 'Chaminda',
    lastName: 'Wickramasinghe',
    name: 'Chaminda Wickramasinghe',
    displayName: 'Dr. Chaminda Wickramasinghe',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
    role: 'creator',
    accountStatus: 'active',
    verificationStatus: 'verified',
    bio: 'Medical doctor running free mobile clinics in remote villages. Specializes in preventive healthcare and training local health workers across rural Sri Lanka.',
    location: 'Anuradhapura, North Central Province',
    createdAt: subDays(new Date(), 240),
    updatedAt: new Date(),
    creatorProfile: {
      organizationType: 'nonprofit',
      rating: 4.9,
      totalReviews: 312,
      successfulProjects: 25,
      completionRate: 96
    },
    totalRaised: 4750000,
    projectsCreated: 28,
    projectsSupported: 45
  },
  {
    id: '5',
    email: 'kumari.jayawardena@artslanka.org',
    firstName: 'Kumari',
    lastName: 'Jayawardena',
    name: 'Kumari Jayawardena',
    displayName: 'Kumari Jayawardena',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    role: 'creator',
    accountStatus: 'active',
    verificationStatus: 'verified',
    bio: 'Traditional dance instructor and cultural preservationist. Organizing festivals and workshops to keep Kandyan, Sabaragamuwa and coastal folk traditions alive for future generations.',
    location: 'Kandy, Central Province',
    createdAt: subDays(new Date(), 156),
    updatedAt: new Date(),
    creatorProfile: {
      organizationType: 'nonprofit',
      rating: 4.7,
      totalReviews: 78,
      successfulProjects: 9,
      completionRate: 92
    },
    totalRaised: 980000,
    projectsCreated: 12,
    projectsSupported: 29
  }
];

// Mock Projects - Authentic Sri Lankan Crowdfunding Projects
export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Clean Water Wells for Moneragala Villages',
    slug: 'clean-water-wells-moneragala',
    description: 'Building 8 community water wells with solar-powered pumps in remote villages around Moneragala. These villages have struggled with water scarcity for decades, forcing families to walk 5km daily for clean water. Our project includes water quality testing, community training for maintenance, and sanitation education workshops. The wells will serve 2,400 villagers across Medagama, Kebithigollewa, and Siyambalanduwa areas, with each well designed to last 15+ years and serve 300 people.',
    shortDescription: 'Building 8 solar-powered water wells for 2,400 villagers in Moneragala district',
    category: 'community',
    creatorId: '1',
    creator: {
      id: '1',
      displayName: 'Priya Fernando',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.8,
      location: 'Badulla, Uva Province'
    },
    fundingGoal: 1250000,
    currentAmount: 890000,
    currency: 'LKR',
    fundingType: 'all_or_nothing',
    startDate: subDays(new Date(), 18),
    endDate: addDays(new Date(), 32),
    createdAt: subDays(new Date(), 22),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 18),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1594736797933-d0aa5ba20203?w=800&h=450&fit=crop',
    images: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1594736797933-d0aa5ba20203?w=800&h=450&fit=crop',
        alt: 'Children collecting water from village well in Moneragala',
        order: 0
      },
      {
        id: '1b',
        url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=450&fit=crop',
        alt: 'Solar water pump installation in rural Sri Lanka',
        order: 1
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Uva Province',
      city: 'Moneragala'
    },
    donorCount: 247,
    shareCount: 89,
    viewCount: 3420,
    updates: [],
    faqs: [],
    tags: ['water', 'rural development', 'solar power', 'community', 'sustainability'],
    featured: true,
    trending: false,
    urgent: false,
    percentFunded: 71.2,
    daysRemaining: 32,
    isFullyFunded: false,
    isExpired: false,
    
    // Trust & Transparency Features
    trustScore: 92,
    verificationBadges: [
      {
        id: 'v1',
        type: 'identity_verified',
        name: 'Identity Verified',
        description: 'Creator identity verified through government documents',
        verifiedAt: subDays(new Date(), 30),
        verifiedBy: 'Donate Lanka Verification Team'
      },
      {
        id: 'v2',
        type: 'nonprofit_verified',
        name: 'NGO Registered',
        description: 'Registered as a non-profit organization with the Department of Social Services',
        verifiedAt: subDays(new Date(), 45),
        verifiedBy: 'Department of Social Services'
      },
      {
        id: 'v3',
        type: 'previous_success',
        name: 'Proven Track Record',
        description: 'Successfully completed 12 previous projects with full transparency',
        verifiedAt: subDays(new Date(), 15),
        verifiedBy: 'Community Impact Assessment'
      }
    ],
    fundingBreakdown: {
      directBeneficiaries: 72,
      operationalCosts: 15,
      equipmentMaterials: 8,
      administrativeFees: 3,
      contingencyFund: 2,
      breakdown: [
        {
          id: 'b1',
          name: 'Well Drilling & Installation',
          budgetedAmount: 800000,
          spentAmount: 350000,
          percentage: 64,
          description: 'Deep well drilling, pump installation, solar panels',
          receipts: []
        },
        {
          id: 'b2',
          name: 'Water Quality Testing',
          budgetedAmount: 150000,
          spentAmount: 45000,
          percentage: 12,
          description: 'Laboratory testing, filtration systems, quality monitoring',
          receipts: []
        },
        {
          id: 'b3',
          name: 'Community Training',
          budgetedAmount: 200000,
          spentAmount: 80000,
          percentage: 16,
          description: 'Maintenance training, sanitation education workshops',
          receipts: []
        },
        {
          id: 'b4',
          name: 'Project Management',
          budgetedAmount: 100000,
          spentAmount: 42000,
          percentage: 8,
          description: 'Administration, monitoring, and coordination costs',
          receipts: []
        }
      ]
    },
    projectMilestones: [
      {
        id: 'm1',
        title: 'Site Assessment Complete',
        description: 'Geological survey and water table assessment for all 8 locations',
        targetDate: subDays(new Date(), 10),
        completedDate: subDays(new Date(), 8),
        status: 'completed',
        fundingRequired: 125000,
        updates: ['Geological surveys completed for all sites', 'Water table depth confirmed at 35-45 meters'],
        evidence: [
          'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1594736797933-d0aa5ba20203?w=400&h=300&fit=crop'
        ]
      },
      {
        id: 'm2',
        title: 'First 3 Wells Drilled',
        description: 'Complete drilling and installation of wells in Medagama area',
        targetDate: addDays(new Date(), 5),
        status: 'in_progress',
        fundingRequired: 450000,
        updates: ['Drilling equipment mobilized to sites', '2 wells completed, 1 in progress'],
        evidence: []
      },
      {
        id: 'm3',
        title: 'Solar System Installation',
        description: 'Install solar panels and pumping systems for all wells',
        targetDate: addDays(new Date(), 20),
        status: 'pending',
        fundingRequired: 320000,
        updates: [],
        evidence: []
      },
      {
        id: 'm4',
        title: 'Community Training Program',
        description: 'Train local technicians and community members on maintenance',
        targetDate: addDays(new Date(), 28),
        status: 'pending',
        fundingRequired: 150000,
        updates: [],
        evidence: []
      }
    ],
    partnerOrganizations: [
      {
        id: 'p1',
        name: 'World Vision Sri Lanka',
        type: 'international',
        logoUrl: '/placeholder.svg',
        website: 'https://www.worldvision.lk',
        verificationStatus: 'verified',
        partnership: {
          role: 'Technical Partner',
          contribution: 'Drilling equipment and expertise',
          startDate: subDays(new Date(), 60),
          description: 'Providing specialized drilling equipment and technical expertise for water well construction'
        }
      },
      {
        id: 'p2',
        name: 'Moneragala District Secretariat',
        type: 'government',
        logoUrl: '/placeholder.svg',
        verificationStatus: 'verified',
        partnership: {
          role: 'Government Liaison',
          contribution: 'Permits and community coordination',
          startDate: subDays(new Date(), 45),
          description: 'Facilitating government permits and coordinating with local communities'
        }
      }
    ]
  },
  {
    id: '2',
    title: 'WildGuard Lanka - AI Wildlife Monitoring System',
    slug: 'wildguard-lanka-ai-monitoring',
    description: 'Developing cutting-edge AI technology to protect Sri Lankan endangered species in Yala, Udawalawe, and Wilpattu National Parks. Our mobile app uses machine learning to identify animals from camera trap photos, track migration patterns, and alert rangers to poaching activities. The system will monitor 45 leopards, 200+ elephants, and rare birds like the Sri Lankan junglefowl. Working directly with Department of Wildlife Conservation and park rangers to reduce human-elephant conflict and combat poaching through real-time monitoring and predictive analytics.',
    shortDescription: 'AI-powered wildlife monitoring system for Sri Lankan national parks',
    category: 'technology',
    creatorId: '2',
    creator: {
      id: '2',
      displayName: 'Anura Silva',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.6,
      location: 'Kandy, Central Province'
    },
    fundingGoal: 2500000,
    currentAmount: 1850000,
    currency: 'LKR',
    fundingType: 'keep_what_you_raise',
    startDate: subDays(new Date(), 12),
    endDate: addDays(new Date(), 43),
    createdAt: subDays(new Date(), 16),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 12),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=450&fit=crop',
    images: [
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=450&fit=crop',
        alt: 'Sri Lankan leopard in Yala National Park',
        order: 0
      },
      {
        id: '2b',
        url: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&h=450&fit=crop',
        alt: 'Elephant herd in Udawalawe National Park',
        order: 1
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Southern Province',
      city: 'Tissamaharama'
    },
    donorCount: 378,
    shareCount: 156,
    viewCount: 6890,
    updates: [],
    faqs: [],
    tags: ['technology', 'wildlife conservation', 'AI', 'leopards', 'elephants', 'national parks'],
    featured: true,
    trending: true,
    urgent: false,
    percentFunded: 74.0,
    daysRemaining: 43,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '3',
    title: 'Mobile Medical Clinic for Vanni Region',
    slug: 'mobile-medical-clinic-vanni',
    description: 'Establishing a fully-equipped mobile medical clinic serving 15 remote villages in Northern Province\'s Vanni region. Many residents haven\'t had access to proper healthcare since the war ended, with the nearest hospital 60km away. Our clinic will provide primary healthcare, maternal care, child immunizations, and chronic disease management. The vehicle includes digital X-ray, ultrasound, laboratory equipment, and telemedicine capabilities for specialist consultations. Staffed by qualified doctors, nurses, and a pharmacist, operating 6 days per week with free services for low-income families.',
    shortDescription: 'Mobile medical clinic serving 15 remote villages in Vanni region',
    category: 'medical',
    creatorId: '4',
    creator: {
      id: '4',
      displayName: 'Dr. Chaminda Wickramasinghe',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.9,
      location: 'Anuradhapura, North Central Province'
    },
    fundingGoal: 3500000,
    currentAmount: 3250000,
    currency: 'LKR',
    fundingType: 'all_or_nothing',
    startDate: subDays(new Date(), 28),
    endDate: addDays(new Date(), 12),
    createdAt: subDays(new Date(), 32),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 28),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=450&fit=crop',
    images: [
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=450&fit=crop',
        alt: 'Medical equipment for mobile clinic',
        order: 0
      },
      {
        id: '3b',
        url: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=450&fit=crop',
        alt: 'Doctor examining patient in rural clinic',
        order: 1
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Northern Province',
      city: 'Kilinochchi'
    },
    donorCount: 467,
    shareCount: 234,
    viewCount: 8950,
    updates: [],
    faqs: [],
    tags: ['healthcare', 'mobile clinic', 'rural medicine', 'post-conflict', 'telemedicine'],
    featured: false,
    trending: false,
    urgent: true,
    percentFunded: 92.9,
    daysRemaining: 12,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '4',
    title: 'Scholarship Fund for Estate Children',
    slug: 'scholarship-estate-children',
    description: 'Providing comprehensive educational support for 75 children from tea estate families in Nuwara Eliya district. Estate children face unique challenges - poverty, language barriers, and limited educational resources. Our scholarship program covers school fees, uniforms, books, shoes, bags, daily meals, and transportation for grades 6-13. Additionally, we provide after-school tutoring in Sinhala and English, computer literacy classes, and career guidance. The program includes financial support for families to prevent child labor, plus university entrance preparation and higher education scholarships for outstanding students.',
    shortDescription: 'Educational scholarships and support for 75 tea estate children in Nuwara Eliya',
    category: 'education',
    creatorId: '1',
    creator: {
      id: '1',
      displayName: 'Priya Fernando',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.8,
      location: 'Badulla, Uva Province'
    },
    fundingGoal: 1875000,
    currentAmount: 650000,
    currency: 'LKR',
    fundingType: 'keep_what_you_raise',
    startDate: subDays(new Date(), 8),
    endDate: addDays(new Date(), 67),
    createdAt: subDays(new Date(), 12),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 8),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=450&fit=crop',
    images: [
      {
        id: '4',
        url: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=450&fit=crop',
        alt: 'Estate children in classroom in Nuwara Eliya',
        order: 0
      },
      {
        id: '4b',
        url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop',
        alt: 'Tea estate workers\' children studying',
        order: 1
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Central Province',
      city: 'Nuwara Eliya'
    },
    donorCount: 189,
    shareCount: 67,
    viewCount: 2340,
    updates: [],
    faqs: [],
    tags: ['education', 'estate children', 'scholarship', 'poverty alleviation', 'tamil education'],
    featured: false,
    trending: false,
    urgent: false,
    percentFunded: 34.7,
    daysRemaining: 67,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '5',
    title: 'Turtle Hatchery Restoration Project',
    slug: 'turtle-hatchery-restoration',
    description: 'Restoring and expanding the historic turtle hatchery in Kosgoda, protecting five species of sea turtles nesting along Sri Lanka\'s southwest coast. Our project rebuilds damaged hatching tanks, installs LED lighting that doesn\'t disturb nesting turtles, creates visitor education center, and trains 12 local youth as turtle conservationists. The hatchery protects nests from predators, monitors hatching success rates, and safely releases 15,000+ baby turtles annually into the ocean. Community outreach programs educate fishermen about turtle-safe fishing practices and the importance of marine conservation.',
    shortDescription: 'Restoring Kosgoda turtle hatchery and training local conservationists',
    category: 'animals',
    creatorId: '3',
    creator: {
      id: '3',
      displayName: 'Sanduni Perera',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.9,
      location: 'Mirissa, Southern Province'
    },
    fundingGoal: 950000,
    currentAmount: 950000,
    currency: 'LKR',
    fundingType: 'all_or_nothing',
    startDate: subDays(new Date(), 52),
    endDate: subDays(new Date(), 3),
    createdAt: subDays(new Date(), 58),
    updatedAt: subDays(new Date(), 3),
    launchedAt: subDays(new Date(), 52),
    status: 'completed',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=450&fit=crop',
    images: [
      {
        id: '5',
        url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=450&fit=crop',
        alt: 'Sea turtle returning to ocean at Kosgoda beach',
        order: 0
      },
      {
        id: '5b',
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=450&fit=crop',
        alt: 'Baby turtles being released into ocean',
        order: 1
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Southern Province',
      city: 'Kosgoda'
    },
    donorCount: 543,
    shareCount: 287,
    viewCount: 12450,
    updates: [],
    faqs: [],
    tags: ['marine conservation', 'sea turtles', 'wildlife protection', 'coastal restoration', 'eco-tourism'],
    featured: true,
    trending: false,
    urgent: false,
    percentFunded: 100.0,
    daysRemaining: 0,
    isFullyFunded: true,
    isExpired: true
  },
  {
    id: '6',
    title: 'Vesak Festival Cultural Revival',
    slug: 'vesak-festival-cultural-revival',
    description: 'Reviving the traditional Vesak festival celebrations in Anuradhapura with authentic cultural performances, traditional lantern-making workshops, and Buddhist religious education programs. The festival will showcase ancient Sinhala arts including Kandyan dancing, traditional drumming (geta beraya), and folk songs passed down through generations. We\'ll organize lantern competitions, Dansala charity food stalls, and religious ceremonies at historic temples. The three-day event will attract pilgrims from across South Asia, supporting local artisans, traditional craft makers, and temple musicians while preserving Buddhist cultural heritage.',
    shortDescription: 'Reviving traditional Vesak celebrations with cultural performances in Anuradhapura',
    category: 'arts_culture',
    creatorId: '5',
    creator: {
      id: '5',
      displayName: 'Kumari Jayawardena',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.7,
      location: 'Kandy, Central Province'
    },
    fundingGoal: 675000,
    currentAmount: 420000,
    currency: 'LKR',
    fundingType: 'keep_what_you_raise',
    startDate: subDays(new Date(), 15),
    endDate: addDays(new Date(), 25),
    createdAt: subDays(new Date(), 19),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 15),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop',
    images: [
      {
        id: '6',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop',
        alt: 'Traditional Kandyan dancers performing during Vesak',
        order: 0
      },
      {
        id: '6b',
        url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=450&fit=crop',
        alt: 'Colorful Vesak lanterns illuminating ancient temple',
        order: 1
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'North Central Province',
      city: 'Anuradhapura'
    },
    donorCount: 134,
    shareCount: 89,
    viewCount: 2890,
    updates: [],
    faqs: [],
    tags: ['vesak', 'buddhist culture', 'traditional arts', 'kandyan dancing', 'religious festival'],
    featured: false,
    trending: false,
    urgent: false,
    percentFunded: 62.2,
    daysRemaining: 25,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '7',
    title: 'Village Cricket Academy Network',
    slug: 'village-cricket-academy',
    description: 'Establishing cricket training academies in 8 rural villages across Polonnaruwa district, providing coaching and equipment for 200+ young players aged 8-18. Many talented rural cricketers lack proper training facilities and quality coaching. Our program includes qualified coaches (former provincial players), modern equipment, practice nets, turf wickets, and tournament opportunities. We\'ll identify promising talent for district and provincial teams, providing pathways from village cricket to professional levels. The academies will operate year-round with free coaching for underprivileged children, plus sports scholarships for exceptional players.',
    shortDescription: 'Cricket training academies for 200+ rural youth in Polonnaruwa district',
    category: 'sports',
    creatorId: '2',
    creator: {
      id: '2',
      displayName: 'Anura Silva',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.6,
      location: 'Kandy, Central Province'
    },
    fundingGoal: 850000,
    currentAmount: 380000,
    currency: 'LKR',
    fundingType: 'all_or_nothing',
    startDate: subDays(new Date(), 6),
    endDate: addDays(new Date(), 54),
    createdAt: subDays(new Date(), 10),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 6),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=450&fit=crop',
    images: [
      {
        id: '7',
        url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=450&fit=crop',
        alt: 'Young cricketers practicing in rural academy',
        order: 0
      },
      {
        id: '7b',
        url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=450&fit=crop',
        alt: 'Cricket coach training village youth',
        order: 1
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'North Central Province',
      city: 'Polonnaruwa'
    },
    donorCount: 156,
    shareCount: 43,
    viewCount: 1890,
    updates: [],
    faqs: [],
    tags: ['cricket', 'youth sports', 'rural development', 'talent development', 'sports education'],
    featured: false,
    trending: false,
    urgent: false,
    percentFunded: 44.7,
    daysRemaining: 54,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '8',
    title: 'Cyclone Relief for Batticaloa Families',
    slug: 'cyclone-relief-batticaloa',
    description: 'Emergency assistance for 350+ families affected by recent cyclone damage in Batticaloa district. The cyclone destroyed homes, fishing boats, and crops, leaving entire fishing communities without livelihoods. Our relief program provides temporary shelter materials, clean drinking water, non-perishable food supplies, medical care, and hygiene kits. Long-term support includes rebuilding fishing boats, repairing damaged houses, replacing agricultural equipment, and providing seed money for small businesses. Working with local Tamil and Muslim community leaders to ensure culturally appropriate aid distribution and transparent community-based recovery.',
    shortDescription: 'Cyclone relief and recovery support for 350+ families in Batticaloa',
    category: 'disaster_relief',
    creatorId: '3',
    creator: {
      id: '3',
      displayName: 'Sanduni Perera',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.9,
      location: 'Mirissa, Southern Province'
    },
    fundingGoal: 1500000,
    currentAmount: 1285000,
    currency: 'LKR',
    fundingType: 'keep_what_you_raise',
    startDate: subDays(new Date(), 2),
    endDate: addDays(new Date(), 18),
    createdAt: subDays(new Date(), 4),
    updatedAt: addHours(new Date(), -3),
    launchedAt: subDays(new Date(), 2),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=450&fit=crop',
    images: [
      {
        id: '8',
        url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=450&fit=crop',
        alt: 'Cyclone damage in Batticaloa fishing village',
        order: 0
      },
      {
        id: '8b',
        url: 'https://images.unsplash.com/photo-1594736797933-d0aa5ba20203?w=800&h=450&fit=crop',
        alt: 'Relief supplies being distributed to affected families',
        order: 1
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Eastern Province',
      city: 'Batticaloa'
    },
    donorCount: 478,
    shareCount: 267,
    viewCount: 8900,
    updates: [],
    faqs: [],
    tags: ['cyclone relief', 'emergency aid', 'fishing communities', 'eastern province', 'disaster recovery'],
    featured: true,
    trending: true,
    urgent: true,
    percentFunded: 85.7,
    daysRemaining: 18,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '9',
    title: 'Solar Power for Rural Schools',
    slug: 'solar-power-rural-schools',
    description: 'Installing solar power systems in 12 remote schools across Hambantota district where grid electricity is unreliable. These schools serve 1,800+ students who currently study by candlelight after sunset. Solar panels, batteries, and LED lighting will enable evening classes, computer labs, and digital learning resources. The project includes teacher training on renewable energy, student workshops on climate change, and maintenance support for 5 years.',
    shortDescription: 'Solar power installation for 12 rural schools in Hambantota district',
    category: 'community',
    creatorId: '2',
    creator: {
      id: '2',
      displayName: 'Anura Silva',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.6,
      location: 'Kandy, Central Province'
    },
    fundingGoal: 1800000,
    currentAmount: 720000,
    currency: 'LKR',
    fundingType: 'keep_what_you_raise',
    startDate: subDays(new Date(), 14),
    endDate: addDays(new Date(), 36),
    createdAt: subDays(new Date(), 18),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 14),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop',
    images: [
      {
        id: '9',
        url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop',
        alt: 'Solar panels on rural school roof',
        order: 0
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Southern Province',
      city: 'Hambantota'
    },
    donorCount: 145,
    shareCount: 67,
    viewCount: 2890,
    updates: [],
    faqs: [],
    tags: ['solar energy', 'education', 'renewable energy', 'rural schools', 'sustainability'],
    featured: false,
    trending: true,
    urgent: false,
    percentFunded: 40.0,
    daysRemaining: 36,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '10',
    title: 'Mental Health Support Network',
    slug: 'mental-health-support-network',
    description: 'Creating community-based mental health support centers in Colombo suburban areas. With rising stress, depression, and anxiety in urban communities, accessible mental health services are critically needed. Our network will provide counseling, group therapy, awareness programs, and crisis intervention services. Staffed by qualified psychologists and trained volunteers, offering services in Sinhala, Tamil, and English.',
    shortDescription: 'Community mental health support centers in Colombo suburbs',
    category: 'medical',
    creatorId: '4',
    creator: {
      id: '4',
      displayName: 'Dr. Chaminda Wickramasinghe',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.9,
      location: 'Anuradhapura, North Central Province'
    },
    fundingGoal: 2200000,
    currentAmount: 1980000,
    currency: 'LKR',
    fundingType: 'all_or_nothing',
    startDate: subDays(new Date(), 25),
    endDate: addDays(new Date(), 5),
    createdAt: subDays(new Date(), 29),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 25),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop',
    images: [
      {
        id: '10',
        url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop',
        alt: 'Mental health counseling session',
        order: 0
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Western Province',
      city: 'Colombo'
    },
    donorCount: 312,
    shareCount: 189,
    viewCount: 5670,
    updates: [],
    faqs: [],
    tags: ['mental health', 'counseling', 'community support', 'urban health', 'psychological wellbeing'],
    featured: true,
    trending: false,
    urgent: true,
    percentFunded: 90.0,
    daysRemaining: 5,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '11',
    title: 'Traditional Craft Revival Center',
    slug: 'traditional-craft-revival',
    description: 'Establishing a training center for traditional Sri Lankan crafts in Kandy - wood carving, brass work, silver jewelry, handloom weaving, and lacquer work. Many ancient skills are disappearing as elderly artisans pass away without transferring knowledge. Our center will train 50 young people in traditional techniques, provide modern marketing support, and create online sales platforms for authentic Sri Lankan handicrafts.',
    shortDescription: 'Training center for traditional Sri Lankan crafts and artisan skills',
    category: 'arts_culture',
    creatorId: '5',
    creator: {
      id: '5',
      displayName: 'Kumari Jayawardena',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.7,
      location: 'Kandy, Central Province'
    },
    fundingGoal: 1250000,
    currentAmount: 550000,
    currency: 'LKR',
    fundingType: 'keep_what_you_raise',
    startDate: subDays(new Date(), 21),
    endDate: addDays(new Date(), 39),
    createdAt: subDays(new Date(), 25),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 21),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop',
    images: [
      {
        id: '11',
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop',
        alt: 'Traditional woodcarver at work',
        order: 0
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Central Province',
      city: 'Kandy'
    },
    donorCount: 189,
    shareCount: 145,
    viewCount: 3450,
    updates: [],
    faqs: [],
    tags: ['traditional crafts', 'artisan training', 'cultural preservation', 'handicrafts', 'skill development'],
    featured: false,
    trending: false,
    urgent: false,
    percentFunded: 44.0,
    daysRemaining: 39,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '12',
    title: 'Women Entrepreneurs Microfinance',
    slug: 'women-entrepreneurs-microfinance',
    description: 'Providing microfinance and business training for 100 women entrepreneurs in Galle district. Many women have viable business ideas but lack access to capital and business skills. Our program offers small loans (Rs. 25,000-100,000), business development training, marketing support, and mentorship. Focus areas include food processing, textile production, organic farming, and digital services.',
    shortDescription: 'Microfinance and training program for 100 women entrepreneurs in Galle',
    category: 'community',
    creatorId: '1',
    creator: {
      id: '1',
      displayName: 'Priya Fernando',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.8,
      location: 'Badulla, Uva Province'
    },
    fundingGoal: 3500000,
    currentAmount: 1850000,
    currency: 'LKR',
    fundingType: 'all_or_nothing',
    startDate: subDays(new Date(), 35),
    endDate: addDays(new Date(), 25),
    createdAt: subDays(new Date(), 39),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 35),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop',
    images: [
      {
        id: '12',
        url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop',
        alt: 'Women entrepreneurs in training session',
        order: 0
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Southern Province',
      city: 'Galle'
    },
    donorCount: 234,
    shareCount: 98,
    viewCount: 4560,
    updates: [],
    faqs: [],
    tags: ['microfinance', 'women empowerment', 'entrepreneurship', 'small business', 'economic development'],
    featured: true,
    trending: false,
    urgent: false,
    percentFunded: 52.9,
    daysRemaining: 25,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '13',
    title: 'Emergency Flood Response Kit',
    slug: 'emergency-flood-response',
    description: 'Preparing emergency response kits for flood-prone areas in Kalutara and Ratnapura districts. Climate change has increased flooding frequency, and communities need rapid response capabilities. Each kit contains water purification tablets, emergency food, first aid supplies, waterproof storage, emergency communication devices, and evacuation equipment for 20 families.',
    shortDescription: 'Emergency flood response kits for vulnerable communities',
    category: 'disaster_relief',
    creatorId: '3',
    creator: {
      id: '3',
      displayName: 'Sanduni Perera',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.9,
      location: 'Mirissa, Southern Province'
    },
    fundingGoal: 800000,
    currentAmount: 680000,
    currency: 'LKR',
    fundingType: 'keep_what_you_raise',
    startDate: subDays(new Date(), 9),
    endDate: addDays(new Date(), 11),
    createdAt: subDays(new Date(), 13),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 9),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=450&fit=crop',
    images: [
      {
        id: '13',
        url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=450&fit=crop',
        alt: 'Flood relief supplies being distributed',
        order: 0
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Sabaragamuwa Province',
      city: 'Ratnapura'
    },
    donorCount: 167,
    shareCount: 134,
    viewCount: 3240,
    updates: [],
    faqs: [],
    tags: ['flood relief', 'emergency preparedness', 'disaster response', 'climate adaptation', 'community resilience'],
    featured: false,
    trending: true,
    urgent: true,
    percentFunded: 85.0,
    daysRemaining: 11,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '14',
    title: 'Youth Football Academy',
    slug: 'youth-football-academy',
    description: 'Creating a comprehensive football training academy in Jaffna for youth aged 10-18. Despite the talent in Northern Province, young players lack proper coaching and facilities. Our academy will provide professional coaching, modern equipment, nutritional support, and pathways to club and national team selection. Includes girls\' teams and coaching certification programs.',
    shortDescription: 'Professional football academy for youth in Jaffna',
    category: 'sports',
    creatorId: '2',
    creator: {
      id: '2',
      displayName: 'Anura Silva',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.6,
      location: 'Kandy, Central Province'
    },
    fundingGoal: 1650000,
    currentAmount: 450000,
    currency: 'LKR',
    fundingType: 'all_or_nothing',
    startDate: subDays(new Date(), 7),
    endDate: addDays(new Date(), 53),
    createdAt: subDays(new Date(), 11),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 7),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=450&fit=crop',
    images: [
      {
        id: '14',
        url: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=450&fit=crop',
        alt: 'Youth football training session',
        order: 0
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Northern Province',
      city: 'Jaffna'
    },
    donorCount: 89,
    shareCount: 45,
    viewCount: 1670,
    updates: [],
    faqs: [],
    tags: ['football', 'youth sports', 'northern province', 'talent development', 'sports academy'],
    featured: false,
    trending: false,
    urgent: false,
    percentFunded: 27.3,
    daysRemaining: 53,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '15',
    title: 'Digital Literacy for Senior Citizens',
    slug: 'digital-literacy-seniors',
    description: 'Teaching digital skills to 200+ senior citizens in Negombo area. With increasing digitization, elderly people struggle with online banking, government services, and staying connected with family. Our program offers tablet computers, simplified interfaces, patient instruction, and ongoing support. Classes cover basics: email, video calls, online shopping, digital payments, and internet safety.',
    shortDescription: 'Digital literacy training program for 200+ senior citizens',
    category: 'technology',
    creatorId: '2',
    creator: {
      id: '2',
      displayName: 'Anura Silva',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.6,
      location: 'Kandy, Central Province'
    },
    fundingGoal: 950000,
    currentAmount: 850000,
    currency: 'LKR',
    fundingType: 'keep_what_you_raise',
    startDate: subDays(new Date(), 18),
    endDate: addDays(new Date(), 22),
    createdAt: subDays(new Date(), 22),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 18),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
    images: [
      {
        id: '15',
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
        alt: 'Senior citizen learning to use tablet',
        order: 0
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Western Province',
      city: 'Negombo'
    },
    donorCount: 178,
    shareCount: 89,
    viewCount: 2890,
    updates: [],
    faqs: [],
    tags: ['digital literacy', 'senior citizens', 'technology education', 'elderly support', 'digital inclusion'],
    featured: false,
    trending: false,
    urgent: false,
    percentFunded: 89.5,
    daysRemaining: 22,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '16',
    title: 'Organic Farm to Table Network',
    slug: 'organic-farm-network',
    description: 'Connecting 50 organic farmers in Matale district with urban consumers through a sustainable supply chain. Small organic farmers struggle to find markets for premium produce. Our network includes collection centers, cold storage, transport logistics, online marketplace, and direct-to-consumer delivery. Consumers get fresh organic vegetables while farmers receive fair prices.',
    shortDescription: 'Organic farm-to-table network connecting 50 farmers with urban markets',
    category: 'community',
    creatorId: '1',
    creator: {
      id: '1',
      displayName: 'Priya Fernando',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.8,
      location: 'Badulla, Uva Province'
    },
    fundingGoal: 2100000,
    currentAmount: 1260000,
    currency: 'LKR',
    fundingType: 'all_or_nothing',
    startDate: subDays(new Date(), 31),
    endDate: addDays(new Date(), 29),
    createdAt: subDays(new Date(), 35),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 31),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=450&fit=crop',
    images: [
      {
        id: '16',
        url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=450&fit=crop',
        alt: 'Organic vegetable farm in Matale',
        order: 0
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Central Province',
      city: 'Matale'
    },
    donorCount: 156,
    shareCount: 78,
    viewCount: 3240,
    updates: [],
    faqs: [],
    tags: ['organic farming', 'sustainable agriculture', 'farm to table', 'rural livelihoods', 'food security'],
    featured: true,
    trending: true,
    urgent: false,
    percentFunded: 60.0,
    daysRemaining: 29,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '17',
    title: 'Street Dog Vaccination Program',
    slug: 'street-dog-vaccination',
    description: 'Comprehensive vaccination and sterilization program for street dogs in Kurunegala district. With over 2,000 stray dogs, rabies and population control are major concerns. Our veterinary team will vaccinate, sterilize, and provide medical care for street dogs. Community education programs will teach responsible pet ownership and reduce abandonment.',
    shortDescription: 'Vaccination and sterilization program for 2,000+ street dogs',
    category: 'animals',
    creatorId: '3',
    creator: {
      id: '3',
      displayName: 'Sanduni Perera',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.9,
      location: 'Mirissa, Southern Province'
    },
    fundingGoal: 1350000,
    currentAmount: 945000,
    currency: 'LKR',
    fundingType: 'keep_what_you_raise',
    startDate: subDays(new Date(), 24),
    endDate: addDays(new Date(), 16),
    createdAt: subDays(new Date(), 28),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 24),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=450&fit=crop',
    images: [
      {
        id: '17',
        url: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=450&fit=crop',
        alt: 'Veterinarian examining street dog',
        order: 0
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'North Western Province',
      city: 'Kurunegala'
    },
    donorCount: 267,
    shareCount: 178,
    viewCount: 4560,
    updates: [],
    faqs: [],
    tags: ['animal welfare', 'street dogs', 'vaccination', 'sterilization', 'rabies prevention'],
    featured: false,
    trending: false,
    urgent: false,
    percentFunded: 70.0,
    daysRemaining: 16,
    isFullyFunded: false,
    isExpired: false
  },
  {
    id: '18',
    title: 'Library Renovation and Book Drive',
    slug: 'library-renovation-books',
    description: 'Renovating the historic Badulla Public Library and expanding its collection with 5,000 new books in Sinhala, Tamil, and English. The 100-year-old library serves 15,000+ residents but needs structural repairs, modern furniture, computer facilities, and updated books. The project includes a children\'s reading corner, study areas, and digital resources.',
    shortDescription: 'Historic library renovation and 5,000 new books for Badulla community',
    category: 'education',
    creatorId: '5',
    creator: {
      id: '5',
      displayName: 'Kumari Jayawardena',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      verificationStatus: 'verified',
      rating: 4.7,
      location: 'Kandy, Central Province'
    },
    fundingGoal: 1100000,
    currentAmount: 330000,
    currency: 'LKR',
    fundingType: 'all_or_nothing',
    startDate: subDays(new Date(), 11),
    endDate: addDays(new Date(), 49),
    createdAt: subDays(new Date(), 15),
    updatedAt: new Date(),
    launchedAt: subDays(new Date(), 11),
    status: 'active',
    visibility: 'public',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
    images: [
      {
        id: '18',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
        alt: 'Historic library interior with old books',
        order: 0
      }
    ],
    location: {
      country: 'Sri Lanka',
      state: 'Uva Province',
      city: 'Badulla'
    },
    donorCount: 78,
    shareCount: 34,
    viewCount: 1450,
    updates: [],
    faqs: [],
    tags: ['library', 'education', 'books', 'community space', 'literacy'],
    featured: false,
    trending: false,
    urgent: false,
    percentFunded: 30.0,
    daysRemaining: 49,
    isFullyFunded: false,
    isExpired: false
  }
];

// Mock platform statistics - Updated with Authentic Sri Lankan Data
export const mockPlatformStats = {
  totalDonors: 72854,
  totalDonations: 156750000, // LKR
  activeProjects: 234,
  partnerOrganizations: 127,
  successfulProjects: 1847,
  totalRaised: 875000000, // LKR
  projectsFullyFunded: 1523,
  averageDonation: 4500, // LKR
  topCategory: 'medical',
  districtsServed: 25,
  communitiesImpacted: 12400,
  volunteersActive: 3890
};