export interface Selector<P, R> {
  selector: string;
  extractFunction: (elements?: P) => R;
}
