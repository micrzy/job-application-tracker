// Example data: all companies and roles are made up.
// Your own data lives in data/my-applications.js (excluded by .gitignore). When that file is missing, the dashboard shows this example.
//
// Fields
//   status:   active (in progress) | waiting (awaiting reply) | closed
//   stage:    short label under the status, e.g. Applied / 1st interview / Rejected
//   optional: url job link, loc location, next next step, nextDate next step date (YYYY-MM-DD), salary expected salary (EUR/yr),
//             match / career / prospect scores (0-10; all three are needed for a total), interviewed got an interview, notes
window.JOB_DATA = {
 "updated": "2026-10-01T00:00:00.000Z",
 "apps": [
  {
   "id": 1,
   "company": "Nordlicht Mobility",
   "url": "https://example.com/jobs/1",
   "role": "QA Automation Engineer",
   "loc": "Amsterdam · Hybrid",
   "status": "active",
   "stage": "2nd interview",
   "next": "2nd interview",
   "nextDate": "2026-10-14",
   "applied": "2026-09-10",
   "salary": 62000,
   "match": 8,
   "career": 8,
   "prospect": 7,
   "interviewed": true
  },
  {
   "id": 2,
   "company": "Halcyon Health",
   "url": "https://example.com/jobs/2",
   "role": "Senior Test Engineer",
   "loc": "Utrecht · Hybrid",
   "status": "active",
   "stage": "HR interview",
   "next": "HR interview",
   "nextDate": "2026-10-09",
   "applied": "2026-09-22",
   "match": 9,
   "career": 8.5,
   "prospect": 6.5,
   "interviewed": true
  },
  {
   "id": 3,
   "company": "Kestrel Commerce",
   "url": "https://example.com/jobs/3",
   "role": "Test Automation Engineer",
   "loc": "Rotterdam",
   "status": "waiting",
   "stage": "Applied",
   "applied": "2026-09-30",
   "match": 9.5,
   "career": 8,
   "prospect": 7.5
  },
  {
   "id": 4,
   "company": "Meridian Bank Digital",
   "url": "https://example.com/jobs/4",
   "role": "QA Engineer (Payments)",
   "loc": "Amsterdam · Hybrid",
   "status": "waiting",
   "stage": "Applied",
   "applied": "2026-09-18",
   "match": 9,
   "career": 8.5,
   "prospect": 8.5
  },
  {
   "id": 5,
   "company": "Fabelwerk Studios",
   "url": "https://example.com/jobs/5",
   "role": "Software Developer in Test",
   "loc": "Remote",
   "status": "waiting",
   "stage": "Followed up",
   "applied": "2026-09-12",
   "match": 7,
   "career": 7.5,
   "prospect": 8
  },
  {
   "id": 6,
   "company": "Tessera Labs",
   "url": "https://example.com/jobs/6",
   "role": "Founding QA Engineer",
   "loc": "Amsterdam",
   "status": "waiting",
   "stage": "Applied",
   "applied": "2026-09-26",
   "match": 8.5,
   "career": 8,
   "prospect": 4
  },
  {
   "id": 7,
   "company": "Orbis Transit",
   "url": "https://example.com/jobs/7",
   "role": "Manual QA Tester",
   "loc": "The Hague",
   "status": "closed",
   "stage": "Rejected",
   "applied": "2026-09-02",
   "match": 5,
   "career": 6,
   "prospect": 8
  },
  {
   "id": 8,
   "company": "Lyra Delivery",
   "url": "https://example.com/jobs/8",
   "role": "QA Engineer",
   "loc": "Amsterdam",
   "status": "closed",
   "stage": "Rejected after 1st interview",
   "applied": "2026-08-28",
   "match": 7.5,
   "career": 7,
   "prospect": 4.5,
   "interviewed": true,
   "notes": "1st interview on 2026-09-08"
  },
  {
   "id": 9,
   "company": "Cobalt Retail",
   "url": "https://example.com/jobs/9",
   "role": "Test Engineer",
   "loc": "Eindhoven",
   "status": "closed",
   "stage": "No reply, closed",
   "applied": "2026-08-20",
   "match": 6.5,
   "career": 6.5,
   "prospect": 7
  },
  {
   "id": 10,
   "company": "Vantor Pharma",
   "url": "https://example.com/jobs/10",
   "role": "Validation & Test Engineer",
   "loc": "Leiden",
   "status": "closed",
   "stage": "Ghost posting",
   "applied": "2026-08-25",
   "match": 7,
   "career": 6,
   "prospect": 6
  }
 ]
};
