interface Country{
  country_id: string;
  probability: number;
}


export interface NationalInformation {
  count: number;
  name: string;
  country: Country[];
}