export interface QuickFacts {
  procedureTime: string;
  anesthesia: string;
  hospitalStay: string;
  downtime: string;
  followUp: string;
  successRate: string;
  location: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface RecoveryPhase {
  phase: string;
  duration: string;
  details: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  category: 'hand-wrist' | 'peripheral-nerve' | 'reconstructive' | 'cosmetic-aesthetic' | 'trauma-burns' | 'pediatric-hand';
  categoryLabel: string;
  tagline: string;
  heroSubtitle: string;
  iconName: string;
  image: string;
  overview: string[];
  conditionsTreated: string[];
  candidateChecklist: string[];
  quickFacts: QuickFacts;
  gsApproachSteps: ApproachStep[];
  recoveryPhases: RecoveryPhase[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}

export interface ServiceCategory {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  iconName: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'hand-wrist',
    label: 'Hand & Wrist Surgery',
    shortLabel: 'Hand & Wrist',
    description: 'Specialized interventions for complex fractures, tendon tears, and degenerative wrist disorders.',
    iconName: 'Activity'
  },
  {
    id: 'peripheral-nerve',
    label: 'Peripheral Nerve & Brachial Plexus',
    shortLabel: 'Nerve & Plexus',
    description: 'High-precision micro-neural repair, nerve transfers, and compression releases.',
    iconName: 'Zap'
  },
  {
    id: 'reconstructive',
    label: 'Reconstructive Microsurgery',
    shortLabel: 'Reconstructive',
    description: 'Microvascular free tissue transfer, emergency replantations, and diabetic limb salvage.',
    iconName: 'Layers'
  },
  {
    id: 'trauma-burns',
    label: 'Emergency Trauma & Burn Care',
    shortLabel: 'Burns & Trauma',
    description: 'Acute emergency soft tissue repair, burn reconstruction, and post-burn contracture release.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'pediatric-hand',
    label: 'Pediatric Hand Surgery',
    shortLabel: 'Pediatric Hand',
    description: 'Congenital syndactyly, polydactyly, thumb reconstruction, and pediatric hand trauma.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'cosmetic-aesthetic',
    label: 'Cosmetic & Aesthetic Surgery',
    shortLabel: 'Cosmetic & Aesthetic',
    description: 'Refined cosmetic plastic surgery, scar revision, and aesthetic body/facial contouring.',
    iconName: 'Smile'
  }
];

export const servicesData: ServiceItem[] = [
  // 1. CARPAL TUNNEL RELEASE
  {
    id: 'carpal-tunnel-release',
    slug: 'carpal-tunnel-release',
    title: 'Carpal Tunnel Release & Decompression',
    shortTitle: 'Carpal Tunnel Release',
    category: 'hand-wrist',
    categoryLabel: 'Hand & Wrist Surgery',
    tagline: 'Decompression of the median nerve to eliminate tingling, numbness, and restore hand strength.',
    heroSubtitle: 'Minimally invasive open and endoscopic releases with immediate nerve decompression and accelerated functional rehabilitation.',
    iconName: 'Activity',
    image: '/images/dr_gourav_official.jpg',
    overview: [
      'Carpal Tunnel Syndrome occurs when the median nerve becomes compressed as it travels through the narrow carpal tunnel at the wrist base. Chronic compression leads to progressive tingling, nocturnal pain, sensory blunting in the thumb, index, and long fingers, and ultimately irreversible thenar muscle wasting.',
      'As India’s youngest European Board Certified Hand Surgeon (EDHS), Dr. Gourav Siwas performs carpal tunnel release utilizing high-magnification optical loupes or endoscopic instrumentation. The transverse carpal ligament is meticulously divided, completely relieving intracarpal pressure while preserving sensory branches.',
      'Most procedures are performed under Wide-Awake Local Anesthesia No Tourniquet (WALANT) or gentle sedation, allowing same-day discharge and immediate finger mobility.'
    ],
    conditionsTreated: [
      'Severe nocturnal hand numbness and burning pain waking you from sleep',
      'Persistent tingling and pins-and-needles sensation in the thumb, index, and middle fingers',
      'Loss of fine motor grip, dropping small objects (pens, keys, phones)',
      'Thenar muscle weakness and flattening of the thumb pad muscle base',
      'Failed conservative splinting and steroid injection therapy'
    ],
    candidateChecklist: [
      'Positive Phalen’s and Tinel’s nerve irritability signs upon clinical testing',
      'Confirmed nerve conduction velocity (NCV / EMG) slowing across the carpal tunnel',
      'Symptoms lasting greater than 3-6 months unresponsive to ergonomic splinting',
      'Sudden acute or progressive loss of digit sensibility'
    ],
    quickFacts: {
      procedureTime: '20 - 40 Minutes',
      anesthesia: 'WALANT / Local Anesthesia / Sedation',
      hospitalStay: 'Day Care',
      downtime: '3 - 7 Days (Light desk activities)',
      followUp: 'Day 5, Day 14 (Suture removal), Week 6',
      successRate: '98% Symptomatic Relief',
      location: 'Sir Ganga Ram Hospital'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Precision Micro-Diagnostic Assessment',
        description: 'Comprehensive sensory mapping, Two-Point Discrimination (2PD), and correlation with high-resolution nerve ultrasound and electrophysiology.'
      },
      {
        step: '02',
        title: 'Atraumatic Soft Tissue Access',
        description: 'Micro-incision placed precisely along the palmar skin crease to avoid cutaneous nerve branches and optimize cosmetic healing.'
      },
      {
        step: '03',
        title: 'Complete Transverse Ligament Release',
        description: 'Controlled division under direct optical magnification ensuring absolute decompression of the median nerve and all motor branches.'
      },
      {
        step: '04',
        title: 'Immediate Mobilization Protocol',
        description: 'Immediate active tendon gliding exercises initiated on the day of surgery to prevent adhesions and ensure rapid recovery.'
      }
    ],
    recoveryPhases: [
      { phase: 'Day 1 - 3', duration: 'First 72 Hours', details: 'Bulky supportive dressing. Active finger motion encouraged immediately. Nocturnal burning usually vanishes on night one.' },
      { phase: 'Day 10 - 14', duration: '2 Weeks', details: 'Suture removal. Light everyday household activities permitted. Desk and computer typing resumed.' },
      { phase: 'Week 4 - 6', duration: '6 Weeks', details: 'Pillar tenderness subsides. Heavy gripping, sports, and gym activities gradually reintroduced.' }
    ],
    faqs: [
      {
        question: 'How quickly does the tingling disappear after carpal tunnel surgery?',
        answer: 'Most patients notice immediate relief from nocturnal tingling and severe throbbing pain within the first 24 to 48 hours. Longstanding numbness in the fingertips gradually regenerates as the nerve recovers over weeks to months.'
      },
      {
        question: 'Can both hands be operated on at the same time?',
        answer: 'While technically feasible, Dr. Siwas usually recommends staggering bilateral releases by 2 to 3 weeks so you retain one fully functional hand for personal care and hygiene.'
      },
      {
        question: 'Is general anesthesia required?',
        answer: 'No. The procedure is routinely performed under WALANT (Wide Awake Local Anesthesia) or light twilight sedation. You can safely walk out of the clinic shortly after the procedure.'
      }
    ],
    relatedSlugs: ['trigger-finger', 'tendon-repair', 'cubital-tunnel', 'scaphoid-fracture']
  },

  // 2. SCAPHOID FRACTURE & NONUNION
  {
    id: 'scaphoid-fracture',
    slug: 'scaphoid-fracture',
    title: 'Scaphoid Fracture & Nonunion Reconstruction',
    shortTitle: 'Scaphoid Surgery',
    category: 'hand-wrist',
    categoryLabel: 'Hand & Wrist Surgery',
    tagline: 'Restoring wrist kinematics through precision headless compression screw fixation and vascularized bone grafting.',
    heroSubtitle: 'Specialized management of acute waist fractures, chronic nonunions, and avascular necrosis (AVN) of the proximal pole.',
    iconName: 'Bone',
    image: '/images/dr_gourav_official.jpg',
    overview: [
      'The scaphoid is the pivotal bone bridging the proximal and distal carpal rows. Because of its precarious retrograde blood supply, undiagnosed or inadequately treated fractures carry an exceptionally high risk of nonunion and avascular necrosis, ultimately leading to Scaphoid Nonunion Advanced Collapse (SNAC wrist).',
      'Dr. Gourav Siwas brings specialized cadaveric training and European Board certification in scaphoid reconstruction. Utilizing percutaneous or open headless cannulated compression screws (such as Herbert or Acutrak screws), stable compression is achieved with microscopic alignment.',
      'For complex, long-standing nonunions with bone defects, Dr. Siwas utilizes vascularized bone grafting (pedicled distal radius graft or free medial femoral condyle flap) to revascularize the bone and achieve sound osseous union.'
    ],
    conditionsTreated: [
      'Persistent anatomical snuffbox tenderness following a fall on an outstretched hand (FOOSH)',
      'Delayed union or nonunion of previously casted scaphoid fractures',
      'Proximal pole avascular necrosis with loss of structural integrity',
      'Wrist instability, clicking, and progressive loss of dorsiflexion'
    ],
    candidateChecklist: [
      'High-resolution CT scan or 3T MRI confirming fracture line, displacement, or nonunion gap',
      'Active athletes or working professionals requiring early wrist mobilization over prolonged casting',
      'Failed prior cast immobilization beyond 8-12 weeks'
    ],
    quickFacts: {
      procedureTime: '60 - 120 Minutes',
      anesthesia: 'Regional Nerve Block / General Anesthesia',
      hospitalStay: 'Day Care or 1 Night Stay',
      downtime: '2 - 4 Weeks (Removable splint)',
      followUp: 'Week 2, Week 6 (X-ray), Month 3 (CT scan for union)',
      successRate: '92 - 95% Union Rate in Nonunions',
      location: 'Sir Ganga Ram Hospital, New Delhi'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: '3D CT Morphological Assessment',
        description: 'Detailed analysis of fracture humpback deformity, bone resorption, and vascularity of the proximal pole.'
      },
      {
        step: '02',
        title: 'Dorsal or Volar Micro-Approach',
        description: 'Preserving carpal ligaments while visualizing the fracture plane under fluoroscopic and optical control.'
      },
      {
        step: '03',
        title: 'Rigid Headless Compression Fixation',
        description: 'Placement of a fully buried cannulated headless screw across the central third axis to generate maximum interfragmentary compression.'
      },
      {
        step: '04',
        title: 'Targeted Carpal Rehabilitation',
        description: 'Transition to custom thermoplast splints with early controlled dart-thrower motion to maintain wrist mechanics.'
      }
    ],
    recoveryPhases: [
      { phase: 'Week 1 - 2', duration: 'Post-Op Splinting', details: 'Suture healing, fingers kept mobile, wrist immobilised in light splint.' },
      { phase: 'Week 3 - 6', duration: 'Early Mobility', details: 'Removable splint. Initiation of active wrist flexion/extension once initial bone bridging is verified.' },
      { phase: 'Month 3', duration: 'Consolidation', details: 'CT verification of trabecular crossing. Return to heavy lifting and sports.' }
    ],
    faqs: [
      {
        question: 'Why do scaphoid fractures take so long to heal?',
        answer: 'The blood vessels supply the scaphoid from the distal end backwards (retrograde). A fracture through the waist can cut off blood supply to the proximal fragment, leading to slow healing or avascular necrosis.'
      },
      {
        question: 'Can I avoid surgery and just stay in a plaster cast?',
        answer: 'Non-displaced acute fractures may sometimes be treated with prolonged casting (8-12 weeks). However, percutaneous screw fixation allows faster healing, avoids cast stiffness, and significantly reduces the risk of nonunion.'
      }
    ],
    relatedSlugs: ['carpal-tunnel-release', 'tendon-repair', 'kienbocks-disease']
  },

  // 3. TENDON REPAIR & RECONSTRUCTION
  {
    id: 'tendon-repair',
    slug: 'tendon-repair',
    title: 'Flexor & Extensor Tendon Repair and Reconstruction',
    shortTitle: 'Tendon Repair',
    category: 'hand-wrist',
    categoryLabel: 'Hand & Wrist Surgery',
    tagline: 'Microsurgical 4-to-6 strand core suture repairs paired with early active mobilization for pristine hand kinematics.',
    heroSubtitle: 'Zone-specific restoration of finger bending and straightening following glass cuts, machinery accidents, and trauma.',
    iconName: 'Shield',
    image: '/images/dr_gourav_official.jpg',
    overview: [
      'Hand tendons are the delicate cables connecting forearm muscles to the finger bones. When severed—frequently in "No Man’s Land" (Zone II of the flexor tendon sheath)—meticulous surgical repair is mandatory to restore finger bending without adhesions or gapping.',
      'Dr. Gourav Siwas utilizes advanced high-tensile 4-strand and 6-strand core sutures reinforced with microscopic epitendinous running sutures. This delivers the robust biomechanical strength necessary to tolerate Early Active Mobilization (EAM) protocols, minimizing debilitating adhesions.',
      'For chronic neglected ruptures, Dr. Siwas performs two-stage tendon reconstruction utilizing silicone Hunter rods followed by autologous tendon grafting (palmaris longus or plantaris).'
    ],
    conditionsTreated: [
      'Inability to bend or straighten one or more fingers following an acute laceration or glass cut',
      'Jersey Finger (avulsion of the flexor digitorum profundus from the distal phalanx)',
      'Mallet Finger (loss of active DIP joint extension / drooping fingertip)',
      'Chronic tendon adhesions and scarring preventing full finger excursion'
    ],
    candidateChecklist: [
      'Acute hand or forearm lacerations with loss of tendon function',
      'Patients committed to supervised post-operative hand therapy and splinting protocols'
    ],
    quickFacts: {
      procedureTime: '60 - 150 Minutes',
      anesthesia: 'Brachial Plexus Block / General Anesthesia',
      hospitalStay: 'Day Care or Overnight Stay',
      downtime: '6 - 8 Weeks (Protected motion)',
      followUp: 'Week 1, Week 2, Week 4, Week 8, Month 3',
      successRate: 'Over 90% Return of Active Range of Motion',
      location: 'Department of Plastic Surgery, Sir Ganga Ram Hospital'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Emergency Tendon Retrieval',
        description: 'Micro-retrieval of retracted tendon stumps through midlateral or Bruner zig-zag incisions without traumatizing the pulley system.'
      },
      {
        step: '02',
        title: 'Multistrand Micro-Core Suturing',
        description: 'Placement of 4-to-6 strand modified Kessler or Adelaide sutures using premium braided 4-0 suture material.'
      },
      {
        step: '03',
        title: '360° Epitendinous Halsted Circumferential Stitch',
        description: 'Microscopic inverted running stitch smoothing tendon edges to ensure smooth gliding through the annular pulleys.'
      },
      {
        step: '04',
        title: 'Custom Dorsal Blocking Splint & EAM',
        description: 'Placement in a dedicated protective splint with initiation of safe active flexion exercises on post-operative day 3.'
      }
    ],
    recoveryPhases: [
      { phase: 'Day 1 - 21', duration: 'Weeks 1 to 3', details: 'Strict dorsal blocking splint. Passive flexion and gentle active place-and-hold exercises under hand therapist guidance.' },
      { phase: 'Week 4 - 6', duration: 'Weeks 4 to 6', details: 'Splint weaning during daytime. Progressive active flexion. Light functional object handling.' },
      { phase: 'Week 8+', duration: '2 Months Onward', details: 'Gradual resistance and strengthening exercises. Full grip strength recovery.' }
    ],
    faqs: [
      {
        question: 'When should a cut tendon be operated on?',
        answer: 'Primary repair is best performed within the first 24 to 72 hours. Delayed repairs beyond 2-3 weeks face muscle retraction and often require complex staged tendon grafting.'
      },
      {
        question: 'Why is hand therapy so crucial after tendon repair?',
        answer: 'A repaired tendon can either snap if stressed too soon, or get stuck in dense scar tissue if kept still. Dedicated hand therapy balances protective movement with tendon gliding.'
      }
    ],
    relatedSlugs: ['carpal-tunnel-release', 'finger-replantation', 'nerve-repair-grafting']
  },

  // 4. TRIGGER FINGER
  {
    id: 'trigger-finger',
    slug: 'trigger-finger',
    title: 'Trigger Finger & De Quervain’s Tenosynovitis',
    shortTitle: 'Trigger Finger Release',
    category: 'hand-wrist',
    categoryLabel: 'Hand & Wrist Surgery',
    tagline: 'Instant restoration of smooth, pain-free finger glide by relieving inflamed pulley constrictions.',
    heroSubtitle: 'Minimally invasive A1 pulley release restoring instantaneous digit extension and eliminating painful locking.',
    iconName: 'Scissors',
    image: '/images/dr_gourav_official.jpg',
    overview: [
      'Stenosing tenosynovitis (Trigger Finger) occurs when inflammation and thickening of the flexor tendon sheath constricts the A1 pulley at the palm base. When flexing the finger, the swollen tendon nodule catches, causing clicking, locking, and severe morning stiffness.',
      'De Quervain’s tenosynovitis affects the first dorsal compartment at the radial wrist, causing agonizing pain when lifting babies, turning door knobs, or texting.',
      'Dr. Gourav Siwas offers both ultrasound-guided percutaneous release and micro-incision open release under local anesthesia. The procedure takes under 15 minutes, provides immediate symptom liberation, and allows patients to resume hand movement immediately.'
    ],
    conditionsTreated: [
      'Fingers popping, snapping, or locking in a bent position upon waking',
      'Need to use the opposite hand to manually straighten out a locked finger',
      'Painful tender nodule on the palm at the base of the thumb, ring, or middle finger',
      'Sharp pain along the thumb side of the wrist (positive Finkelstein test)'
    ],
    candidateChecklist: [
      'Persistent clicking or painful locking unyielding to rest or splints',
      'Recurrent symptoms following previous corticosteroid injections',
      'Diabetic patients with multi-digit involvement'
    ],
    quickFacts: {
      procedureTime: '15 - 20 Minutes',
      anesthesia: 'Local Anesthesia (Painless Injection)',
      hospitalStay: 'Day Care (Walk-in Walk-out)',
      downtime: '1 - 2 Days',
      followUp: 'Day 7 (Check dressing), Day 12 (Suture removal)',
      successRate: '99% Permanent Cure',
      location: 'Outpatient Surgical Suite, Sir Ganga Ram Hospital'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Precision Micro-Palpation',
        description: 'Direct palpation of the nodule and marking of the A1 pulley boundaries to spare digital nerves.'
      },
      {
        step: '02',
        title: 'Mini-Incision Open or Percutaneous Release',
        description: 'A 1 cm crease incision ensuring complete division of the constricting A1 sheath while preserving the critical A2 pulley.'
      },
      {
        step: '03',
        title: 'Intraoperative Dynamic Trigger Check',
        description: 'The patient actively bends and straightens the finger on the table to confirm zero remaining friction or catching.'
      },
      {
        step: '04',
        title: 'Immediate Functional Return',
        description: 'Small adhesive dressing applied with permission to immediately handle light utensils and phones.'
      }
    ],
    recoveryPhases: [
      { phase: 'Day 1', duration: 'First 24 Hours', details: 'Immediate freedom from locking. Active movement encouraged immediately.' },
      { phase: 'Day 10 - 12', duration: '2 Weeks', details: 'Suture removal. Palm incision heals with minimal visible trace.' }
    ],
    faqs: [
      {
        question: 'Will the trigger finger return after surgery?',
        answer: 'A complete surgical release of the A1 pulley has a permanent cure rate exceeding 99% for the operated digit.'
      }
    ],
    relatedSlugs: ['carpal-tunnel-release', 'tendon-repair']
  },

  // 5. PERIPHERAL NERVE REPAIR & GRAFTING
  {
    id: 'nerve-repair-grafting',
    slug: 'nerve-repair-grafting',
    title: 'Peripheral Nerve Repair & Micro-Grafting',
    shortTitle: 'Nerve Repair',
    category: 'peripheral-nerve',
    categoryLabel: 'Peripheral Nerve & Brachial Plexus',
    tagline: 'High-magnification epineurial and fascicular coaptation restoring sensation, motor control, and preventing debilitating neuromas.',
    heroSubtitle: 'Operating microscope reconstruction of median, ulnar, radial, and digital nerves using autologous nerve grafts and bio-conduits.',
    iconName: 'Zap',
    image: '/images/dr_gourav_official.jpg',
    overview: [
      'Peripheral nerves are the biological wiring transmitting brain signals to muscles and sensory data from the fingertips. Trauma from sharp lacerations, fractures, or crush injuries severs these delicate axons, leading to complete numbness, paralysis, and excruciating neuroma pain if left untreated.',
      'Dr. Gourav Siwas performs microneural coaptation under high-power operating microscopes using 9-0 and 10-0 monofilament sutures. By matching individual fascicles and securing tension-free epineurial alignment, axonal regeneration is optimized.',
      'Where a gap exists due to tissue loss, Dr. Siwas employs sural nerve autografts or processed nerve allografts to bridge the defect seamlessly.'
    ],
    conditionsTreated: [
      'Complete loss of sensation in fingers following a glass laceration or knife cut',
      'Wrist drop (radial nerve palsy), Claw hand (ulnar nerve injury), or Ape hand deformity',
      'Painful hypersensitive neuromas and phantom electric shock sensations',
      'Nerve transections associated with complex fractures or dislocations'
    ],
    candidateChecklist: [
      'Sharp nerve transections diagnosed within days to weeks of trauma',
      'Secondary nerve defects requiring graft reconstruction within 6-9 months before motor endplates degrade',
      'Electrodiagnostic proof of axonotmesis or neurotmesis'
    ],
    quickFacts: {
      procedureTime: '90 - 180 Minutes',
      anesthesia: 'Regional Axillary Block / General Anesthesia',
      hospitalStay: 'Day Care or 1 Night',
      downtime: '2 - 3 Weeks of protected positioning',
      followUp: 'Monthly sensory mapping & Tinel sign tracking',
      successRate: '85 - 90% Functional Sensory/Motor Recovery',
      location: 'Department of Plastic Surgery, Sir Ganga Ram Hospital'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Micro-Preparation & Neuroma Excision',
        description: 'Resection of damaged nerve ends back to healthy, bleeding fascicles under 16x microscopic magnification.'
      },
      {
        step: '02',
        title: 'Fascicular Mapping & Sizing',
        description: 'Matching motor and sensory fascicular groups using anatomical landmarks and intraoperative nerve stimulation.'
      },
      {
        step: '03',
        title: 'Tension-Free Micro-Coaptation',
        description: 'Placement of 9-0/10-0 epineurial sutures augmented with fibrin sealant to create a biological, leak-free seal.'
      },
      {
        step: '04',
        title: 'Sensory Re-education Protocol',
        description: 'Structured sensory rehabilitation tracking axonal regeneration advancing at 1 mm per day.'
      }
    ],
    recoveryPhases: [
      { phase: 'Weeks 1 - 3', duration: 'Immobilization', details: 'Splinting to protect the micro-coaptation from stretch and tension.' },
      { phase: 'Months 2 - 6', duration: 'Regeneration Phase', details: 'Axons regenerate down the nerve tube at 1 mm/day. Advancing Tinel sign felt along the limb.' },
      { phase: 'Months 6 - 18', duration: 'Sensory Maturation', details: 'Return of protective sensation, temperature, and fine two-point discrimination.' }
    ],
    faqs: [
      {
        question: 'How fast do nerves grow back?',
        answer: 'Nerve axons regenerate at approximately 1 millimeter per day (about 1 inch per month). Regular follow-up tracks this progression with Tinel tapping.'
      }
    ],
    relatedSlugs: ['brachial-plexus', 'cubital-tunnel', 'tendon-repair', 'finger-replantation']
  },

  // 6. BRACHIAL PLEXUS RECONSTRUCTION
  {
    id: 'brachial-plexus',
    slug: 'brachial-plexus',
    title: 'Adult & Pediatric Brachial Plexus Surgery',
    shortTitle: 'Brachial Plexus Surgery',
    category: 'peripheral-nerve',
    categoryLabel: 'Peripheral Nerve & Brachial Plexus',
    tagline: 'Restoring shoulder stability, elbow flexion, and hand grasp through innovative nerve transfers and grafting.',
    heroSubtitle: 'Comprehensive microsurgical reconstruction for high-energy motorcycle brachial plexus avulsions and obstetric birth palsies.',
    iconName: 'Activity',
    image: '/images/dr_gourav_official.jpg',
    overview: [
      'The brachial plexus is the complex network of nerves originating from cervical nerve roots (C5-T1) that powers the entire upper extremity. High-speed road traffic accidents can rupture or avulse these roots from the spinal cord, leaving the arm completely flaccid and insensate.',
      'Dr. Gourav Siwas utilizes advanced nerve transfer techniques (neurotization), where expendable donor nerves (such as the spinal accessory nerve, intercostal nerves, or Oberlin fascicular transfers from the ulnar and median nerves) are rerouted directly to target muscles.',
      'By placing donor nerve fibers close to the paralyzed muscle motor entry points, reinnervation occurs months earlier than traditional long-distance nerve grafts.'
    ],
    conditionsTreated: [
      'Complete or upper trunk brachial plexus traction injury (loss of shoulder abduction and elbow flexion)',
      'Flail arm with global plexus avulsion following high-speed vehicular crashes',
      'Obstetric Brachial Plexus Palsy (Erb’s Palsy) in infants failing to recover biceps function by 3-6 months',
      'Severe unremitting neuropathic deafferentation pain'
    ],
    candidateChecklist: [
      'Injuries assessed ideally within 3 to 6 months of trauma before motor endplates atrophy',
      'Cervical MRI confirming pseudomeningoceles and root avulsion status',
      'EMG/NCV testing delineating denervation potentials'
    ],
    quickFacts: {
      procedureTime: '3 - 6 Hours',
      anesthesia: 'General Anesthesia',
      hospitalStay: '2 - 3 Days',
      downtime: '4 - 6 Weeks in protective shoulder sling',
      followUp: 'Every 2 Months for 2 Years',
      successRate: 'Over 80% Restoration of Active Elbow Flexion',
      location: 'Advanced Neurosurgical / Microsurgical Suite, Sir Ganga Ram Hospital'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Exploration & Intraoperative Neuromonitoring',
        description: 'Supraclavicular and infraclavicular exposure with electric stimulation confirming root viability.'
      },
      {
        step: '02',
        title: 'Oberlin Double Nerve Transfer',
        description: 'Transferring fascicles of the ulnar and median nerves directly to the biceps and brachialis motor branches.'
      },
      {
        step: '03',
        title: 'Spinal Accessory to Suprascapular Transfer',
        description: 'Re-routing the distal accessory nerve to restore shoulder abduction and external rotation.'
      },
      {
        step: '04',
        title: 'Biofeedback & Muscle Stimulation',
        description: 'Dedicated neuro-physiotherapy protocol reinforcing new motor pathways as reinnervation activates.'
      }
    ],
    recoveryPhases: [
      { phase: 'Month 1 - 2', duration: 'Protection', details: 'Arm rested in sling. Gentle passive joint movement to avoid contractures.' },
      { phase: 'Month 4 - 8', duration: 'First Muscle Flickers', details: 'First voluntary contractions observed on EMG and visual inspection.' },
      { phase: 'Month 12 - 24', duration: 'Power Development', details: 'Full antigravity elbow flexion and functional limb utility restored.' }
    ],
    faqs: [
      {
        question: 'What is the optimal timing for brachial plexus surgery?',
        answer: 'The ideal window is within 3 to 6 months from the date of injury. Waiting longer than 12 months drastically reduces the chances of muscle recovery due to irreversible motor endplate loss.'
      }
    ],
    relatedSlugs: ['nerve-repair-grafting', 'cubital-tunnel', 'finger-replantation']
  },

  // 7. CUBITAL TUNNEL SYNDROME
  {
    id: 'cubital-tunnel',
    slug: 'cubital-tunnel',
    title: 'Cubital Tunnel Syndrome & Ulnar Transposition',
    shortTitle: 'Cubital Tunnel Release',
    category: 'peripheral-nerve',
    categoryLabel: 'Peripheral Nerve & Brachial Plexus',
    tagline: 'Decompressing the ulnar nerve at the elbow to eliminate ring/little finger numbness and prevent claw hand.',
    heroSubtitle: 'In-situ decompression and submuscular/subcutaneous anterior transposition preserving intrinsic hand dexterity.',
    iconName: 'Activity',
    image: '/images/dr_gourav_official.jpg',
    overview: [
      'Cubital Tunnel Syndrome is the second most common compression neuropathy of the upper extremity. The ulnar nerve passes behind the medial epicondyle ("funny bone") inside a rigid fibro-osseous tunnel. Repetitive bending or prolonged leaning on elbows leads to ischemia and progressive clawing of the ring and little fingers.',
      'Dr. Gourav Siwas performs decompression with or without anterior transposition depending on the nerve’s stability during intraoperative elbow flexion.',
      'Surgical release frees the nerve from all five potential compression points along the arcade of Struthers, medial intermuscular septum, Osborne’s ligament, and flexor carpi ulnaris heads.'
    ],
    conditionsTreated: [
      'Persistent tingling and numbness in the pinky and ring finger, especially when holding a phone or driving',
      'Weakness of pinch grip (Froment’s sign positive) and difficulty opening jars',
      'Hollowing/atrophy of the first webspace between the thumb and index finger',
      'Snapping sensation over the medial elbow when flexing and extending the arm'
    ],
    candidateChecklist: [
      'Positive elbow flexion compression test reproducing symptoms within 60 seconds',
      'NCV showing conduction velocity slowing below 50 m/s across the elbow',
      'Intrinsic muscle wasting of the hand'
    ],
    quickFacts: {
      procedureTime: '45 - 75 Minutes',
      anesthesia: 'Axillary Nerve Block / Sedation',
      hospitalStay: 'Day Care',
      downtime: '1 - 2 Weeks',
      followUp: 'Day 10 (Suture inspection), Week 4',
      successRate: '95% Symptom Resolution',
      location: 'Sir Ganga Ram Hospital'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Medial Curvilinear Exposure',
        description: 'Safe incision protecting the medial antebrachial cutaneous nerve branches.'
      },
      {
        step: '02',
        title: 'Micro-Decompression of All Tight Bands',
        description: 'Complete release of Osborne’s band, deep fascia, and arcade of Struthers.'
      },
      {
        step: '03',
        title: 'Dynamic Stability Testing',
        description: 'Checking if the nerve subluxates anteriorly upon full elbow flexion; if unstable, an anterior subcutaneous transposition with fascial sling is performed.'
      },
      {
        step: '04',
        title: 'Soft Dressing & Early Range of Motion',
        description: 'No rigid casting required; immediate gentle elbow flexion permitted.'
      }
    ],
    recoveryPhases: [
      { phase: 'Days 1 - 7', duration: 'Soft Wrap', details: 'Elbow resting in soft dressing. Gentle active movement.' },
      { phase: 'Week 2 - 4', duration: 'Full Mobility', details: 'Return to normal desk work and driving. Night splinting discontinued.' }
    ],
    faqs: [
      {
        question: 'How is cubital tunnel different from carpal tunnel?',
        answer: 'Carpal tunnel affects the median nerve (thumb, index, middle fingers), while cubital tunnel affects the ulnar nerve (little and ring fingers).'
      }
    ],
    relatedSlugs: ['carpal-tunnel-release', 'nerve-repair-grafting']
  },

  // 8. FINGER & HAND REPLANTATION
  {
    id: 'finger-replantation',
    slug: 'finger-replantation',
    title: 'Emergency Finger & Hand Replantation',
    shortTitle: 'Finger Replantation',
    category: 'reconstructive',
    categoryLabel: 'Reconstructive Microsurgery',
    tagline: 'Life-changing emergency microvascular surgery reattaching amputated digits, hands, and upper extremities.',
    heroSubtitle: 'Member of Sir Ganga Ram Hospital’s landmark bilateral hand transplant team providing 24x7 emergency replantation.',
    iconName: 'Droplet',
    image: '/images/dr_gourav_official.jpg',
    overview: [
      'Traumatic total or subtotal amputation of fingers, thumbs, or hands is a devastating surgical emergency. Successful replantation requires re-establishing biological circulation through microscopic arteries and veins smaller than 1 millimeter in diameter.',
      'Having been an integral team member in Delhi’s 1st successful bilateral Hand Transplant at Sir Ganga Ram Hospital in January 2024, Dr. Gourav Siwas brings elite microsurgical expertise to acute amputations.',
      'The surgical protocol encompasses rigid bony fixation with K-wires, microvascular arterial and venous anastomoses, dual nerve coaptations, flexor/extensor tendon repairs, and vascularized soft tissue coverage under high-power Zeiss operating microscopes.'
    ],
    conditionsTreated: [
      'Complete or incomplete traumatic amputations of fingers, thumbs, or entire hand',
      'Industrial machinery press injuries, chaff cutter accidents, and circular saw cuts',
      'Ring avulsion injuries and severe devascularized crush trauma',
      'Pediatric digit amputations'
    ],
    candidateChecklist: [
      'Amputated part properly preserved: wrapped in moist saline gauze, inside a clean sealed bag, placed on ice slurry (NEVER directly on dry ice or water)',
      'Warm ischemia time under 6-8 hours, or cold ischemia time under 12-24 hours',
      'Physiologically stable patient cleared for emergency microvascular surgery'
    ],
    quickFacts: {
      procedureTime: '3 - 8 Hours per Digit',
      anesthesia: 'General Anesthesia / Continuous Block',
      hospitalStay: '5 - 7 Days (Microvascular monitoring)',
      downtime: '6 - 12 Weeks (Rehabilitation phase)',
      followUp: 'Twice Weekly initially, then Monthly',
      successRate: '>90% Viability Rate with prompt presentation',
      location: '24x7 Microsurgical Emergency, Sir Ganga Ram Hospital'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Two-Team Emergency Debridement',
        description: 'Simultaneous anatomical tagging of vessels, nerves, and bones on both patient stump and amputated part under microscope.'
      },
      {
        step: '02',
        title: 'Stable Skeletal Fixation',
        description: 'Bone shortening and axial K-wire fixation providing rigid bone stability.'
      },
      {
        step: '03',
        title: 'Microvascular Revascularization',
        description: 'Arterial anastomosis using 10-0/11-0 microsutures, followed by 2 veins per artery to ensure robust inflow and avoid venous congestion.'
      },
      {
        step: '04',
        title: 'Tendon, Nerve Repair & Intensive Flap Care',
        description: 'Epineurial sensory nerve coaptation, tension-free skin closure, and transfer to a warmed ICU room with continuous pulse oximetry monitoring.'
      }
    ],
    recoveryPhases: [
      { phase: 'Days 1 - 5', duration: 'Critical Monitoring', details: 'Hospitalized in warm room. Regular pinprick and Doppler monitoring for vascular patency.' },
      { phase: 'Weeks 4 - 6', duration: 'Bone Union', details: 'K-wire removal once radiographic callus forms. Protective hand therapy begins.' },
      { phase: 'Months 3 - 12', duration: 'Sensory Recovery', details: 'Reinnervation returns protective sensation and functional grip.' }
    ],
    faqs: [
      {
        question: 'How should an amputated finger be preserved?',
        answer: 'Wrap the finger in clean, damp gauze, place it inside a sealed waterproof plastic bag, and then put that bag into a container filled with ice and water. NEVER put the finger directly into ice or water!'
      },
      {
        question: 'Can all amputated fingers be saved?',
        answer: 'Thumbs and multiple fingers are given highest priority. Sharp cut amputations have the best success rates (over 90%), while severe crush or avulsion injuries require careful assessment.'
      }
    ],
    relatedSlugs: ['tendon-repair', 'nerve-repair-grafting', 'free-tissue-transfer']
  },

  // 9. FREE TISSUE TRANSFER (MICROVASCULAR FLAPS)
  {
    id: 'free-tissue-transfer',
    slug: 'free-tissue-transfer',
    title: 'Free Microvascular Flaps & Tissue Transfer',
    shortTitle: 'Free Tissue Flap',
    category: 'reconstructive',
    categoryLabel: 'Reconstructive Microsurgery',
    tagline: 'Transferring autologous skin, muscle, or bone with microvascular reconnection to reconstruct complex defects.',
    heroSubtitle: 'Advanced microsurgical reconstruction of head & neck, upper limb, and lower extremity defects following trauma or tumor resection.',
    iconName: 'Layers',
    image: '/images/procedure-2.jpg',
    overview: [
      'When major trauma, oncological resection, or severe infection leaves an extensive soft-tissue defect exposing bones, joints, or titanium hardware, conventional skin grafts cannot survive. Free tissue transfer (microvascular free flap) represents the pinnacle of modern reconstructive surgery.',
      'Dr. Gourav Siwas harvests autologous vascularized tissue blocks—such as the Anterolateral Thigh (ALT) flap, Gracilis muscle, Radial Forearm flap, or Free Fibula bone flap—and transfers them to the wound bed.',
      'Under the operating microscope, the donor artery and vein are coupled to local recipient vessels using 9-0 and 10-0 microsutures, immediately restoring independent blood flow to the reconstructed area.'
    ],
    conditionsTreated: [
      'Compound lower leg fractures (Gustilo-Anderson IIIB/C) with exposed tibia and hardware',
      'Extensive hand or forearm degloving injuries with exposed tendons and joints',
      'Mandible and maxillofacial defects following oral cancer resection',
      'Chronic osteomyelitis with non-healing bone and soft tissue gaps'
    ],
    candidateChecklist: [
      'Non-healing complex wounds unsuited for simpler local flaps',
      'Adequate recipient donor vessels confirmed by Doppler or CT Angiography'
    ],
    quickFacts: {
      procedureTime: '4 - 8 Hours',
      anesthesia: 'General Anesthesia',
      hospitalStay: '5 - 7 Days',
      downtime: '4 - 6 Weeks',
      followUp: 'Day 3, Day 7, Month 1, Month 3',
      successRate: '96 - 98% Flap Survival Rate',
      location: 'Department of Plastic & Reconstructive Surgery, Sir Ganga Ram Hospital'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Defect Preparation & Recipient Vessel Isolation',
        description: 'Meticulous debridement of all non-viable tissue and micro-dissection of healthy high-flow recipient vessels outside the injury zone.'
      },
      {
        step: '02',
        title: 'Precision Flap Harvest',
        description: 'Anatomical harvesting of the donor tissue with long vascular pedicles, minimizing donor site morbidity.'
      },
      {
        step: '03',
        title: 'Micro-Anastomosis',
        description: 'End-to-end or end-to-side microvascular suturing under Zeiss 16x magnification, verifying patent flow.'
      },
      {
        step: '04',
        title: 'Flap Insetting & Monitored Recovery',
        description: 'Tensionless insetting with monitoring skin paddle and hourly clinical and acoustic Doppler checks.'
      }
    ],
    recoveryPhases: [
      { phase: 'Days 1 - 5', duration: 'Hospital Monitoring', details: 'Strict bedrest and room temperature management. Frequent flap vitality checks.' },
      { phase: 'Week 2 - 3', duration: 'Wound Consolidation', details: 'Suture lines heal, donor site dressings managed. Gradual mobilization begins.' },
      { phase: 'Month 2 - 3', duration: 'Functional Return', details: 'Swelling settles, secondary contouring or debulking performed if desired.' }
    ],
    faqs: [
      {
        question: 'Will there be a large scar at the donor site?',
        answer: 'Donor sites (like the anterolateral thigh or back) are selected to allow linear closure and are easily hidden by clothing. Cosmetic refinement is given equal priority.'
      }
    ],
    relatedSlugs: ['finger-replantation', 'diabetic-foot', 'trauma-burns']
  },

  // 10. DIABETIC FOOT RECONSTRUCTION
  {
    id: 'diabetic-foot',
    slug: 'diabetic-foot',
    title: 'Diabetic Foot Reconstruction & Limb Salvage',
    shortTitle: 'Diabetic Foot Salvage',
    category: 'reconstructive',
    categoryLabel: 'Reconstructive Microsurgery',
    tagline: 'Preventing major amputations through aggressive debridement, targeted revascularization, and durable flap coverage.',
    heroSubtitle: 'Comprehensive plastic surgical management of chronic neuropathic ulcers, exposed calcaneus, and Charcot neuroarthropathy.',
    iconName: 'ShieldAlert',
    image: '/images/procedure-2.jpg',
    overview: [
      'Diabetic foot ulcers complicated by neuropathy and vascular compromise are the leading cause of non-traumatic lower extremity amputations. Too often, below-knee or above-knee amputation is proposed when modern limb-salvage plastic surgery can rescue a fully functional walking foot.',
      'Dr. Gourav Siwas provides advanced limb salvage protocols. After clearing infection, durable weight-bearing soft tissue coverage is achieved using local muscle flaps (reverse sural flap, medial plantar artery flap) or microvascular free tissue transfer.',
      'Restoring biomechanically stable padding over the heel and metatarsal heads allows patients to walk again without ulcer recurrence.'
    ],
    conditionsTreated: [
      'Chronic non-healing plantar ulcers persisting for months',
      'Heel ulcers exposing the calcaneus bone or Achilles tendon',
      'Infected diabetic wounds following partial toe amputations',
      'Charcot foot deformities with breakdown points'
    ],
    candidateChecklist: [
      'Diabetic patients with preserved or angioplasty-restored distal arterial runoff',
      'Controlled infection and adequate glycemic control',
      'Desire to avoid major leg amputation and preserve ambulation'
    ],
    quickFacts: {
      procedureTime: '90 - 180 Minutes',
      anesthesia: 'Spinal / Epidural / General Anesthesia',
      hospitalStay: '3 - 5 Days',
      downtime: '4 - 6 Weeks (Non-weight bearing phase)',
      followUp: 'Weekly during healing phase',
      successRate: 'Over 90% Limb Salvage Rate in suitable candidates',
      location: 'Sir Ganga Ram Hospital, New Delhi'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Radical Biofilm & Necrotic Debridement',
        description: 'Complete removal of all non-viable tissue down to healthy bleeding margins.'
      },
      {
        step: '02',
        title: 'Negative Pressure Wound Therapy (VAC)',
        description: 'Preparation of a pristine granular wound bed and biological bacterial clearance.'
      },
      {
        step: '03',
        title: 'Durable Flap Reconstruction',
        description: 'Transferring thick, well-vascularized tissue that resists shear forces under the foot.'
      },
      {
        step: '04',
        title: 'Custom Offloading Orthotics',
        description: 'Transitioning to specialized diabetic footwear preventing pressure point recurrence.'
      }
    ],
    recoveryPhases: [
      { phase: 'Weeks 1 - 4', duration: 'Zero Weight Bearing', details: 'Strict elevation and pressure offloading to ensure total flap integration.' },
      { phase: 'Weeks 5 - 8', duration: 'Gradual Partial Loading', details: 'Custom diabetic rocker boot fitted. Gentle progressive weight transfer.' },
      { phase: 'Month 3+', duration: 'Normal Ambulation', details: 'Full return to walking with custom orthotics.' }
    ],
    faqs: [
      {
        question: 'Can amputation truly be avoided?',
        answer: 'In the vast majority of cases where major vessels are salvageable, specialized flap reconstruction successfully seals the wound, protects the bone, and avoids amputation.'
      }
    ],
    relatedSlugs: ['free-tissue-transfer', 'trauma-burns']
  },

  // 16. BURN RECONSTRUCTION
  {
    id: 'burn-reconstruction',
    slug: 'burn-reconstruction',
    title: 'Burn Reconstruction & Post-Burn Contracture Release',
    shortTitle: 'Burn Reconstruction',
    category: 'trauma-burns',
    categoryLabel: 'Emergency Trauma & Burn Care',
    tagline: 'Restoring joint mobility, neck extension, and functional independence through advanced flap releases and skin grafting.',
    heroSubtitle: 'Comprehensive reconstructive plastic surgery for severe thermal, electrical, and chemical post-burn contractures.',
    iconName: 'Sun',
    image: '/images/procedure-2.jpg',
    overview: [
      'Severe burn injuries often heal with debilitating hypertrophic scar tissue and tight contracture bands that freeze joints, pin the chin to the chest, or pull fingers into rigid claws. These deformities cause severe pain, immobility, and functional dependency.',
      'Dr. Gourav Siwas specializes in acute and late post-burn reconstruction. Treatment strategies include multi-flap Z-plasties, local tissue rearrangements, full-thickness skin grafting, and free microvascular tissue transfer to restore pliable, functional skin.',
      'Surgical release is integrated with dedicated occupational therapy and pressure garments to prevent contracture recurrence.'
    ],
    conditionsTreated: [
      'Post-burn neck contractures preventing upward gaze and chin movement',
      'Axillary (armpit) contractures restricting arm elevation',
      'Hand and finger contractures with locked joints (clawing, web space effacement)',
      'Severe facial burn scarring affecting eyelids, lips, and nostrils'
    ],
    candidateChecklist: [
      'Contracture bands causing restriction of joint motion or facial distortion',
      'Mature post-burn scars ready for surgical revision'
    ],
    quickFacts: {
      procedureTime: '1.5 - 3.5 Hours',
      anesthesia: 'General Anesthesia',
      hospitalStay: '1 - 3 Days',
      downtime: '2 - 4 Weeks',
      followUp: 'Weekly during splinting phase',
      successRate: 'Dramatically Restored Mobility',
      location: 'Burn Care & Plastic Surgery Unit, Sir Ganga Ram Hospital'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Contracture Vector Mapping',
        description: 'Analyzing primary and secondary lines of tension across joint lines.'
      },
      {
        step: '02',
        title: 'Radical Cicatricial Release',
        description: 'Complete division of scar tissue down to healthy pliable subcutaneous layers until full anatomical extension is verified.'
      },
      {
        step: '03',
        title: 'Vascularized Flap or Full-Thickness Grafting',
        description: 'Covering released areas with supple vascularized tissue or sheet grafts that resist secondary contracture.'
      },
      {
        step: '04',
        title: 'Static & Dynamic Splinting Protocol',
        description: 'Immediate post-operative splinting in maximum extension to preserve the surgical gain.'
      }
    ],
    recoveryPhases: [
      { phase: 'Weeks 1 - 2', duration: 'Graft Take', details: 'Dressings kept undisturbed for graft integration. Gentle motion under guidance.' },
      { phase: 'Month 1 - 6', duration: 'Pressure Garment Phase', details: 'Custom pressure garments and night splints worn to keep scars flat and mobile.' }
    ],
    faqs: [
      {
        question: 'When is the best time to operate on a burn scar?',
        answer: 'Severe contractures causing functional impairment (like inability to close eyes or bend fingers) are released urgently. For aesthetic scars, waiting 6-12 months for scar maturation is ideal.'
      }
    ],
    relatedSlugs: ['free-tissue-transfer', 'tendon-repair']
  },

  // 17. 24/7 EMERGENCY TRAUMA CARE
  {
    id: 'emergency-trauma-care',
    slug: 'emergency-trauma-care',
    title: '24/7 Acute Emergency Trauma & Soft Tissue Care',
    shortTitle: '24/7 Trauma Care',
    category: 'trauma-burns',
    categoryLabel: 'Emergency Trauma & Burn Care',
    tagline: 'Round-the-clock emergency microvascular salvage, laceration repairs, and complex polytrauma soft tissue reconstruction.',
    heroSubtitle: 'Immediate, hospital-backed trauma intervention with dual European and National Board certified plastic surgical precision.',
    iconName: 'ShieldAlert',
    image: '/images/procedure-3.jpg',
    overview: [
      'Acute trauma to the upper extremity, face, and soft tissues requires urgent, expert surgical intervention to prevent irreversible functional loss and severe cosmetic deformities.',
      'Dr. Gourav Siwas provides comprehensive 24/7 emergency trauma care at Sir Ganga Ram Hospital, New Delhi. Services range from intricate repair of severed tendons, nerves, and arteries to high-magnification digital replantation and immediate coverage of complex wounds.',
      'Emergency admissions and casualty consultations are available round the clock with dedicated operating room access.'
    ],
    conditionsTreated: [
      'Complex hand, wrist, and extremity lacerations involving nerves and tendons',
      'Industrial and domestic crush injuries with open bone exposure',
      'Facial bone fractures and soft tissue trauma',
      'Acute skin loss requiring emergency local or microvascular flap coverage'
    ],
    candidateChecklist: [
      'Acute traumatic injury requiring emergency plastic or reconstructive intervention',
      'Available 24/7 via Sir Ganga Ram Hospital casualty and emergency line'
    ],
    quickFacts: {
      procedureTime: 'Emergency / Case Dependent',
      anesthesia: 'WALANT / Regional Block / General Anesthesia',
      hospitalStay: 'Day Care to Inpatient Admission',
      downtime: 'Variable based on injury severity',
      followUp: 'Emergency post-op review and phased rehabilitation',
      successRate: 'Maximized Limb & Functional Salvage',
      location: 'Emergency / Plastic Surgery, Sir Ganga Ram Hospital'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Emergency Triage & Vital Stabilization',
        description: 'Rapid multidisciplinary assessment, bleeding control, and radiologic evaluation.'
      },
      {
        step: '02',
        title: 'Atraumatic Wound Debridement',
        description: 'Meticulous removal of contaminated and non-viable tissues while conserving critical structures.'
      },
      {
        step: '03',
        title: 'Micro-Anatomical Repair',
        description: 'Precision microscopic repair of neurovascular bundles, tendons, and bony fixation.'
      },
      {
        step: '04',
        title: 'Definitive Soft Tissue Coverage',
        description: 'Immediate local or free flap coverage to protect exposed nerves, vessels, and bone.'
      }
    ],
    recoveryPhases: [
      { phase: 'Phase 1', duration: 'Acute Healing', details: 'Wound protection, edema reduction, and antibiotic support.' },
      { phase: 'Phase 2', duration: 'Rehabilitation', details: 'Targeted hand and occupational therapy to regain maximum function.' }
    ],
    faqs: [
      {
        question: 'Is emergency plastic surgery available 24/7?',
        answer: 'Yes, round-the-clock emergency plastic, reconstructive, and hand trauma coverage is available at Sir Ganga Ram Hospital.'
      }
    ],
    relatedSlugs: ['burn-reconstruction', 'finger-replantation', 'tendon-repair']
  },

  // 18. PEDIATRIC HAND ANOMALIES (SYNDACTYLY / POLYDACTYLY)
  {
    id: 'congenital-hand-anomalies',
    slug: 'congenital-hand-anomalies',
    title: 'Congenital Hand Surgery (Syndactyly & Polydactyly)',
    shortTitle: 'Pediatric Hand Surgery',
    category: 'pediatric-hand',
    categoryLabel: 'Pediatric Hand Surgery',
    tagline: 'Restoring natural hand anatomy, independent digit function, and confidence in children with congenital hand differences.',
    heroSubtitle: 'European Board Certified hand expertise in webbed fingers (syndactyly), extra digits (polydactyly), and thumb reconstruction.',
    iconName: 'HeartHandshake',
    image: '/images/dr_gourav_official.jpg',
    overview: [
      'Congenital hand anomalies—such as webbed fingers (syndactyly), extra digits (polydactyly), or underdeveloped thumbs (hypoplasia)—can impact a child’s developmental milestones and dexterity if uncorrected.',
      'As India’s youngest European Board Certified Hand Surgeon, Dr. Gourav Siwas brings elite pediatric hand training, including research on fingertip reconstruction in children. Surgical separation of webbed fingers utilizes intricate zig-zag incisions and local flaps to reconstruct natural web spaces without tension, preventing contracture.',
      'Procedures are performed safely under pediatric anesthesia, setting up the child for a lifetime of unhindered hand function and normal social confidence.'
    ],
    conditionsTreated: [
      'Syndactyly: simple or complex fusion of adjacent fingers or toes',
      'Polydactyly: duplication of thumbs (preaxial) or little fingers (postaxial)',
      'Thumb hypoplasia and radial club hand deformities',
      'Constriction ring syndrome (Amniotic band syndrome)'
    ],
    candidateChecklist: [
      'Infants and children typically evaluated between 6 to 18 months of age',
      'Stable developmental and pediatric clearance'
    ],
    quickFacts: {
      procedureTime: '60 - 120 Minutes',
      anesthesia: 'Pediatric General Anesthesia with Caudal/Regional Block',
      hospitalStay: 'Day Care or 1 Night Stay',
      downtime: '2 - 3 Weeks (Protective soft cast)',
      followUp: 'Week 2 (Check dressings), Month 1, Year 1',
      successRate: 'Excellent Cosmetic & Functional Independence',
      location: 'Sir Ganga Ram Hospital'
    },
    gsApproachSteps: [
      {
        step: '01',
        title: 'Zig-Zag Dorsal Flap Web Space Reconstruction',
        description: 'Designing interconnected triangular flaps and an hourglass dorsal flap to reconstruct a deep, natural commissure.'
      },
      {
        step: '02',
        title: 'Microscopic Separation of Digital Vessels & Nerves',
        description: 'Careful preservation of neurovascular bundles supplying both separated fingers.'
      },
      {
        step: '03',
        title: 'Full-Thickness Skin Grafting',
        description: 'Using unexposed groin or wrist creases to harvest supple skin for residual lateral defects without tension.'
      },
      {
        step: '04',
        title: 'Long-Arm Protective Mitten Cast',
        description: 'Soft protective mitten cast keeping little fingers safe and comfortable during the initial healing.'
      }
    ],
    recoveryPhases: [
      { phase: 'Weeks 1 - 2', duration: 'Casted Healing', details: 'Child remains comfortable in soft mitten dressing. Dressings kept clean and dry.' },
      { phase: 'Week 3', duration: 'Cast Removal', details: 'Cast removed. Fingers are completely separated! Natural play and grasp encouraged.' }
    ],
    faqs: [
      {
        question: 'What is the best age to operate on webbed fingers?',
        answer: 'The ideal window is between 12 to 18 months of age, before the child enters playschool and starts fine motor development.'
      }
    ],
    relatedSlugs: ['carpal-tunnel-release', 'tendon-repair', 'finger-replantation']
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug || s.id === slug);
}

export function getServicesByCategory(categoryId: string): ServiceItem[] {
  return servicesData.filter((s) => s.category === categoryId);
}
