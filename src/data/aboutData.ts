export interface MissionObjective {
  number: number;
  title: string;
  description: string;
  iconName: "Volume2" | "HeartHandshake" | "Sprout" | "Building2" | "BookOpen" | "GraduationCap";
  tag: string;
}

export const ABOUT_DATA = {
  stationTitle: "About Radio Alva's 88.4 FM",
  primaryTagline: "Voice for a Better Tomorrow",
  secondaryTagline: "Namma Moodubidire, Namma Dhwani",
  descriptionParagraphs: [
    "Moodubidire is home to many voices, languages, traditions and ideas. Radio Alva's 88.4 FM is a community platform for sharing them.",
    "Managed by Alva's Education Foundation (R), we are the first community radio station in Moodubidire Taluk. Our programmes and conversations in Tulu, Kannada and other regional languages bring people together, make local voices heard and make useful information easier to reach.",
  ],
  vision:
    "To create a vibrant platform for the people of Moodubidire to express their cultural and linguistic identities and share indigenous wisdom to shape a better tomorrow.",
  missionObjectives: [
    {
      number: 1,
      title: "Every Voice Counts",
      description: "Encourage community participation and help unheard voices be heard.",
      iconName: "Volume2",
      tag: "Community",
    },
    {
      number: 2,
      title: "Women's Voices",
      description: "Give women a platform to share their views and raise their concerns.",
      iconName: "HeartHandshake",
      tag: "Empowerment",
    },
    {
      number: 3,
      title: "Useful Knowledge",
      description: "Share information on agriculture, health and wellbeing.",
      iconName: "Sprout",
      tag: "Agriculture & Health",
    },
    {
      number: 4,
      title: "Access to Welfare",
      description: "Help marginalised communities learn about and access government welfare schemes.",
      iconName: "Building2",
      tag: "Welfare Awareness",
    },
    {
      number: 5,
      title: "Heritage",
      description: "Document and preserve vernacular languages, folklore and traditional knowledge.",
      iconName: "BookOpen",
      tag: "Culture & Folklore",
    },
    {
      number: 6,
      title: "Learning",
      description: "Support students in learning, expressing ideas and taking part in community life.",
      iconName: "GraduationCap",
      tag: "Student Development",
    },
  ] as MissionObjective[],
  institutionalPillars: [
    {
      title: "Alva's Education Foundation (R)",
      subtitle: "Managed with Dedication",
      detail:
        "Founded under visionary leadership in Moodubidire, fostering world-class education, cultural heritage, and sports. Radio Alva's 88.4 FM carries this legacy into grassroots community broadcasting.",
    },
    {
      title: "Taluk's 1st Community Radio",
      subtitle: "Broadcasting on 88.4 MHz",
      detail:
        "Reaching grassroots households, agricultural fields, educational institutions, and cultural centers across Moodubidire Taluk with clear FM transmission.",
    },
    {
      title: "Multilingual Inclusivity",
      subtitle: "Tulu • Kannada • Regional Tongues",
      detail:
        "Celebrating coastal Karnataka's rich linguistic tapestry with native voice broadcasts, folk music, and local dialogues.",
    },
  ],
};
