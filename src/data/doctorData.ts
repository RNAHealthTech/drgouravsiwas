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
  type: "Cosmetic" | "Reconstructive" | "Hand" | "General";
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
  mentorshipPhotoUrl: string;
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
  skills: string[];
  interests: string[];
  testimonials: Testimonial[];
  dissertation: string;
}

export const doctorData: DoctorProfile = {
  name: "Dr. Gourav Siwas",
  designation: "Associate Consultant- Hand, wrist & Reconstructive Microsurgery",
  specialty: "Plastic, Hand & Reconstructive Microsurgeon",
  department: "Department of Plastic, Cosmetic & Hand Microsurgery",
  hospital: "Max Smart Super Speciality hospital, Saket",
  hospitalAddress: "Max Smart Super Speciality hospital, Saket, New Delhi",
  email: "siwasgourav@gmail.com",
  phone: "+91-8950406670",
  phoneAlt: "+91-8950406670",
  emergencyPhone: "+91-8950406670",
  casualtyPhone: "+91-8950406670",
  ambulancePhone: "+91-8950406670",
  whatsapp: "+918950406670",
  bookingUrl: "#",
  mapsUrl: "https://maps.google.com",
  imageUrl: "/images/dr_gourav_portrait.jpg",
  portraitUrl: "/images/dr_gourav_portrait.jpg",
  logoUrl: "/images/dr_gourav_logo.png",
  emblemUrl: "/images/dr_gourav_emblem.jpg",
  ebhsPhotoUrl: "/images/dr_gourav_ebhs_award.jpg",
  mentorshipPhotoUrl: "/images/dr_gourav_mentorship.jpg",
  languages: ["English", "Hindi"],
  bio: "I am a board certified Plastic & Reconstructive Surgeon & India’s youngest European board certified Hand surgeon with fellowship in Hand & Upper Extremity Surgery. I am sincere and passionately dedicated towards ethical patient care, I am a team player with an eye for detail. I have strong creative and analytical skills which I incorporate in surgical decision making. I am a firm believer of learning and sharing my knowledge and expertise with my juniors, colleagues and seniors. I believe in both ability and availability as a surgeon. I intend to pursue my career as a dedicated plastic, hand & reconstructive microsurgeon serving mankind.",
  skills: [
    "Hand & Wrist Surgery",
    "Microvascular surgery",
    "Brachial plexus surgery",
    "Nerve surgery",
    "Diabetic foot reconstruction",
    "Pediatric plastic surgery",
    "Maxillo-facial reconstruction",
    "Oncoplastic surgery",
    "Breast surgery",
    "Trauma surgery",
    "Gender Affirmation surgery",
    "Burn Management",
    "Post burn Reconstruction",
    "Aesthetic surgery"
  ],
  interests: [
    "Hand & Wrist Surgery",
    "Microvascular surgery",
    "Reconstructive surgery",
    "Aesthetic surgery"
  ],
  education: [
    { degree: "European Diploma in Hand Surgery", institution: "Switzerland", year: "2026" },
    { degree: "Fellow - Hand & Upper Extremity Surgery", institution: "Max healthcare, New Delhi", year: "2025" },
    { degree: "DrNB Plastic & Reconstructive Surgery", institution: "Sir Ganga Ram Hospital, New Delhi", year: "2018 - 2024" },
    { degree: "M.B.B.S.", institution: "Pt. B. D. Sharma, PGIMS, Rohtak, Haryana", year: "2011 - 2017" },
    { degree: "CLASS XII", institution: "Modern Vidya Niketan, Faridabad, Haryana", year: "2011" },
    { degree: "CLASS X", institution: "St. John’s School, Faridabad, Haryana", year: "2009" }
  ],
  positions: [
    { role: "Associate Consultant- Hand, wrist & Reconstructive Microsurgery", institution: "Max Smart Super Speciality hospital, Saket, New Delhi", period: "September 2025 - Present" },
    { role: "Fellow - Hand and Upper Extremity Surgery", institution: "Max Healthcare, New Delhi", period: "March - August 2025" },
    { role: "Clinical Assistant - Plastic, Cosmetic, Hand and Microsurgery", institution: "Sir Ganga Ram Hospital, New Delhi", period: "June 2024 - February 2025" },
    { role: "Clinical observer-Hand & Reconstructive Microsurgery", institution: "Ganga hospital, Coimbatore", period: "February 2024" },
    { role: "Resident - Plastic, Cosmetic, Hand and Microsurgery", institution: "Sir Ganga Ram Hospital, New Delhi", period: "June 2018 - May 2024" },
    { role: "Junior Resident - Orthopedics (Paraplegia)", institution: "Pt. B. D. Sharma, PGIMS, Rohtak", period: "Jan 2018 - May 2018" }
  ],
  memberships: [
    { name: "Delhi Medical Council - DMC (Reg No. - DMC-84828)", year: "Active" },
    { name: "Association of Plastic Surgeons of India - APSI", year: "Active" },
    { name: "Indian Society for Surgery of the Hand - ISSH", year: "Active" },
    { name: "National Academy of Med Sciences - MNAMS", year: "Active" }
  ],
  trainings: [
    { title: "Hands on Workshop on ‘Hand Fractures’", institution: "APFSSH-APFSHT-APWA-ISSH-SHTI CONGRESS 2025, Mumbai, India", period: "2025" },
    { title: "Cadaveric Course: All About Scaphoid", institution: "AIIMS, New Delhi", period: "April 2025" },
    { title: "Craniofacial surgery- SORG Advanced Course", institution: "AIIMS Rishikesh", period: "Nov 2023" },
    { title: "7th Delhi Rhinoplasty Course", institution: "Sir Ganga Ram Hospital, New Delhi", period: "Nov 2023" },
    { title: "Hands-on course in Microsurgery", institution: "Ganga Hospital, Coimbatore", period: "Aug-Sep 2022" },
    { title: "APSI accredited CME on ‘Hand Module’", institution: "APSI", period: "May 2022" },
    { title: "Mini Fellowship program of Delhi Rhinoplasty Course", institution: "Sir Ganga Ram Hospital, New Delhi", period: "Nov 2022" },
    { title: "Virtual live Course of ‘A to Z of Free Fibula flap’", institution: "Virtual", period: "Mar 2021" },
    { title: "Ganga Hand & Microsurgery operative course", institution: "Virtual live", period: "Jul 2020" },
    { title: "5th Delhi Rhinoplasty Course", institution: "Sir Ganga Ram Hospital, New Delhi", period: "Dec 2019" }
  ],
  awards: [
    { name: "Delhi’s 1st successful bilateral Hand Transplant Team Member", organization: "Sir Ganga Ram Hospital", year: "January 2024" },
    { name: "India’s Youngest and Delhi’s 1st Plastic surgeon to earn European Diploma in Hand Surgery (EDHS)", organization: "EBOPRAS", year: "2026" }
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
  dissertation: "During DrNB, performed my thesis work titled ‘PROSPECTIVE COMPARITIVE STUDY OF FUNCTIONAL & AESTHETIC OUTCOMES OF THENAR VS V-Y FLAP FOR FINGERTIP INJURIES IN CHILDREN’ under Dr Mahesh Mangal.",
  opdTimings: [
    {
      type: "General OPD",
      days: "Monday - Saturday",
      time: "09:00 AM - 11:00 AM",
      location: "Room No. F-52, Department of Plastic Surgery, Sir Ganga Ram Hospital, New Delhi"
    }
  ],
  fees: [
    { type: "Consultation", amount: 1500 }
  ],
  testimonials: []
};
