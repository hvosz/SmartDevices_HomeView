export interface SmarDeviceDetails {
  type: string;
  id: string;
  name: string;
  connectionState: string; // 'connected', 'disconnected' or 'poorConnection' isTurnedOn: boolean;
  isTurnedOn?: boolean;
  brightness?: number; // <0, 100>
  color?: string; // in the CSS formats
  powerConsumption?: number;
  temperature?: number;
}

export interface SmartDevice {
  type: string; // 'bulb', 'outlet' or 'temperatureSensor';
  id: string;
  name: string;
  connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
}
