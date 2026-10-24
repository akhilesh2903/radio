export interface Programme {
  id: string;
  timeSlot: string;
  startTime: string; // "06:00" in 24hr format
  endTime: string;   // "06:30" in 24hr format
  slotType: "morning" | "evening";
  title: string;
  category: "devotional" | "agriculture" | "community" | "achievers" | "news" | "youth" | "health" | "culture";
  resourcePerson: string;
  programmeInCharge: string;
  duration: string;
  content: string;
  isRetelecast?: boolean;
  isAirBulletin?: boolean;
}

export const MORNING_SCHEDULE: Programme[] = [
  {
    id: "m-01",
    timeSlot: "6:00 AM – 6:30 AM",
    startTime: "06:00",
    endTime: "06:30",
    slotType: "morning",
    title: "Vande Maataram, Alvas theme song, Jingles",
    category: "devotional",
    resourcePerson: "Not specified",
    programmeInCharge: "Archith Jain Samse and Shainitha R.S.",
    duration: "30 minutes",
    content: "Opening station music, Alvas theme song and jingles to usher in the morning broadcast across Moodubidire.",
    isRetelecast: false,
    isAirBulletin: false,
  },
  {
    id: "m-02",
    timeSlot: "6:30 AM – 6:40 AM",
    startTime: "06:30",
    endTime: "06:40",
    slotType: "morning",
    title: "BadukuKatva Geethe",
    category: "devotional",
    resourcePerson: "Vinayak Galimane",
    programmeInCharge: "Archith Jain Samse",
    duration: "10 minutes",
    content: "Devotional and inspirational content to begin the day with spiritual reflections and uplifting poetry.",
    isRetelecast: false,
    isAirBulletin: false,
  },
  {
    id: "m-03",
    timeSlot: "6:40 AM – 6:50 AM",
    startTime: "06:40",
    endTime: "06:50",
    slotType: "morning",
    title: "Morning Maatu",
    category: "community",
    resourcePerson: "Sukumar Ballal",
    programmeInCharge: "Archith Jain Samse",
    duration: "10 minutes",
    content: "Short morning conversation covering useful thoughts, local topics and community messages for listeners.",
    isRetelecast: false,
    isAirBulletin: false,
  },
  {
    id: "m-04",
    timeSlot: "6:50 AM – 7:00 AM",
    startTime: "06:50",
    endTime: "07:00",
    slotType: "morning",
    title: "Daily Schedule",
    category: "community",
    resourcePerson: "Not specified",
    programmeInCharge: "Shainitha R.S.",
    duration: "10 minutes",
    content: "Daily programme updates, awareness messages, station information, theme songs and jingles.",
    isRetelecast: false,
    isAirBulletin: false,
  },
  {
    id: "m-05",
    timeSlot: "7:00 AM – 7:30 AM",
    startTime: "07:00",
    endTime: "07:30",
    slotType: "morning",
    title: "Bennida Baduku",
    category: "agriculture",
    resourcePerson: "Local Farmer",
    programmeInCharge: "Archith Jain Samse",
    duration: "30 minutes",
    content: "Agriculture-focused programme featuring local farmers, farming practices, experiences, seasonal crop guidance and challenges.",
    isRetelecast: false,
    isAirBulletin: false,
  },
  {
    id: "m-06",
    timeSlot: "7:30 AM – 8:00 AM",
    startTime: "07:30",
    endTime: "08:00",
    slotType: "morning",
    title: "Feature Programme",
    category: "achievers",
    resourcePerson: "Local Achievers",
    programmeInCharge: "Shainitha R.S.",
    duration: "30 minutes",
    content: "Interviews and inspiring stories of local achievers, highlighting their journeys, community leadership and contributions.",
    isRetelecast: false,
    isAirBulletin: false,
  },
  {
    id: "m-07",
    timeSlot: "8:00 AM – 8:30 AM",
    startTime: "08:00",
    endTime: "08:30",
    slotType: "morning",
    title: "AIR News",
    category: "news",
    resourcePerson: "Not specified",
    programmeInCharge: "Shainitha R.S.",
    duration: "30 minutes",
    content: "Morning national, regional and current-affairs news bulletin relayed from All India Radio.",
    isRetelecast: false,
    isAirBulletin: true,
  },
  {
    id: "m-08",
    timeSlot: "8:30 AM – 9:00 AM",
    startTime: "08:30",
    endTime: "09:00",
    slotType: "morning",
    title: "Students Corner / Music",
    category: "youth",
    resourcePerson: "Students",
    programmeInCharge: "Archith Jain Samse and Shainitha R.S.",
    duration: "30 minutes",
    content: "Student voices, campus activities, talents, youth discussions, creative expressions and selected music.",
    isRetelecast: false,
    isAirBulletin: false,
  },
];

export const EVENING_SCHEDULE: Programme[] = [
  {
    id: "e-01",
    timeSlot: "5:30 PM – 6:00 PM",
    startTime: "17:30",
    endTime: "18:00",
    slotType: "evening",
    title: "Feature Programme – Re-telecast",
    category: "achievers",
    resourcePerson: "Local Achievers",
    programmeInCharge: "Shainitha R.S.",
    duration: "30 minutes",
    content: "Re-telecast of interviews and inspiring stories featuring local achievers for evening listeners.",
    isRetelecast: true,
    isAirBulletin: false,
  },
  {
    id: "e-02",
    timeSlot: "6:00 PM – 6:30 PM",
    startTime: "18:00",
    endTime: "18:30",
    slotType: "evening",
    title: "Health Programme",
    category: "health",
    resourcePerson: "Subject Experts",
    programmeInCharge: "Shainitha R.S.",
    duration: "30 minutes",
    content: "Health and wellness content featuring expert medical guidance, preventive care, nutrition and wellbeing awareness.",
    isRetelecast: false,
    isAirBulletin: false,
  },
  {
    id: "e-03",
    timeSlot: "6:30 PM – 7:00 PM",
    startTime: "18:30",
    endTime: "19:00",
    slotType: "evening",
    title: "AIR Market Mantra",
    category: "news",
    resourcePerson: "Not specified",
    programmeInCharge: "Archith Jain Samse",
    duration: "30 minutes",
    content: "Market and commodity updates useful for farmers, traders, businesses and the local community.",
    isRetelecast: false,
    isAirBulletin: true,
  },
  {
    id: "e-04",
    timeSlot: "7:00 PM – 7:30 PM",
    startTime: "19:00",
    endTime: "19:30",
    slotType: "evening",
    title: "Agriculture Programme – Re-telecast",
    category: "agriculture",
    resourcePerson: "Local Farmers",
    programmeInCharge: "Archith Jain Samse",
    duration: "30 minutes",
    content: "Re-telecast of agriculture content featuring local farmers and practical farming knowledge.",
    isRetelecast: true,
    isAirBulletin: false,
  },
  {
    id: "e-05",
    timeSlot: "7:30 PM – 8:00 PM",
    startTime: "19:30",
    endTime: "20:00",
    slotType: "evening",
    title: "Students Corner / Music – Re-telecast",
    category: "youth",
    resourcePerson: "Students",
    programmeInCharge: "Archith Jain Samse and Shainitha R.S.",
    duration: "30 minutes",
    content: "Re-telecast of student-focused content along with selected music for evening listeners.",
    isRetelecast: true,
    isAirBulletin: false,
  },
  {
    id: "e-06",
    timeSlot: "8:00 PM – 8:30 PM",
    startTime: "20:00",
    endTime: "20:30",
    slotType: "evening",
    title: "Yakshagana",
    category: "culture",
    resourcePerson: "Not specified",
    programmeInCharge: "Not specified",
    duration: "30 minutes",
    content: "Traditional Yakshagana content highlighting local culture, mythological stories, coastal heritage, artists and performing arts.",
    isRetelecast: false,
    isAirBulletin: false,
  },
];

export const ALL_PROGRAMMES: Programme[] = [...MORNING_SCHEDULE, ...EVENING_SCHEDULE];

export const SCHEDULE_METRICS = [
  { label: "Total On-Air Time", value: "6 Hours", note: "Daily broadcast schedule" },
  { label: "Morning Slot", value: "3 Hours", note: "6:00 AM – 9:00 AM" },
  { label: "Evening Slot", value: "3 Hours", note: "5:30 PM – 8:30 PM" },
  { label: "Fresh Content", value: "3h 30m", note: "Locally produced daily" },
  { label: "Re-telecast Content", value: "1h 30m", note: "Community favorites" },
  { label: "AIR Content", value: "1 Hour", note: "National & Market updates" },
];

/**
 * Helper to convert "HH:MM" string into minutes from midnight
 */
export function timeToMinutes(timeStr: string): number {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

/**
 * Returns current Asia/Kolkata date and time
 */
export function getKolkataTime(): { hours: number; minutes: number; currentMinutes: number; timeString: string } {
  const now = new Date();
  const kolkataTimeString = now.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  const [hours, minutes] = kolkataTimeString.split(":").map(Number);
  return {
    hours,
    minutes,
    currentMinutes: hours * 60 + minutes,
    timeString: now.toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
  };
}

/**
 * Find current on-air programme or next upcoming programme in Asia/Kolkata time
 */
export function getLiveProgrammeStatus() {
  const { currentMinutes, timeString } = getKolkataTime();

  // Find if currently inside any programme slot
  const currentShow = ALL_PROGRAMMES.find((p) => {
    const start = timeToMinutes(p.startTime);
    const end = timeToMinutes(p.endTime);
    return currentMinutes >= start && currentMinutes < end;
  });

  // Find next upcoming show
  const upcomingShow = ALL_PROGRAMMES.find((p) => {
    const start = timeToMinutes(p.startTime);
    return start > currentMinutes;
  }) || ALL_PROGRAMMES[0]; // wraps to morning first show if past evening

  const isMorningSlot = currentMinutes >= timeToMinutes("06:00") && currentMinutes < timeToMinutes("09:00");
  const isEveningSlot = currentMinutes >= timeToMinutes("17:30") && currentMinutes < timeToMinutes("20:30");
  const isBroadcastingHours = isMorningSlot || isEveningSlot;

  return {
    currentShow: currentShow || null,
    upcomingShow,
    isBroadcastingHours,
    currentTimeIST: timeString,
  };
}
