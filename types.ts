export interface NavItem {
  id: string;
  label: string;
}

export interface PowerData {
  subsystem: string;
  consumption: number; // in Watts
  color: string;
}

export interface ComparisonData {
  name: string;
  power: number;
}
