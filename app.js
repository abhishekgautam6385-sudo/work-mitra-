// WorkMitra - Enterprise SaaS Standard Multi-Role Platform + PWA Support (SIH 089)

// Global Application & Session State
const state = {
  currentUser: {
    id: 'user-cust-1',
    name: 'Sunita Aggarwal',
    phone: '+91 98100 12345',
    email: 'sunita@example.com',
    role: 'customer',
    organization: 'Delhi Households & RWAs'
  },
  currentRole: 'customer',
  currentLang: 'hi',
  workerLanguage: 'hi',
  selectedCategory: 'All',
  selectedService: null,
  activeBooking: null,
  customerLocation: { lat: 28.5921, lng: 77.046, address: 'Flat 402, Green Glen Apartments, Dwarka Sector 12, New Delhi' },
  
  saasAuth: {
    targetRole: 'customer',
    mode: 'login',
    method: 'password'
  },

  pwa: {
    deferredPrompt: null,
    isInstalled: false,
    isOnline: navigator.onLine
  },

  services: [
    { id: 'srv-1', name: 'Plumbing & Pipe Fix', nameHindi: 'प्लंबिंग और पाइप मरम्मत', nameHinglish: 'Plumbing (नल-पाइप)', category: 'Plumbing', icon: 'fa-wrench', basePrice: 350, description: 'Fix tap leaks, pipe bursts, bathroom fittings and drain blockages.', descriptionHindi: 'नल रिसाव, पाइप फटने, बाथरूम फिटिंग और नाली ब्लॉक ठीक करना।', descriptionHinglish: 'Tap leaks, pipe burst aur drain blockages repair karein.', popular: true },
    { id: 'srv-2', name: 'Electrical & Wiring', nameHindi: 'बिजली और वायरिंग कार्य', nameHinglish: 'Electrical (बिजली काम)', category: 'Electrical', icon: 'fa-bolt', basePrice: 300, description: 'Short circuit repairs, switchboard installation, fan & light fitting.', descriptionHindi: 'शॉर्ट सर्किट मरम्मत, स्विचबोर्ड इंस्टॉलेशन, पंखा व लाइट फिटिंग।', descriptionHinglish: 'Short circuit repairs, switchboard installation & fan fitting.', popular: true },
    { id: 'srv-3', name: 'Full House Cleaning', nameHindi: 'पूरे घर की सफाई', nameHinglish: 'Full House Cleaning (घर की सफाई)', category: 'Cleaning', icon: 'fa-broom', basePrice: 800, description: 'Deep cleaning for 2BHK/3BHK homes, kitchen degreasing & floor scrubbing.', descriptionHindi: '2BHK/3BHK घरों की गहरी सफाई, रसोई डीग्रीजिंग और फर्श स्क्रबिंग।', descriptionHinglish: '2BHK/3BHK ghar ki deep cleaning, kitchen & floor scrubbing.', popular: true },
    { id: 'srv-4', name: 'AC & Appliance Repair', nameHindi: 'एसी और उपकरण मरम्मत', nameHinglish: 'AC & Appliance Repair', category: 'Appliance', icon: 'fa-tv', basePrice: 500, description: 'AC servicing, gas filling, refrigerator & washing machine diagnosis.', descriptionHindi: 'एसी सर्विसिंग, गैस भरना, फ्रिज और वाशिंग मशीन मरम्मत।', descriptionHinglish: 'AC servicing, gas filling, fridge & washing machine repair.', popular: false },
    { id: 'srv-5', name: 'Carpentry & Furniture', nameHindi: 'बढ़ईगीरी और फर्नीचर कार्य', nameHinglish: 'Carpentry & Furniture (बढ़ई)', category: 'Carpentry', icon: 'fa-hammer', basePrice: 400, description: 'Door latch repairs, furniture assembly, custom shelving and lock fixes.', descriptionHindi: 'दरवाजे की कुंडी मरम्मत, फर्नीचर असेंबली व लॉक ठीक करना।', descriptionHinglish: 'Door latch repairs, furniture assembly & lock fixes.', popular: false },
    { id: 'srv-6', name: 'Sanitation & Pest Control', nameHindi: 'कीट नियंत्रण और सेनेटाइजेशन', nameHinglish: 'Sanitation & Pest Control', category: 'Sanitation', icon: 'fa-shield-virus', basePrice: 650, description: 'Herbal termite treatment, cockroach control, disinfectant spraying.', descriptionHindi: 'हर्बल दीमक उपचार, कॉकरोच नियंत्रण, कीटाणुनाशक छिड़काव।', descriptionHinglish: 'Herbal termite treatment & cockroach control.', popular: false },
    { id: 'srv-7', name: 'Wall Painting & Care', nameHindi: 'दीवार पुताई और वॉटरप्रूफिंग', nameHinglish: 'Wall Painting (घर की पुताई)', category: 'Painting', icon: 'fa-paint-roller', basePrice: 700, description: 'Interior/exterior wall painting, putty smoothing, texture design & touchups.', descriptionHindi: 'आंतरिक/बाहरी दीवार पेंटिंग, पुट्टी चिकनाई, टेक्सचर डिजाइन।', descriptionHinglish: 'Interior/exterior wall painting, putty smoothing & texture design.', popular: true },
    { id: 'srv-8', name: 'Gardening & Lawn Care', nameHindi: 'बागवानी और लॉन रखरखाव', nameHinglish: 'Gardening & Lawn (बागवानी)', category: 'Gardening', icon: 'fa-seedling', basePrice: 450, description: 'Lawn mowing, plant pruning, soil manuring, terrace garden setup & weeding.', descriptionHindi: 'घास काटना, पौधों की छंटाई, खाद डालना, छत पर बगीचा लगाना।', descriptionHinglish: 'Lawn mowing, plant pruning, soil manuring & terrace garden setup.', popular: false }
  ],

  workers: [
    { id: 'wrk-101', name: 'Rahul Sharma', nameHindi: 'राहुल शर्मा', phone: '+91 98765 43210', email: 'rahul@workmitra.org', cooperative: 'Delhi Rural Skilled Workers Cooperative', skills: ['Plumbing', 'Sanitation', 'Painting'], experienceYears: 5, rating: 4.85, totalReviews: 124, jobsCompletedThisMonth: 6, status: 'Available', verificationStatus: 'VERIFIED', badges: ['Master Plumber', 'Verified Cooperative Member', 'Top Rated'], insuranceActive: true, welfareBalance: 2450, location: { city: 'New Delhi', area: 'Dwarka Sec 12', lat: 28.5921, lng: 77.046 } },
    { id: 'wrk-102', name: 'Amit Verma', nameHindi: 'अमित वर्मा', phone: '+91 98112 33445', email: 'amit@workmitra.org', cooperative: 'Delhi Rural Skilled Workers Cooperative', skills: ['Electrical', 'Appliance', 'Painting'], experienceYears: 3, rating: 4.65, totalReviews: 98, jobsCompletedThisMonth: 14, status: 'Available', verificationStatus: 'VERIFIED', badges: ['Certified Electrician', 'Verified Cooperative Member'], insuranceActive: true, welfareBalance: 1800, location: { city: 'New Delhi', area: 'Janakpuri', lat: 28.6219, lng: 77.0878 } },
    { id: 'wrk-103', name: 'Suresh Kumar', nameHindi: 'सुरेश कुमार', phone: '+91 97123 45678', email: 'suresh@workmitra.org', cooperative: 'Noida Household Services Federation', skills: ['Cleaning', 'Sanitation', 'Gardening'], experienceYears: 6, rating: 4.78, totalReviews: 150, jobsCompletedThisMonth: 4, status: 'Available', verificationStatus: 'VERIFIED', badges: ['Hygiene Specialist', 'Verified Cooperative Member'], insuranceActive: true, welfareBalance: 3100, location: { city: 'Noida', area: 'Sector 62', lat: 28.628, lng: 77.3649 } },
    { id: 'wrk-104', name: 'Pooja Devi', nameHindi: 'पूजा देवी', phone: '+91 99554 11223', email: 'pooja@workmitra.org', cooperative: 'Noida Household Services Federation', skills: ['Cleaning', 'Appliance', 'Gardening'], experienceYears: 4, rating: 4.92, totalReviews: 86, jobsCompletedThisMonth: 5, status: 'Available', verificationStatus: 'VERIFIED', badges: ['Women Artisan Guild', 'Punctual Expert'], insuranceActive: true, welfareBalance: 2900, location: { city: 'Noida', area: 'Sector 18', lat: 28.5708, lng: 77.3261 } },
    { id: 'wrk-105', name: 'Ramesh Singh', nameHindi: 'रमेश सिंह', phone: '+91 98990 87654', email: 'ramesh@workmitra.org', cooperative: 'Gurugram Artisan Union', skills: ['Carpentry', 'Plumbing', 'Painting'], experienceYears: 7, rating: 4.70, totalReviews: 110, jobsCompletedThisMonth: 12, status: 'Busy', verificationStatus: 'VERIFIED', badges: ['Master Carpenter', 'Wall Painter'], insuranceActive: false, welfareBalance: 1200, location: { city: 'Gurugram', area: 'DLF Phase 3', lat: 28.4908, lng: 77.0947 } },
    { id: 'wrk-106', name: 'Vikas Yadav', nameHindi: 'विकास यादव', phone: '+91 98441 22334', email: 'vikas@workmitra.org', cooperative: 'Delhi Rural Skilled Workers Cooperative', skills: ['Plumbing', 'Gardening'], experienceYears: 2, rating: 4.5, totalReviews: 18, jobsCompletedThisMonth: 2, status: 'Available', verificationStatus: 'VERIFIED', badges: ['Newly Onboarded'], insuranceActive: false, welfareBalance: 0, location: { city: 'New Delhi', area: 'Uttam Nagar', lat: 28.621, lng: 77.054 } }
  ],

  bookings: [
    {
      id: 'BK-2026-8801',
      customerName: 'Sunita Aggarwal',
      customerPhone: '+91 98100 12345',
      customerAddress: 'Flat 402, Green Glen Apartments, Dwarka Sector 12, New Delhi',
      serviceId: 'srv-1',
      serviceName: 'Plumbing & Pipe Fix',
      category: 'Plumbing',
      amount: 350,
      cooperativeFee: 17.5,
      welfareFundContribution: 10,
      workerId: 'wrk-101',
      workerName: 'Rahul Sharma',
      workerPhone: '+91 98765 43210',
      status: 'ASSIGNED',
      arrivalOtp: '4829',
      departureOtp: '9103',
      scheduledTime: 'Today, 4:00 PM',
      beforeWorkPhoto: null,
      afterWorkPhoto: null,
      createdAt: '10:00 PM',
      timeline: [
        { status: 'CREATED', time: '10:00 PM', note: 'Service booked by customer' },
        { status: 'ASSIGNED', time: '10:02 PM', note: 'Matched with Rahul Sharma via Fair Allocation Engine' }
      ]
    }
  ]
};

let mapInstance = null;
let chartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
  initPWA();
  renderApp();
  initVoiceAssistant();
});

// ----------------------------------------------------
// PROGRESSIVE WEB APP (PWA) REGISTRATION ENGINE
// ----------------------------------------------------
function initPWA() {
  // Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('[PWA] ServiceWorker registered with scope:', reg.scope))
        .catch((err) => console.log('[PWA] ServiceWorker registration failed:', err));
    });
  }

  // Handle PWA Install Prompt Event
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    state.pwa.deferredPrompt = e;
    renderPwaInstallButton(true);
  });

  // Track Online / Offline Status
  window.addEventListener('online', () => {
    state.pwa.isOnline = true;
    showToast('Network restored. WorkMitra is Online!');
    updateNetworkBadge();
  });
  window.addEventListener('offline', () => {
    state.pwa.isOnline = false;
    showToast('Network disconnected. Running in Offline PWA Cache Mode.', 'error');
    updateNetworkBadge();
  });
}

function renderPwaInstallButton(show = false) {
  const container = document.getElementById('pwa-install-container');
  if (!container) return;

  if (show || state.pwa.deferredPrompt) {
    container.innerHTML = `
      <button onclick="triggerPwaInstall()" class="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center gap-1.5 animate-pulse">
        <i class="fas fa-download"></i> Install Web App (PWA)
      </button>
    `;
  }
}

function triggerPwaInstall() {
  if (state.pwa.deferredPrompt) {
    state.pwa.deferredPrompt.prompt();
    state.pwa.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast('WorkMitra App installed successfully on your device!');
      }
      state.pwa.deferredPrompt = null;
      renderPwaInstallButton(false);
    });
  } else {
    showToast('To install WorkMitra as a PWA, tap your browser menu and select "Add to Home Screen" or "Install App".');
  }
}

function updateNetworkBadge() {
  const badge = document.getElementById('network-status-badge');
  if (badge) {
    badge.innerHTML = state.pwa.isOnline
      ? `<span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Online</span>`
      : `<span class="px-2 py-0.5 text-[10px] font-bold bg-rose-100 text-rose-800 rounded-full flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-rose-500"></span> Offline Cache</span>`;
  }
}

function setRole(role) {
  state.currentRole = role;
  
  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.classList.remove('bg-emerald-600', 'text-white', 'shadow-md', 'shadow-sm');
    btn.classList.add('text-slate-600', 'hover:bg-slate-200');
  });
  
  document.querySelectorAll(`.role-${role}-btn`).forEach(activeBtn => {
    activeBtn.classList.remove('text-slate-600', 'hover:bg-slate-200');
    activeBtn.classList.add('bg-emerald-600', 'text-white', 'shadow-sm');
  });

  const activeBtnOld = document.getElementById(`role-${role}`);
  if (activeBtnOld) {
    activeBtnOld.classList.remove('text-slate-600', 'hover:bg-slate-200');
    activeBtnOld.classList.add('bg-emerald-600', 'text-white', 'shadow-sm');
  }

  document.getElementById('customer-view')?.classList.toggle('hidden', role !== 'customer');
  document.getElementById('worker-view')?.classList.toggle('hidden', role !== 'worker');
  document.getElementById('admin-view')?.classList.toggle('hidden', role !== 'admin');

  updateHeaderAuthBadge();
  updateNetworkBadge();

  if (role === 'customer') {
    renderCustomerView();
  } else if (role === 'worker') {
    renderWorkerView();
  } else if (role === 'admin') {
    renderAdminView();
  }
}

function setWorkerLang(lang) {
  state.workerLanguage = lang;
  document.getElementById('lang-hi')?.classList.toggle('bg-emerald-600', lang === 'hi');
  document.getElementById('lang-hi')?.classList.toggle('text-white', lang === 'hi');
  document.getElementById('lang-en')?.classList.toggle('bg-emerald-600', lang === 'en');
  document.getElementById('lang-en')?.classList.toggle('text-white', lang === 'en');
  renderWorkerView();
}

// ----------------------------------------------------
// MULTILINGUAL (I18N) TRANSLATION SYSTEM
// ----------------------------------------------------
const translations = {
  hi: {
    brandSubtitle: "पारदर्शी सामुदायिक सहकारिता प्लेटफॉर्म - शून्य बिचौलिया कमीशन",
    roleCustomer: "ग्राहक",
    roleWorker: "कार्यकर्ता पोर्टल",
    roleAdmin: "सहकारी एडमिन",
    heroBadge: "सामुदायिक कुशल कारीगरों व कामगारों का सशक्तिकरण",
    fairWagesBadge: "100% उचित वेतन",
    heroTitle: "घरेलू सेवाओं के लिए सत्यापित सहकारी कार्यकर्ताओं को बुक करें",
    heroDesc: "पारदर्शी सामुदायिक सहकारिता के तहत पंजीकृत प्लंबर, इलेक्ट्रिशियन, हाउसकीपर और कारीगरों से सीधे जुड़ें। शून्य छिपा हुआ बिचौलिया कमीशन।",
    statVerified: "सत्यापित कारीगर",
    statMiddlemanFees: "बिचौलिया शुल्क",
    statSatisfaction: "संतुष्टि दर",
    catAll: "सभी सेवाएं",
    catPlumbing: "प्लंबिंग",
    catElectrical: "बिजली कार्य",
    catCleaning: "सफाई",
    catAppliance: "उपकरण मरम्मत",
    catCarpentry: "बढ़ईगीरी",
    catPainting: "दीवार पुताई",
    catGardening: "बागवानी",
    selectServiceTitle: "सेवा श्रेणी चुनें",
    nearbyWorkersTitle: "आस-पास के सहकारी कार्यकर्ता",
    activeBookingsTitle: "सक्रिय बुकिंग और OTP सुरक्षा",
    workerAppBadge: "कार्यकर्ता ऐप इंटरफेस",
    workerHubTitle: "कार्यकर्ता डैशबोर्ड",
    workerHubSub: "ऑर्डर्स स्वीकार करें, OTP सत्यापित करें, कमाई और बीमा ट्रैक करें।",
    adminBadge: "सहकारी संघ इंटेलिजेंस डैशबोर्ड",
    adminTitle: "सहकारी सोसाइटी प्रबंधन",
    adminSub: "कार्यकर्ता सत्यापन, मांग का अनुमान, वेलफेयर फंड और उचित कार्यभार विश्लेषण।",
    bookNowBtn: "फेयर वर्कर मैच करें"
  },
  en: {
    brandSubtitle: "Cooperative Gig Services Platform for Household & Community Services",
    roleCustomer: "Customer",
    roleWorker: "Worker Portal",
    roleAdmin: "Cooperative Admin",
    heroBadge: "Empowering Cooperative Skilled Artisans & Workers",
    fairWagesBadge: "100% Fair Wages",
    heroTitle: "Book Verified Cooperative Workers for Household Services",
    heroDesc: "Directly connect with certified plumbers, electricians, housekeepers & artisans registered under transparent community cooperatives. Zero hidden middleman commissions.",
    statVerified: "Verified Artisans",
    statMiddlemanFees: "Middleman Fees",
    statSatisfaction: "Satisfaction Rate",
    catAll: "All Services",
    catPlumbing: "Plumbing",
    catElectrical: "Electrical",
    catCleaning: "Cleaning",
    catAppliance: "Appliance Repair",
    catCarpentry: "Carpentry",
    catPainting: "Painting & Decor",
    catGardening: "Gardening & Lawn",
    selectServiceTitle: "Select Service Category",
    nearbyWorkersTitle: "Nearby Cooperative Workers",
    activeBookingsTitle: "Active Bookings & OTP Security",
    workerAppBadge: "WORKER APP INTERFACE",
    workerHubTitle: "Worker Hub Dashboard",
    workerHubSub: "Manage incoming jobs, verify OTPs, track earnings & insurance.",
    adminBadge: "FEDERATION INTELLIGENCE DASHBOARD",
    adminTitle: "Cooperative Society Management",
    adminSub: "Worker verification, demand forecasting, welfare balance & fair workload analytics.",
    bookNowBtn: "Book Fair Worker"
  },
  hinglish: {
    brandSubtitle: "Household & Community Services ke liye Zero Commission Cooperative Platform",
    roleCustomer: "Customer Home",
    roleWorker: "Worker App",
    roleAdmin: "Cooperative Admin",
    heroBadge: "Cooperative Skilled Workers Ko Empower Karein",
    fairWagesBadge: "100% Fair Wages",
    heroTitle: "Household Services ke liye Verified Cooperative Workers Book Karein",
    heroDesc: "Certified plumbers, electricians, cleaners se bina kisi middleman commission ke direct connect karein. 100% transparent rates.",
    statVerified: "Verified Workers",
    statMiddlemanFees: "Middleman Commission",
    statSatisfaction: "Customer Rating",
    catAll: "All Services",
    catPlumbing: "Plumbing (पाइप/नल)",
    catElectrical: "Electrical (बिजली)",
    catCleaning: "Cleaning (सफाई)",
    catAppliance: "Appliance Repair",
    catCarpentry: "Carpentry (बढ़ई)",
    catPainting: "Painting (पुताई)",
    catGardening: "Gardening (बागवानी)",
    selectServiceTitle: "Service Select Karein",
    nearbyWorkersTitle: "Aas-paas ke Cooperative Workers",
    activeBookingsTitle: "Active Bookings & OTP Status",
    workerAppBadge: "WORKER APP INTERFACE",
    workerHubTitle: "Worker Hub Dashboard",
    workerHubSub: "Jobs accept karein, OTP verify karein, earnings & welfare balance check karein.",
    adminBadge: "FEDERATION INTELLIGENCE DASHBOARD",
    adminTitle: "Cooperative Society Management",
    adminSub: "Worker verification, demand forecasting, welfare balance & fair workload analytics.",
    bookNowBtn: "Worker Book Karein"
  }
};

function setGlobalLanguage(lang) {
  state.currentLang = lang;
  state.workerLanguage = (lang === 'en') ? 'en' : 'hi';

  // Update Language Selector Active State
  ['hi', 'en', 'hinglish'].forEach(l => {
    const btn = document.getElementById(`global-lang-${l}`);
    if (btn) {
      if (l === lang) {
        btn.className = 'global-lang-btn px-2.5 py-1.5 text-xs font-extrabold rounded-xl transition-all bg-emerald-600 text-white shadow-sm flex items-center gap-1';
      } else {
        btn.className = 'global-lang-btn px-2.5 py-1.5 text-xs font-bold rounded-xl transition-all text-slate-600 hover:bg-slate-200 flex items-center gap-1';
      }
    }
  });

  // Update data-i18n DOM elements
  const t = translations[lang] || translations.hi;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update Voice Assistant speech recognition lang
  if (typeof voiceState !== 'undefined' && voiceState && voiceState.recognition) {
    voiceState.recognition.lang = (lang === 'en') ? 'en-IN' : 'hi-IN';
  }

  showToast(`Language switched to ${lang === 'hi' ? 'हिंदी ' : lang === 'en' ? 'English ' : 'Hinglish '}`, 'success');

  // Re-render views
  renderApp();
}

function applyTranslations() {
  const lang = state.currentLang || 'hi';
  const t = translations[lang] || translations.hi;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
}

function renderApp() {
  const savedRole = localStorage.getItem('wm_role');
  if (savedRole && ['customer', 'worker', 'admin'].includes(savedRole)) {
    state.currentRole = savedRole;
  }
  const savedName = localStorage.getItem('wm_name');
  if (savedName && state.currentUser) {
    state.currentUser.name = savedName;
  }
  updateHeaderAuthBadge();
  renderPwaInstallButton(true);
  applyTranslations();
  setRole(state.currentRole || 'customer');
}

// ----------------------------------------------------
// ENTERPRISE SAAS AUTHENTICATION MODAL ENGINE
// ----------------------------------------------------
function updateHeaderAuthBadge() {
  const container = document.getElementById('user-header-auth');
  if (!container) return;

  if (state.currentUser) {
    container.innerHTML = `
      <div class="flex items-center gap-1 sm:gap-1.5 bg-slate-100/90 p-0.5 sm:p-1 px-1.5 sm:px-2.5 rounded-xl border border-slate-200/80 shadow-xs flex-shrink-0">
        <button onclick="openSaasAuthScreen('${state.currentRole}', 'login')" title="Switch Account / View Profile" class="flex items-center gap-1.5 text-left focus:outline-none">
          <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-bold flex items-center justify-center text-xs shadow-xs flex-shrink-0">
            ${state.currentUser.name.charAt(0)}
          </div>
          <div class="hidden md:block text-left min-w-0 leading-tight">
            <span class="font-bold text-xs text-slate-800 block truncate max-w-[90px]">${state.currentUser.name}</span>
            <span class="text-[9px] text-emerald-700 font-extrabold uppercase tracking-wider block">${state.currentUser.role}</span>
          </div>
        </button>
        <button onclick="openSaasAuthScreen('${state.currentRole}', 'login')" title="Switch Account" class="px-2 py-1 bg-white hover:bg-slate-200 text-slate-700 font-bold text-[10px] sm:text-[11px] rounded-lg border border-slate-300 shadow-xs transition-all whitespace-nowrap hidden lg:inline-block">
          Switch
        </button>
        <button onclick="logoutCurrentSession()" title="Logout" class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 flex items-center justify-center transition-colors flex-shrink-0">
          <i class="fas fa-power-off text-[11px]"></i>
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button onclick="openSaasAuthScreen('customer', 'login')" class="px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] sm:text-xs rounded-xl shadow-sm transition-all flex items-center gap-1 whitespace-nowrap">
        <i class="fas fa-lock text-xs"></i> <span>Login</span>
      </button>
    `;
  }
}

function openSaasAuthScreen(role = 'customer', mode = 'login') {
  state.saasAuth.targetRole = role;
  state.saasAuth.mode = mode;

  const modal = document.getElementById('auth-modal');
  modal.classList.remove('hidden');

  renderSaasAuthContent();
}

function closeSaasAuthScreen() {
  document.getElementById('auth-modal').classList.add('hidden');
}

function selectSaasRoleTab(role) {
  state.saasAuth.targetRole = role;
  renderSaasAuthContent();
}

function toggleSaasAuthMode(mode) {
  state.saasAuth.mode = mode;
  renderSaasAuthContent();
}

function toggleSaasAuthMethod(method) {
  state.saasAuth.method = method;
  renderSaasAuthContent();
}

function renderSaasAuthContent() {
  const container = document.getElementById('auth-modal-content');
  const role = state.saasAuth.targetRole;
  const mode = state.saasAuth.mode;
  const method = state.saasAuth.method;

  container.innerHTML = `
    <div class="p-7">
      <div class="flex items-center justify-between pb-5 border-b border-slate-100">
        <div class="flex items-center gap-3">
          <div class="relative w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-400 shadow-md">
            <img src="logo.jpg" alt="WorkMitra Logo" class="w-full h-full object-cover rounded-[10px]">
          </div>
          <div>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight font-heading">Work<span class="brand-gradient-text">Mitra</span> <span class="text-xs text-slate-500 font-medium font-sans">SaaS Portal</span></h2>
            <p class="text-[11px] text-slate-500 font-medium">Enterprise Cooperative Multi-Tenant Authentication</p>
          </div>
        </div>
        <button onclick="closeSaasAuthScreen()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-700 flex items-center justify-center transition-colors">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="my-5 p-1 bg-slate-100 rounded-2xl flex items-center gap-1 border border-slate-200">
        <button onclick="selectSaasRoleTab('customer')" class="flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${role === 'customer' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-200'}">
          <i class="fas fa-user-circle"></i> Customer
        </button>
        <button onclick="selectSaasRoleTab('worker')" class="flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${role === 'worker' ? 'bg-amber-500 text-slate-900 shadow-md' : 'text-slate-600 hover:bg-slate-200'}">
          <i class="fas fa-tools"></i> Worker
        </button>
        <button onclick="selectSaasRoleTab('admin')" class="flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${role === 'admin' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-200'}">
          <i class="fas fa-building-columns"></i> Admin
        </button>
      </div>

      <div class="mb-5 p-3.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200/80 shadow-sm text-xs">
        <div class="flex items-center justify-between mb-2">
          <span class="font-extrabold text-amber-900 flex items-center gap-1">
            <i class="fas fa-bolt text-amber-600"></i> SIH Jury Quick 1-Click Login:
          </span>
          <span class="text-[10px] text-amber-700 font-semibold bg-amber-200/60 px-2 py-0.5 rounded-full">Instant Demo</span>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center">
          <button onclick="loginAsPreset('customer')" class="p-2 bg-white hover:bg-amber-100 rounded-xl border border-amber-300 font-bold text-slate-800 shadow-sm transition-all hover:scale-[1.02]">
            <span class="block text-[10px] text-amber-700">Customer</span> Sunita
          </button>
          <button onclick="loginAsPreset('worker')" class="p-2 bg-white hover:bg-amber-100 rounded-xl border border-amber-300 font-bold text-slate-800 shadow-sm transition-all hover:scale-[1.02]">
            <span class="block text-[10px] text-amber-700">Worker</span> Rahul
          </button>
          <button onclick="loginAsPreset('admin')" class="p-2 bg-white hover:bg-amber-100 rounded-xl border border-amber-300 font-bold text-slate-800 shadow-sm transition-all hover:scale-[1.02]">
            <span class="block text-[10px] text-amber-700">Federation</span> Admin
          </button>
        </div>
      </div>

      <form onsubmit="handleSaasAuthSubmit(event)" class="space-y-4 text-xs">
        <div>
          <label class="block font-bold text-slate-700 mb-1">Select Cooperative Tenant / Region</label>
          <select id="saas-tenant" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white font-semibold text-slate-800 focus:outline-none focus:border-emerald-600 shadow-sm">
            <option>Delhi Rural Skilled Workers Cooperative Federation</option>
            <option>Noida Household & Artisan Federation</option>
            <option>Gurugram Skilled Workers Guild Union</option>
          </select>
        </div>

        ${mode === 'signup' ? `
          <div>
            <label class="block font-bold text-slate-700 mb-1">Full Name</label>
            <input type="text" id="saas-name" placeholder="Enter Full Name" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 shadow-sm"/>
          </div>
        ` : ''}

        <div>
          <label class="block font-bold text-slate-700 mb-1">Registered Phone Number / Email</label>
          <input type="text" id="saas-identity" placeholder="${role === 'admin' ? 'admin@workmitra.org' : '+91 98765 43210'}" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 shadow-sm"/>
        </div>

        ${method === 'password' ? `
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="font-bold text-slate-700">Password</label>
              <a href="#" onclick="toggleSaasAuthMethod('otp')" class="text-emerald-600 font-semibold hover:underline">Use OTP Code instead</a>
            </div>
            <input type="password" id="saas-pass" placeholder="••••••••" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-emerald-600 shadow-sm"/>
          </div>
        ` : `
          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="font-bold text-slate-700">Enter 4-Digit OTP Code</label>
              <a href="#" onclick="toggleSaasAuthMethod('password')" class="text-emerald-600 font-semibold hover:underline">Use Password instead</a>
            </div>
            <input type="text" id="saas-otp" placeholder="Enter 4-digit code (e.g. 1234)" value="1234" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono text-center text-lg focus:outline-none focus:border-emerald-600 shadow-sm"/>
          </div>
        `}

        ${mode === 'signup' && role === 'worker' ? `
          <div>
            <label class="block font-bold text-slate-700 mb-1">Primary Skill Specialization</label>
            <select id="saas-skill" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white font-semibold text-slate-800 focus:outline-none focus:border-emerald-600">
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Cleaning</option>
              <option>Appliance Repair</option>
              <option>Carpentry</option>
              <option>Sanitation & Pest Control</option>
            </select>
          </div>
        ` : ''}

        <button type="submit" class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2">
          <i class="fas fa-arrow-right-to-bracket"></i> ${mode === 'login' ? `Login to ${role.toUpperCase()} Workspace` : `Register & Create ${role.toUpperCase()} Profile`}
        </button>
      </form>

      <div class="mt-5 pt-4 border-t border-slate-100 text-center">
        <span class="text-[11px] text-slate-400 font-semibold block mb-3">OR CONNECT WITH INDIA STACK SINGLE SIGN-ON</span>
        <div class="flex gap-2">
          <button onclick="loginAsPreset('${role}')" class="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5">
            <i class="fab fa-google text-rose-500"></i> Google SSO
          </button>
          <button onclick="loginAsPreset('${role}')" class="flex-1 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl border border-emerald-200 transition-colors flex items-center justify-center gap-1.5">
            <i class="fas fa-id-card text-emerald-600"></i> e-Pramaan Govt SSO
          </button>
        </div>
      </div>

      <div class="mt-4 text-center text-xs text-slate-500">
        ${mode === 'login' ? `
          Don't have a ${role} account? <a href="#" onclick="toggleSaasAuthMode('signup')" class="text-emerald-600 font-bold hover:underline">Register now</a>
        ` : `
          Already registered? <a href="#" onclick="toggleSaasAuthMode('login')" class="text-emerald-600 font-bold hover:underline">Sign in here</a>
        `}
      </div>
    </div>
  `;
}

function handleSaasAuthSubmit(event) {
  event.preventDefault();
  const role = state.saasAuth.targetRole;
  const identity = document.getElementById('saas-identity') ? document.getElementById('saas-identity').value : 'user@example.com';
  const name = document.getElementById('saas-name') ? document.getElementById('saas-name').value : (role === 'worker' ? 'Rahul Sharma' : (role === 'admin' ? 'Federation Admin' : 'Sunita Aggarwal'));
  const org = document.getElementById('saas-tenant') ? document.getElementById('saas-tenant').value : 'Delhi Rural Skilled Workers Cooperative';

  if (state.saasAuth.mode === 'signup' && role === 'worker') {
    const skill = document.getElementById('saas-skill').value;
    const newWorker = {
      id: `wrk-${Math.floor(100 + Math.random() * 900)}`,
      name: name,
      nameHindi: name,
      phone: identity,
      cooperative: org,
      skills: [skill],
      experienceYears: 3,
      rating: 5.0,
      totalReviews: 0,
      jobsCompletedThisMonth: 0,
      status: 'Available',
      verificationStatus: 'PENDING_VERIFICATION',
      badges: ['Newly Registered'],
      insuranceActive: false,
      welfareBalance: 0,
      location: { city: 'New Delhi', area: 'Dwarka Sec 12', lat: 28.5921, lng: 77.046 }
    };
    state.workers.unshift(newWorker);
  }

  state.currentUser = {
    id: `user-${role}-${Math.floor(1000 + Math.random() * 9000)}`,
    name: name,
    phone: identity,
    role: role,
    organization: org
  };

  closeSaasAuthScreen();
  setRole(role);
  showToast(`SaaS Authentication Success! Logged in as ${name} (${role.toUpperCase()})`);
}

function loginAsPreset(role) {
  if (role === 'customer') {
    state.currentUser = { id: 'user-cust-1', name: 'Sunita Aggarwal', phone: '+91 98100 12345', role: 'customer', organization: 'Delhi RWAs' };
  } else if (role === 'worker') {
    state.currentUser = { id: 'wrk-101', name: 'Rahul Sharma', phone: '+91 98765 43210', role: 'worker', organization: 'Delhi Rural Skilled Workers Cooperative' };
  } else if (role === 'admin') {
    state.currentUser = { id: 'user-admin-1', name: 'Cooperative Federation Admin', phone: '+91 99000 11223', role: 'admin', organization: 'Delhi Rural Skilled Workers Cooperative' };
  }
  closeSaasAuthScreen();
  setRole(role);
  showToast(`Switched user session to ${state.currentUser.name} (${role.toUpperCase()})`);
}

function logoutCurrentSession() {
  state.currentUser = null;
  updateHeaderAuthBadge();
  showToast('SaaS Session Logged Out.');
}

// ----------------------------------------------------
// CUSTOMER VIEW LOGIC
// ----------------------------------------------------
function renderCustomerView() {
  renderServicesCatalog();
  renderActiveBookingsCustomer();
  setTimeout(initCustomerMap, 300);
}

function filterCategory(cat, btnElement) {
  state.selectedCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.remove('bg-emerald-700', 'text-white', 'shadow-sm');
    btn.classList.add('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
  });
  let target = btnElement || (typeof event !== 'undefined' && event ? (event.currentTarget || event.target) : null);
  if (target && !target.classList.contains('cat-pill')) {
    target = target.closest('.cat-pill');
  }
  if (target && target.classList) {
    target.classList.remove('bg-slate-100', 'text-slate-700', 'hover:bg-slate-200');
    target.classList.add('bg-emerald-700', 'text-white', 'shadow-sm');
  }
  renderServicesCatalog();
}

function renderServicesCatalog() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  const filtered = state.selectedCategory === 'All' 
    ? state.services 
    : state.services.filter(s => s.category === state.selectedCategory);

  const lang = state.currentLang || 'hi';
  const btnLabel = lang === 'hi' ? 'वर्कर मैच करें' : lang === 'hinglish' ? 'Worker Match Karein' : 'Find Fair Match';

  container.innerHTML = filtered.map(service => {
    let title = service.name;
    let subtitle = service.nameHindi;
    let desc = service.description;

    if (lang === 'hi') {
      title = service.nameHindi || service.name;
      subtitle = service.name;
      desc = service.descriptionHindi || service.description;
    } else if (lang === 'hinglish') {
      title = service.nameHinglish || service.nameHindi;
      subtitle = service.name;
      desc = service.descriptionHinglish || service.description;
    }

    return `
      <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm card-hover-lift flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-teal-500/20 text-emerald-600 flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
              <i class="fas ${service.icon}"></i>
            </div>
            ${service.popular ? '<span class="px-3 py-1 text-[11px] font-extrabold bg-amber-100/90 text-amber-900 border border-amber-300/80 rounded-full shadow-xs"><i class="fas fa-fire text-amber-500 mr-1"></i> Popular</span>' : ''}
          </div>
          <h3 class="font-extrabold text-slate-900 text-lg mb-0.5 font-heading">${title}</h3>
          <p class="text-xs text-emerald-600 font-bold mb-2">${subtitle}</p>
          <p class="text-xs text-slate-500 mb-4 leading-relaxed line-clamp-2">${desc}</p>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span class="text-[10px] text-emerald-700 font-extrabold uppercase tracking-wider block"><i class="fas fa-layer-group text-amber-500 mr-1"></i> Rate By Experience</span>
            <span class="text-base font-black text-slate-900 font-heading">₹${service.basePrice} - ₹${service.basePrice + 170}</span>
          </div>
          <button onclick="requestFairMatch('${service.id}')" class="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 transform active:scale-95">
            <i class="fas fa-wand-magic-sparkles text-amber-300"></i> ${btnLabel}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return Math.round((R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)))) * 10) / 10;
}

function requestFairMatch(serviceId) {
  const service = state.services.find(s => s.id === serviceId);
  state.selectedService = service;

  const eligibleWorkers = state.workers.filter(w => 
    w.verificationStatus === 'VERIFIED' && 
    w.skills.some(s => s.toLowerCase() === service.category.toLowerCase())
  );

  const customerLat = state.customerLocation.lat;
  const customerLng = state.customerLocation.lng;

  const scoredWorkers = eligibleWorkers.map(worker => {
    const dist = getDistance(customerLat, customerLng, worker.location.lat, worker.location.lng);
    const proximityScore = Math.max(0, 30 - dist * 3);
    const skillScore = 30;
    const workloadScore = Math.max(0, 25 * (1 - worker.jobsCompletedThisMonth / 20));
    const ratingScore = (worker.rating / 5) * 15;
    const totalScore = Math.round((proximityScore + skillScore + workloadScore + ratingScore) * 10) / 10;

    // Experience & Rating Based Worker Rate Calculation
    const expBonus = (worker.experienceYears || 1) * 20;
    const ratingBonus = (worker.rating >= 4.8) ? 30 : 0;
    const workerRate = Math.round(service.basePrice + expBonus + ratingBonus);
    const directWage = workerRate - 10;

    return {
      worker,
      dist,
      workerRate,
      directWage,
      scores: {
        proximity: Math.round(proximityScore * 10) / 10,
        skill: skillScore,
        workload: Math.round(workloadScore * 10) / 10,
        rating: Math.round(ratingScore * 10) / 10,
        total: totalScore
      }
    };
  });

  scoredWorkers.sort((a, b) => b.scores.total - a.scores.total);
  renderFairMatchResultsModal(service, scoredWorkers);
}

function renderFairMatchResultsModal(service, matches) {
  const modal = document.getElementById('match-modal');
  modal.classList.remove('hidden');

  const content = document.getElementById('match-modal-content');
  content.className = "relative bg-white rounded-3xl max-w-2xl w-full mx-4 shadow-2xl border border-slate-200 overflow-hidden animate-modal-pop";

  content.innerHTML = `
    <div class="p-6">
      <div class="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <span class="px-2.5 py-1 text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full">AI Fair Workload Engine</span>
          <h2 class="text-xl font-extrabold text-slate-900 mt-1 font-heading">Matching Cooperative Workers for ${service.name}</h2>
          <p class="text-xs text-slate-500">Worker rates are dynamically customized based on experience, rating & skills.</p>
        </div>
        <button onclick="closeMatchModal()" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center transition-colors">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="mt-4 space-y-4 max-h-[62vh] overflow-y-auto pr-1">
        ${matches.map((m, idx) => `
          <div class="p-5 rounded-2xl border ${idx === 0 ? 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-200/80 shadow-md' : 'border-slate-200 bg-white shadow-xs'} transition-all">
            
            <!-- Worker Header & Badges -->
            <div class="flex items-start justify-between">
              <div class="flex items-start gap-3">
                <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-bold flex items-center justify-center text-xl shadow-md flex-shrink-0">
                  ${m.worker.name.charAt(0)}
                  <span class="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <h4 class="font-extrabold text-slate-900 text-base font-heading">${m.worker.name} <span class="text-xs text-slate-500 font-normal">(${m.worker.nameHindi})</span></h4>
                    ${idx === 0 ? '<span class="px-2.5 py-0.5 text-[10px] font-black bg-amber-400 text-slate-900 rounded-md shadow-xs"><i class="fas fa-crown text-slate-900 mr-1"></i> TOP FAIR MATCH</span>' : ''}
                    <span class="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-md"><i class="fas fa-circle-check text-emerald-600 mr-0.5"></i> ${m.worker.verificationStatus}</span>
                  </div>
                  
                  <p class="text-xs text-slate-600 font-medium mt-0.5">
                    <i class="fas fa-building-columns text-emerald-600 mr-1"></i> ${m.worker.cooperative}
                  </p>

                  <!-- Worker Profile Highlights: Experience, Rating, Contact Number -->
                  <div class="flex flex-wrap items-center gap-3 text-xs text-slate-700 mt-2 font-semibold">
                    <span class="bg-amber-50 text-amber-900 px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1">
                      <i class="fas fa-star text-amber-500"></i> ${m.worker.rating} (${m.worker.totalReviews} reviews)
                    </span>
                    <span class="bg-blue-50 text-blue-900 px-2.5 py-1 rounded-lg border border-blue-200 flex items-center gap-1 font-bold">
                      <i class="fas fa-certificate text-blue-600"></i> ${m.worker.experienceYears} Years Exp
                    </span>
                    <a href="tel:${m.worker.phone}" class="bg-emerald-50 hover:bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-lg border border-emerald-300 flex items-center gap-1 transition-colors">
                      <i class="fas fa-phone-volume text-emerald-600"></i> ${m.worker.phone}
                    </a>
                  </div>
                </div>
              </div>

              <!-- Match Score Badge -->
              <div class="text-right flex-shrink-0">
                <span class="text-2xl font-black text-emerald-700 font-heading block leading-none">${m.scores.total}</span>
                <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mt-1">Match Score</span>
              </div>
            </div>

            <!-- Transparent Experience-Wise Wage Breakdown -->
            <div class="mt-3.5 p-3 rounded-xl bg-slate-900 text-white text-xs border border-slate-800">
              <div class="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-extrabold text-amber-400">
                <span><i class="fas fa-calculator mr-1"></i> Experience-Wise Wage Rate (${m.worker.experienceYears} Years Exp)</span>
                <span class="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">0% Middleman Fee</span>
              </div>
              <div class="grid grid-cols-3 gap-2 pt-2 text-center text-[11px]">
                <div>
                  <span class="text-slate-400 block text-[10px]">Worker Direct Pay</span>
                  <span class="font-bold text-emerald-400 text-sm font-heading">₹${m.directWage}</span>
                </div>
                <div>
                  <span class="text-slate-400 block text-[10px]">Welfare Fund</span>
                  <span class="font-bold text-amber-400 text-sm font-heading">+₹10</span>
                </div>
                <div>
                  <span class="text-slate-400 block text-[10px]">Middleman Fee</span>
                  <span class="font-bold text-sky-400 text-sm font-heading">₹0</span>
                </div>
              </div>
            </div>

            <!-- AI Score Breakdown & Booking Action -->
            <div class="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
              <div class="text-[11px] text-slate-500 font-semibold flex flex-wrap items-center gap-2">
                <span><i class="fas fa-location-dot text-rose-500"></i> ${m.dist} km away</span>
                <span>•</span>
                <span><i class="fas fa-calendar-check text-indigo-500"></i> ${m.worker.jobsCompletedThisMonth} jobs this month</span>
              </div>
              <button onclick="confirmBookingWithWorker('${service.id}', '${m.worker.id}', ${m.workerRate})" class="w-full sm:w-auto px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95">
                <i class="fas fa-check-circle"></i> Book Worker (₹${m.workerRate})
              </button>
            </div>

          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function closeMatchModal() {
  document.getElementById('match-modal').classList.add('hidden');
}

function confirmBookingWithWorker(serviceId, workerId, customRate = null) {
  closeMatchModal();
  const service = state.services.find(s => s.id === serviceId);
  const worker = state.workers.find(w => w.id === workerId);
  const finalAmount = customRate || service.basePrice;

  const arrOtp = Math.floor(1000 + Math.random() * 9000).toString();
  const depOtp = Math.floor(1000 + Math.random() * 9000).toString();

  const newBooking = {
    id: `BK-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName: state.currentUser ? state.currentUser.name : 'Sunita Aggarwal',
    customerPhone: state.currentUser ? state.currentUser.phone : '+91 98100 12345',
    customerAddress: state.customerLocation.address,
    serviceId: service.id,
    serviceName: service.name,
    category: service.category,
    amount: finalAmount,
    cooperativeFee: Math.round(finalAmount * 0.05 * 10) / 10,
    welfareFundContribution: 10,
    workerId: worker.id,
    workerName: worker.name,
    workerPhone: worker.phone,
    status: 'ASSIGNED',
    arrivalOtp: arrOtp,
    departureOtp: depOtp,
    scheduledTime: 'Immediate (Estimated 20 Mins)',
    beforeWorkPhoto: null,
    afterWorkPhoto: null,
    createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    timeline: [
      { status: 'CREATED', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), note: 'Booking requested by customer' },
      { status: 'ASSIGNED', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), note: `Matched with ${worker.name} via Fair Workload Algorithm` }
    ]
  };

  state.bookings.unshift(newBooking);
  state.activeBooking = newBooking;

  renderCustomerView();
  showToast(`Booking ${newBooking.id} Confirmed! Matched with ${worker.name}.`);
}

function renderActiveBookingsCustomer() {
  const container = document.getElementById('active-bookings-list');
  if (state.bookings.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400 italic">No active bookings yet.</p>`;
    return;
  }

  container.innerHTML = state.bookings.map(b => `
    <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-md">
      <div class="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <span class="text-xs font-extrabold text-emerald-600">${b.id}</span>
          <h4 class="font-bold text-slate-800 text-base">${b.serviceName}</h4>
        </div>
        <span class="px-3 py-1 text-xs font-bold rounded-full ${
          b.status === 'ASSIGNED' ? 'bg-amber-100 text-amber-800 animate-pulse' :
          b.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800 animate-pulse' : 'bg-emerald-100 text-emerald-800'
        }">${b.status.replace('_', ' ')}</span>
      </div>

      <div class="py-3 grid grid-cols-2 gap-4 text-xs">
        <div>
          <span class="text-slate-400 block">Assigned Worker</span>
          <span class="font-semibold text-slate-800"><i class="fas fa-user-check text-emerald-600 mr-1"></i> ${b.workerName}</span>
          <span class="text-[11px] text-slate-500 block">${b.workerPhone}</span>
        </div>
        <div>
          <span class="text-slate-400 block">Total Amount</span>
          <span class="font-bold text-slate-800 text-sm">₹${b.amount}</span>
          <span class="text-[10px] text-emerald-700 block font-medium">Includes ₹10 Welfare Fund</span>
        </div>
      </div>

      <div class="bg-slate-900 text-white rounded-xl p-4 my-2 flex items-center justify-around shadow-inner">
        <div class="text-center">
          <span class="text-[10px] text-amber-400 font-bold tracking-wider block">STEP 1: ARRIVAL OTP</span>
          <span class="text-2xl font-black font-mono text-amber-300 tracking-widest">${b.arrivalOtp}</span>
          <span class="text-[9px] text-slate-400 block">Share on worker arrival</span>
        </div>
        <div class="h-8 w-px bg-slate-700"></div>
        <div class="text-center">
          <span class="text-[10px] text-emerald-400 font-bold tracking-wider block">STEP 2: DEPARTURE OTP</span>
          <span class="text-2xl font-black font-mono text-emerald-300 tracking-widest">${b.departureOtp}</span>
          <span class="text-[9px] text-slate-400 block">Share on work completion</span>
        </div>
      </div>

      ${b.beforeWorkPhoto || b.afterWorkPhoto ? `
        <div class="mt-2 pt-2 border-t border-slate-100 flex gap-2">
          ${b.beforeWorkPhoto ? `<div class="text-center"><span class="text-[9px] text-slate-400 block">Before Work</span><img src="${b.beforeWorkPhoto}" class="w-16 h-12 object-cover rounded border"/></div>` : ''}
          ${b.afterWorkPhoto ? `<div class="text-center"><span class="text-[9px] text-slate-400 block">After Work</span><img src="${b.afterWorkPhoto}" class="w-16 h-12 object-cover rounded border"/></div>` : ''}
        </div>
      ` : ''}
    </div>
  `).join('');
}

function initCustomerMap() {
  const mapElement = document.getElementById('customer-map');
  if (!mapElement || typeof L === 'undefined') return;

  if (mapInstance) {
    try { mapInstance.remove(); } catch(e) {}
    mapInstance = null;
  }

  mapInstance = L.map('customer-map').setView([state.customerLocation.lat, state.customerLocation.lng], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap WorkMitra'
  }).addTo(mapInstance);

  L.marker([state.customerLocation.lat, state.customerLocation.lng])
    .addTo(mapInstance)
    .bindPopup('<b>Customer Location</b><br>Dwarka Sec 12')
    .openPopup();

  state.workers.forEach(w => {
    if (w.verificationStatus === 'VERIFIED') {
      const circle = L.circle([w.location.lat, w.location.lng], {
        color: '#0d9488',
        fillColor: '#0d9488',
        fillOpacity: 0.5,
        radius: 400
      }).addTo(mapInstance);

      circle.bindPopup(`<b>${w.name}</b><br>${w.cooperative}<br>Rating: ⭐${w.rating}`);
    }
  });
}

// SIMULATION CONTROLS FOR LIVE PRESENTATION DEMO
function simulateQuickBooking() {
  requestFairMatch('srv-1');
}

function simulateArrivalOtp() {
  const activeBooking = state.bookings.find(b => b.status === 'ASSIGNED');
  if (!activeBooking) {
    showToast('No booking in ASSIGNED status to verify arrival!', 'error');
    return;
  }
  setRole('worker');
  setTimeout(() => {
    const input = document.getElementById('worker-input-otp');
    if (input) input.value = activeBooking.arrivalOtp;
    submitWorkerArrivalOtp(activeBooking.id);
  }, 200);
}

function simulateWorkCompletion() {
  const activeBooking = state.bookings.find(b => b.status === 'IN_PROGRESS');
  if (!activeBooking) {
    showToast('No booking in IN_PROGRESS status to complete!', 'error');
    return;
  }
  setRole('worker');
  setTimeout(() => {
    const input = document.getElementById('worker-input-dep-otp');
    if (input) input.value = activeBooking.departureOtp;
    submitWorkerDepartureOtp(activeBooking.id);
  }, 200);
}

function renderWorkerView() {
  const lang = state.workerLanguage;
  const worker = state.workers[0];
  const activeBooking = state.bookings.find(b => b.workerId === worker.id && b.status !== 'COMPLETED');
  const container = document.getElementById('worker-content');

  const txt = {
    title: lang === 'hi' ? 'कार्यकर्ता पोर्टल' : 'Worker Portal',
    welcome: lang === 'hi' ? `नमस्ते, ${worker.nameHindi}` : `Welcome, ${worker.name}`,
    status: lang === 'hi' ? 'आपकी स्थिति: उपलब्ध (Available)' : 'Status: Available',
    coop: lang === 'hi' ? 'सहकारी समिति:' : 'Cooperative Federation:',
    welfare: lang === 'hi' ? 'कल्याण कोष (Welfare Balance):' : 'Welfare Fund Balance:',
    insurance: lang === 'hi' ? 'बीमा स्थिति (Insurance):' : 'Insurance Status:',
    activeJob: lang === 'hi' ? 'वर्तमान कार्य (Active Job Lifecycle)' : 'Active Job Lifecycle',
    arrivalOtpLabel: lang === 'hi' ? 'ग्राहक से Arrival OTP दर्ज करें:' : 'Enter Arrival OTP from Customer:',
    departureOtpLabel: lang === 'hi' ? 'ग्राहक से Departure OTP दर्ज करें:' : 'Enter Departure OTP from Customer:',
    verifyBtn: lang === 'hi' ? 'सत्यापित करें (Verify OTP)' : 'Verify OTP',
    uploadBeforeBtn: lang === 'hi' ? 'काम से पहले की फोटो' : 'Upload Before-Work Photo',
    uploadAfterBtn: lang === 'hi' ? 'काम के बाद की फोटो' : 'Upload After-Work Photo',
    completedMsg: lang === 'hi' ? 'कोई नया काम लंबित नहीं है।' : 'No active jobs assigned currently.'
  };

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <!-- LEFT COLUMN: WORKER PROFILE, EXPERIENCE & VERIFIED SKILLS -->
      <div class="lg:col-span-1 space-y-6">
        
        <!-- Profile & Experience Card -->
        <div class="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-5">
          <div class="flex items-center gap-4 pb-4 border-b border-slate-100">
            <div class="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-400 text-white font-bold flex items-center justify-center text-2xl shadow-md">
              ${worker.name.charAt(0)}
              <span class="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <h3 class="font-extrabold text-xl text-slate-900 font-heading">${lang === 'hi' ? worker.nameHindi : worker.name}</h3>
              </div>
              <span class="px-2.5 py-0.5 text-[10px] font-black bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
                <i class="fas fa-certificate text-emerald-600 mr-1"></i> ${worker.verificationStatus}
              </span>
            </div>
          </div>

          <!-- PROMINENT EXPERIENCE DISPLAY -->
          <div class="p-3.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/80 shadow-xs flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">Certified Work Experience</span>
              <span class="text-lg font-black text-blue-950 font-heading"><i class="fas fa-award text-amber-500 mr-1"></i> ${worker.experienceYears} Years Experience</span>
              <span class="text-[10px] text-blue-800 font-semibold block mt-0.5">Master Artisan Tier (उच्च दक्षता स्तर)</span>
            </div>
          </div>

          <!-- PROMINENT VERIFIED SKILLS DISPLAY -->
          <div class="space-y-2">
            <span class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <i class="fas fa-tools text-emerald-600"></i> Verified Specialization Skills:
            </span>
            <div class="flex flex-wrap gap-1.5">
              ${worker.skills.map(s => `
                <span class="px-3 py-1 text-xs font-bold bg-slate-900 text-amber-300 rounded-xl border border-slate-700 shadow-xs flex items-center gap-1">
                  <i class="fas fa-check-double text-emerald-400 text-[10px]"></i> ${s}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Contact & Cooperative Society Info -->
          <div class="pt-3 border-t border-slate-100 space-y-2.5 text-xs text-slate-700 font-medium">
            <div class="flex items-center justify-between">
              <span class="text-slate-500"><i class="fas fa-building-columns text-emerald-600 mr-1.5"></i> Cooperative:</span>
              <span class="font-bold text-slate-900 text-right">${worker.cooperative}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-500"><i class="fas fa-phone-volume text-emerald-600 mr-1.5"></i> Contact:</span>
              <span class="font-bold text-slate-900">${worker.phone}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-500"><i class="fas fa-envelope text-emerald-600 mr-1.5"></i> Email:</span>
              <span class="font-bold text-slate-900">${worker.email}</span>
            </div>
          </div>

          <!-- Welfare Fund & Insurance Cards -->
          <div class="space-y-3 pt-2">
            <div class="p-3.5 bg-amber-50 rounded-2xl border border-amber-200/80 shadow-xs">
              <div class="flex items-center justify-between">
                <span class="text-amber-900 text-xs font-bold flex items-center gap-1">
                  <i class="fas fa-piggy-bank text-amber-600"></i> ${txt.welfare}
                </span>
                <span class="text-xs font-bold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-full">+₹10 / Job</span>
              </div>
              <span class="text-2xl font-black text-amber-800 font-heading block mt-1">₹${worker.welfareBalance}</span>
            </div>

            <div class="flex items-center justify-between p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200/80">
              <div>
                <span class="text-emerald-900 text-xs font-bold block">${txt.insurance}</span>
                <span class="font-bold text-emerald-700 text-xs">${worker.insuranceActive ? 'Active (Ayushman Cover ₹5 Lakh)' : 'Inactive'}</span>
              </div>
              <i class="fas fa-shield-heart text-2xl text-emerald-600"></i>
            </div>
          </div>

        </div>

      </div>


      <!-- RIGHT COLUMN: RATING ANALYTICS SYSTEM & ACTIVE JOB LIFECYCLE -->
      <div class="lg:col-span-2 space-y-6">
        
        <!-- PROPER RATING & REVIEW ANALYTICS SYSTEM -->
        <div class="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <span class="px-2.5 py-1 text-[10px] font-black bg-amber-100 text-amber-900 rounded-md border border-amber-300">RATING ANALYTICS SYSTEM</span>
              <h3 class="font-extrabold text-xl text-slate-900 mt-1 font-heading flex items-center gap-2">
                <i class="fas fa-star-half-stroke text-amber-500"></i> Customer Rating & Performance Scorecard
              </h3>
            </div>
            <div class="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-2xl border border-amber-200">
              <span class="text-3xl font-black text-amber-900 font-heading">4.85</span>
              <div>
                <div class="flex text-amber-400 text-xs">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                </div>
                <span class="text-[10px] text-amber-800 font-bold block">124 Verified Reviews</span>
              </div>
            </div>
          </div>

          <!-- Rating Breakdown Progress Bars -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-2 text-xs font-semibold text-slate-700">
              <span class="block font-bold text-slate-900 mb-1">Star Distribution:</span>
              
              <div class="flex items-center gap-2">
                <span class="w-12 text-slate-500 text-[11px]">5 Stars</span>
                <div class="flex-grow h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-emerald-500 rounded-full" style="width: 88%"></div>
                </div>
                <span class="w-8 text-right font-bold text-slate-800 text-[11px]">88%</span>
              </div>

              <div class="flex items-center gap-2">
                <span class="w-12 text-slate-500 text-[11px]">4 Stars</span>
                <div class="flex-grow h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-emerald-400 rounded-full" style="width: 10%"></div>
                </div>
                <span class="w-8 text-right font-bold text-slate-800 text-[11px]">10%</span>
              </div>

              <div class="flex items-center gap-2">
                <span class="w-12 text-slate-500 text-[11px]">3 Stars</span>
                <div class="flex-grow h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-400 rounded-full" style="width: 2%"></div>
                </div>
                <span class="w-8 text-right font-bold text-slate-800 text-[11px]">2%</span>
              </div>
            </div>

            <!-- Performance Metric Pills -->
            <div class="grid grid-cols-2 gap-2.5 text-center text-xs">
              <div class="p-3 bg-slate-50 rounded-2xl border border-slate-200/70">
                <span class="text-[10px] text-slate-500 font-bold block">Punctuality (समय पाबंदी)</span>
                <span class="text-base font-black text-emerald-600 font-heading">4.9 / 5.0</span>
              </div>
              <div class="p-3 bg-slate-50 rounded-2xl border border-slate-200/70">
                <span class="text-[10px] text-slate-500 font-bold block">Work Quality (गुणवत्ता)</span>
                <span class="text-base font-black text-emerald-600 font-heading">4.9 / 5.0</span>
              </div>
              <div class="p-3 bg-slate-50 rounded-2xl border border-slate-200/70">
                <span class="text-[10px] text-slate-500 font-bold block">Behavior (व्यवहार)</span>
                <span class="text-base font-black text-emerald-600 font-heading">4.8 / 5.0</span>
              </div>
              <div class="p-3 bg-slate-50 rounded-2xl border border-slate-200/70">
                <span class="text-[10px] text-slate-500 font-bold block">Price Honesty (उचित दर)</span>
                <span class="text-base font-black text-emerald-600 font-heading">5.0 / 5.0</span>
              </div>
            </div>
          </div>

          <!-- Verified Customer Reviews List -->
          <div class="pt-3 border-t border-slate-100 space-y-3">
            <span class="text-xs font-extrabold text-slate-900 block flex items-center gap-1.5">
              <i class="fas fa-comments text-emerald-600"></i> Recent Verified Customer Reviews:
            </span>
            
            <div class="space-y-2.5 max-h-48 overflow-y-auto pr-1 text-xs">
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-extrabold text-slate-800">Sunita Aggarwal <span class="text-[10px] font-normal text-slate-500">(Dwarka Sec 12)</span></span>
                  <span class="text-amber-400 text-[11px]"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                </div>
                <p class="text-slate-600 italic">"Rahul fixed tap leak & drain blockage very quickly. Punctual, polite and neat work!"</p>
                <span class="text-[9px] text-slate-400 block mt-1">2 days ago • Verified Service Booking</span>
              </div>

              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-extrabold text-slate-800">Rajesh Gupta <span class="text-[10px] font-normal text-slate-500">(Janakpuri)</span></span>
                  <span class="text-amber-400 text-[11px]"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                </div>
                <p class="text-slate-600 italic">"Master plumber! Dual OTP security check-in made the experience super safe."</p>
                <span class="text-[9px] text-slate-400 block mt-1">5 days ago • Verified Service Booking</span>
              </div>
            </div>
          </div>

        </div>

        <!-- WORKER MONTHLY & YEARLY REWARDS & GIFT SYSTEM -->
        <div class="bg-gradient-to-br from-amber-500/10 via-amber-50/40 to-white rounded-3xl p-6 border border-amber-300/80 shadow-sm space-y-5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-amber-200/70">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center text-2xl shadow-md">
                <i class="fas fa-trophy"></i>
              </div>
              <div>
                <span class="px-2.5 py-0.5 text-[10px] font-black bg-amber-400 text-slate-950 rounded-md shadow-xs">COOPERATIVE REWARD PROGRAM</span>
                <h3 class="font-extrabold text-xl text-slate-900 mt-1 font-heading flex items-center gap-2">
                  Worker Monthly & Yearly Rewards & Gifts
                </h3>
              </div>
            </div>
            <span class="px-3 py-1.5 text-xs font-black bg-emerald-600 text-white rounded-xl shadow-sm">
              <i class="fas fa-award text-amber-300 mr-1"></i> TOP PERFORMER ELIGIBLE
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <!-- Monthly Rewards Card -->
            <div class="p-4 bg-white rounded-2xl border border-amber-200/80 shadow-xs space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                  <i class="fas fa-calendar-check text-amber-600"></i> Monthly Rewards (सितंबर 2026)
                </span>
                <span class="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 rounded-full">UNLOCKED</span>
              </div>
              
              <div class="p-3 bg-amber-50/80 rounded-xl border border-amber-200 flex items-center justify-between">
                <div>
                  <span class="text-xs font-extrabold text-slate-800 block">Worker of the Month Cash Bonus</span>
                  <span class="text-[10px] text-slate-500 font-semibold">4.9+ Rating & 0 Cancellation Bonus</span>
                </div>
                <span class="text-lg font-black text-emerald-600 font-heading">+₹2,500</span>
              </div>

              <div class="flex items-center justify-between text-xs font-semibold text-slate-700 pt-1">
                <span><i class="fas fa-ticket text-indigo-500 mr-1"></i> Fuel & Grocery Monthly Voucher:</span>
                <span class="font-extrabold text-indigo-700">₹500 Coupon Pass</span>
              </div>
              <div class="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span><i class="fas fa-piggy-bank text-amber-600 mr-1"></i> Welfare Fund Monthly Extra Deposit:</span>
                <span class="font-extrabold text-amber-700">+₹500 Credited</span>
              </div>
            </div>

            <!-- Yearly Gifts & Toolkit Card -->
            <div class="p-4 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl shadow-md space-y-3 border border-indigo-700/40">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <i class="fas fa-gift text-amber-400"></i> Yearly Master Gift (वार्षिक उपहार)
                </span>
                <span class="px-2 py-0.5 text-[10px] font-extrabold bg-amber-400 text-slate-950 rounded-full">READY TO CLAIM</span>
              </div>

              <div class="p-3 bg-slate-800/90 rounded-xl border border-amber-500/30">
                <span class="text-xs font-extrabold text-amber-200 block"> Yearly Professional Toolkit & Jacket Set</span>
                <p class="text-[11px] text-slate-300 mt-0.5">Heavy-Duty Bosch Professional Power Toolset + High-Vis Waterproof Cooperative Safety Boots & Jacket.</p>
              </div>

              <div class="flex items-center justify-between pt-1">
                <span class="text-xs text-emerald-300 font-bold"><i class="fas fa-shield-heart mr-1"></i> Ayushman Gold Shield:</span>
                <span class="text-xs font-extrabold text-amber-300">Upgraded to ₹7.5 Lakhs</span>
              </div>

              <button onclick="alert(' Congratulations! Your Yearly Master Artisan Toolkit & Safety Kit voucher code #WM-TOOL-2026 has been generated. Collect it from your Cooperative Federation office!')" class="w-full py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all transform active:scale-95 flex items-center justify-center gap-1.5">
                <i class="fas fa-box-open"></i> Claim Yearly Toolkit & Gift Box
              </button>
            </div>

          </div>
        </div>

        <!-- ACTIVE JOB LIFECYCLE & SECURITY OTP PANEL -->
        <div class="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
          <h3 class="font-extrabold text-lg text-slate-900 flex items-center gap-2 font-heading">
            <i class="fas fa-tasks text-emerald-600"></i> ${txt.activeJob}
          </h3>

          ${activeBooking ? `
            <div class="p-5 rounded-2xl bg-slate-900 text-white shadow-lg space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-slate-700">
                <div>
                  <span class="text-xs text-amber-400 font-bold">${activeBooking.id}</span>
                  <h4 class="text-xl font-bold">${activeBooking.serviceName}</h4>
                </div>
                <span class="px-3 py-1 text-xs font-extrabold bg-emerald-500 text-slate-950 rounded-full">${activeBooking.status}</span>
              </div>

              <div class="text-xs space-y-2 text-slate-300">
                <p><i class="fas fa-user text-amber-400 mr-2"></i> <b>Customer:</b> ${activeBooking.customerName} (${activeBooking.customerPhone})</p>
                <p><i class="fas fa-map-marker-alt text-rose-400 mr-2"></i> <b>Location:</b> ${activeBooking.customerAddress}</p>
                <p><i class="fas fa-rupee-sign text-emerald-400 mr-2"></i> <b>Earnings Rate:</b> ₹${activeBooking.amount}</p>
              </div>

              ${activeBooking.status === 'ASSIGNED' ? `
                <div class="p-4 rounded-xl bg-slate-800 border border-slate-700">
                  <label class="block text-xs font-bold text-amber-400 mb-2">${txt.arrivalOtpLabel}</label>
                  <div class="flex gap-2">
                    <input type="text" id="worker-input-otp" placeholder="Enter 4-digit OTP" class="px-4 py-2 rounded-lg bg-slate-900 text-white font-mono text-center text-lg border border-slate-600 focus:outline-none focus:border-amber-400 w-48"/>
                    <button onclick="submitWorkerArrivalOtp('${activeBooking.id}')" class="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-xs rounded-lg transition-colors">
                      ${txt.verifyBtn}
                    </button>
                  </div>
                </div>
              ` : ''}

              ${activeBooking.status === 'IN_PROGRESS' ? `
                <div class="space-y-4">
                  <div class="p-3 bg-emerald-950/60 rounded-xl border border-emerald-800/80">
                    <span class="text-xs text-emerald-400 font-bold block mb-2">Work in Progress! Upload Media Proof</span>
                    <div class="flex gap-2">
                      <button onclick="simPhoto('before', '${activeBooking.id}')" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg border border-slate-600">
                        <i class="fas fa-camera mr-1"></i> ${txt.uploadBeforeBtn} ${activeBooking.beforeWorkPhoto ? '✓' : ''}
                      </button>
                      <button onclick="simPhoto('after', '${activeBooking.id}')" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg border border-slate-600">
                        <i class="fas fa-camera mr-1"></i> ${txt.uploadAfterBtn} ${activeBooking.afterWorkPhoto ? '✓' : ''}
                      </button>
                    </div>
                  </div>

                  <div class="p-4 rounded-xl bg-slate-800 border border-slate-700">
                    <label class="block text-xs font-bold text-emerald-400 mb-2">${txt.departureOtpLabel}</label>
                    <div class="flex gap-2">
                      <input type="text" id="worker-input-dep-otp" placeholder="Enter 4-digit OTP" class="px-4 py-2 rounded-lg bg-slate-900 text-white font-mono text-center text-lg border border-slate-600 focus:outline-none focus:border-emerald-400 w-48"/>
                      <button onclick="submitWorkerDepartureOtp('${activeBooking.id}')" class="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-extrabold text-xs rounded-lg transition-colors">
                        Complete Work & Get Paid
                      </button>
                    </div>
                  </div>
                </div>
              ` : ''}
            </div>
          ` : `
            <div class="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <i class="fas fa-check-circle text-4xl text-emerald-500 mb-3"></i>
              <p class="text-slate-600 text-sm font-semibold">${txt.completedMsg}</p>
            </div>
          `}
        </div>

      </div>

    </div>
  `;
}

function submitWorkerArrivalOtp(bookingId) {
  const otpInput = document.getElementById('worker-input-otp').value.trim();
  const booking = state.bookings.find(b => b.id === bookingId);
  if (booking && booking.arrivalOtp === otpInput) {
    booking.status = 'IN_PROGRESS';
    booking.beforeWorkPhoto = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&auto=format&fit=crop';
    booking.timeline.push({ status: 'IN_PROGRESS', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), note: 'Arrival OTP verified by worker.' });
    showToast('Arrival OTP Verified! Work is now In Progress.');
    renderWorkerView();
  } else {
    showToast('Invalid Arrival OTP! Check with customer.', 'error');
  }
}

function simPhoto(type, bookingId) {
  const booking = state.bookings.find(b => b.id === bookingId);
  if (type === 'before') {
    booking.beforeWorkPhoto = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&auto=format&fit=crop';
  } else {
    booking.afterWorkPhoto = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&auto=format&fit=crop';
  }
  showToast(`${type === 'before' ? 'Before' : 'After'} Work Photo Saved.`);
  renderWorkerView();
}

function submitWorkerDepartureOtp(bookingId) {
  const otpInput = document.getElementById('worker-input-dep-otp').value.trim();
  const booking = state.bookings.find(b => b.id === bookingId);
  if (booking && booking.departureOtp === otpInput) {
    booking.status = 'COMPLETED';
    booking.afterWorkPhoto = booking.afterWorkPhoto || 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&auto=format&fit=crop';
    booking.timeline.push({ status: 'COMPLETED', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), note: 'Departure OTP verified. Work completed.' });
    
    const worker = state.workers.find(w => w.id === booking.workerId);
    if (worker) {
      worker.jobsCompletedThisMonth += 1;
      worker.welfareBalance += 10;
    }

    showToast('Work Completed! Payment processed & ₹10 credited to Welfare Fund.');
    renderWorkerView();
  } else {
    showToast('Invalid Departure OTP!', 'error');
  }
}

function renderAdminView() {
  const container = document.getElementById('admin-content');

  const pendingWorkers = state.workers.filter(w => w.verificationStatus === 'PENDING_VERIFICATION');
  const verifiedWorkers = state.workers.filter(w => w.verificationStatus === 'VERIFIED');
  const totalWelfareFund = state.workers.reduce((acc, w) => acc + w.welfareBalance, 0);

  container.innerHTML = `
    <div class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span class="text-xs text-slate-400 font-semibold uppercase block">Verified Cooperative Workers</span>
          <span class="text-3xl font-black text-emerald-600">${verifiedWorkers.length}</span>
          <span class="text-[11px] text-emerald-700 block mt-1 font-medium"><i class="fas fa-user-shield mr-1"></i> 100% KYC Approved</span>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span class="text-xs text-slate-400 font-semibold uppercase block">Total Bookings Executed</span>
          <span class="text-3xl font-black text-slate-800">${state.bookings.length}</span>
          <span class="text-[11px] text-blue-600 block mt-1 font-medium"><i class="fas fa-chart-line mr-1"></i> Zero Commission Exploitation</span>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span class="text-xs text-slate-400 font-semibold uppercase block">Cooperative Welfare Fund</span>
          <span class="text-3xl font-black text-amber-600">₹${totalWelfareFund}</span>
          <span class="text-[11px] text-amber-700 block mt-1 font-medium"><i class="fas fa-hand-holding-medical mr-1"></i> Micro-Insurance & Training</span>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span class="text-xs text-slate-400 font-semibold uppercase block">Fair Workload Gini Coeff.</span>
          <span class="text-3xl font-black text-teal-600">0.14</span>
          <span class="text-[11px] text-teal-700 block mt-1 font-medium"><i class="fas fa-scale-balanced mr-1"></i> Highly Equitable Distribution</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="px-2.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded-full">AI Demand Engine</span>
              <h3 class="text-lg font-bold text-slate-800 mt-1">7-Day Service Demand Forecasting</h3>
            </div>
            <span class="text-xs text-slate-400 font-medium"><i class="fas fa-microchip text-emerald-600 mr-1"></i> Predictive Analytics Model</span>
          </div>
          <div class="h-64 w-full">
            <canvas id="demandChart"></canvas>
          </div>
        </div>

        <div class="lg:col-span-1 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-bold text-slate-800 mb-3"><i class="fas fa-bullhorn text-amber-500 mr-2"></i> Zone-Wise High Demand Action Plan</h3>
            <div class="space-y-3 text-xs">
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div class="flex items-center justify-between font-bold text-slate-800">
                  <span>Dwarka Sec 12 (Plumbing)</span>
                  <span class="text-rose-600">+50% Surge</span>
                </div>
                <p class="text-[11px] text-slate-500 mt-1">Deploy 5 additional plumbers to meet weekend demand.</p>
              </div>
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div class="flex items-center justify-between font-bold text-slate-800">
                  <span>Sector 62 Noida (Cleaning)</span>
                  <span class="text-amber-600">+33% Surge</span>
                </div>
                <p class="text-[11px] text-slate-500 mt-1">Organize specialized deep cleaning equipment workshop.</p>
              </div>
            </div>
          </div>

          <div class="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-semibold">
            <i class="fas fa-lightbulb text-emerald-600 mr-1"></i> AI Recommendation: Shift 3 workers from Janakpuri to Dwarka for optimal balancing.
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <i class="fas fa-id-card text-emerald-600"></i> Cooperative Worker KYC Verification Queue
        </h3>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b border-slate-200 text-slate-400 font-semibold uppercase">
                <th class="py-3 px-4">Worker</th>
                <th class="py-3 px-4">Cooperative Union</th>
                <th class="py-3 px-4">Primary Skill</th>
                <th class="py-3 px-4">Status</th>
                <th class="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${state.workers.map(w => `
                <tr class="hover:bg-slate-50/80 transition-colors">
                  <td class="py-3 px-4 font-bold text-slate-800">${w.name} (${w.nameHindi})</td>
                  <td class="py-3 px-4 text-slate-600">${w.cooperative}</td>
                  <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">${w.skills.join(', ')}</span></td>
                  <td class="py-3 px-4">
                    <span class="px-2.5 py-1 text-[11px] font-bold rounded-full ${w.verificationStatus === 'VERIFIED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                      ${w.verificationStatus}
                    </span>
                  </td>
                  <td class="py-3 px-4 text-right">
                    ${w.verificationStatus === 'PENDING_VERIFICATION' ? `
                      <button onclick="approveKYC('${w.id}')" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-colors">
                        Approve & Verify
                      </button>
                    ` : '<span class="text-slate-400 text-[11px] italic">Verified Member</span>'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  setTimeout(initDemandChart, 300);
}

function approveKYC(workerId) {
  const worker = state.workers.find(w => w.id === workerId);
  if (worker) {
    worker.verificationStatus = 'VERIFIED';
    worker.insuranceActive = true;
    worker.badges.push('Verified Cooperative Member');
    showToast(`Worker ${worker.name} KYC Approved! Insurance activated.`);
    renderAdminView();
  }
}

function initDemandChart() {
  const ctx = document.getElementById('demandChart');
  if (!ctx) return;

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Plumbing Demand',
          data: [45, 50, 48, 60, 75, 110, 130],
          borderColor: '#0d9488',
          backgroundColor: 'rgba(13, 148, 136, 0.1)',
          fill: true,
          tension: 0.4
        },
        {
          label: 'Cleaning Demand',
          data: [60, 55, 65, 70, 90, 140, 160],
          borderColor: '#4f46e5',
          backgroundColor: 'rgba(79, 70, 229, 0.1)',
          fill: true,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

function showToast(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-20 right-6 px-5 py-3 rounded-xl shadow-2xl text-white font-bold text-xs z-50 transition-all duration-300 transform translate-y-4 opacity-0 flex items-center gap-2 ${
    type === 'success' ? 'bg-emerald-600' : 'bg-rose-600'
  }`;
  toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${msg}`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 50);

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ----------------------------------------------------
// WORKMITRA VOICE & AI ASSISTANT CHATBOT ENGINE (SIH 089) - ROBUST V2
// ----------------------------------------------------

const voiceState = {
  isOpen: false,
  isListening: false,
  ttsEnabled: true,
  recognition: null,
  hasInitialized: false,
  audioCtx: null,
  messages: []
};

// Web Audio Sound Chimes (Start/Stop Audio Feedback)
function playVoiceChime(type = 'start') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!voiceState.audioCtx) voiceState.audioCtx = new AudioContext();
    if (voiceState.audioCtx.state === 'suspended') {
      voiceState.audioCtx.resume();
    }

    const osc = voiceState.audioCtx.createOscillator();
    const gain = voiceState.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(voiceState.audioCtx.destination);

    if (type === 'start') {
      // Pleasant rising pitch (ding)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, voiceState.audioCtx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(880, voiceState.audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.15, voiceState.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, voiceState.audioCtx.currentTime + 0.2);
      osc.start();
      osc.stop(voiceState.audioCtx.currentTime + 0.2);
    } else {
      // Soft falling pitch
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, voiceState.audioCtx.currentTime); // E5
      osc.frequency.exponentialRampToValueAtTime(440, voiceState.audioCtx.currentTime + 0.12); // A4
      gain.gain.setValueAtTime(0.12, voiceState.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, voiceState.audioCtx.currentTime + 0.15);
      osc.start();
      osc.stop(voiceState.audioCtx.currentTime + 0.15);
    }
  } catch (e) {
    console.log('[Voice AI] Web Audio chime unavailable:', e);
  }
}

function initVoiceAssistant() {
  // Ensure Web Speech Synthesis voices are pre-loaded (Chrome fix)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  // Initialize Web Speech Recognition if supported
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    try {
      voiceState.recognition = new SpeechRecognition();
      voiceState.recognition.continuous = false;
      voiceState.recognition.interimResults = true;
      voiceState.recognition.maxAlternatives = 1;

      // Try Hindi-India first, with fallbacks
      voiceState.recognition.lang = 'hi-IN';

      voiceState.recognition.onstart = () => {
        voiceState.isListening = true;
        playVoiceChime('start');
        updateVoiceUIState();
      };

      voiceState.recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        const chatInput = document.getElementById('chat-input');
        if (chatInput) {
          chatInput.value = transcript;
        }

        if (event.results[0].isFinal) {
          stopSpeechRecognition();
          if (transcript.trim()) {
            handleUserSendMessage(transcript.trim());
          }
        }
      };

      voiceState.recognition.onerror = (event) => {
        console.warn('[Voice AI] Speech recognition error:', event.error);
        stopSpeechRecognition();
        if (event.error === 'not-allowed') {
          showToast('Mic permission blocked. You can still type queries in chat!', 'error');
        } else if (event.error === 'no-speech') {
          showToast('Koi aawaz nahi suni gayi. Kripya firse mic dabayein!', 'warning');
        }
      };

      voiceState.recognition.onend = () => {
        if (voiceState.isListening) {
          stopSpeechRecognition();
        }
      };
    } catch (e) {
      console.warn('[Voice AI] Speech recognition setup failed:', e);
    }
  } else {
    console.log('[Voice AI] Web Speech Recognition not supported in browser.');
  }

  // Initial welcome message
  addAssistantMessage('नमस्ते!  मैं **Mitra Voice Assistant** हूँ।\nआप मुझसे बोलकर (Mic ️ दबाएं) या टाइप करके प्लंबर, बिजली मिस्त्री, सफाई या सर्विस बुकिंग की सहायता ले सकते हैं!', false);
}

function toggleVoiceAssistant() {
  const panel = document.getElementById('voice-assistant-panel');
  if (!panel) return;
  voiceState.isOpen = !voiceState.isOpen;
  if (voiceState.isOpen) {
    panel.classList.add('active');
    document.getElementById('chat-input')?.focus();
    if (!voiceState.hasInitialized) {
      voiceState.hasInitialized = true;
      speakText('Namaste! Main Mitra Voice Assistant hoon. Aap bolkar ya type karke help le sakte hain.');
    }
  } else {
    panel.classList.remove('active');
    stopSpeechRecognition();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }
}

function toggleVoiceTTS() {
  voiceState.ttsEnabled = !voiceState.ttsEnabled;
  const btn = document.getElementById('tts-toggle-btn');
  if (btn) {
    btn.innerHTML = voiceState.ttsEnabled 
      ? `<i class="fas fa-volume-high text-xs"></i>` 
      : `<i class="fas fa-volume-xmark text-xs text-slate-500"></i>`;
  }
  if (!voiceState.ttsEnabled && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  showToast(voiceState.ttsEnabled ? 'Voice output ON ' : 'Voice output MUTED ', 'success');
}

function toggleSpeechRecognition() {
  if (!voiceState.recognition) {
    showToast('Browser Speech API not supported. You can type or use action chips!', 'error');
    document.getElementById('chat-input')?.focus();
    return;
  }
  if (voiceState.isListening) {
    stopSpeechRecognition();
  } else {
    try {
      const chatInput = document.getElementById('chat-input');
      if (chatInput) chatInput.value = '';
      voiceState.recognition.start();
    } catch (e) {
      console.warn('[Voice AI] Could not start speech recognition:', e);
      stopSpeechRecognition();
    }
  }
}

function stopSpeechRecognition() {
  if (voiceState.isListening) {
    playVoiceChime('stop');
  }
  voiceState.isListening = false;
  if (voiceState.recognition) {
    try { voiceState.recognition.stop(); } catch (e) {}
  }
  updateVoiceUIState();
}

function updateVoiceUIState() {
  const micBtn = document.getElementById('mic-btn');
  const waveContainer = document.getElementById('voice-wave-container');
  const micIcon = document.getElementById('mic-icon');
  const statusSubtitle = document.getElementById('assistant-status-subtitle');

  if (voiceState.isListening) {
    micBtn?.classList.add('mic-listening');
    if (micIcon) micIcon.className = 'fas fa-stop text-base';
    waveContainer?.classList.remove('hidden');
    if (statusSubtitle) {
      statusSubtitle.innerHTML = `<i class="fas fa-circle text-[8px] text-rose-500 animate-ping"></i> <span class="text-rose-400 font-bold">Listening... बोलिए!</span>`;
    }
  } else {
    micBtn?.classList.remove('mic-listening');
    if (micIcon) micIcon.className = 'fas fa-microphone text-base';
    waveContainer?.classList.add('hidden');
    if (statusSubtitle) {
      statusSubtitle.innerHTML = `<i class="fas fa-circle text-[8px] text-emerald-400"></i> Voice Ready (बोलिए या टाइप करें)`;
    }
  }
}

function sendQuickPrompt(promptText) {
  if (!voiceState.isOpen) toggleVoiceAssistant();
  handleUserSendMessage(promptText);
}

function handleUserSendMessage(overrideText = null) {
  const inputEl = document.getElementById('chat-input');
  const messageText = overrideText || inputEl?.value.trim();
  if (!messageText) return;

  if (inputEl && !overrideText) inputEl.value = '';

  // 1. Render User Message
  addUserMessage(messageText);

  // 2. Show Typing Indicator
  const typingId = addTypingIndicator();

  // 3. Process AI Response with realistic delay
  setTimeout(() => {
    removeTypingIndicator(typingId);
    processAIResponse(messageText);
  }, 500);
}

function addUserMessage(text) {
  const container = document.getElementById('chat-messages');
  if (!container) return;

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const msgHtml = `
    <div class="flex justify-end animate-fade-in mb-3">
      <div class="chat-bubble-user px-4 py-2.5 max-w-[85%] shadow-md">
        <p class="leading-relaxed font-medium">${escapeHtml(text)}</p>
        <span class="text-[9px] text-emerald-100/70 text-right block mt-1">${timeStr}</span>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', msgHtml);
  container.scrollTop = container.scrollHeight;
}

function addAssistantMessage(text, shouldSpeak = true, actionButtons = null) {
  const container = document.getElementById('chat-messages');
  if (!container) return;

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');

  let actionsHtml = '';
  if (actionButtons && Array.isArray(actionButtons)) {
    actionsHtml = `<div class="mt-2.5 pt-2 border-t border-slate-700/60 flex flex-wrap gap-1.5">` +
      actionButtons.map(b => `<button onclick="${b.action}" class="px-2.5 py-1 text-[11px] font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors shadow-xs flex items-center gap-1">${b.label}</button>`).join('') +
      `</div>`;
  }

  const msgHtml = `
    <div class="flex items-start gap-2.5 animate-fade-in mb-3">
      <div class="w-7 h-7 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-400 p-0.5 flex-shrink-0 mt-0.5 shadow-sm">
        <div class="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-amber-400 text-xs">
          <i class="fas fa-robot"></i>
        </div>
      </div>
      <div class="chat-bubble-assistant px-4 py-2.5 max-w-[85%] shadow-md">
        <div class="leading-relaxed text-slate-200">${formattedText}</div>
        ${actionsHtml}
        <span class="text-[9px] text-slate-400 block mt-1">${timeStr}</span>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', msgHtml);
  container.scrollTop = container.scrollHeight;

  if (shouldSpeak) {
    const plainText = text.replace(/\*\*(.*?)\*\*/g, '$1').replace(/<[^>]*>/g, '');
    speakText(plainText);
  }
}

function addTypingIndicator() {
  const container = document.getElementById('chat-messages');
  if (!container) return null;

  const id = 'typing-' + Date.now();
  const html = `
    <div id="${id}" class="flex items-start gap-2.5 animate-fade-in mb-3">
      <div class="w-7 h-7 rounded-xl bg-slate-800 p-0.5 flex-shrink-0 mt-0.5 border border-slate-700">
        <div class="w-full h-full flex items-center justify-center text-amber-400 text-xs">
          <i class="fas fa-robot"></i>
        </div>
      </div>
      <div class="chat-bubble-assistant px-4 py-2.5 shadow-md flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></span>
        <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-100"></span>
        <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-200"></span>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', html);
  container.scrollTop = container.scrollHeight;
  return id;
}

function removeTypingIndicator(id) {
  if (!id) return;
  const el = document.getElementById(id);
  if (el) el.remove();
}

function speakText(text) {
  if (!voiceState.ttsEnabled || !('speechSynthesis' in window)) return;

  try {
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const hiVoice = voices.find(v => v.lang.includes('hi') || v.name.toLowerCase().includes('hindi'));
    const enVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('en-US') || v.lang.includes('en-GB'));

    if (hiVoice && /[अ-ह]|नम|कह|कर|सह|सुब/.test(text)) {
      utterance.voice = hiVoice;
      utterance.lang = 'hi-IN';
    } else if (enVoice) {
      utterance.voice = enVoice;
      utterance.lang = 'en-IN';
    }

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn('[Voice AI] SpeechSynthesis failed:', e);
  }
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[m]));
}

// ----------------------------------------------------
// AI INTENT MATCHING & AUTOMATION ENGINE (EXPANDED)
// ----------------------------------------------------
function processAIResponse(userText) {
  const query = userText.toLowerCase().trim();

  // 1. Greetings
  if (/^(hi|hello|hey|namaste|नमस्ते|हेलो|हाय)/.test(query)) {
    addAssistantMessage('नमस्ते!  मैं **Mitra Voice Assistant** हूँ। आप क्या सेवा ढूँढ रहे हैं?\nजैसे: **"Plumber chahiye"**, **"Electrician bulao"**, ya **"Worker portal dikhao"**.', true, [
      { label: ' Plumbing', action: "sendQuickPrompt('Plumber chahiye')" },
      { label: '⚡ Electrical', action: "sendQuickPrompt('Electrician repair')" },
      { label: ' Cleaning', action: "sendQuickPrompt('House cleaning')" }
    ]);
    return;
  }

  // 2. Plumbing Services
  if (query.includes('plumb') || query.includes('tap') || query.includes('pipe') || query.includes('flush') || query.includes('leak') || query.includes('पाइप') || query.includes('नल') || query.includes('प्लंबर') || query.includes('पानी')) {
    filterCategory('Plumbing');
    addAssistantMessage(' **Plumbing Services** फ़िल्टर कर दी गई हैं! \nहमारे टॉप कोऑपरेटिव प्लंबर **Rahul Sharma** (Rating: 4.85★, Dwarka Sec 12) उपलब्ध हैं। \n• Base Price: **₹350** (0% Middleman Commission)', true, [
      { label: ' Book Plumber Now', action: "simulateQuickBooking()" }
    ]);
    return;
  }

  // 3. Electrical Services
  if (query.includes('electr') || query.includes('light') || query.includes('switch') || query.includes('short') || query.includes('wire') || query.includes('bijli') || query.includes('बिजली') || query.includes('इलेक्ट्रीशियन') || query.includes('पंखा')) {
    filterCategory('Electrical');
    addAssistantMessage('⚡ **Electrical Services** फ़िल्टर कर दी गई हैं! \nहमारे सर्टिफाइड इलेक्ट्रिशियन **Amit Verma** (4.65★, Janakpuri) उपलब्ध हैं। \n• Base Price: **₹300**', true, [
      { label: ' Book Electrician', action: "simulateQuickBooking()" }
    ]);
    return;
  }

  // 4. House Cleaning Services
  if (query.includes('clean') || query.includes('safai') || query.includes('broom') || query.includes('sweeping') || query.includes('सफाई') || query.includes('झाड़ू') || query.includes('पोछा')) {
    filterCategory('Cleaning');
    addAssistantMessage(' **Full House Cleaning Services** फ़िल्टर की गई हैं! \nसफाई विशेषज्ञ **Pooja Devi** (4.92★) और **Suresh Kumar** तैयार हैं। \n• Deep Cleaning Rate: **₹800**', true, [
      { label: ' Book Cleaning', action: "simulateQuickBooking()" }
    ]);
    return;
  }

  // 5. Appliance Repair
  if (query.includes('appliance') || query.includes('ac') || query.includes('fridge') || query.includes('repair') || query.includes('tv') || query.includes('geyser') || query.includes('एसी') || query.includes('मरम्मत')) {
    filterCategory('Appliance');
    addAssistantMessage(' **AC & Appliance Repair** फ़िल्टर किया गया है! \nAC सर्विसिंग, गैस फिलिंग व फ्रिज मरम्मत के लिए हमारे एक्सपर्ट्स उपलब्ध हैं। Base price ₹500.', true, [
      { label: ' Book Appliance Fix', action: "simulateQuickBooking()" }
    ]);
    return;
  }

  // 6. Carpentry
  if (query.includes('carpent') || query.includes('door') || query.includes('furniture') || query.includes('badhai') || query.includes('बढ़ई') || query.includes('फर्नीचर') || query.includes('लकड़ी')) {
    filterCategory('Carpentry');
    addAssistantMessage(' **Carpentry & Furniture Services** फ़िल्टर कर दी गई हैं! \nMaster Carpenter **Ramesh Singh** (7+ वर्ष अनुभव) उपलब्ध हैं। Base price ₹400.', true, [
      { label: ' Book Carpenter', action: "simulateQuickBooking()" }
    ]);
    return;
  }

  // 7. Switch to Worker Portal
  if (query.includes('worker') || query.includes('कामगार') || query.includes('वर्कर') || query.includes('पोर्टल')) {
    setRole('worker');
    addAssistantMessage(' **Worker Portal** खोल दिया गया है! \nयहाँ कार्यकर्ता ऑर्डर्स स्वीकार कर सकते हैं, **Arrival/Departure OTP** सत्यापित कर सकते हैं और **Welfare Balance** देख सकते हैं।', true, [
      { label: ' Verify Arrival OTP', action: "simulateArrivalOtp()" },
      { label: ' Complete Work & Payout', action: "simulateWorkCompletion()" }
    ]);
    return;
  }

  // 8. Switch to Admin Portal
  if (query.includes('admin') || query.includes('federation') || query.includes('cooperative society') || query.includes('एडमिन') || query.includes('सोसाइटी')) {
    setRole('admin');
    addAssistantMessage(' **Cooperative Federation Admin Dashboard** खोल दिया गया है! \nयहाँ सोसाइटी अधिकारी Fair Workload Distribution, Worker Welfare Balances और Demand Forecasting देख सकते हैं।', true, [
      { label: ' Return to Customer View', action: "setRole('customer')" }
    ]);
    return;
  }

  // 9. Customer View
  if (query.includes('customer') || query.includes('home') || query.includes('ग्राहक')) {
    setRole('customer');
    addAssistantMessage(' **Customer View** चालू हो गया है! आप यहाँ से किसी भी सेवा के लिए वर्कर बुक कर सकते हैं।');
    return;
  }

  // 10. Active Booking & OTP Check
  if (query.includes('booking') || query.includes('status') || query.includes('order') || query.includes('otp') || query.includes('ऑर्डर') || query.includes('बुकिंग')) {
    if (state.bookings && state.bookings.length > 0) {
      const b = state.bookings[0];
      addAssistantMessage(` **Active Booking Status**:\n• **Booking ID**: ${b.id}\n• **Service**: ${b.serviceName}\n• **Assigned Worker**: ${b.workerName}\n• **Status**: ${b.status}\n• **Arrival OTP**:  **${b.arrivalOtp}**\n• **Departure OTP**:  **${b.departureOtp}**`, true, [
        { label: ' Verify Arrival OTP', action: "simulateArrivalOtp()" },
        { label: ' Complete Work', action: "simulateWorkCompletion()" }
      ]);
    } else {
      addAssistantMessage('फिलहाल कोई सक्रिय बुकिंग नहीं है। आप किसी भी सर्विस कार्ड से नयी बुकिंग ट्रिगर कर सकते हैं!');
    }
    return;
  }

  // 11. Welfare Fund FAQ & Pricing
  if (query.includes('welfare') || query.includes('fund') || query.includes('insurance') || query.includes('rate') || query.includes('price') || query.includes('commission') || query.includes('वेलफेयर') || query.includes('बीमा')) {
    addAssistantMessage('️ **Worker Welfare Fund & Fair Wages (SIH 089)**:\nWorkMitra पर 0% बिचौलिया कमीशन है। 100% भुगतान सीधे कारीगरों को मिलता है। हर बुकिंग से ₹10 सीधे कार्यकर्ता के Welfare Fund में क्रेडिट होते हैं!', true, [
      { label: ' View Admin Welfare Analytics', action: "setRole('admin')" }
    ]);
    return;
  }

  // 12. Quick Demo Match Simulation
  if (query.includes('demo') || query.includes('match') || query.includes('simulate') || query.includes('डेमो')) {
    addAssistantMessage(' **SIH Demo**: AI Fair Workload Match Engine ट्रिगर किया जा रहा है!');
    simulateQuickBooking();
    return;
  }

  // Default Fallback
  addAssistantMessage('Aap WorkMitra par koi bhi service book kar sakte hain! Jaise: **"Plumber chahiye"**, **"Show Worker App"**, **"Check Active Booking"**, या **"What is Welfare Fund?"**. ️ Mic dabakar boliyen!', true, [
    { label: ' Plumber', action: "sendQuickPrompt('Plumber chahiye')" },
    { label: '⚡ Electrician', action: "sendQuickPrompt('Electrician repair')" },
    { label: ' Worker App', action: "setRole('worker')" }
  ]);
}

/* ---- MOBILE FOOTER ACCORDION TOGGLE ---- */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('footer h4, .footer-wm__col-header').forEach(header => {
    header.addEventListener('click', function() {
      if (window.innerWidth < 640) {
        const parent = this.parentElement;
        parent.classList.toggle('open');
      }
    });
  });
});

