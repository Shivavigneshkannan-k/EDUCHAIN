export interface Credential {
    id: string;
    studentDid: string;
    voiceHash: string;
    skill: string;
    score: number;
    timestamp: number;
    vClock: string; // Serialized vector clock
  }
  
  export interface Device {
    id: string;
    name: string;
    lastSeen: number;
  }