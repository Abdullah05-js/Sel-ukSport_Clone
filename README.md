# ⚽️ Reverse-Engineered SelçukSport Streaming System

A reverse-engineered implementation of the SelçukSport-like live streaming service built using modern technologies:

## 🚀 Tech Stack

- Node.js + Express.js (API layer)
- Next.js (Frontend / custom video player)
- MongoDB (Storage of match metadata and logs)
- FFmpeg (Segmenting HLS streams into `.ts` and `.m3u8`)
- Cloudflare CDN + Cloudflare R2 (acts like AWS S3 for public delivery)

## 🧠 Features

- **Auto-fetching** daily match schedule at 07:00 AM via cronjob.
- Grabs related IPTV/HLS stream URLs based on channel ID.
- Pipes each stream to FFmpeg to generate `.ts` + `.m3u8` segments.
- Monitors output folder and uploads chunks to **Cloudflare R2** immediately.
- Links are served through rotating CDN URLs (e.g., `cdn.selcuksportshd04%d.xyz`).
- A custom video player (inspired by SelçukSport) is embedded in a Next.js page.

## 📜 Legal Observations (DMCA)

- SelçukSport does **not host** videos directly; instead, it uses **embedded players** hosted on external domains.
- This allows them to **bypass DMCA takedowns** by placing legal responsibility on third-party content hosts.
- Domains are rotated constantly, while servers are typically located in **Germany or the Netherlands**, based on latency and legal landscape.
- Domain updates are managed automatically via **Cloudflare API + custom DNS switching script**.

## 📂 Project Structure
