export interface StationConfig {
  name: string;
  frequency: string;
  primaryTagline: string;
  secondaryTagline: string;
  location: string;
  managedBy: string;
  positioning: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  youtube: string;
  radioGarden: string;
  streamUrl: string;
  appUrl: string;
  androidAppUrl: string;
  iosAppUrl: string;
  broadcastScheduleSummary: {
    totalOnAirHours: number;
    morningSlotHours: number;
    eveningSlotHours: number;
    freshContentHours: string;
    retelecastContentHours: string;
    airContentHours: string;
  };
}

export const STATION_CONFIG: StationConfig = {
  name: "Radio Alva's 88.4 FM",
  frequency: "88.4 MHz",
  primaryTagline: "VOICE FOR A BETTER TOMORROW",
  secondaryTagline: "Namma Moodubidire, Namma Dhwani",
  location: "Moodubidire, Karnataka, India",
  managedBy: "Alva's Education Foundation (R)",
  positioning: "The first community radio station in Moodubidire Taluk",
  phone: process.env.NEXT_PUBLIC_STATION_PHONE || "7022173009",
  whatsapp: process.env.NEXT_PUBLIC_STATION_WHATSAPP || "7022173009",
  email: process.env.NEXT_PUBLIC_STATION_EMAIL || "radioalvas@alvascollege.com",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/radio_alvas_88.4fm/?__pwa=1#",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://www.youtube.com/@RadioAlvas884FM",
  radioGarden: process.env.NEXT_PUBLIC_RADIO_GARDEN_URL || "https://radio.garden/",
  streamUrl: process.env.NEXT_PUBLIC_RADIO_STREAM_URL || "",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "",
  androidAppUrl: process.env.NEXT_PUBLIC_ANDROID_APP_URL || "",
  iosAppUrl: process.env.NEXT_PUBLIC_IOS_APP_URL || "",
  broadcastScheduleSummary: {
    totalOnAirHours: 6,
    morningSlotHours: 3,
    eveningSlotHours: 3,
    freshContentHours: "3 hours 30 minutes",
    retelecastContentHours: "1 hour 30 minutes",
    airContentHours: "1 hour",
  },
};
