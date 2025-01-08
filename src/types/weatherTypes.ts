export interface IWeatherData {
	name: string;
	coord?: {
		lon: string;
		lat: string;
	};
	main?: {
		temp: number;
		feels_like: number;
	};
	visibility?: number;
	wind?: {
		speed: string;
	};
	sys?: { sunrise: number; sunset: number };
}
