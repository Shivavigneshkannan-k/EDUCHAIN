export class VectorClock {
    private versions: Record<string, number> = {};
  
    update(deviceId: string): void {
      this.versions[deviceId] = (this.versions[deviceId] || 0) + 1;
    }
  
    merge(other: VectorClock): void {
      for (const [device, counter] of Object.entries(other.versions)) {
        const current = this.versions[device] || 0;
        this.versions[device] = Math.max(current, counter);
      }
    }
  
    serialize(): string {
      return JSON.stringify(this.versions);
    }
  
    static deserialize(data: string): VectorClock {
      const clock = new VectorClock();
      try {
        clock.versions = JSON.parse(data);
      } catch (e) {
        console.error("VectorClock deserialization error:", e);
      }
      return clock;
    }
  
    hasConflictWith(other: VectorClock): boolean {
      for (const device in this.versions) {
        if (!other.versions[device]) continue;
        if (this.versions[device] > other.versions[device]) return true;
      }
      return false;
    }
  }