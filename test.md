---
title: Lyndi's Chronicle
author: zBuLe
date: 2026-03-19
tags: [jekyll, theme, docs, dark-mode]
---

# Lyndi's Chronicle — Tutorial Level Bible

**Chronicle Destiny: Lyndi's Chronicle**
**Single Source of Truth**

---

## Table of Contents

1. Game Context
2. Synopsis
3. Characters
4. Setting
5. Controls and Input System
6. Core Systems
7. Tutorial Design Philosophy
8. Act Structure
9. Act-by-Act Breakdown
10. Side Stories
11. Hospital Layout
12. Design Questions (Open)

---

## 1. Game Context

**Title:** Chronicle Destiny

**Vision Statement:** Chronicle Destiny is a series of short stories taking place in an adventure action RPG set in a new fantasy world where every choice the player makes has a direct impact on the story. Time will not stop for the player; even inaction is a choice.

**Genre:** Adventure Action RPG with real-time dialogue

**Engine:** GameMaker

**Platforms:** PC, Android, Web (primary); Mac, Linux, iOS, Xbox (possible); Switch and PlayStation (post-launch). The Web/HTML version serves as the promotional/shareware build containing only the tutorial and the first chronicle.

**Art Style:** 3D low-poly models reminiscent of PS1/N64 graphics, top-down isometric view, target resolution 640x360. Art inspirations: Megaman Zero (GBA), Megaman Battle Network (GBA), Kingdom Hearts: Chain of Memories (GBA). Gameplay inspiration: Majora's Mask.

**Structure:** Five independent short stories (chronicles) set in the same world, framed by Alana, a librarian reading journals from her collection. Each chronicle takes approximately 10 minutes to complete with branching storylines. Additional chronicles planned post-launch.

**Lyndi's Chronicle** is the tutorial story. It teaches the player all core mechanics — especially the real-time dialogue system — through a self-contained, character-driven narrative set in a hospital.

**Inspiration:** Lyndi is directly inspired by Candy from Candy Candy. Lyndi's full name Lyndice Reed Remdri mirrors Candice White Adley. Lannet is inspired by Flanny Hamilton. Many characters have parallels in Candy Candy (Ms. Liya/Marsha, Mr. Gregor/Mr. McGregor). Candy Candy episodes 63–84 cover the same arc (Candy starting nursing until Flanny volunteers for the war front). The director's speech is a direct translation of the Spanish dub of headmistress Mary Jane's.

---

## 2. Synopsis

Lyndi and Lannet are two recently graduated nurses (six months into their assignment) working at a cosmopolitan city hospital. They are tasked with doing their morning rounds together. They check rooms, tend to patients in the infirmary and the ward, then head upstairs to care for private patients. One of those patients, Mr. Gregor, may pass away during their visit.

After reporting to the head nurse and taking a break, they are summoned to the administrator's office alongside four other nurses from their graduating class. There, the director of their nursing school announces that one nurse must volunteer for the war effort. After a moment of tension, Lannet volunteers. The remaining nurses are dismissed. If Lyndi waits in the hall, she can have a final, tense conversation with Lannet.

In the epilogue, the hospital staff gathers the next morning to see the departing nurse off as she boards a carriage.

---

## 3. Characters

### Lyndi (Lyndice Reed Remdri) — Player Character

**Background:** An orphan adopted by a wealthy family later than most children. She rejected that lifestyle and returned to a humble one. Inspired by her caretakers at the orphanage to become a nurse. The headmistress of the orphanage and the director of the nursing school are friends — Lyndi entered the school on the headmistress's recommendation.

**Personality:** Happy, bubbly, tomboyish, headstrong, compassionate, selfless. Always sees the positive in people. Reckless and a bit of a ditz. Has friends who live near the hospital.

**As a Nurse:** Proficient, dedicated, great bedside manners (especially with children). Understands the subject thoroughly but is more emotional than logical. Her enthusiasm causes missteps, fumbles, and hesitation.

### Lannet — Companion NPC / Tutorial Guide

**Background:** Comes from a broken home. Father is a drunkard, parents fight constantly. Two older brothers, one younger brother, two younger sisters. Brothers are egotistical and unhelpful. Everything she has achieved has been through her own effort. Pursued nursing to avoid becoming like her selfish brothers and parents.

**Personality:** Smart, quiet, reserved, distant, strong, assertive, determined, intimidating. Doesn't like meddlesome people.

**As a Nurse:** Proficient, knowledgeable. Can put on a polite face but often described as cold. Goes above and beyond for her patients.

### Their Relationship

Studied nursing together, were roommates, never friends. Both top students — Lannet has higher marks. Lannet respects Lyndi and recognizes her as a great nurse but cannot stand her nosiness. The director describes them as "two sides of the same coin" — Lannet is focused, Lyndi is warm.

**Shared Event (Lobby Night):** The night before starting at the hospital, the lobby was packed and overwhelmed. A hospital nurse triaged a child's minor cut correctly but offered no comfort. Both Lyndi and Lannet addressed this. When rebuffed, they led the other four new nurses to care for the waiting patients.

### Hospital Staff

- **Head Nurse Deliah** — Authoritative and composed. Oversees hospital operations. Strict but fair, offers guidance and encouragement to new nurses.
- **Director Janice** — Director of the nursing school. Compassionate and firm. Deeply cares about her students. Delivers the volunteer speech in Act 11.
- **Administrator Alinadi** — Practical and efficient hospital administrator. Manages logistics and staffing. No-nonsense approach.
- **Flannie** — Veteran ward nurse. The "focus" nurse. Efficient, precise, calm under pressure. Model of professionalism.
- **Wilma** — Veteran ward nurse. The "warmth" nurse. Gentle, comforting, highly regarded for empathy.

### Fellow Nurses (classmates)

- **Ea** — Engages in gossip, expresses concerns about the war.
- **Naomi** — Cheerful and empathetic. Looks on the bright side. Conscientious about work.
- **Kara** — Reserved, diligent, quietly efficient. Listens rather than gossips. Shares worries about the war.
- **Miha** — Friendly, quick to chat. Enjoys bonding with colleagues. Lighthearted banter.

### Infirmary Patients

- **Mr. Kendri** — Older man, soon to be discharged. Wise, gentle. Enjoys chatting with Lyndi. Respects both nurses.
- **Andrew** — Young man who broke his arm to avoid being drafted. Frustrated and angry about friends sent to fight. If woken in Act 4, has been conversing with Mr. Kendri since. If not, recently woke and is still upset.
- **Ruen** — Young man recovering from illness. Negative view of Lannet — finds her too harsh.
- **Mr. Kalo** — Older man recovering from an ailment. Positive view of Lannet, appreciates her professionalism. If Lyndi talks to Mr. Kalo about Lannet before Ruen, Ruen will interrupt.
- **Dania** — Young woman who just finished seeing a doctor. Feels weak, appreciates Lyndi spending time with her.

### Private Patients — Lyndi's

- **Mr. Roth** — Wealthy hospital donor. Nothing seriously wrong — on a "vacation." Cheerful, optimistic, friendly. Critical but ultimately positive about Lannet. Enjoys Lyndi's warmth.
- **Ms. Liya** — Former nurse who lost her leg in the war. Wheelchair-bound. Private room granted as gratitude for her sacrifice. Kind and empathetic. Positive view of Lannet but believes both nurses can learn from each other.
- **Mr. Gregor** — Wealthy banker recovering from heart attack. Headstrong, stubborn, more reflective since. In a wheelchair. Has his dog Rolla. Ten tasks in two sets. May pass away on the world clock.
- **Rolla** — Mr. Gregor's dog. Female. Good hunting dog. Side story involves taking her to the head nurse or following her to the morgue. Flower from courtyard tree calms her (carries scent of Mr. Gregor's late wife).

### Private Patients — Lannet's

- **Tina** — A very sick young girl. Bright, cheerful, playful, optimistic despite her condition. Has a persistent cough she dismisses. Dislikes Lannet's stern demeanor but excited to see Lyndi. Wants to play games. Players must be careful not to overexert her — if she collapses, a doctor must be called and Lyndi is reprimanded (the only time someone other than Lannet criticizes Lyndi). An orderly bars re-entry after collapse. Her room is across the hall from Mr. Roth. If Lyndi visits the pediatric ward before Tina, Lyndi is more energetic and exhausts Tina faster. If Tina is visited first and exhausted, Lyndi is more cautious in the pediatric ward. Reaction to Mr. Gregor's passing: naive — thinks he left the hospital, not that he died. "That mean old man… but I liked his dog." Tina's conversation unlocks a special reply in Act 12's "You Are a Good Nurse" thread that raises both frustration and respect.

- **Mr. Yara** — Older businessman forced into the hospital by his wife after collapsing at work. Eager to return to duties. Neutral on Lannet — describes her as efficient but forceful. Less developed view of Lyndi but can connect through conversation. Reaction to Mr. Gregor's passing: brusque. "The old geezer? It was bound to happen."

- **Ms. Zoe** — Refined older socialite recovering from heart attack. Acquaintance of Mr. Gregor. Reflects on her past including her late husband. Likes Lannet's straightforwardness. Initially negative view of Lyndi (clumsy) but softens through persistence. If Lyndi has the flower, Ms. Zoe mentions Mr. Gregor's late wife loved those flowers — revealing why the flower calms the dog (carries the wife's scent). Reaction to Mr. Gregor's passing: reflective. "They are together now, I see.... It won't be much longer until I follow him." This unlocks deeper conversation about Mr. Gregor. Conversations with Ms. Zoe + Mr. Gregor unlock the "The Future" thread in Act 12.

### Other

- **Alora** — Young woman feeling depressed. Found in Stairwell 1 during break. Lyndi can escort her back to her infirmary room.
- **The Doctor** — Responds to Mr. Gregor's passing. Found at second floor nurse station. If Lyndi handled things well, affirms she did everything right.
- **Three War Veterans** — Patients in the wards who returned from the war. Can share experiences.
- **Various Staff** — Morgue staff, lab staff, custodial staff, orderlies, receptionist, pharmacist, hospital clerk, kitchen staff, doctors. Interactable during the break.

---

## 4. Setting

A cosmopolitan city hospital. Renaissance-to-Victorian era technology as a model. The war referenced is modeled on the early days (first year) of WW1, using Michigan as the reference setting. Low-fantasy, grounded — no magical monitors or enchanted devices.

---

## 5. Controls and Input System

Supports keyboard, gamepad, and touch. Beyond movement, there are four buttons: **Action**, **Dialog**, **Jump**, and **Attack**. Jump and Attack are not explicitly taught in this tutorial.

### Input System (Reworked)

The Action and Dialog buttons each have a **threshold**:

- **Release before threshold** → Primary action/reply executes. The ring menu may begin to appear near the threshold but cancels if released in time.
- **Hold past threshold** → Ring menu fully engages. Player selects an option (or none), then releases to execute.

All previously separate tiers (ternary, secondary) now exist as options inside the ring menu.

### Ring Menu Navigation

- **Keyboard:** Q/E cycle through options
- **Gamepad:** Right stick angle
- **Touch:** Relative position from the anchor point (top-right corner for dialog)

Releasing the button executes the selected option. If no selection is made before release, no action is taken.

### Keyboard Bindings

- **J** = Dialog button
- **K** = Action button
- **Q/E** = Rotate ring menu selection
- **F** = Silence/idle toggle (when on, releasing closes the ring menu without executing)

### Advance Mode (Aspirational — not in minimum viable)

A separate **conversation flow menu** (goodbye, repeat, hold, etc.) accessed by a distinct gesture: release before threshold, then press and hold past threshold (a double-press-and-hold). This frees the ring menu for content replies only. In **simple mode** (current/minimum viable), flow options share the ring menu with content replies. The ring menu ideally holds no more than 8 options.

### Touch Layout

The full screen displays the main camera/gameplay area. Touch regions are overlaid:

| Region | Position | Function |
|--------|----------|----------|
| A | Left half | Movement — virtual joystick appears wherever touched |
| B | Right half | Attack (Lyndi only flails in this tutorial) |
| 0 | Top-left | Pause — tap for character state (time continues), hold for system menu (time pauses) |
| 1 | Top-right | Dialog — ring menu appears as quarter circle anchored to top-right corner |
| 2 | Right-middle | Movement modifiers — tap to jump, hold to climb/run/etc. |
| 3 | Bottom-right | Action / context action button |
| 4 | Bottom-center | Camera rotation (tentative) |

### Item Interaction

- **Tap action (empty hands):** Pick up whatever is nearby (pillow, chart, etc.)
- **Tap action (holding something):** Place it down
- **Clipboard is a special item** — always with Lyndi, doesn't count as carrying
- **To file a chart into the clipboard:** Hold action → ring menu → select the file option

### Jump Button

- **Tap:** Jump
- **Hold:** Climb (while moving toward a climbable object)
- **Continuous tapping:** Sprint (while moving)

### Attack Button

- **Tap:** Basic attack (Lyndi only flails — she is not a warrior)
- Jumping and attacking outside specific narrative moments can lead to early end of game

### Quick Action

A prompt appears briefly during specific moments. Pressing the **action button** while the prompt is visible triggers a specialized reaction. If missed, the moment passes. Introduced as a hidden tutorial in Act 1.

### Subtle Dialog

A prompt appears indicating Lyndi has something she wants to say but finds difficult. Hidden dialog options become available **only in the ring menu** and **only while the prompt is visible**. If the prompt disappears while the ring menu is open, it closes and hidden options vanish. Introduced as a hidden tutorial in Act 6. The **stutter mechanic** occurs when the player taps during an active subtle dialog conversation — because no impulse reply exists for a conversation this difficult, Lyndi falters.

### Character Agency

At key emotional moments, Lyndi temporarily stops responding to player input. The player must mash the action button to attempt to regain control. Used for: crying at Mr. Gregor's passing, trying to step forward to volunteer (Act 11), boarding the carriage (Epilogue B), and interacting with Lannet's belongings.

### Real-Time Dialog

Dialog does not pause gameplay or switch to a separate state. All other controls remain active during conversation. The dialog button functions like any other gameplay verb. NPCs respond in real time — the world keeps moving.

---

## 6. Core Systems

### Lannet Behavior System

Two **independent** variables track Lannet's disposition:

- **Frustration:** Goes up and down. Increases when Lyndi fails tasks, wastes time, or is intrusive. Decreases when Lyndi performs well, avoids struggle states, or chooses calming dialog options. Each critical line Lannet delivers in Act 9 also reduces frustration (she vents). There is a max value — the specific number is TBD via playtesting.
- **Respect:** Only goes up — never decreases. Increases when Lyndi goes above and beyond what Lannet expects of a competent nurse — things that impress her, and to some extent, things Lannet wishes she could do. Basic competence (following instructions, keeping pace) does not earn respect. First opportunity for respect is Act 4 (meaningful conversation with Mr. Kendri).

Both can increase simultaneously from the same action.

**Frustration at max** triggers specific narrative branches (Act 11.2b forced selection, harsher Act 12).

**Visual Indicators:**
- **Respect → Clipboard holding style.** The way Lannet holds her clipboard changes as respect accumulates.
- **Frustration → Foot tapping.** When giving prompt instructions, Lannet taps her foot. Other animations are modified by foot tapping when frustration is elevated.

### Adaptive Tutorial Loop

For nearly every act, Lannet keeps the story moving using a three-tier system:

1. **Prompt:** Lannet tells Lyndi what to do in plain language (no controller references). The player discovers how to accomplish it.
2. **Struggle:** If the player hasn't made sufficient progress by the time Lannet is halfway through her parallel task, she provides detailed instruction including controller references.
3. **Fail:** If the player still hasn't completed the task shortly after Lannet finishes, Lannet completes Lyndi's portion and the story moves on.

### Task Tracking

The game tracks per-act outcomes: completed, struggled, or failed. These influence the Act 9 report and the emotional tone of the ending.

---

## 7. Tutorial Design Philosophy

- **Diegetic tutorialization:** Mechanics are taught through the story, not pop-ups. Lannet is the living tutorial.
- **Discovery first:** The player is always given a chance to figure things out before receiving help.
- **Fail forward:** Every failure produces a micro-story rather than a dead end.
- **Real-time dialogue as a core verb:** The dialog button functions like jump or attack — it doesn't pause gameplay.
- **Inaction is a choice:** The world does not stop.
- **Hidden mechanics reward mastery:** Quick actions, subtle dialogs, eavesdropping, and character agency are introduced without explicit instruction.

---

## 8. Act Structure

1. **Act 1:** Start of Rounds — Action Tutorial (Hidden Quick Action)
2. **Act 2:** Walk to the First Room — Walk Tutorial
3. **Act 3:** Clean the Room — Action Tutorial
4. **Act 4:** Mr. Kendri — Dialog Tutorial
5. **Act 5:** The Ward — Practice
6. **Act 6:** Going Upstairs — Hidden Subtle Dialog Tutorial
7. **Act 7:** Private Rooms — Advanced Tutorial
   - 7.1: Mr. Roth
   - 7.2: Ms. Liya
   - 7.3: Mr. Gregor — Hidden Character Agency Tutorial
8. **Act 8:** Heading Back — Quick Reaction Tutorial
9. **Act 9:** The Report
10. **Act 10:** Break — Free Roam
11. **Act 11:** The Call
    - 11.1: To the Administrator's Office — Hidden Eavesdrop Tutorial
    - 11.2a: Lannet's Choice
    - 11.2b: Late
12. **Act 12:** Down the Hall
    - 12a: Goodbye Lannet
    - 12b: Goodbye Lyndi
13. **Epilogue**
    - A: Farewell Lannet
    - B: Farewell Lyndi

---

## 9. Act-by-Act Breakdown

### Act 1: Start of Rounds — Action Tutorial (Hidden Quick Action)

**Scene Setup:** The screen fades in from white, panning down to reveal the area in front of the head nurse's office.

**Narrative:** Lannet approaches from behind, startles Lyndi, she drops her clipboard. Lannet picks it up and hands it back.

**Hidden Quick Action:** Before the startle, a quick action prompt appears. If pressed in time, Lyndi retains composure and doesn't drop the clipboard.

**Prompt:** "Here, take it."
**Action:** Press action button to grab clipboard.
**Struggle:** "Press the action button and take it."
**Fail:** Lannet shoves it into Lyndi's hands.

**Impact on Lannet:**
- Frustration increases: Lyndi startled (fails quick action); Lannet shoves clipboard (fails action)

> **Design Question:** Should the hidden quick action success award a respect point? It works as a game reward but conflicts with the narrative principle that basic competence doesn't earn respect. Flagged for playtesting.

---

### Act 2: Walk to the First Room — Walk Tutorial

**Prompt:** "Follow me."
**Action:** Use control stick to follow Lannet.
**Struggle:** "Tilt the left joystick and follow me."
**Fail:** Lannet grabs Lyndi's hand and drags her.

**Impact on Lannet:**
- Frustration increases: Lannet has to drag Lyndi

---

### Act 3: Clean the Room — Action Tutorial

**Narrative:** Room with eight empty beds. Lannet takes four on the left, Lyndi takes four on the right. They take charts and arrange pillows.

**Prompt:** "I'll take the four on the left, you take care of the four beds on the right."
**Action:** Tap action to pick up/place pillows. Hold action (ring menu) to file charts into clipboard.
**Struggle:** "Press the action button to grab and place things. Hold the action button and take the charts."
**Fail:** Lannet finishes whatever remains on Lyndi's side.

**Impact on Lannet:**
- Frustration increases: Each bed Lannet has to finish

---

### Act 4: Mr. Kendri — Dialog Tutorial

**Narrative:** Four patients, two per side. Lannet takes left, Lyndi takes right. One sleeping patient (Andrew — only needs chart update). The other is Mr. Kendri.

**Prompt:** "I'll handle the left side, you take care of the rest."
**Action:** Tap dialog button near Mr. Kendri to initiate conversation.
**Struggle:** "Tap the Dialog button to talk to your patients. Hold to think carefully about how you speak to them."
**Fail:** Lannet finishes remaining tasks. If conversation drags, Lannet interrupts politely.

**Additional:**
- If Lyndi checks Mr. Kendri's chart before speaking, he initiates conversation.
- Lyndi can wake Andrew — he'll be annoyed.

**Impact on Lannet:**
- Frustration increases: Each bed Lannet finishes; conversation too long; waking Andrew
- Frustration decreases: Avoiding struggle state
- Respect increases: Avoiding struggle; meaningful conversation beyond minimum; talking to Mr. Kendri before checking chart

---

### Act 5: The Ward — Practice

**Narrative:** Large open room, 60 beds in 4 rows (13, 8, 10, 9 patients — 40 total). Veteran nurses Flannie (focus) and Wilma (warmth) instruct them to help.

**Row Selection:** Player chooses a row. Lannet, Flannie, and Wilma distribute based on proximity, traits, and frustration level. Detailed logic:
- If Lyndi picks center → Lannet takes other center
- If Lyndi picks outer → Lannet takes closest center
- If Lannet picks first: side depends on which veteran is closest to Lyndi. Frustration level determines whether she picks the row with more or fewer patients.
- Veteran nurses fill remaining rows (Wilma closer to Lyndi, Flannie closer to Lannet).

**Prompt:** "So you are the two new nurses helping with rounds today. You two can check one row."
**Action:** Check charts, talk to patients. Patients may have requests.
**Struggle:** (Adjacent rows only) "Just check the charts and check the patients, keep things moving."
**Fail:** Lannet finishes whatever's left on Lyndi's row.

**Veteran Nurse Comments (at end):**

If Lannet helped with Lyndi's row → comment about Lannet:
- **Flannie on Lannet:** Neutral: "You're focused. Lyndi can learn something from you." / High Frustration: "You're pushing hard, but you need to watch your stress levels, Lannet." / High Respect: "You always give it your best, Lannet. Your focus never falters."
- **Wilma on Lannet:** Neutral: "Your touch is a bit cold. You need to warm up to your patients." / High Frustration: "You're efficient, but it's showing in your demeanor. Patients can sense your stress." / High Respect: "You handled things well today, but remember that a little warmth goes a long way."

If Lannet didn't help → comment about Lyndi:
- **Flannie:** "Your focus is spot on. You two make a great team."
- **Wilma:** "Your smile brings warmth to your patients."

**Impact on Lannet:**
- Frustration increases: Every bed Lannet finishes on Lyndi's row
- Frustration decreases: Not triggering struggle state
- Respect increases: Fulfilling patient requests, finishing her row

---

### Act 6: Going Upstairs — Hidden Subtle Dialog Tutorial

**Narrative:** Lyndi and Lannet head to the stairwell, proceed to the second floor.

**Hidden Element:** Subtle dialog prompt appears. Holding dialog button opens ring menu with "Lannet, why aren't we friends?" Lannet replies: "What are you talking about?"

**Reply Structure:** Three categories (Frustrated, Somber, Reflective), four lines each (twelve total). Each ring pull shows three replies (one per category), rotating through the pool.

**Conversation Mechanics:**
- Default "Hey Lannet" / "Not now" loop available throughout (Frustration +1 each)
- Tapping during the active subtle conversation: stutter — no impulse reply available for a conversation this difficult. Lannet says "What?" (Frustration +1)
- "Never mind" option to end conversation (Frustration -1)
- Each ring pull consumes limited stairwell time
- **End:** Upon exiting stairwell: "Focus, we still have work to do." Reverts to default.

**Reply Lines:**

> **TBD — Two sets exist. Both included below for reference. Final selection pending.**

**Set A:**
- Frustrated: (1) "You never share anything about yourself. It's like you're always in a rush to get the job done." (2) "Back at school, you always kept to yourself. It felt like you didn't care about anyone else." (3) "You're always so cold to me and everyone else. Do you even care about your patients?" (4) "It's hard to work with someone who never wants to get along, Lannet."
- Somber: (1) "We've been through a lot together, Lannet. I thought we'd be closer by now." (2) "At the hospital, it just feels like there's a distance between us, and I don't know why." (3) "I've tried to get to know you since we started nursing school, but it's like there's a wall." (4) "I sometimes wonder if I did something wrong, or if you just don't like me."
- Reflective: (1) "I remember how focused you were during training. I always admired that, but I wish we could have bonded more." (2) "We both went through the same challenges in nursing school. I thought that would bring us closer." (3) "You're incredibly good at what you do. I just wish we could connect beyond the tasks we do here." (4) "Maybe I haven't made enough of an effort. But I want to understand you better, Lannet."

**Set B:**
- Frustrated: (1) "You always push me away, even when I try to help." (2) "You never let anyone in, do you?" (3) "Why do you have to be so difficult?" (4) "We could have been close if you'd just let your guard down."
- Somber: (1) "I thought after nursing school, we'd at least be close." (2) "We went through all the same training, but we still feel distant." (3) "I guess some things just never change, right?" (4) "Do you ever wonder what it would be like if we were actually friends?"
- Reflective: (1) "Remember our first year? I always admired how focused you were." (2) "I learned a lot from watching you. You were always so determined." (3) "Sometimes I wonder if I could be as dedicated as you are." (4) "Maybe we just have different ways of caring, but I think we make a good team."

**Lannet's Reactions (confirmed, matched 1-to-1):**
- Frustrated: (1) Looks intensely at Lyndi. (2) "Shut up." (3) "Stop being nosy." (4) Stops, fist clenches and shakes, resumes walking.
- Somber: (1) Looks down. (2) "Stay focused." (3) "Don't worry yourself." (4) Stops, crosses arms, silent, resumes.
- Reflective: (1) Takes a deep breath. (2) "I..." (3) Closes eyes. (4) Stops, looks down, then up, closes eyes, silent, resumes.

**Impact on Lannet:**
- Frustration increases: Frustrated replies, stuttering, "Hey Lannet" spam
- Frustration decreases: Not having the conversation, somber replies, "Never mind"
- Respect increases: Reflective replies

---

### Act 7: Private Rooms — Advanced Tutorial

**Narrative:** Six private rooms on the second floor. Lannet takes three on the right, Lyndi takes three on the left (Mr. Roth, Ms. Liya, Mr. Gregor).

**Prompt:** "You will check on Mr. Roth, Ms. Liya, and Mr. Gregor on the left."

**Door Etiquette:** Hold action (ring menu) to knock; hold dialog (ring menu) to announce. Barging in triggers struggle.
**Struggle:** "Long press the action to knock at the door and long press the dialogue button to announce yourself next time."
**Lannet demonstrates** proper entry if the player waits.

**Lannet's Speed** (based on stairwell conversation): Mostly frustrated → fastest. No engagement / "Never mind" → normal. Mostly somber → slower. Mostly reflective → slowest.

**Patients can be visited in any order.**
**Fail:** Once Lannet finishes her three rooms, she completes any mandatory tasks remaining in Lyndi's rooms.

#### Act 7.1: Mr. Roth

Wealthy donor on a "vacation." Cheerful. Minimum: check chart and ask if he's well. Five optional tasks:

1. **Adjust the Pillows** — Ring menu to adjust. Tapping just picks up/places.
2. **Fetch a Newspaper** — Straightforward grab and place.
3. **Bring a Glass of Water** — Grab pitcher → ring menu to pour → place pitcher → grab glass → walk slowly → hand to Mr. Roth.
4. **Open the Curtains** — Ring menu to pull, or jump + action/attack to reach cord.
5. **Tidy the Side Table** — Ring menu to collect rubbish → place in trash.

**Entry Reactions:**
- Barges in: "Well, that was quite an entrance, Nurse. Ever heard of knocking?"
- Knocks only: "Ah, come in, Nurse. No need to be shy."
- Announces: "Ah, Nurse Lyndi! Come in, come in. Glad to see you."

**Dialog includes:** "Are you enjoying your vacation, Mr. Roth?" — he's happy to talk about himself.

#### Act 7.2: Ms. Liya

Former nurse, lost her leg in the war. Wheelchair-bound. Five tasks:

1. **Get Her Shawl** — Locate, grab, place over shoulders.
2. **Bring a Glass of Water** — Same mechanic as Roth.
3. **Help Her to Her Wheelchair** — Grab wheelchair, place next to bed, ring menu to help her in.
4. **Take Her to the Window** — Push wheelchair to window.
5. **Listen to Her Reflection** — At the window, Ms. Liya reflects: "You know, Lyndi, I wish I could go outside again." Lyndi stands by.

**Entry Reactions:**
- Barges in: "You know, Lyndi, a little courtesy goes a long way."
- Knocks only: "Come in, Lyndi. You don't need to be shy."
- Announces: "Lyndi, come in. It's always nice to see you."

**Dialog options:** "Did you sleep well, Ms. Liya?" → after wheelchair: "If I may ask, how did you lose your leg?" → after window reflection: "Do you miss being a nurse?"

#### Act 7.3: Mr. Gregor — Hidden Character Agency Tutorial

Wealthy banker, heart attack recovery. Wheelchair. Dog (Rolla, female) at his side. **Ten tasks in two sets:**

**First Set:**
1. **Fetch Medicine and Water** — Pick up medicine, pour water (ring menu), hand both.
2. **Adjust Footrest** — Ring menu to adjust.
3. **Fetch a Blanket** — Grab from closet, place over him.
4. **Take Him to the Window** — Push wheelchair.
5. **Open the Curtains** — Ring menu or jump for cord. Jump comment: "You certainly make up for height with enthusiasm, Nurse."

**Second Set:**
6. **Close the Curtains a Bit** — "Actually, it's a bit too bright now."
7. **Reposition Wheelchair** — Back to side table.
8. **Clean the Side Table** — Ring menu to tidy.
9. **Fetch a Flower from Outside** — Go outside, jump to shake branch, collect flower, bring to him. Sub-options: fulfill directly, promise ("I'll take care of it for you"), or ask "Why do you want the flower?" → "The dog likes it."
10. **Fetch a Book** — Grab from shelf, hand to him.

**Entry Reactions:**
- Barges in: "Do you make it a habit of not knocking, Nurse? A little respect goes a long way." — **Refuses to answer "How are you feeling today?"** until Lyndi exits and re-enters properly.
- Knocks only: "Come in, Nurse. Next time, don't be afraid to announce yourself."
- Announces: "Nurse Lyndi, thank you. Come in."

**Additional Conversations:**
- After closing curtains (task 6): Mr. Gregor comments on the tree. "What kind of tree is it?" → talks about being an explorer/botanist before banking. Leads to wanting a flower. Reflective conversation about heart attack also available.
- Petting the dog: "She likes you. She's a good hunting dog." → Subtle dialog: "Hunting, that's barbaric" (Gregor laughs, hunting conversation with replies). If missed: "So you are a hunter" (similar, no laughter).
- Mr. Gregor provides critique if Lyndi takes too long: "You know, Nurse, I do enjoy sunlight, but not at the expense of waiting all day."

**Mr. Gregor's Passing Timeline (World Clock):**

**Stage Mn — Has Not Passed:** Lyndi completes tasks freely. Next act can begin without him passing.

**Stage Pr — Present (Lyndi in the room):** Gregor slows, closes eyes, exhales, slumps, arms fall limp. Dog barks moments later. **Character Agency:** Lyndi says "Mr. Gregor?" → "Mr. Gregor!" → rushes, kneels, cries. Player mashes to regain control. Initially no effect. Mutters "I have to pull myself together..." Eventually regains composure. Find doctor, bring to Gregor.
- **Lannet's response:** If Lyndi still crying → Lannet shakes her. If composed → search for doctor together. High frustration → Lannet finds doctor alone; doctor snaps Lyndi back.

**If Gregor passes while Lyndi is with Roth:** Barking interrupts. New option: "Excuse me, Mr. Roth."
**If Gregor passes while Lyndi is with Liya:** Ms. Liya: "Mr. Gregor's dog sounds upset. Maybe you should check on him." New option: "Excuse me, Ms. Liya."

**Stage Ab — Absent (dog barking, Lyndi elsewhere):** Barking heard everywhere. Lannet investigates regardless. If Lyndi enters Gregor's room: shorter character agency (covers mouth, two attempts). Lannet yells "Lyndi!" or doctors arriving snap her back. If fully ignored: Lannet eventually finds Lyndi, excuses them both → Act 8.

**Stage Dr — Doctors already there:** Doctors block entry, inform of passing. Small character agency. Lannet signals to move on → Act 8.

**Stage Em — Body at morgue:** Dog stopped barking, sits anxiously in empty room. Lyndi enters: subtle dialog "Where did he go?" Mandatory: collect chart. **Dog Side Story begins** (see Side Stories).

**Impact on Lannet (Act 7 overall):**
- Frustration increases: Barging in, Lannet finishing tasks, engaging with dog, ignoring barking
- Respect increases: Proper door etiquette, engaging in patient conversations
- If passing witnessed: uncompleted tasks stay uncompleted. Lannet omits Act 7 from report.

---

### Act 8: Heading Back — Quick Reaction Tutorial

**Narrative:** Medical team rushes a patient on a stretcher through the corridor.

**Quick Action:** Dodge prompt.
**Success:** Clean dodge, continue to office.
**Fail:** Clipped, charts scatter. Lannet picks up most (fewer if frustration high). Missing charts affect report.

**Dog (if present):** Rolla dodges automatically. If Lyndi fails while holding leash, dog runs toward morgue.

**Subtle Dialog (if Gregor witnessed):** Prompt to mention passing. Lannet responds:
- "We are nurses, get used to it" (Lyndi was crying, Lannet shook her)
- "Do your job next time" (Lyndi ignored barking)
- "We did our job, the doctor will take care of the rest" (found doctor together)
- "We need to keep working" (all other)

**Impact on Lannet:**
- Frustration increases: Failing dodge, each chart Lannet picks up, having/losing dog, being absent
- Frustration decreases: Successfully dodging
- Respect increases: Picking up more charts than Lannet, keeping leash, engaging subtle dialog about Gregor

---

### Act 9: The Report

**Narrative:** Turn in charts. If frustration high enough, Lannet delivers critical report.

**Report Lines (triggered by specific failures):**
- Act 1 (startled): "Lyndi is skittish."
- Act 2 (dragged): "Lacks motivation."
- Act 3 (beds): "She moves slow."
- Act 4 (conversation long): "She gets distracted easily."
- Act 4 (woke Andrew): "She is a bother to the patients."
- Act 5 (Lannet chose first): "She doesn't take the initiative."
- Act 5 (Lannet finished beds): "Can't manage her time." (not if warmth nurse commented on Lannet)
- Act 6 (mostly frustrated): "She is nosy."
- Act 6 (mostly somber): "She... doesn't know when to shut up."
- Act 6 (mostly reflective): Lannet pauses silently. Subtle dialog → Lyndi: "Lannet..."
- Act 7 (Gregor didn't pass, Lannet tended patients): "She isn't efficient."
- Act 7 (interacted with dog): "She can't keep herself presentable."
- Act 7 (witnessed passing): Lannet says nothing about Act 7. Pauses. Subtle dialog → "Mr. Gregor... a patient... he..." Head nurse: "I heard. He was a great man. You need to understand, Lyndi. We are nurses, and this is a hospital. This happens all the time." Another subtle dialog: "Yes, ma'am."
- Act 8 (failed dodge): "Doesn't pay attention."
- Act 8 (missing charts): "She lost paperwork."
- Act 8 (lost dog): "She set a dog loose."
- If Gregor subtle dialog engaged: Lannet skips Act 8 criticisms.
- Any act (struggle triggered): "And she can't follow directions."

**Head Nurse Deliah** (if Lannet is critical): "I understand you are both new nurses, and mistakes will happen. It's better to act and make mistakes than to hesitate because you're afraid of doing something wrong."

**Lyndi's Reply:** After Lannet finishes, subtle dialog prompt. Ring menu has up to 8 replies (one per criticized act). When Lyndi starts speaking, Deliah cuts her off: "You'll do better next time, won't you, Lyndi?" Subtle dialog: "Yes, ma'am."

**Additional:** Lannet vents immediately — no chance for Lyndi to speak first. More critical lines = more frustrated animation (she's finally letting loose). Subtle dialog engagement calms her slightly. Lyndi is intimidated and embarrassed. Missing charts can be found during Act 10 (no impact on Lannet).

**Impact on Lannet:**
- Frustration decreases: Each critical line (venting)
- Respect increases: All charts turned in, engaging subtle dialogs

---

### Act 10: Break — Free Roam

**Narrative:** Lannet goes to the cafeteria — food, book, corner. Unresponsive to dialog. Stays there the entire break. Joining her increases frustration.

Lyndi is free to explore the entire hospital. Not enough time to complete all side stories. See **Side Stories** section for full details. See **Hospital Layout** for all explorable areas.

**Deadline:** Bell tower rings. Lyndi can ignore it (triggers 11.2b instead of 11.2a). Can go straight to the office and spend the entire break waiting.

---

### Act 11: The Call

#### 11.1: To the Administrator's Office — Hidden Eavesdrop Tutorial

Lannet and four classmates arrive. Lannet waits alone. The four gossip about the war and their fears. Lyndi can exchange pleasantries or stand near them to listen in (eavesdrop tutorial). Lyndi can try to talk to Lannet — low frustration: she ends it. High frustration: she castigates everyone. Bell rings → doors open → conversations drop.

#### 11.2a: Lannet's Choice

Administrator exits, closes door. Director Janice addresses the six nurses:

> "Please, gather close. I have to talk to you all."
> *(nurses line up, gap for Lyndi next to Lannet)*
> "First of all, I want to tell you that I am glad to see you all well. We have not seen each other since you were assigned to this hospital." *(pause)* "I have come to send a nurse from our honorable school to the front. Several hospitals have sent doctors and nurses to help the war effort. They are all hard at work. From this hospital, they have sent 3 doctors and 5 nurses." *(longer pause)* "Our school is going to send three nurses, one of whom will be from this class. I don't want to force you; it has to be a volunteer. I want one of you to step forward."

**Character Agency:** Lyndi stops responding. Each attempt to step forward triggers inner monologue — first reasons not to go, then gradually convincing herself. On the seventh attempt, Lannet steps forward. If no effort made, Lannet eventually volunteers on her own. Lannet always volunteers before Lyndi.

After: Director dismisses nurses. Four leave relieved. Lyndi can exit with them or stay. If she stays, director eventually tells her to leave. In the hallway: exit → Epilogue, or stay → Lannet eventually exits → Act 12.

#### 11.2b: Late

Lyndi missed the meeting. Director did not ask for volunteers. Director selected someone:
- If frustration not maxed: Lannet chosen
- If frustration maxed: Lyndi chosen

Director informs Lyndi she's been selected. If too much time passes and Lyndi hasn't met the director, a message indicates she was selected.

**Additional:** If frustration is maxed, Lannet doesn't volunteer even in 11.2a. One path to max frustration: Lyndi absent during Act 9, preventing Lannet from venting.

**Impact on Lannet (Act 11):**
- Frustration increases: Lyndi late, engaging when Lannet is frustrated
- Frustration decreases: Arriving early, exchanging pleasantries, standing by Lannet during speech
- Respect increases: Every attempt Lyndi makes to step forward

---

### Act 12: Down the Hall

#### 12a: Goodbye Lannet

**Trigger:** Lannet volunteered. Lyndi stayed in the hall.

**Initial Exchange:** Lannet exits office, walks toward main stairs. Lyndi follows.
1. "Lannet…" → "Not now."
2. "Lannet, I need—" → "I don't have time."
3. **Subtle dialog prompt:** "Let me take your place."

Lannet stops, turns, glares: **"What?"** — final conversation begins.

**Hallway Mechanics:**
- Pacing varies with dialog choices (unlike fixed stairwell)
- Lannet may stop, move closer, or walk farther during lines
- Lyndi must stay near — falling behind adds frustration and can end conversation
- Higher respect raises frustration threshold (harder to snap)

**Conversation Threads (8 total):**

1. **Stay for Your Family** — Always available. 5 replies: first 4 increase frustration. 5th (Lyndi admits she's nosy, apologizes) → lowers frustration, raises respect.
2. **Nurse and War** — Unlock: Ms. Liya's conversations (leg question, garden talk). Ward veteran adds more. 4 replies, all lower frustration.
3. **You Are a Good Nurse** — Unlock: patient opinions about Lannet. Mixed. Special reply from Tina: raises both frustration & respect.
4. **We Could Be Friends** — Unlock: self-reflection in shared room. Lowers frustration.
5. **Something About Her Stuff** — Unlock: went through Lannet's belongings. Lannet interrupts angrily → sharp frustration spike.
6. **The Future** — Unlock: Mr. Gregor + Ms. Zoe conversations. Mixed effects.
7. **I Admire You** — Unlock: stairwell conversation. Three variants (frustrating/somber/reflective) with different frustration/respect effects.
8. **Never Mind** — Always available. Adds frustration. If threshold exceeded: "Who do you think you are? I told you I hate nosy people. I didn't step forward for sentimentality but because it is my duty as a nurse. I made the decision. Don't interfere." She runs off.

**End Conversation:**
- **High Frustration:** "Just shut up, Lyndi. I don't want to hear it. I told you I hate nosy people."
- **Neutral:** "I need to get ready."
- **High Respect:** "You are a great nurse, and you will do great here. Follow your path, and I'll follow mine. I need to get my things in order."

#### 12b: Goodbye Lyndi

**Trigger:** Lannet's frustration maxed, Lyndi steps forward.

- **High Respect:** Lannet waits in the hallway. For once, she initiates.

> **TBD:** The specific lines Lannet tries to express (her respect and thoughts) have not been written yet. What is established: she is trying to express her respect and thoughts to Lyndi.

  - **Interruption path:** Subtle prompt. Lyndi: "I wish we could have been friends." → Lannet pauses: "I never liked you, Lyndi… because of your cheerfulness, and your meddling… But I know you will be a great nurse. I hope for your safe return." Leaves.
  - **No interruption:** Lyndi responds: "Thank you, Lannet. I really appreciate you being at my side." → Lannet wells up: "Take care, Lyndi." Exits.

- **Low Respect:** Hall is empty. Lyndi leaves alone in silence → Epilogue.

**Act 12 Aftermath:** Reaching end of hallway and exiting into lobby ends Act 12. Also ends if: no conversation for a period, Lannet reaches end, frustration threshold hit, "Never Mind" chosen, or 12b conversation finishes. Frame shifts up, fades to black → Epilogue.

**Impact on Lannet (Act 12):**
- Frustration increases: Hostile replies, "Never Mind," personal topics (belongings), falling behind
- Frustration decreases: "Nurse and War," "We Could Be Friends," apologies, sincere reflections
- Respect increases: Navigating well, acknowledging Lannet's strengths ("I Admire You")

---

### Epilogue

**Trigger:** Acts 11.2b, 12a, and 12b all lead to the epilogue.

**Transition:** Frame pans up, fades to black. If Act 11.2b and Lyndi wasn't informed: text "Lyndi was selected to support the war effort" appears briefly. Screen fades in from black to outside the hospital, panning down to reveal staff gathered, carriage waiting.

#### Epilogue A: Farewell Lannet

Director and Lannet walk down the line of nurses toward the carriage. Lyndi is among the group. Before boarding, Lannet pauses.

- **High Frustration:** Gets into carriage without looking back.
- **Neutral:** Turns to nurses: "Thank you, all of you." Boards.
- **High Respect:** Addresses crowd (as neutral), then approaches Lyndi: "Take care, Lyndi." Returns to carriage. Subtle dialog prompt:

**Lyndi's Replies:**
- "Take care, too, Lannet." → Wipes tear with one hand.
- "We'll see each other again, Lannet." → Wipes tears with both hands.
- "Thank you, Lannet." → Snivel, wipes tears with sleeve. **Quick reaction prompt** for a hug — only available if frustration is low.

**Carriage Departure:** Lannet boards. Director delivers final words, climbs aboard. Carriage departs. Screen pans up, fades to white. Game ends.

#### Epilogue B: Farewell Lyndi

**Trigger:** Lyndi selected (11.2b) or stepped forward (11.2a with maxed frustration).

Mirrors Epilogue A, roles reversed. Lyndi walks with director to carriage. Lannet is among the gathered nurses.

**Character Agency:** Before boarding, Lyndi briefly loses control. Two attempts to regain. Subtle dialog during agency allows Lyndi to address and thank the gathered nurses.

If Lyndi speaks and **respect is high:** Lannet steps forward: "Take care, Lyndi." Subtle dialog prompt with the same three replies and same reactions as Epilogue A, including the hug prompt for "Thank you, Lannet."

**Carriage Departure:** Lyndi boards. Director addresses nurses. Carriage departs. Screen pans up, fades to white. Narrative ends.

---

## 10. Side Stories

### Rolla's Side Story

- Starts at Gregor's passing (Act 7), threads through Acts 8–10.
- **Fresh flower** (from courtyard tree): placed behind Rolla's ear. Calms her, makes leading easy. Lyndi wears it in her hair. Carries scent of Mr. Gregor's late wife — revealed by Ms. Zoe. Collecting earns respect (more than preserved).
- **Preserved flower** (from apothecary): kept on clipboard. Unlocks conversations with Gregor/Zoe but does NOT calm Rolla. Collecting earns respect (less than fresh).
- **Path A — To Deliah:** Head nurse takes Rolla; dog settles with her.
- **Path B — To Morgue:** Rolla lies by Gregor. Subtle dialog "Goodbye, Mr. Gregor."
- **Act 8:** If Rolla present and QTE fails, Lyndi drops leash; Rolla runs to morgue.
- **Act 10:** Handling Rolla during break does NOT affect frustration.
- **World Persistence:** Rolla stays where last led until moved.
- **Impact:** Frustration increases if Lyndi follows Rolla to morgue during Act 8 and misses Act 9. Respect increases if fresh flower used and Rolla delivered calmly to Deliah.

### Lyndi & Lannet's Room

- Enter if Lannet isn't inside.
- **Subtle dialog:** Reflection about Lannet → unlocks "We Could Be Friends" thread (Act 12).
- **Character Agency:** When touching Lannet's belongings → unlocks "Something About Her Stuff" thread (Act 12).

### Courtyard Flowering Tree

- Climb and shake blossoms — rare consequence-free use of Jump/Attack.
- During first climb and until shortly after dismounting, **subtle dialog prompt:** Lyndi comments on how she has missed climbing trees.

### Infirmary Side Stories

- **Dania:** Young woman, just saw a doctor, feels weak, appreciates company.
- **Andrew:** Broke arm to avoid draft. Bitter. If woken in Act 4, has been talking with Mr. Kendri. If not, recently woke and still upset.
- **Mr. Kendri:** Soon to be discharged. Respects both nurses.
- **Ruen:** Negative view of Lannet (too harsh).
- **Mr. Kalo:** Appreciates Lannet's professionalism. If Lyndi talks to Kalo about Lannet before Ruen, Ruen interrupts.
- **Alora:** Depressed young woman in Stairwell 1. Lyndi can escort her back to her infirmary room.

### Private Patient Revisits

- **Roth:** Eager to talk about future plans. Critical but positive about Lannet.
- **Liya:** Continues nursing/war conversations. Garden/courtyard outing. Believes both nurses can learn from each other.
- **Gregor (alive):** Hunting talk. Flower unlocks memory of late wife.
- **Tina:** Expanded interaction (see Character section). Playful tasks, collapse risk, emotional whiplash.
- **Mr. Yara:** Wants to leave. Neutral on Lannet.
- **Ms. Zoe:** Flower scent connects to Gregor's wife. Reflective on Gregor's passing.

### Reactions to Mr. Gregor's Passing

- **Tina:** Naive. Thinks he left the hospital. "That mean old man… but I liked his dog."
- **Ms. Zoe:** "They are together now, I see.... It won't be much longer until I follow him." Unlocks deeper conversation.
- **Mr. Yara:** "The old geezer? It was bound to happen."
- **Mr. Roth and Ms. Liya:** Both say he was a good man. Ms. Liya adds he was rough but still good.

### Opinions on Lannet

Every patient who interacted with Lannet offers an opinion:
- Mr. Kendri: respects both. Ruen: too harsh. Mr. Kalo: appreciates professionalism (Ruen may interject). Ward patients: mixed (efficiency vs warmth). Private patients: range from critical-but-positive to disapproving.

### Other Break Activities

- **Pediatric Ward:** Children like Lyndi. Simple games.
- **Wards:** Minor needs (dropped items, comfort, simple requests). Patients from Wilma's care happy to see Lyndi. Three war veterans.
- **Main Lobby:** Gossip with receptionist. Can only get water for waiting patients.
- **Consulting Rooms:** Doctors may ask Lyndi to retrieve items.
- **Surgery Gallery:** Observe surgery in progress.
- **Doctor Break Room:** One doctor mentions being sent to the war.
- **Convalescent Ward:** Mixed temperaments, simple requests.
- **Herb Garden:** Pharmacist may ask for herb collection.
- **Morgue:** See Gregor's body. Subtle dialog "Goodbye, Mr. Gregor" → character agency. Talk to staff.
- **Lab and Custodial:** Chat with staff.
- **Orderly Room:** Hospital daily operations perspective.
- **Second Floor Nurse Station:** Talk to nurse. Gregor's doctor affirms Lyndi's actions (if handled well).
- **Chapel and Bell Tower:** Quiet chats. Bells mark break stages.
- **Roof:** Help fold dry laundry.
- **Cafeteria:** Join Lannet, eat alone, or gossip with kitchen staff.
- **Records Room:** Character agency prevents most access. Lyndi's patients easiest, then Lannet's, then everyone else.
- **Apothecary:** Preserved flower available (see Rolla side story).
- **Nurses in Quarters:** Two in their rooms; third in cafeteria; fourth at pavilion.
- **Missing Charts:** If lost in Act 8, can be found. No impact on Lannet.

---

## 11. Hospital Layout

### First Floor
- Main Lobby (Reception Desk, Waiting Room)
- Consulting Rooms
- Infirmary (six rooms, 8 beds each)
- General Wards (two wards, 60 beds each, 4 rows of 15)
- Pediatric Ward
- Surgery
- Cafeteria and Kitchen
- Nurses Quarters (Head Nurse Deliah's Office, Lyndi/Lannet's Room)
- Nurse Station
- Dispensary

### Second Floor
- Administration (Administrator Alinadi's Office, Hospital Clerk, Records Room)
- Doctors' Break Room
- Private Rooms (six rooms — three per side of hallway)
- Apothecary (herb garden on roof)
- Nurse Station (Mr. Gregor's attending doctor)
- Convalescent Area
- Surgery Gallery (overlooks first floor surgery)
- Chapel and Bell Tower
- Orderly Room

### Basement
- Morgue
- Laboratory
- Laundry Room
- Custodial Area
- Furnace/Boiler/Crematory

### Outside
- Courtyard (flowering tree)
- Garden
- Main Road
- Pavilion
- Fountain
- Laundry Drying Area (on roof)

### Staircases and Elevators
- Main Stairs (to Administrator's Office)
- Stairwell 1 (Act 6 conversation)
- Stairwell 2
- Stairwell 3
- Elevator (for moving Mr. Gregor's body)
- Workers' Staircase
- Laundry Chute (to basement)

---

## 12. Design Questions (Open)

These items are flagged for future resolution:

1. **Act 1 hidden QTE respect point:** Works as a game reward but conflicts with the narrative principle that basic competence doesn't earn respect. TBD via playtesting.
2. **Frustration max value:** Exists conceptually. Specific number TBD via playtesting.
3. **Act 6 dialog lines:** Two sets exist (Set A and Set B). Final selection pending.
4. **Act 12b Lannet's speech:** She initiates and tries to express her respect and thoughts to Lyndi. Specific lines not yet written.
5. **Advance mode (conversation flow menu):** Aspirational feature. Would separate flow options (goodbye, repeat, hold) from content replies via a distinct gesture (tap-release then press-and-hold). Not in minimum viable — simple mode (flow options share the ring menu) is current.
6. **Touch region 4 (camera rotation):** Tentative. Playtesting may relocate dialog or action to different regions.
7. **Quick Dialog and Subtle Action:** Future ideas (e.g., shouting "look out"). Out of scope for this document.

---

*This document was compiled from 37+ development files and reviewed item-by-item with the creator before committing.*
