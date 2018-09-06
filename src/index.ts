export interface Delay {
  (ms: number): Promise<any>; 
}

export const delay: Delay = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));