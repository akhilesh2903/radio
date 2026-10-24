# Radio Alva's 88.4 FM — Official Community Radio Website

> **VOICE FOR A BETTER TOMORROW**  
> *Namma Moodubidire, Namma Dhwani*  
> Managed by **Alva's Education Foundation (R)**, Moodubidire, Karnataka, India

---

## 📻 About The Project

**Radio Alva's 88.4 FM** is the pioneer community radio station in Moodubidire Taluk, Karnataka, India. This project is a state-of-the-art, responsive digital radio experience created to celebrate local voices, regional languages (Kannada & Tulu), agriculture, folklore, Yakshagana, health awareness, education, and community participation.

This web application combines broadcast studio aesthetics, an interactive 3D radio visualizer, authentic studio gallery media, an Asia/Kolkata live schedule tracker, and full mobile optimization.

---

## 🎨 Brand Identity & Guidelines

- **Station Name:** Radio Alva's 88.4 FM
- **Frequency:** 88.4 MHz FM
- **Primary Tagline:** VOICE FOR A BETTER TOMORROW
- **Secondary Tagline:** Namma Moodubidire, Namma Dhwani
- **Positioning:** The first community radio station in Moodubidire Taluk
- **Managing Body:** Alva's Education Foundation (R)
- **Station Phone / WhatsApp:** `7022173009`
- **Station Email:** `radioalvas@alvascollege.com`
- **Official Instagram:** [@radio_alvas_88.4fm](https://www.instagram.com/radio_alvas_88.4fm/?__pwa=1#)
- **Official YouTube:** [@RadioAlvas884FM](https://www.youtube.com/@RadioAlvas884FM)
- **Radio Garden:** [https://radio.garden/](https://radio.garden/)

---

## ⚡ Technology Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Custom dark broadcast theme: deep charcoal, warm amber, graphite, broadcast red)
- **3D & Graphics:** Three.js procedural radio visualizer + Studio 3D vintage gramophone prop toggle
- **Icons:** Lucide React & Custom Accessible SVG Brand Icons
- **Audio:** HTML5 Audio API + Media Session API + Persistent Global Audio Dock
- **Time Zone Engine:** Asia/Kolkata (IST) live broadcast tracker

---

## 🗓️ 6-Hour Daily Programme Schedule

### Morning Slot (6:00 AM – 9:00 AM)
1. **6:00 AM – 6:30 AM:** Vande Maataram, Alvas theme song, Jingles (*Archith Jain Samse & Shainitha R.S.*)
2. **6:30 AM – 6:40 AM:** BadukuKatva Geethe (*Vinayak Galimane / Archith Jain Samse*)
3. **6:40 AM – 6:50 AM:** Morning Maatu (*Sukumar Ballal / Archith Jain Samse*)
4. **6:50 AM – 7:00 AM:** Daily Schedule (*Shainitha R.S.*)
5. **7:00 AM – 7:30 AM:** Bennida Baduku – Agriculture Focus (*Local Farmer / Archith Jain Samse*)
6. **7:30 AM – 8:00 AM:** Feature Programme (*Local Achievers / Shainitha R.S.*)
7. **8:00 AM – 8:30 AM:** AIR News (*Shainitha R.S.*)
8. **8:30 AM – 9:00 AM:** Students Corner / Music (*Students / Archith Jain Samse & Shainitha R.S.*)

### Evening Slot (5:30 PM – 8:30 PM)
1. **5:30 PM – 6:00 PM:** Feature Programme – Re-telecast (*Local Achievers / Shainitha R.S.*)
2. **6:00 PM – 6:30 PM:** Health Programme (*Subject Experts / Shainitha R.S.*)
3. **6:30 PM – 7:00 PM:** AIR Market Mantra (*Archith Jain Samse*)
4. **7:00 PM – 7:30 PM:** Agriculture Programme – Re-telecast (*Local Farmers / Archith Jain Samse*)
5. **7:30 PM – 8:00 PM:** Students Corner / Music – Re-telecast (*Students / Archith Jain Samse & Shainitha R.S.*)
6. **8:00 PM – 8:30 PM:** Yakshagana – Coastal Folk & Heritage (*Culture Team*)

### Schedule Summary
- **Total On-Air Time:** 6 Hours
- **Morning Slot:** 3 Hours
- **Evening Slot:** 3 Hours
- **Fresh Content:** 3 Hours 30 Minutes
- **Re-telecast Content:** 1 Hour 30 Minutes
- **AIR Content:** 1 Hour

---

## ⚙️ Environment Variables Configuration

Create a `.env.local` file in the project root:

```env
# Live Radio Stream URL (leave empty until genuine stream server is active)
# If empty, player displays: "Live streaming will be available soon."
NEXT_PUBLIC_RADIO_STREAM_URL=

# Mobile Application Redirection URLs (leave empty until published)
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_ANDROID_APP_URL=
NEXT_PUBLIC_IOS_APP_URL=

# Verified Station Information
NEXT_PUBLIC_STATION_PHONE=7022173009
NEXT_PUBLIC_STATION_WHATSAPP=7022173009
NEXT_PUBLIC_STATION_EMAIL=radioalvas@alvascollege.com
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/radio_alvas_88.4fm/?__pwa=1#
NEXT_PUBLIC_YOUTUBE_URL=https://www.youtube.com/@RadioAlvas884FM
NEXT_PUBLIC_RADIO_GARDEN_URL=https://radio.garden/
```

---

## 🚀 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build production bundle:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm run start
   ```

---

## 🚢 Deployment Guidance (Vercel)

1. Push this repository to GitHub or GitLab.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository. Next.js App Router settings will be detected automatically.
4. Add the environment variables under **Project Settings > Environment Variables**:
   - `NEXT_PUBLIC_RADIO_STREAM_URL` (when ready)
   - `NEXT_PUBLIC_APP_URL`
   - `NEXT_PUBLIC_ANDROID_APP_URL`
   - `NEXT_PUBLIC_IOS_APP_URL`
5. Click **Deploy**. Your community radio website will be live worldwide on Vercel's edge network.
