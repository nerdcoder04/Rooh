# Rooh – Wellness & Prakriti Assessment Platform

**Rooh** is a modern wellness platform that harmonizes **ancient Ayurvedic wisdom** with **cutting-edge web technology**.  
It helps users understand their *Prakriti* (body constitution) — **Vata, Pitta, or Kapha** — and provides **personalized diet and lifestyle recommendations** for holistic health.

> “*Rooh*” means *soul* — symbolizing inner balance and self-awareness through harmony of body, mind, and spirit.

---

## Objective

To create an intuitive digital platform that enables users to:
- Discover their Ayurvedic constitution through an engaging self-assessment.
- Receive personalized recommendations for food, routines, and lifestyle.
- Achieve better balance through guided habits and reflective practices.

---

## Core Features

### 1. Prakriti Assessment
- 15 thoughtfully designed questions across physical, mental, and habitual dimensions.
- Dynamic, real-time progress indicators and smooth animations.
- Intelligent algorithm that determines dominant and secondary doshas.
- Comprehensive results with Vata–Pitta–Kapha percentage breakdown.

### 2. Personalized Diet Plan
- Tailored meal suggestions according to dosha dominance.
- Clear “favor” and “avoid” food lists.
- Timing, portion, and cooking guidance for each dosha type.
- Option to **download personalized diet plan**.

### 3. Daily Routine Guide
- Structured **Dinacharya** (daily wellness schedule) based on dosha.
- Sleep, exercise, and mindfulness guidance.
- Easy navigation to **Diet Plan**, **Download**, or **Retake Assessment**.

### 4. Result Dashboard
- Clean visualization of Prakriti composition.
- Options for next steps:
  - View **Diet Plan**
  - Explore **Daily Routine**
  - **Download** the personalized plan
  - **Retake Assessment**

---

## User Flow Diagram
Below is the simplified user journey:

<img width="646" height="1571" alt="Userflow" src="https://github.com/user-attachments/assets/200a8ed4-8ff6-4043-b648-374aab538a15" />


---

## Tech Stack

| Layer | Technology Used |
|--------|----------------|
| **Frontend** | React 18, TypeScript, Tailwind CSS, Shadcn/UI, Lucide React |
| **Build Tool** | Vite |
| **Design System** | HSL-based semantic tokens, gradients, shadows, and CSS variables |
| **Architecture** | Modular component-based UI with reusable design tokens |

---

## System Modules

| Module | Description |
|---------|-------------|
| **Assessment Engine** | Handles questionnaire flow, scoring, and dosha computation. |
| **Result Dashboard** | Displays analysis, dosha percentages, and navigation options. |
| **Diet Recommendation System** | Generates dosha-specific meal guidance. |
| **Daily Routine Module** | Suggests balanced schedules and wellness practices. |
| **Download Module** | Allows exporting of personalized plans. |

---

## Key Screens

- **Landing Page** – Hero section with "Start Journey" CTA  
- **Assessment Page** – 15 Questions with progress tracker  
- **Result Page** – Vata–Pitta–Kapha breakdown and navigation options  
- **Diet Plan Page** – Personalized meal recommendations  
- **Daily Routine Page** – Wellness practices and lifestyle guidance  
- **Download Page** – Option to save personalized plan  
- **Retake Assessment** – Restart option for new results  

---

## Future Enhancements

- Habit & Progress Tracking Dashboard  
- Practitioner / Consultation Portal  
- Community Wellness Forums  
- Multi-language Support  
- Integration with Wearables  

---

## Developer Setup

```bash
# Clone repository
git clone https://github.com/<your-username>/Rooh.git

# Navigate to project
cd Rooh
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## Conclusion
**Aroha** demonstrates how ancient Indian wellness principles can be translated into a **modern digital ecosystem**. It’s not just an app — it’s a **personal wellness companion** empowering users to understand themselves balance their lifestyle and nurture a healthier state of body and mind.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries or contributions, please contact us via [GitHub Issues](https://github.com/nerdcoder04/Rooh/issues).
