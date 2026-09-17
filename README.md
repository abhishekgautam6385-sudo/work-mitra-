# 🏆 WorkMitra - Cooperative Gig Services Platform (SIH 089)

**WorkMitra** is a Next-Generation Cooperative-First Gig Services Platform designed for **Smart India Hackathon (SIH 2025/2026)**.

---

## 📌 Problem Statement Overview
- **Problem Statement ID:** SIH089
- **Title:** Cooperative Gig Services Platform for Household and Community Services
- **Theme:** Agriculture, Foodtech and Rural Development
- **Category:** Software

---

## 🌟 Key Differentiators & Wow Features (SIH Winning Strategy)

1. **⚖️ AI Fair Worker Allocation Engine:**
   - Unlike commission-heavy private platforms (like Urban Company), WorkMitra uses a **Multi-Factor Fairness Scoring Formula**:
     $$\text{Score} = (0.3 \times \text{Skill}) + (0.3 \times \text{Proximity}) + (0.25 \times \text{Workload Balance}) + (0.15 \times \text{Rating})$$
   - Workers with fewer jobs assigned this month get a higher workload balance score to ensure **equitable income distribution** across all cooperative members.

2. **🔒 Dual OTP Security & Verification:**
   - **Step 1 (Arrival OTP):** Shared when worker arrives on-site -> Status shifts to `IN_PROGRESS`.
   - **Before/After Media Proof:** Worker uploads photos of work area.
   - **Step 2 (Departure OTP):** Shared when job is completed -> Status shifts to `COMPLETED` & payment/welfare fund released.

3. **🏥 Automatic Worker Welfare & Insurance Fund:**
   - Every successful job automatically credits **₹10** into the worker's Cooperative Welfare Fund.
   - Micro-insurance (Ayushman Bharat / Cooperative Health Cover) status is tracked live.

4. **📊 AI Demand Forecasting for Cooperative Federations:**
   - Time-series demand prediction by Pincode / Zone and service category.
   - Gives actionable recommendations for training workshops or worker relocation.

5. **🌐 Multilingual Worker Interface:**
   - Single-click toggle between **Hindi (हिंदी)** and **English** for non-tech rural and urban artisans.

---

## 🚀 How to Run the Prototype

No complex dependencies required! The application is self-contained and ready for instant demo.

### Option 1: Direct Browser Launch
Double click `index.html` or open it in any browser (Google Chrome, Microsoft Edge, Firefox, Brave).

### Option 2: Local Server Launch
Open your terminal in this directory and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 📱 Interactive Presentation Demo Guide for SIH Jury

1. **Role Switcher Header:** Click between **Customer**, **Worker Portal**, and **Cooperative Admin**.
2. **Customer Service Booking:**
   - Select a service (e.g. *Plumbing & Pipe Fix*).
   - Click **Find Fair Match** to trigger the live AI Allocation Engine modal showing scoring breakdown.
   - Click **Book This Worker**.
3. **Dual OTP Tracking:**
   - Note down the generated **Arrival OTP** and **Departure OTP** displayed on the customer view.
4. **Worker Execution:**
   - Switch to **Worker Portal** (try the **Hindi Toggle**).
   - Enter the Arrival OTP -> Click Verify -> Work shifts to `IN_PROGRESS`.
   - Click Upload Before/After Photos.
   - Enter Departure OTP -> Click Complete -> Payout released & Welfare fund updated!
5. **Admin Analytics:**
   - Switch to **Cooperative Admin**.
   - Inspect the live **7-Day Demand Forecasting Line Chart**.
   - Approve pending worker KYC in the verification table.

---

## 🛠️ Built With
- **Frontend UI:** HTML5, CSS3, Tailwind CSS, Glassmorphism design
- **Interactive Maps:** Leaflet (OpenStreetMap)
- **Analytics Charts:** Chart.js
- **Icons:** FontAwesome v6
- **Algorithmic Engine:** JavaScript / Node / Python Algorithmic Logic
