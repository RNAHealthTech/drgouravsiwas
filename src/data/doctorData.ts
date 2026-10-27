export interface Education {
  degree: string;
  institution: string;
  year: number | string;
}

export interface Position {
  institution: string;
  role: string;
  period: string;
}

export interface Membership {
  name: string;
  year: number | string;
}

export interface Training {
  title: string;
  institution: string;
  period: string;
}

export interface Award {
  name: string;
  organization: string;
  year: number | string;
}

export interface Presentation {
  title: string;
  event: string;
  date: string;
  type: string;
}

export interface Publication {
  authors: string;
  title: string;
  journal: string;
  year: string;
}

export interface OpdTiming {
  type: string;
  days: string;
  time: string;
  location: string;
}

export interface Fee {
  type: string;
  amount: number;
}

export interface Testimonial {
  patientName: string;
  condition: string;
  feedback: string;
  type: "Reconstructive" | "Hand" | "General";
  rating: number;
}

export interface DoctorProfile {
  name: string;
  designation: string;
  specialty: string;
  department: string;
  hospital: string;
  hospitalAddress: string;
  email: string;
  phone: string;
  phoneAlt: string;
  emergencyPhone: string;
  casualtyPhone: string;
  ambulancePhone: string;
  whatsapp: string;
  bookingUrl: string;
  mapsUrl: string;
  imageUrl: string;
  portraitUrl: string;
  logoUrl: string;
  emblemUrl: string;
  ebhsPhotoUrl: string;
  languages: string[];
  education: Education[];
  positions: Position[];
  memberships: Membership[];
  trainings: Training[];
  awards: Award[];
  presentations: Presentation[];
  publications: Publication[];
  extraCurricular: string[];
  opdTimings: OpdTiming[];
  fees: Fee[];
  bio: string;
  philosophy?: string;
  skills: string[];
  interests: string[];
  testimonials: Testimonial[];
  dissertation: string;
}

export const doctorData: DoctorProfile = {
  name: "Dr. Gourav Siwas",
  designation: "Dual Board Certified Hand, Wrist & Reconstructive Plastic Surgeon",
  specialty: "Hand, Wrist & Reconstructive Plastic Surgeon",
  department: "Department of Plastic Surgery",
  hospital: "Sir Ganga Ram Hospital, New Delhi",
  hospitalAddress: "Department of Plastic Surgery, Sir Ganga Ram Hospital, Rajinder Nagar, New Delhi - 110060",
  email: "siwasgourav@gmail.com",
  phone: "+91-8950406670",
  phoneAlt: "+91-8950406670",
  emergencyPhone: "+91-8950406670",
  casualtyPhone: "+91-8950406670",
  ambulancePhone: "+91-8950406670",
  whatsapp: "+918950406670",
  bookingUrl: "https://appointment.sgrh.com",
  mapsUrl: "https://maps.google.com/?q=Sir+Ganga+Ram+Hospital+New+Delhi",
  imageUrl: "/images/dr_gourav_portrait_hd.jpg",
  portraitUrl: "/images/dr_gourav_portrait_hd.jpg",
  logoUrl: "/images/dr_gourav_logo.png",
  emblemUrl: "/images/dr_gourav_emblem.jpg",
  ebhsPhotoUrl: "/images/dr_gourav_ebhs_award.jpg",
  languages: ["English", "Hindi"],
  bio: "Dr. Gourav Siwas is a board certified Plastic & Reconstructive Surgeon & India’s youngest European board certified Hand surgeon with fellowship in Hand & Upper Extremity Surgery.\n\nHe is sincere and passionately dedicated towards ethical patient care, He is a team player with an eye for detail. He has strong creative and analytical skills which he incorporates in surgical decision making. He is a firm believer of learning and sharing his knowledge and expertise with his juniors, colleagues and seniors. He believes in both ability and availability as a surgeon.",
  philosophy: "His philosophy is 'Adding life to years!'",
  skills: [
    "Hand & Wrist Surgery",
    "Brachial Plexus Reconstruction",
    "Microvascular Surgery & Replantation",
    "Peripheral Nerve Surgery",
    "Tendon & Ligament Repair",
    "Congenital Hand Conditions",
    "Plastic & Reconstructive Surgery",
    "Trauma & Flap Reconstruction",
    "Aesthetic Hand Surgery"
  ],
  interests: [
    "Hand & Wrist Surgery",
    "Brachial Plexus Reconstruction",
    "Microvascular Surgery",
    "Reconstructive Surgery"
  ],
  education: [
    { degree: "European Diploma in Hand Surgery", institution: "Switzerland", year: "2026" },
    { degree: "Fellow - Hand & Upper Extremity Surgery", institution: "Max healthcare, New Delhi", year: "2025" },
    { degree: "DrNB Plastic & Reconstructive Surgery", institution: "Sir Ganga Ram Hospital, New Delhi", year: "2018 - 2024" },
    { degree: "M.B.B.S.", institution: "Pt. B. D. Sharma, PGIMS, Rohtak, Haryana", year: "2011 - 2017" }
  ],
  positions: [
    { role: "Consultant - Plastic, Hand & Microsurgery", institution: "Sir Ganga Ram Hospital, New Delhi", period: "At Present" },
    { role: "Associate Consultant - Hand, Wrist & Reconstructive Microsurgery", institution: "Max Smart Super Speciality Hospital, Saket, New Delhi", period: "September 2025 - Aug 2026" },
    { role: "Fellow - Hand and Upper Extremity Surgery", institution: "Max Healthcare, New Delhi", period: "March - August 2025" },
    { role: "Clinical Assistant - Plastic, Hand and Microsurgery", institution: "Sir Ganga Ram Hospital, New Delhi", period: "June 2024 - February 2025" },
    { role: "Clinical Observer - Hand & Reconstructive Microsurgery", institution: "Ganga Hospital, Coimbatore", period: "February 2024" },
    { role: "Resident - Plastic, Hand and Microsurgery", institution: "Sir Ganga Ram Hospital, New Delhi", period: "June 2018 - May 2024" }
  ],
  memberships: [
    { name: "Delhi Medical Council - DMC (Reg No. - DMC-84828)", year: "Active" },
    { name: "Association of Plastic Surgeons of India - APSI", year: "Active" },
    { name: "Indian Society for Surgery of the Hand - ISSH", year: "Active" },
    { name: "National Academy of Med Sciences - MNAMS", year: "Active" }
  ],
  trainings: [],
  awards: [
    { name: "Delhi’s 1st successful bilateral Hand Transplant Team Member", organization: "Sir Ganga Ram Hospital", year: "January 2024" },
    { name: "India’s Youngest and Delhi’s 1st Plastic surgeon to earn European Diploma in Hand Surgery (EDHS)", organization: "Switzerland", year: "2026" }
  ],
  presentations: [
    { title: "Clinical, Functional and Radiological outcomes of Lunate excision with Scapho-Capitate Arthrodesis for Advanced Keinbóck Disease: A 5-Year Follow-up Study", event: "APFSSH-APFSHT-APWA-ISSH-SHTI CONGRESS 2025 Mumbai", date: "2025", type: "Paper" },
    { title: "Five component composite augmentation graft in rhinoplasty", event: "57th APSICON at Indore", date: "Dec 2023", type: "Paper" },
    { title: "Thenar vs V-Y flap for fingertip injuries in children", event: "57th APSICON at Indore", date: "Dec 2023", type: "Paper" },
    { title: "Successful Outcome of a Rare Complication of Liposuction of Abdomen", event: "Delhi state chapter of Association of Plastic Surgeons of India", date: "Mar 2023", type: "Paper" },
    { title: "Ileal perforation with necrotizing fasciitis post Liposuction of AbdomenSuccessful outcome", event: "57th APSICON at Indore", date: "Dec 2023", type: "Poster" }
  ],
  publications: [
    { authors: "Jhunjhunwala N, Dutta A, Siwas G, Mangal M.", title: "Finger reconstruction with vascularized partial osteo-onycho-cutaneous great toe transfer: It's time to address the donor site.", journal: "J Hand Microsurg 2025; 17(2).", year: "2025" },
    { authors: "Gupta P, Siwas G, Gupta A.", title: "Comparison of the functional and aesthetic outcomes of thenar, V-Y advancement and cross finger flap in management of fingertip injuries in children with exposed bone.", journal: "Int J Sci Res 2023; 12(5): 2065-7.", year: "2023" },
    { authors: "Dudeja S, Jain J, Kumra G, Kumar V, Siwas G, Dudeja D, et al.", title: "To study the role of nucleated red blood cells in early diagnosis of perinatal asphyxia, severity and outcome.", journal: "Eur J Pharm Med Res 2020; 7(11): 494-9.", year: "2020" }
  ],
  extraCurricular: [
    "Selected as secretary of Physiology club during first year of MBBS.",
    "Organizing Secretary of 1st ARMSCON(Annual Rohtak Medical Students Conference) held in 2013.",
    "Won 3rd prize in Medical Quiz at 2nd Haryana State UG conference ARMSCON in 2014.",
    "Runners up in Cricket competition at sports meet of Sir Ganga Ram hospital in 2022.",
    "General secretary of 2nd Sports & Cultural meet of Sir Ganga Ram hospital, New Delhi."
  ],
  dissertation: "PROSPECTIVE COMPARATIVE STUDY OF FUNCTIONAL & AESTHETIC OUTCOMES OF THENAR VS V-Y FLAP FOR FINGERTIP INJURIES IN CHILDREN",
  opdTimings: [
    {
      type: "OPD Consultation",
      days: "Monday - Saturday",
      time: "08:00 AM - 08:00 PM",
      location: "Department of Plastic Surgery, Sir Ganga Ram Hospital"
    },
    {
      type: "Private OPD",
      days: "Monday - Saturday",
      time: "08:00 AM - 08:00 PM",
      location: "Department of Plastic Surgery, Sir Ganga Ram Hospital"
    },
    {
      type: "Emergency & Trauma",
      days: "24/7 Round the Clock",
      time: "24/7 Emergency Services Available",
      location: "Department of Plastic Surgery, Sir Ganga Ram Hospital"
    }
  ],
  fees: [],
  testimonials: []
};
