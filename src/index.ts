export interface Delay {
  (ms: number): Promise<any>; 
}

const delay: Delay = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

export default delay;